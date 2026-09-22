import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, ChevronDown, Sparkles, Zap } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────── */
interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
  time?: string;
}

/* ─── Conversation flow ──────────────────────────────────────── */
type FlowStep = {
  question: string;
  options?: string[];
  next?: string | ((answer: string) => string);
};

const FLOW: Record<string, FlowStep> = {
  start: {
    question:
      "👋 Hi there! I'm HelpDude's AI assistant. What brings you to the Features page today?",
    options: [
      "I'm exploring what HelpDude does",
      "I want to solve a specific support problem",
      "I'm comparing support tools",
      "Just browsing!",
    ],
    next: (answer) => {
      if (answer.includes("specific support")) return "specific_problem";
      if (answer.includes("comparing")) return "comparing";
      if (answer.includes("browsing")) return "browsing";
      return "exploring";
    },
  },
  exploring: {
    question:
      "Great! HelpDude has 6 core capabilities — from AI voice support to omnichannel messaging. Which area sounds most relevant to your team?",
    options: [
      "Voice & live agent support",
      "Email ticket automation",
      "WhatsApp / social messaging",
      "Multi-language support",
    ],
    next: () => "team_size",
  },
  specific_problem: {
    question:
      "I'd love to help you find the right feature. What's the biggest pain point for your support team right now?",
    options: [
      "Customers wait too long for replies",
      "Agents are overwhelmed with tickets",
      "Support isn't consistent across channels",
      "Hard to track hardware / repair issues",
    ],
    next: () => "team_size",
  },
  comparing: {
    question:
      "Smart move! HelpDude is built specifically for Freshdesk-first teams. How large is your current support operation?",
    options: [
      "1–5 agents",
      "6–20 agents",
      "20–100 agents",
      "100+ agents",
    ],
    next: () => "result_comparing",
  },
  browsing: {
    question:
      "No problem! While you're here — is there a feature that caught your eye? I can explain any of them in detail. 😊",
    options: [
      "Live Agent & Voice calls",
      "Email Autopilot / Copilot",
      "Omnichannel messaging",
      "Automated Tracking",
    ],
    next: () => "feature_detail",
  },
  team_size: {
    question:
      "Got it! How many support agents are currently on your team?",
    options: [
      "Just me / 1–3 agents",
      "4–15 agents",
      "15–50 agents",
      "50+ agents",
    ],
    next: () => "result_main",
  },
  result_main: {
    question:
      "Perfect — based on what you shared, HelpDude's **Email Autopilot + Live Agent** combo would likely give you the fastest ROI. Would you like to see a live demo or talk to our team?",
    options: [
      "Yes, book a demo!",
      "Send me more info first",
      "I have another question",
    ],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      if (answer.includes("more info")) return "more_info";
      return "another_question";
    },
  },
  result_comparing: {
    question:
      "HelpDude integrates directly into your Freshdesk sidebar — zero migration needed. Most teams see full ROI within 30 days. Want to talk to a specialist?",
    options: [
      "Yes, let's talk!",
      "Show me pricing first",
      "I have a question",
    ],
    next: (answer) => {
      if (answer.includes("talk")) return "book_demo";
      if (answer.includes("pricing")) return "pricing_info";
      return "another_question";
    },
  },
  feature_detail: {
    question:
      "Awesome choice! Each feature is built to resolve tickets without human intervention — the AI handles the full conversation, including voice. Want me to show you how it works end-to-end?",
    options: ["Yes, walk me through it!", "Book a demo instead", "Ask another question"],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      if (answer.includes("walk")) return "walkthrough";
      return "another_question";
    },
  },
  walkthrough: {
    question:
      "Here's the flow: Customer sends a message → HelpDude scores it against your knowledge base → if 60%+ match, it resolves automatically → if below, it drafts a reply for your agent to approve. Simple, fast, grounded. Want to try it for free?",
    options: ["Yes, start a free trial!", "Book a demo call", "Tell me more"],
    next: (answer) => {
      if (answer.includes("trial") || answer.includes("demo")) return "book_demo";
      return "another_question";
    },
  },
  book_demo: {
    question:
      "🎉 Awesome! You can book a demo directly from our website. Click the **'Request Demo'** button in the top navigation, and our team will reach out within 1 business hour.",
    options: ["Thanks, I'll do that!", "Ask another question"],
    next: (answer) => {
      if (answer.includes("another")) return "another_question";
      return "end";
    },
  },
  pricing_info: {
    question:
      "HelpDude pricing is based on tickets resolved, not agents. Most SMBs start at around $99/month and scale as their support volume grows. Want the full breakdown?",
    options: ["Yes, show me pricing", "Book a call to discuss", "Thanks!"],
    next: (answer) => {
      if (answer.includes("book") || answer.includes("call")) return "book_demo";
      return "end";
    },
  },
  more_info: {
    question:
      "Sure! You can navigate to our **Resources page** for case studies and guides, or book a demo for a personalised walkthrough.",
    options: ["I'll check Resources page", "Book a demo instead", "Thanks!"],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      return "end";
    },
  },
  another_question: {
    question:
      "Of course! What else would you like to know about HelpDude?",
    options: [
      "How does pricing work?",
      "Which channels does it support?",
      "Can it handle multiple languages?",
      "How does it integrate with Freshdesk?",
    ],
    next: (answer) => {
      if (answer.includes("pricing")) return "pricing_info";
      if (answer.includes("languages")) return "lang_info";
      if (answer.includes("channels")) return "channels_info";
      return "freshdesk_info";
    },
  },
  lang_info: {
    question:
      "Yes! HelpDude supports 10+ languages natively — English, Hindi, Tamil, Telugu, French, German, Spanish, Japanese, Chinese, and Arabic. No extra setup needed. Want to see a demo?",
    options: ["Book a demo!", "Ask another question", "Thanks!"],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      if (answer.includes("another")) return "another_question";
      return "end";
    },
  },
  channels_info: {
    question:
      "HelpDude covers: **Email tickets**, **Live voice agent**, **Inbound phone calls**, **WhatsApp**, **Instagram DMs**, and **Facebook Messenger** — all in one unified dashboard.",
    options: ["That's impressive!", "Book a demo", "Tell me more"],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      if (answer.includes("more")) return "another_question";
      return "end";
    },
  },
  freshdesk_info: {
    question:
      "HelpDude lives inside your Freshdesk ticket sidebar as a native integration. Install it in under 5 minutes — no migration, no new tools to learn. Your agents keep using Freshdesk as-is.",
    options: ["Sounds seamless!", "Book a demo", "How does pricing work?"],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      if (answer.includes("pricing")) return "pricing_info";
      return "end";
    },
  },
  end: {
    question:
      "Thanks for chatting with me! 😊 Feel free to explore the Features page or click **'Request Demo'** anytime you're ready. Have a great day!",
  },
  ai_answered: {
    question: "",
    options: ["Book a demo", "Ask another question"],
    next: (answer) => {
      if (answer.includes("demo")) return "book_demo";
      return "another_question";
    },
  },
};

