import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, User, Mail, Bot, Sparkles, X, Mic, MicOff, Volume2, VolumeX, Globe } from "lucide-react";
import { Label } from "@/components/ui/label";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChromaKeyVideo } from "./ChromaKeyVideo";

/* ─── Types ─────────────────────────────────────────────────── */
interface LiveChatAgentProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Optional pre-fill from AI avatar — skips re-entry */
  prefilledName?: string;
  prefilledEmail?: string;
  prefilledLang?: string;
  /** Full AI conversation context injected as first agent context message */
  initialContext?: string;
}
interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
}

/* ─── Supported languages ────────────────────────────────────── */
const LANGUAGES = [
  { code: "en-US", label: "English" },
  { code: "hi-IN", label: "हिन्दी" },
  { code: "ta-IN", label: "தமிழ்" },
  { code: "te-IN", label: "తెలుగు" },
  { code: "fr-FR", label: "Français" },
  { code: "de-DE", label: "Deutsch" },
  { code: "es-ES", label: "Español" },
  { code: "ja-JP", label: "日本語" },
  { code: "zh-CN", label: "中文" },
  { code: "ar-SA", label: "العربية" },
];

/* ─── TTS speaker ────────────────────────────────────────────── */
function speakText(text: string, langCode: string, onEnd?: () => void) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = langCode;
  utter.rate = 0.94;
  utter.pitch = 1.05;
  utter.volume = 1.0;
  const assignVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find((v) => v.lang.startsWith(langCode.split("-")[0]));
    if (match) utter.voice = match;
  };
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = assignVoice;
  } else {
    assignVoice();
  }
  if (onEnd) utter.onend = onEnd;
  window.speechSynthesis.speak(utter);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

/* ─── SpeechRecognition hook (with interim results) ─────────── */
type RecognitionHook = {
  isListening: boolean;
  interimText: string;       // live partial transcript while user speaks
  startListening: () => void;
  stopListening: () => void;
  supported: boolean;
};

function useSpeechRecognition(
  lang: string,
  onFinalResult: (text: string) => void,
): RecognitionHook {
  const [isListening, setIsListening] = useState(false);
  const [interimText, setInterimText] = useState("");
  const recRef = useRef<any>(null);

  const SpeechRecognitionClass =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;
  const supported = !!SpeechRecognitionClass;

  const stopListening = useCallback(() => {
    recRef.current?.stop();
    setIsListening(false);
    setInterimText("");
  }, []);

  const startListening = useCallback(() => {
    if (!SpeechRecognitionClass) return;
    stopSpeaking(); // stop TTS before opening mic

    if (recRef.current) {
      recRef.current.stop();
    }

    const recognition = new SpeechRecognitionClass();
    recRef.current = recognition;
    recognition.lang = lang;
    recognition.interimResults = true;   // ← KEY: show words as user speaks
    recognition.maxAlternatives = 1;
    recognition.continuous = true;       // keep recording until user stops

    recognition.onstart = () => {
      setIsListening(true);
      setInterimText("");
    };

    recognition.onresult = (e: any) => {
      let interim = "";
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          final += t;
        } else {
          interim += t;
        }
      }
      // Show interim text live in the input
      if (interim) setInterimText(interim);
      // When a final segment is ready, send it
      if (final) {
        setInterimText("");
        onFinalResult(final.trim());
      }
    };

    recognition.onerror = (e: any) => {
      console.warn("Speech recognition error:", e.error);
      setIsListening(false);
      setInterimText("");
    };

    recognition.onend = () => {
      // If still supposed to be listening, restart (handles Chrome's 60s limit)
      if (recRef.current === recognition && isListening) {
        try { recognition.start(); } catch { setIsListening(false); }
      } else {
        setIsListening(false);
      }
      setInterimText("");
    };

    recognition.start();
  }, [lang, onFinalResult, SpeechRecognitionClass, isListening]);

  // Cleanup
  useEffect(() => () => { recRef.current?.stop(); }, []);

  return { isListening, interimText, startListening, stopListening, supported };
}

