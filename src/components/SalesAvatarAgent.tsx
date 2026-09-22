/**
 * SalesAvatarAgent.tsx
 *
 * Floating Mic Button — Supporticon
 * ─────────────────────────────────────────────────────────────────────────────
 * • Appears 5 s after the user lands on the page (bottom-right, non-blocking)
 * • Clicking the mic icon directly opens the HelpDude Voice widget
 * • No popup card, no image, no video
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   OPEN HELPDUDE VOICE WIDGET
═══════════════════════════════════════════════════════════════ */
function openHelpDudeLiveAgent() {
  const voice = (window as any).HelpDudeVoice;
  if (voice && typeof voice.open === "function") {
    voice.open();
    return;
  }

  // Fallback: click the hidden launcher button directly
  const root = document.getElementById("helpdude-voice-root");
  if (root) {
    const btn = root.querySelector("button") as HTMLButtonElement | null;
    if (btn) { btn.click(); return; }
  }

  console.warn("HelpDude Voice widget not ready. Make sure helpdude-voice.js is loaded.");
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export const SalesAvatarAgent = () => {
  const [visible, setVisible] = useState(false);

  /* Show mic button 5 s after page load */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  /* Re-open from HeroSection badge */
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("openSalesAgent", handler);
    return () => window.removeEventListener("openSalesAgent", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="mic-fab"
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          onClick={openHelpDudeLiveAgent}
          aria-label="Open Voice Agent"
          className="fixed bottom-5 right-4 z-[9999] w-[60px] h-[60px] rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.45)] border-2 border-emerald-300 select-none"
          style={{ bottom: "20px" }}
        >
          <Mic className="w-7 h-7" />
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-emerald-400/50"
            animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          {/* Live dot */}
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse bg-green-400 shadow-md" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SalesAvatarAgent;