/* ─── Knowledge Base ─────────────────────────────────────────── */
function getHelpDudeAnswer(query: string): string {
  const lower = query.toLowerCase();
  if (lower.includes("omnichannel") || lower.includes("channel")) {
    return "HelpDude supports omnichannel customer contact across email tickets, public portal, AI web chat, human live chat, WhatsApp, and Voice Live.";
  }
  if (lower.includes("auto") || lower.includes("co-pilot") || lower.includes("copilot")) {
    return "HelpDude Auto automatically replies from your knowledge base. Co-Pilot suggests AI-drafted replies that your agents can review, edit, and send.";
  }
  if (lower.includes("voice") || lower.includes("call")) {
    return "Voice Live is an embeddable widget where visitors speak, and our agent can use camera/screen share for visual help, powered by Gemini Live.";
  }
  if (lower.includes("domain") || lower.includes("custom")) {
    return "You can brand your mail from-address or portal URL on your own custom domain instead of the shared HelpDude host.";
  }
  if (lower.includes("portal")) {
    return "The Public Ticket Portal allows customers to submit tickets without signing in. It can be hosted on a custom domain.";
  }
  if (lower.includes("mail") || lower.includes("email")) {
    return "Customers can email your support address to automatically create tickets. Agents reply from HelpDude with branded email templates.";
  }
  if (lower.includes("sme") || lower.includes("knowledge") || lower.includes("kb")) {
    return "HelpDude uses a Knowledge Base (KB) and SME sources (like Web Scrape, Confluence, Jira) to power Auto, Co-Pilot, and web chat answers.";
  }
  if (lower.includes("analytics") || lower.includes("admin")) {
    return "Admins have access to Analytics to track HelpDude Auto replies, manual replies, ticket volumes by channel, and team performance.";
  }
  if (lower.includes("live chat") || lower.includes("human")) {
    return "Human Chat (Live Chat) allows real-time agent conversations for escalations that need a person, often after AI handoff.";
  }
  if (lower.includes("whatsapp")) {
    return "HelpDude connects to WhatsApp Business so customers can message your number and get the same AI answers and ticket creation as web chat.";
  }
  return "HelpDude is an AI-powered support platform for SaaS teams combining Auto, Co-Pilot, and multi-channel support. Can you be more specific about what feature you'd like to learn about?";
}

