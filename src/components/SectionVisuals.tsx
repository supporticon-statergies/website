/**
 * SectionVisuals — Premium AI-themed visual components
 * Placed only where visuals add genuine value to the layout.
 */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Search,
  FileText,
  GitBranch,
  MessageSquare,
  CheckCircle,
  Zap,
  Database,
  BarChart3,
  Clock,
  Users,
  Shield,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   1.  AI UNIFIED SEARCH VISUAL
   Placement: Features section — right column of split layout
   ═══════════════════════════════════════════════════════════ */

const QUERIES = [
  "How to reset SSO configuration?",
  "Billing dispute refund policy...",
  "API rate limit exceeded error...",
];

const RESULTS = [
  {
    source: "Confluence",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    dot: "bg-primary",
    Icon: FileText,
    title: "SSO Setup & Troubleshooting",
    snippet: "Complete SAML 2.0 configuration guide...",
    ms: "320ms",
  },
  {
    source: "Jira",
    color: "text-violet-500",
    bg: "bg-violet-50/80 border-violet-100",
    dot: "bg-violet-400",
    Icon: GitBranch,
    title: "Known Issue: SSO timeout #4521",
    snippet: "Fixed in v2.3.4 — patch notes inside...",
    ms: "410ms",
  },
  {
    source: "Freshdesk",
    color: "text-emerald-500",
    bg: "bg-emerald-50/80 border-emerald-100",
    dot: "bg-emerald-400",
    Icon: MessageSquare,
    title: "Similar Ticket — Resolved in 4 min",
    snippet: "Applied KB article #312 successfully...",
    ms: "490ms",
  },
];

