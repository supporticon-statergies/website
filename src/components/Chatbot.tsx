import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button"; // Assuming shadcn UI buttons exist
import { cn } from "@/lib/utils"; // Assuming shadcn utils exist
import { useNavigate, useLocation } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  text: "Hello! I am your AI assistant. How can I help you today?",
  sender: "bot",
  timestamp: new Date(),
};

const Chatbot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const wasOpenRef = useRef(isOpen);
  wasOpenRef.current = isOpen;

  useEffect(() => {
    const originallyOpen = wasOpenRef.current;

    setIsVisible(false);
    setIsOpen(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
      if (originallyOpen) {
        // give it a tiny delay to ensure the button is visible before expanding
        setTimeout(() => setIsOpen(true), 150);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const lowerInput = inputValue.toLowerCase();

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Navigation intent detection
    let botReplyText =
      "Thanks for reaching out! This is a demo chatbot reply. We'll get back to you shortly.";
    let navAction: string | null = null;

    if (lowerInput.includes("home")) {
      botReplyText = "Navigating you to the Home page...";
      navAction = "/";
    } else if (lowerInput.includes("about")) {
      botReplyText = "Navigating you to the About page...";
      navAction = "/about";
    } else if (lowerInput.includes("product")) {
      botReplyText = "Navigating you to the Product page...";
      navAction = "/product";
    } else if (lowerInput.includes("resource")) {
      botReplyText = "Navigating you to the Resources page...";
      navAction = "/resources";
    }

    // Mock API response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botReplyText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      if (navAction) {
        setTimeout(() => {
          navigate(navAction as string);
          setIsOpen(false);
        }, 1000);
      }
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-500 ease-in-out z-50 flex items-center justify-center text-white",
          !isVisible
            ? "translate-y-32 opacity-0 scale-50 pointer-events-none"
            : isOpen
              ? "bg-red-500 hover:bg-red-600 rotate-90 scale-0 opacity-0"
              : "bg-primary hover:bg-primary/90 scale-100 hover:scale-110 opacity-100 translate-y-0",
        )}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window Overlay */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] min-h-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-50 transition-all duration-300 origin-bottom-right",
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-0 opacity-0 translate-y-10 pointer-events-none",
        )}
      >
        {/* Chat Header */}
        <div className="bg-primary p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black">SupportIcon</h3>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Chatbot"
            className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300",
                msg.sender === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div className="flex items-end max-w-[80%] space-x-2">
                {msg.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-green-600" />
                  </div>
                )}
                <div
                  className={cn(
                    "p-3 rounded-2xl text-sm shadow-sm",
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm",
                  )}
                >
                  <p>{msg.text}</p>
                  <span
                    className={cn(
                      "text-[10px] block mt-1",
                      msg.sender === "user" ? "text-right" : "text-gray-400",
                    )}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex w-full justify-start animate-in fade-in">
              <div className="flex items-end max-w-[80%] space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-green-600" />
                </div>
                <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              aria-label="Type your message"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
              className="bg-primary hover:bg-primary/90 text-white p-2.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <Send size={18} className="translate-x-[1px]" />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-400">
              Powered by{" "}
              <span className="text-black font-medium">SupportIcon</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