/* ─── Utility ────────────────────────────────────────────────── */
function uid() {
  return Math.random().toString(36).slice(2);
}
function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ─── Bot Avatar ─────────────────────────────────────────────── */
const BotAvatar = ({ pulse = false }: { pulse?: boolean }) => (
  <div className="relative shrink-0">
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)" }}
    >
      <Bot className="w-4 h-4 text-white" />
    </div>
    {pulse && (
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full">
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </span>
    )}
  </div>
);

/* ─── Main component ─────────────────────────────────────────── */
export function FeaturesChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState("start");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* Open chat — fire first bot message */
  useEffect(() => {
    if (open && messages.length === 0) {
      setHasUnread(false);
      fireBot("start");
    }
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* Show unread badge after 3s */
  useEffect(() => {
    const t = setTimeout(() => { if (!open) setHasUnread(true); }, 3000);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fireBot(stepKey: string) {
    const step = FLOW[stepKey];
    if (!step) return;
    setIsTyping(true);
    const delay = 750 + Math.random() * 450;
    setTimeout(() => {
      setIsTyping(false);
      const msg: Message = {
        id: uid(),
        sender: "bot",
        text: step.question,
        options: step.options,
        time: getTime(),
      };
      setMessages((prev) => [...prev, msg]);
      setCurrentStep(stepKey);
    }, delay);
  }

  function handleOption(answer: string) {
    const step = FLOW[currentStep];
    if (!step) return;
    const userMsg: Message = { id: uid(), sender: "user", text: answer, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);

    const isOption = step.options?.some((opt) => opt.toLowerCase().trim() === answer.toLowerCase().trim());

    // Intercept free-text questions using our Knowledge Base
    if (!isOption) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const aiText = getHelpDudeAnswer(answer);
        const botMsg: Message = {
          id: uid(),
          sender: "bot",
          text: aiText,
          options: FLOW["ai_answered"].options,
          time: getTime(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setCurrentStep("ai_answered");
      }, 800);
      return;
    }

    let nextKey: string | undefined;
    if (typeof step.next === "function") nextKey = step.next(answer);
    else nextKey = step.next;
    if (nextKey && FLOW[nextKey]) fireBot(nextKey);
  }

  function handleTextSend(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;
    handleOption(inputValue.trim());
    setInputValue("");
  }

  return (
    <>
      {/* ══ Floating Launcher Button ══ */}
      <div className="fixed bottom-24 right-4 z-[9998] flex flex-col items-end gap-2.5">

        {/* Tooltip bubble */}
        <AnimatePresence>
          {!open && hasUnread && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="relative mr-1"
            >
              <div
                className="text-white text-[12px] font-semibold px-3.5 py-2 rounded-2xl rounded-br-sm leading-snug max-w-[175px] shadow-xl"
                style={{ background: "linear-gradient(135deg, #065f46 0%, #0f766e 100%)" }}
              >
                💬 Ask me anything about HelpDude!
              </div>
              {/* tail */}
              <div
                className="absolute bottom-[-5px] right-3 w-3 h-3 rotate-45"
                style={{ background: "#0f766e" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Launcher button */}
        <motion.button
          id="features-chatbot-trigger"
          aria-label="Open HelpDude chatbot"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setOpen((v) => !v)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_8px_32px_rgba(16,185,129,0.5)]"
          style={{ background: "linear-gradient(135deg, #10b981 0%, #0d9488 60%, #0891b2 100%)" }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 80, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="msg" initial={{ rotate: 80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -80, opacity: 0 }} transition={{ duration: 0.18 }}>
                <MessageCircle className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Unread badge */}
          {hasUnread && !open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-black text-white shadow"
            >
              1
            </motion.span>
          )}

          {/* Pulse ring */}
          {!open && (
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid rgba(16,185,129,0.6)" }}
              animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </motion.button>
      </div>

      {/* ══ Chat Window ══ */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="features-chatbot-window"
            key="chatbot-window"
            initial={{ opacity: 0, y: 32, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-40 right-4 z-[9997] w-[370px] max-w-[calc(100vw-1.5rem)] flex flex-col overflow-hidden"
            style={{
              height: "540px",
              maxHeight: "calc(100vh - 190px)",
              borderRadius: "24px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >

            {/* ─── HEADER ─────────────────────────────────────── */}
            <div
              className="shrink-0 px-4 pt-4 pb-3 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #0f766e 100%)" }}
            >
              {/* Background orbs */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #34d399, transparent)" }} />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-15"
                style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }} />

              <div className="relative flex items-center gap-3">
                {/* Bot icon with glow */}
                <div className="relative">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    className="absolute -inset-1 rounded-2xl"
                    style={{ border: "1px solid rgba(52,211,153,0.4)" }}
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#065f46] rounded-full shadow-sm" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-bold text-[15px] tracking-tight">HelpDude AI</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[11px] text-emerald-200 font-medium">
                      {isTyping ? "Typing a reply…" : "Online · Replies instantly"}
                    </span>
                  </div>
                </div>

                {/* Powered by badge */}
                <div className="flex items-center gap-1 bg-white/10 border border-white/20 px-2 py-1 rounded-full mr-7">
                  <Zap className="w-2.5 h-2.5 text-amber-300" />
                  <span className="text-[9px] text-white/80 font-semibold tracking-wide">AI</span>
                </div>

                {/* Close */}
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  aria-label="Close chatbot"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Status strip */}
              <div className="relative flex items-center gap-2 mt-3 bg-white/8 border border-white/10 rounded-xl px-3 py-1.5">
                <div className="flex gap-0.5">
                  {[3, 5, 7, 5, 3].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-[3px] rounded-full bg-emerald-400/60"
                      style={{ height: `${h}px` }}
                      animate={{ height: [`${h}px`, `${h * 2}px`, `${h}px`] }}
                      transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-white/60 font-medium">Your AI support guide is ready</span>
              </div>
            </div>

            {/* ─── MESSAGES ───────────────────────────────────── */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-5"
              style={{
                background: "linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 40%, #f0fdfa 100%)",
                scrollbarWidth: "none",
              }}
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.02 * (idx % 4) }}
                    className={`flex flex-col gap-2 ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    {/* Message bubble */}
                    <div className={msg.sender === "user" ? "bg-emerald-100 text-emerald-800" : "bg-white text-slate-800"} style={{ padding: "0.5rem 0.75rem", borderRadius: "0.5rem", maxWidth: "80%" }}>
                      {msg.text}
                    </div>
                    {/* Render options if present */}
                    {msg.options?.map((opt) => (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleOption(opt)}
                        className="text-[12px] px-3 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-400 transition-all font-medium shadow-sm cursor-pointer"
                      >
                        {opt}
                      </motion.button>
                    ))}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                    {[0, 0.18, 0.36].map((d, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.65, delay: d }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input bar */}
            <div className="shrink-0 bg-white border-t border-slate-100 px-3 py-3">
              <form onSubmit={handleTextSend} className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your reply…"
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-[13px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  aria-label="Type your reply"
                  autoComplete="off"
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white shadow-md transition-colors shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
              </form>
              <p className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" /> Powered by HelpDude AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
