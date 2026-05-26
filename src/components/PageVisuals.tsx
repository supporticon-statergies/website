/**
 * PageVisuals — Premium AI-themed visuals for non-Home pages.
 * One consistent visual language: dark glass environment, emerald + blue accents,
 * soft glow, floating layered UI, no cyberpunk overload.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Sparkles,
  Activity,
  Zap,
  CheckCircle,
  MessageSquare,
  Cpu,
  Layers,
  Workflow,
  Search,
  FileText,
  BookOpen,
  GraduationCap,
  Video,
} from "lucide-react";
import supporticonLogo from "@/assets/supporticon_logo.png";

const ease = [0.22, 1, 0.36, 1] as const;

/* ────────────────────────────────────────────────────────────
   Shared dark glass environment used by Features / Product / About
   ──────────────────────────────────────────────────────────── */
function DarkEnvironment({
  children,
  minHeight = 440,
}: {
  children: React.ReactNode;
  minHeight?: number;
}) {
  return (
    <div
      className="relative rounded-[28px] overflow-hidden"
      style={{
        minHeight,
        background:
          "radial-gradient(ellipse at 35% 35%, rgba(16,185,129,0.07) 0%, rgba(4,7,22,0.97) 52%, rgba(2,4,14,0.99) 100%)",
        boxShadow:
          "0 30px 90px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{ boxShadow: "inset 0 0 60px rgba(16,185,129,0.04)" }}
      />
      {children}
    </div>
  );
}

/* Glass panel used inside DarkEnvironment */
function GlassPanel({
  children,
  className = "",
  tint = "white",
}: {
  children: React.ReactNode;
  className?: string;
  tint?: "white" | "blue" | "emerald" | "amber";
}) {
  const tintMap = {
    white:   { bg: "rgba(255,255,255,0.045)", border: "rgba(255,255,255,0.09)" },
    blue:    { bg: "rgba(59,130,246,0.06)",   border: "rgba(59,130,246,0.18)"  },
    emerald: { bg: "rgba(16,185,129,0.06)",   border: "rgba(16,185,129,0.18)"  },
    amber:   { bg: "rgba(245,158,11,0.06)",   border: "rgba(245,158,11,0.18)"  },
  }[tint];
  return (
    <div
      className={`rounded-[18px] overflow-hidden ${className}`}
      style={{
        background: tintMap.bg,
        border: `1px solid ${tintMap.border}`,
        backdropFilter: "blur(24px)",
        boxShadow:
          "0 12px 40px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   1. FEATURE AI VISUAL — for Features page hero
   AI co-pilot with multi-layer feature stack
   ════════════════════════════════════════════════════════════ */
export function FeatureAIVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const layers = [
    { Icon: Sparkles,  label: "Auto Pilot",  color: "from-emerald-500 to-teal-600",  tint: "emerald" as const },
    { Icon: Brain,     label: "Co Pilot",    color: "from-primary to-primary",   tint: "blue"    as const },
    { Icon: Workflow,  label: "SME Console", color: "from-violet-500 to-purple-600", tint: "white"   as const },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease }}
      className="relative w-full max-w-[520px] mx-auto"
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(16,185,129,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <DarkEnvironment minHeight={460}>
        {/* Central AI core */}
        <div
          className="absolute"
          style={{ left: "50%", top: "44%", transform: "translate(-50%,-50%)", zIndex: 5 }}
        >
          {/* Pulse rings */}
          {[88, 64, 44].map((s, i) => (
            <motion.div
              key={s}
              animate={{ scale: [1, 1.35, 1], opacity: [0.18, 0, 0.18] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
              className="absolute rounded-full border border-emerald-400/25"
              style={{ width: s, height: s, top: (88 - s) / 2, left: (88 - s) / 2 }}
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-[88px] h-[88px] rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 32% 28%, rgba(110,231,183,0.95) 0%, rgba(16,185,129,0.82) 32%, rgba(5,150,105,0.55) 62%, rgba(4,120,87,0.2) 100%)",
              boxShadow:
                "0 0 32px rgba(16,185,129,0.55), 0 0 70px rgba(16,185,129,0.22), inset 0 0 22px rgba(255,255,255,0.22)",
            }}
          >
            <Cpu className="w-10 h-10 text-white/95" />
          </motion.div>
        </div>

        {/* Floating feature layers — stacked perspective */}
        <div className="absolute inset-0" style={{ zIndex: 6 }}>
          {layers.map((L, i) => {
            const Icon = L.Icon;
            const positions = [
              { top: "10%",  left: "8%"   },
              { top: "44%",  right: "8%"  },
              { bottom: "10%", left: "12%" },
            ][i];
            return (
              <motion.div
                key={L.label}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.55, ease }}
                style={positions}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <GlassPanel tint={L.tint} className="w-[170px]">
                    <div className="p-3.5">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${L.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[11px] font-bold text-white/85 tracking-wide">{L.label}</span>
                      </div>
                      <div className="space-y-1.5">
                        {[0, 1, 2].map((bar) => (
                          <motion.div
                            key={bar}
                            initial={{ width: "0%" }}
                            animate={inView ? { width: `${[88, 70, 92][bar]}%` } : {}}
                            transition={{ delay: 0.7 + i * 0.2 + bar * 0.08, duration: 0.9, ease: "easeOut" }}
                            className="h-[3px] rounded-full bg-white/15"
                            style={{
                              background: `linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.25))`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating micro chips */}
        {[
          { text: "30s answer time",  top: "22%", right: "12%", tint: "amber"   as const, Icon: Zap         },
          { text: "Grounded in KB",   top: "62%", left:  "10%", tint: "emerald" as const, Icon: CheckCircle },
        ].map((c, i) => (
          <motion.div
            key={c.text}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
            style={{ top: c.top, ...(c.right ? { right: c.right } : { left: c.left }) }}
            className="absolute z-10 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            >
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl"
                style={{
                  background: c.tint === "amber" ? "rgba(245,158,11,0.10)" : "rgba(16,185,129,0.12)",
                  border: c.tint === "amber" ? "1px solid rgba(245,158,11,0.18)" : "1px solid rgba(16,185,129,0.2)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <c.Icon className={`w-3 h-3 ${c.tint === "amber" ? "text-amber-400" : "text-emerald-400"}`} />
                <span className={`text-[10px] font-semibold ${c.tint === "amber" ? "text-amber-300" : "text-emerald-300"} whitespace-nowrap`}>
                  {c.text}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Corner badge */}
        <div className="absolute top-5 left-5 z-10 pointer-events-none">
          <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest">AI Co-Pilot</div>
          <div className="flex items-center gap-1 mt-0.5">
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
            <span className="text-[9px] text-emerald-400/55 font-semibold">Active</span>
          </div>
        </div>
      </DarkEnvironment>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   2. PRODUCT ECOSYSTEM VISUAL — for Product page hero
   Floating perspective dashboard with ticket queue + AI assistant
   ════════════════════════════════════════════════════════════ */
export function ProductEcosystemVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const tickets = [
    { id: "#4521", text: "Password reset failing",  status: "AI Drafting", dot: "bg-primary",    badge: "text-primary"    },
    { id: "#4522", text: "Refund — invoice 8842",   status: "Resolved",    dot: "bg-emerald-400", badge: "text-emerald-400" },
    { id: "#4523", text: "SSO timeout on Safari",   status: "Routed",      dot: "bg-amber-400",   badge: "text-amber-400"   },
    { id: "#4524", text: "API rate limit query",    status: "Drafting",    dot: "bg-primary",    badge: "text-primary"    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease }}
      className="relative w-full max-w-[560px] mx-auto"
    >
      <div
        className="absolute -inset-10 pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.16) 0%, rgba(16,185,129,0.08) 45%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <DarkEnvironment minHeight={500}>
        {/* Toolbar */}
        <div className="absolute top-0 inset-x-0 flex items-center gap-2 px-5 py-3.5 border-b border-white/8 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <span className="text-[10px] text-white/40 font-semibold tracking-wider ml-2">
            HelpDude — Ticket Workspace
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
            <span className="text-[9px] text-emerald-400 font-bold">LIVE</span>
          </div>
        </div>

        {/* Main ticket queue (left) */}
        <div className="absolute" style={{ top: 60, left: 20, right: "44%", zIndex: 5 }}>
          <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-3">
            Active Tickets
          </div>
          <div className="space-y-2">
            {tickets.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.45 }}
              >
                <GlassPanel className="!rounded-xl">
                  <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                      <span className="text-[9px] text-white/40 font-mono shrink-0">{t.id}</span>
                      <span className="text-[10px] text-white/80 truncate font-medium">{t.text}</span>
                    </div>
                    <span className={`text-[9px] font-bold shrink-0 ${t.badge}`}>{t.status}</span>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>

          {/* Mini KPI row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="grid grid-cols-3 gap-2 mt-4"
          >
            {[
              { v: "247", l: "Today", c: "text-emerald-400" },
              { v: "94%", l: "Rate",  c: "text-primary"    },
              { v: "30s", l: "Avg.",  c: "text-amber-400"   },
            ].map((k) => (
              <GlassPanel key={k.l} className="!rounded-lg">
                <div className="px-2 py-2 text-center">
                  <div className={`text-sm font-black ${k.c}`}>{k.v}</div>
                  <div className="text-[8px] text-white/30 font-semibold mt-0.5">{k.l}</div>
                </div>
              </GlassPanel>
            ))}
          </motion.div>
        </div>

        {/* AI Assistant panel (right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease }}
          className="absolute"
          style={{ top: 70, right: 20, width: "40%", zIndex: 6 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlassPanel tint="emerald">
              <div className="p-3.5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/90">AI Assistant</div>
                    <div className="text-[8px] text-emerald-400 font-semibold">Drafting reply...</div>
                  </div>
                </div>
                {/* Typing bubbles */}
                <div className="bg-white/5 rounded-xl p-2.5 mb-2.5">
                  <div className="flex items-center gap-1 mb-2">
                    {[0, 0.15, 0.3].map((d) => (
                      <motion.div
                        key={d}
                        animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: d }}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-white/12 w-full" />
                    <div className="h-1.5 rounded-full bg-white/12 w-[80%]" />
                    <div className="h-1.5 rounded-full bg-white/12 w-[65%]" />
                  </div>
                </div>
                {/* Citation */}
                <div className="flex items-center gap-1.5 text-[9px] text-white/40">
                  <FileText className="w-2.5 h-2.5" />
                  <span>KB #312 · Confluence</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </motion.div>

        {/* Floating message — bottom-right */}
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute z-10 pointer-events-none"
          style={{ bottom: "8%", right: "10%" }}
        >
          <div
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl"
            style={{
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-semibold text-emerald-300">Sent ✓ 2.1s</span>
          </div>
        </motion.div>

        {/* SVG connection from queue → AI panel */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 4 }}
          viewBox="0 0 560 500"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 240 220 Q 320 200 380 200"
            stroke="rgba(16,185,129,0.25)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 9"
            animate={{ strokeDashoffset: [52, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </DarkEnvironment>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   3. KNOWLEDGE HUB VISUAL — for Resources page
   Light, minimal documentation hub
   ════════════════════════════════════════════════════════════ */
export function KnowledgeHubVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    { Icon: BookOpen,       label: "Playbooks",  color: "bg-primary/15 text-primary"       },
    { Icon: FileText,       label: "Blogs",      color: "bg-emerald-100 text-emerald-600" },
    { Icon: Video,          label: "Demos",      color: "bg-violet-100 text-violet-600"   },
    { Icon: GraduationCap,  label: "Case Studies", color: "bg-amber-100 text-amber-600"   },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease }}
      className="relative w-full max-w-[500px] mx-auto"
    >
      {/* Soft glow */}
      <div className="absolute -inset-8 bg-gradient-to-br from-emerald-200/35 via-blue-100/25 to-violet-100/20 rounded-3xl blur-[55px] pointer-events-none" />

      {/* Light glass card */}
      <div className="relative bg-white/92 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.10)] p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
              <BookOpen className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">Knowledge Hub</div>
              <div className="text-[10px] text-slate-400 font-medium">1,247 resources indexed</div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 rounded-full border-2 border-emerald-200 border-t-emerald-500"
          />
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/60 rounded-2xl px-4 py-3 mb-5">
          <Search className="w-4 h-4 text-emerald-500" />
          <span className="text-sm text-slate-600 flex-1">Search across all resources...</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="inline-block w-0.5 h-3.5 bg-emerald-500"
          />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {items.map((it, i) => {
            const Icon = it.Icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-100 cursor-default"
              >
                <div className={`w-9 h-9 ${it.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-700">{it.label}</div>
                  <div className="text-[10px] text-slate-400">
                    {[42, 18, 7, 12][i]} items
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Activity stream */}
        <div className="border-t border-slate-100 pt-4 space-y-2">
          {[
            { txt: "New playbook: Customer Retention Frameworks", time: "2h ago", color: "bg-emerald-400" },
            { txt: "Case study: SaaS support team reduces TTR 60%",  time: "1d ago", color: "bg-primary"    },
          ].map((row, i) => (
            <motion.div
              key={row.txt}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
              className="flex items-center gap-2.5 text-[11px]"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${row.color}`} />
              <span className="text-slate-600 font-medium flex-1 truncate">{row.txt}</span>
              <span className="text-slate-400">{row.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   4. ABOUT ORBIT VISUAL — for About page hero
   Supporticon brand core with ambient orbit rings
   ════════════════════════════════════════════════════════════ */
export function AboutOrbitVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease }}
      className="relative w-full max-w-[480px] aspect-square mx-auto"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-[8%] bg-gradient-to-br from-emerald-200/45 via-teal-100/30 to-blue-100/20 rounded-full blur-[55px] pointer-events-none" />

      {/* Orbit rings (SVG for natural 3D feel) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <motion.ellipse
          cx="200" cy="200" rx="150" ry="50"
          fill="none"
          stroke="rgba(16,185,129,0.18)"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          animate={{ rotate: [0, 360] }}
          style={{ transformOrigin: "200px 200px" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.ellipse
          cx="200" cy="200" rx="170" ry="170"
          fill="none"
          stroke="rgba(59,130,246,0.12)"
          strokeWidth="1"
          strokeDasharray="4 10"
          animate={{ rotate: [0, -360] }}
          style={{ transformOrigin: "200px 200px" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" />
      </svg>

      {/* Center — Supporticon brand core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[112px] h-[112px] rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, rgba(110,231,183,0.95) 0%, rgba(16,185,129,0.92) 32%, rgba(5,150,105,0.7) 70%, rgba(4,120,87,0.5) 100%)",
            boxShadow:
              "0 0 40px rgba(16,185,129,0.5), 0 0 90px rgba(16,185,129,0.22), inset 0 0 22px rgba(255,255,255,0.22)",
          }}
        >
          <img src={supporticonLogo} alt="Supporticon Logo" className="w-14 h-14 object-contain" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   5. SECTION DECORATION — Reusable subtle floating accent
   Place inside any section that has empty whitespace
   ════════════════════════════════════════════════════════════ */
export function AmbientAccent({
  position = "right",
  color = "emerald",
}: {
  position?: "left" | "right";
  color?: "emerald" | "blue" | "amber";
}) {
  const colorMap = {
    emerald: "rgba(16,185,129,0.10)",
    blue:    "rgba(59,130,246,0.10)",
    amber:   "rgba(245,158,11,0.10)",
  };
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute top-1/3 ${position === "right" ? "-right-32" : "-left-32"} w-[480px] h-[480px] rounded-full blur-[100px] pointer-events-none -z-10`}
      style={{ background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)` }}
    />
  );
}