/* ─── Animated mic bars (large, in recording banner) ────────── */
const RecordingBars = () => (
  <div className="flex items-center gap-[3px]" aria-hidden="true">
    {[4, 8, 14, 10, 16, 10, 14, 8, 4].map((h, i) => (
      <motion.div
        key={i}
        className="w-[3px] rounded-full bg-red-400"
        style={{ height: `${h}px` }}
        animate={{ height: [`${h}px`, `${h * 2}px`, `${h}px`], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.5 + i * 0.04, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 }}
      />
    ))}
  </div>
);

/* ─── Small mic wave for the button ─────────────────────────── */
const MicWave = () => (
  <div className="flex items-center gap-[2px]" aria-hidden="true">
    {[3, 6, 9, 6, 3].map((h, i) => (
      <motion.div
        key={i}
        className="w-[3px] rounded-full bg-white"
        style={{ height: `${h}px` }}
        animate={{ height: [`${h}px`, `${h * 2.5}px`, `${h}px`], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut", delay: i * 0.09 }}
      />
    ))}
  </div>
);

/* ─── Main component ─────────────────────────────────────────── */
export function LiveChatAgent({
  open,
  onOpenChange,
  prefilledName = "",
  prefilledEmail = "",
  prefilledLang,
  initialContext,
}: LiveChatAgentProps) {
  const [step, setStep] = useState<"registration" | "chat">("registration");
  const [name, setName] = useState(prefilledName);
  const [email, setEmail] = useState(prefilledEmail);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const [isTTSMuted, setIsTTSMuted] = useState(false);
  const [selectedLang, setSelectedLang] = useState(prefilledLang ?? "en-US");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* speak agent response */
  const speakAgent = useCallback((text: string) => {
    if (isTTSMuted) return;
    setIsSpeaking(true);
    speakText(text, selectedLang, () => setIsSpeaking(false));
  }, [isTTSMuted, selectedLang]);

  /* Sync pre-fill props when dialog opens (avatar may pass them late) */
  useEffect(() => {
    if (open) {
      if (prefilledName)  setName(prefilledName);
      if (prefilledEmail) setEmail(prefilledEmail);
      if (prefilledLang)  setSelectedLang(prefilledLang);

      if (prefilledName && prefilledEmail) {
        setStep("chat");
        setMessages((prev) => {
          if (prev.length === 0) {
            const welcomeText = `Hi ${prefilledName.split(" ")[0]}! I'm Sarah, your live AI agent. You can speak or type your question in any language, and I'll answer right away!`;
            const initialMsgs: Message[] = [{ id: "welcome", sender: "agent", text: welcomeText }];
            if (initialContext && initialContext.trim()) {
              initialMsgs.push({
                id: "context",
                sender: "agent",
                text: `📋 Context from your AI conversation:\n${initialContext}`,
              });
            }
            setTimeout(() => speakAgent(welcomeText), 400);
            return initialMsgs;
          }
          return prev;
        });
      }
    }
  }, [open, prefilledName, prefilledEmail, prefilledLang, initialContext, speakAgent]);

  /* reset on close */
  useEffect(() => {
    if (!open) {
      stopSpeaking();
      setTimeout(() => {
        setStep("registration");
        setName(prefilledName); setEmail(prefilledEmail);
        setMessages([]); setInputValue("");
        setIsAgentTyping(false); setIsSpeaking(false);
        setShowLangPicker(false);
      }, 300);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* auto scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAgentTyping]);

  /* cleanup TTS on unmount */
  useEffect(() => () => stopSpeaking(), []);

  /* send message (used by both mic + keyboard) */
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsAgentTyping(true);
    stopSpeaking();

    setTimeout(() => {
      const agentText = `Thanks! You said: "${text.trim()}". Our live platform will pull up the exact answer from your knowledge base automatically!`;
      setIsAgentTyping(false);
      const agentMsg: Message = { id: (Date.now() + 1).toString(), sender: "agent", text: agentText };
      setMessages((prev) => [...prev, agentMsg]);
      speakAgent(agentText);
    }, 1400 + Math.random() * 800);
  }, [speakAgent]);

  /* voice recognition */
  const { isListening, interimText, startListening, stopListening, supported: micSupported } =
    useSpeechRecognition(selectedLang, sendMessage);

  /* start chat */
  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const welcomeText = `Hi ${name.split(" ")[0]}! I'm Sarah, your live AI agent. You can speak or type your question and I'll answer right away!`;
    setStep("chat");
    const initialMessages: Message[] = [{ id: "welcome", sender: "agent", text: welcomeText }];
    // Inject AI conversation context if provided by the avatar layer
    if (initialContext && initialContext.trim()) {
      initialMessages.push({
        id: "context",
        sender: "agent",
        text: `📋 Context from your AI conversation:\n${initialContext}`,
      });
    }
    setMessages(initialMessages);
    setTimeout(() => speakAgent(welcomeText), 400);
  };

  /* typed send */
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sendMessage(inputValue);
  };

  const selectedLangLabel = LANGUAGES.find((l) => l.code === selectedLang)?.label ?? "English";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px] p-0 overflow-hidden border-0 shadow-2xl bg-white">
        <VisuallyHidden>
          <DialogTitle>Talk with Sarah - AI Voice Agent</DialogTitle>
          <DialogDescription>Voice or text chat with your AI support agent</DialogDescription>
        </VisuallyHidden>

        <AnimatePresence mode="wait">

          {/* ──── STEP 1: REGISTRATION ──── */}
          {step === "registration" && (
            <motion.div
              key="registration"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg mb-4 relative">
                  <ChromaKeyVideo src="/avatar video.webm" fallbackSrc="/avatar.jpg" className="w-full h-full" chromaKey={false} />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Talk to Sarah</h2>
                <p className="text-sm text-slate-500 mt-1">Enter your details to start a live voice or chat session.</p>
              </div>

              <form onSubmit={handleStartChat} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="live-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="live-name" placeholder="Jane Doe" className="pl-9 bg-white" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="live-email">Work Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="live-email" type="email" placeholder="jane@company.com" className="pl-9 bg-white" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>

                {/* Language selector */}
                <div className="space-y-2">
                  <Label>Language</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {LANGUAGES.map((l) => (
                      <button type="button" key={l.code} onClick={() => setSelectedLang(l.code)}
                        className={`text-xs py-1.5 px-2 rounded-lg border transition-all font-medium ${selectedLang === l.code ? "bg-emerald-600 text-white border-emerald-600 shadow" : "bg-white text-slate-600 border-slate-200 hover:border-emerald-400"}`}>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Start Chat →
                </Button>
              </form>
            </motion.div>
          )}

          {/* ──── STEP 2: CHAT ──── */}
          {step === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-[640px] max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 flex items-center gap-3 shadow relative">
                <button onClick={() => onOpenChange(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>

                <div className="relative shrink-0">
                  <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${isSpeaking ? "border-amber-300" : "border-emerald-300"} transition-colors`}>
                    <ChromaKeyVideo src="/avatar video.webm" fallbackSrc="/avatar.jpg" className="w-full h-full" chromaKey={false} />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm flex items-center gap-1">
                    Sarah <Sparkles className="w-3 h-3 text-amber-300" />
                  </h3>
                  <p className="text-[10px] text-emerald-100">
                    {isListening ? "🔴 Recording your voice…" : isSpeaking ? "🔊 Speaking…" : `Live AI Agent · ${selectedLangLabel}`}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0 mr-7">
                  <button onClick={() => setShowLangPicker((v) => !v)} title="Switch language" className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => { setIsTTSMuted((m) => { if (!m) stopSpeaking(); return !m; }); }} title={isTTSMuted ? "Unmute agent voice" : "Mute agent voice"} className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors">
                    {isTTSMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Language picker dropdown */}
              <AnimatePresence>
                {showLangPicker && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden bg-slate-50 border-b border-slate-200">
                    <div className="p-3 grid grid-cols-3 gap-1.5">
                      {LANGUAGES.map((l) => (
                        <button key={l.code} onClick={() => { setSelectedLang(l.code); setShowLangPicker(false); }}
                          className={`text-[11px] py-1 px-2 rounded-md border font-medium transition-all ${selectedLang === l.code ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-600 border-slate-200 hover:border-emerald-400"}`}>
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── RECORDING BANNER — appears when mic is active ── */}
              <AnimatePresence>
                {isListening && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-red-50 border-b border-red-100 px-4 py-2.5 flex items-center gap-3">
                      {/* Pulsing red dot */}
                      <div className="relative shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-red-400"
                          animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>

                      {/* Wave bars */}
                      <RecordingBars />

                      <div className="flex-1 min-w-0">
                        {interimText ? (
                          <p className="text-[12px] text-slate-700 font-medium truncate italic">
                            "{interimText}"
                          </p>
                        ) : (
                          <p className="text-[12px] text-red-600 font-semibold">Recording… speak now</p>
                        )}
                      </div>

                      {/* Stop mic button in banner */}
                      <button
                        onClick={stopListening}
                        className="shrink-0 text-[11px] font-bold text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 px-2.5 py-1 rounded-full transition-colors"
                      >
                        Stop
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50 to-white">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-2`}>
                    {msg.sender === "agent" && (
                      <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 border border-emerald-200">
                        <img src="/avatar.jpg" alt="Sarah" className="w-full h-full object-cover object-top" />
                      </div>
                    )}
                    <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === "user" ? "bg-emerald-600 text-white rounded-tr-sm" : "bg-white text-slate-800 border border-slate-100 rounded-tl-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isAgentTyping && (
                  <div className="flex justify-start gap-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 border border-emerald-200">
                      <img src="/avatar.jpg" alt="Sarah" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                      {[0, 0.2, 0.4].map((d, i) => (
                        <motion.div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.7, delay: d }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* ── Input bar ── */}
              <div className="p-3 bg-white border-t border-slate-100">
                <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                  {/* Text field — shows live interim transcript when listening */}
                  <div className="relative flex-1">
                    <Input
                      placeholder={isListening ? "Listening… speak now" : "Type or use mic to speak…"}
                      value={isListening ? interimText : inputValue}
                      onChange={(e) => !isListening && setInputValue(e.target.value)}
                      readOnly={isListening}
                      className={`rounded-full px-4 text-sm bg-slate-50 border-slate-200 focus-visible:ring-emerald-500 w-full pr-4 ${isListening ? "text-slate-400 italic" : ""}`}
                    />
                  </div>

                  {/* Mic button */}
                  {micSupported && (
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.92 }}
                      onClick={isListening ? stopListening : startListening}
                      disabled={isAgentTyping}
                      aria-label={isListening ? "Stop recording" : "Start voice input"}
                      className={`relative w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-all ${
                        isListening ? "bg-red-500 hover:bg-red-600" : "bg-emerald-600 hover:bg-emerald-700"
                      } text-white disabled:opacity-40`}
                    >
                      {isListening ? <MicWave /> : <Mic className="w-4 h-4" />}
                      {/* Pulse ring while recording */}
                      {isListening && (
                        <motion.span
                          className="absolute inset-0 rounded-full border-2 border-red-400"
                          animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  )}

                  {/* Send button */}
                  <Button
                    type="submit"
                    disabled={!inputValue.trim() || isAgentTyping || isListening}
                    className="rounded-full w-11 h-11 p-0 bg-emerald-600 hover:bg-emerald-700 shrink-0 shadow-lg"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>

                <p className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                  <Bot className="w-3 h-3" /> Powered by Supporticon AI
                  {!micSupported && <span className="ml-2 text-amber-500">· Use Chrome/Edge for voice input</span>}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