export function AISearchVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isMobile = useIsMobile();

  const [queryIdx, setQueryIdx] = useState(0);
  const [typed, setTyped]       = useState("");
  const [showResults, setShowResults] = useState(false);

  // Typing animation loop
  useEffect(() => {
    if (!inView) return;
    const query = QUERIES[queryIdx];

    // On mobile, skip the typing animation and just show results to save CPU
    if (isMobile) {
      setTyped(query);
      setShowResults(true);
      return;
    }

    let charIdx = 0;
    setTyped("");
    setShowResults(false);

    const iv = setInterval(() => {
      charIdx++;
      setTyped(query.slice(0, charIdx));
      if (charIdx >= query.length) {
        clearInterval(iv);
        setTimeout(() => setShowResults(true), 400);
        // cycle to next query after 3.6 s
        setTimeout(() => setQueryIdx((i) => (i + 1) % QUERIES.length), 3800);
      }
    }, 42);

    return () => clearInterval(iv);
  }, [inView, queryIdx, isMobile]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[500px] mx-auto lg:mx-0"
    >
      {/* Soft ambient glow behind the card */}
      <div className="absolute inset-[8%] bg-gradient-to-br from-primary/20 via-emerald-100/20 to-violet-100/25 rounded-3xl blur-[55px] pointer-events-none" />

      {/* Glass panel */}
      <div className="relative bg-white/92 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.09)] overflow-hidden">

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
          </div>
          <span className="text-[11px] text-slate-400 font-semibold ml-2 tracking-wide">
            Supporticon, Unified AI Search
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <motion.div
              animate={isMobile ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
              transition={isMobile ? {} : { duration: 1.6, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-400"
            />
            <span className="text-[10px] text-emerald-500 font-bold">LIVE</span>
          </div>
        </div>

        {/* Search input */}
        <div className="px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/60 rounded-2xl px-4 py-3">
            <Search className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="text-sm text-slate-700 font-medium flex-1 min-h-[1.25rem] leading-snug">
              {typed}
              <motion.span
                animate={isMobile ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                transition={isMobile ? {} : { duration: 0.9, repeat: Infinity }}
                className="inline-block w-0.5 h-[13px] bg-emerald-500 ml-0.5 align-middle"
              />
            </span>
          </div>

          {/* Source chips */}
          <div className="flex flex-wrap gap-2 mt-3">
            {["Jira", "Confluence", "Freshdesk", "+ 4 more"].map((src, i) => (
              <motion.span
                key={src}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border
                  ${i < 3
                    ? "bg-white border-slate-200 text-slate-500"
                    : "bg-emerald-50 border-emerald-200 text-emerald-600"}`}
              >
                {i < 3 && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === 0 ? "bg-violet-400" : i === 1 ? "bg-primary" : "bg-emerald-400"
                    }`}
                  />
                )}
                {src}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Results area */}
        <div className="px-5 py-4 space-y-2.5 h-[272px] relative">
          <AnimatePresence mode="wait">
            {showResults ? (
              <motion.div key="results" className="space-y-2.5">
                {RESULTS.map((r, i) => {
                  const Icon = r.Icon;
                  return (
                    <motion.div
                      key={r.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.11, duration: 0.38 }}
                      className={`flex items-start gap-3 p-3 rounded-2xl border ${r.bg}`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-white/80">
                        <Icon className={`w-4 h-4 ${r.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${r.color}`}>
                            {r.source}
                          </span>
                          <span className="text-[9px] text-slate-400 font-mono">{r.ms}</span>
                        </div>
                        <p className="text-[12px] font-semibold text-slate-700 leading-snug">{r.title}</p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{r.snippet}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="searching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full gap-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-emerald-200 border-t-emerald-500 rounded-full"
                />
                <span className="text-[11px] text-slate-400 font-medium">
                  Searching across all sources...
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <span className="text-[10px] text-slate-400">
            {showResults ? "3 results · 3 sources" : "Querying knowledge base..."}
          </span>
          <AnimatePresence>
            {showResults && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[10px] font-bold text-emerald-600 flex items-center gap-1"
              >
                <Zap className="w-3 h-3" />
                0.8s total
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   2.  ANIMATED WORKFLOW PIPELINE
   Placement: How It Works — below the stepper (desktop only)
   ═══════════════════════════════════════════════════════════ */

const PIPELINE_NODES = [
  { label: "Ticket Arrives",      Icon: MessageSquare, color: "from-primary to-primary",     glow: "rgba(26,127,181,0.25)"  },
  { label: "AI Searches",      Icon: Search,        color: "from-violet-500 to-purple-600",  glow: "rgba(139,92,246,0.25)" },
  { label: "Draft Generated",     Icon: Zap,           color: "from-emerald-500 to-teal-600",   glow: "rgba(16,185,129,0.25)" },
  { label: "Agent Sends",         Icon: CheckCircle,   color: "from-orange-500 to-amber-500",   glow: "rgba(245,158,11,0.25)" },
];

function FlowParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400/70 shadow-[0_0_6px_rgba(16,185,129,0.6)]"
      initial={{ left: "0%", opacity: 0 }}
      animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2.4,
        delay,
        repeat: Infinity,
        ease: "linear",
        opacity: { times: [0, 0.1, 0.9, 1] },
      }}
    />
  );
}

export function WorkflowPipelineVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:block mt-16 px-4"
    >
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 overflow-hidden border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.18)]">

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-0 right-[20%] w-64 h-32 bg-emerald-500/8 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-[20%] w-64 h-32 bg-primary/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative flex items-center justify-between gap-0">
          {PIPELINE_NODES.map((node, i) => {
            const Icon = node.Icon;
            const isLast = i === PIPELINE_NODES.length - 1;
            return (
              <div key={node.label} className={`flex items-center ${isLast ? "" : "flex-1 min-w-0"}`}>

                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center shrink-0"
                >
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg mb-3`}
                    style={{ boxShadow: `0 8px 24px ${node.glow}` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${node.color}`}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-white/70 text-center leading-tight max-w-[80px]">
                    {node.label}
                  </span>
                </motion.div>

                {/* Connector with flowing particles */}
                {!isLast && (
                  <div className="flex-1 relative h-[2px] mx-3">
                    {/* Static base line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                      className="absolute inset-0 origin-left bg-gradient-to-r from-white/15 to-white/8 rounded-full"
                    />
                    {/* Animated particles */}
                    {inView && [0, 0.8, 1.6].map((d) => (
                      <FlowParticle key={d} delay={d + i * 0.3} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom metric row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center justify-center gap-10 mt-8 pt-6 border-t border-white/8"
        >
          {[
            { icon: Clock,    value: "30s",  label: "Avg. reply time"   },
            { icon: BarChart3, value: "94%", label: "Resolution rate"  },
            { icon: Users,    value: "3×",   label: "Agent throughput" },
            { icon: Shield,   value: "100%", label: "Data privacy"     },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center border border-white/10">
                <Icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-black text-white">{value}</div>
                <div className="text-[10px] text-white/40 font-medium leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
