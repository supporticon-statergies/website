import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Plug,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CXLeadersForm } from "@/components/CXLeadersForm";

/* ─── Background particles ─── */
const PARTICLES = [
  { id: 0,  x: "6%",  y: "18%", size: 3, dur: 5.2, delay: 0   },
  { id: 1,  x: "92%", y: "22%", size: 2, dur: 6.8, delay: 1.1 },
  { id: 2,  x: "14%", y: "72%", size: 2, dur: 4.5, delay: 0.7 },
  { id: 3,  x: "88%", y: "68%", size: 3, dur: 7.0, delay: 2.3 },
  { id: 4,  x: "50%", y: "8%",  size: 2, dur: 5.6, delay: 1.8 },
  { id: 5,  x: "50%", y: "90%", size: 2, dur: 6.2, delay: 0.4 },
  { id: 6,  x: "25%", y: "42%", size: 2, dur: 4.9, delay: 3.0 },
  { id: 7,  x: "75%", y: "48%", size: 2, dur: 7.5, delay: 1.5 },
];

export const HeroSection = () => {
  const navigate = useNavigate();
  const [showCXForm, setShowCXForm] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -22]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-4 pb-20"
    >
      {/* ── Ambient background ───────────────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/90 to-emerald-50/70" />

        {/* Top-right glow */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(209,250,229,0.65) 0%, rgba(167,243,208,0.28) 45%, transparent 70%)",
          }}
        />

        {/* Bottom-left glow */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.4, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute -bottom-24 -left-20 w-[520px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(186,230,255,0.38) 0%, rgba(147,197,253,0.14) 50%, transparent 70%)",
          }}
        />

        {/* Center subtle glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(209,250,229,0.5) 0%, transparent 65%)",
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-emerald-400/20"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [-14, 14, -14], opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* ── Centered content ─────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="opacity-0 animate-css-fade-up-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              AI Powered Helpdesk Software
            </div>
          </div>

          {/* Headline */}
          <div className="opacity-0 animate-css-fade-up-2">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Who supports
              </span>
              <span className="block">the support team?</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="opacity-0 animate-css-fade-up-3">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
              Supporticon gives your support engineers unified knowledge search,
              one-click AI email drafting, and intelligent escalation routing,
              so every ticket is resolved faster and every customer stays longer.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-css-fade-up-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <Button
                  size="lg"
                  variant="hero"
                  className="rounded-full px-9 py-6 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Start Your Free Trial
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-9 py-6 text-base font-semibold border-slate-200 bg-white/80 hover:bg-white text-slate-800 w-full sm:w-auto"
                  onClick={() => navigate("/product")}
                >
                  Watch How It Works
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Full-width trust + proof strip */}
          <div className="opacity-0 animate-css-fade-up-5 w-full">
            <div className="w-full mt-2">
              {/* Row 1 — feature badges */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                {[
                  { icon: Clock,  text: "Setup in under 15 minutes" },
                  { icon: Plug,   text: "No IT dependency"          },
                  { icon: Shield, text: "Enterprise-grade security" },
                ].map((b) => (
                  <motion.div
                    key={b.text}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/85 border border-slate-100/80 shadow-sm backdrop-blur-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <b.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-slate-700 text-sm font-semibold leading-snug text-left">
                      {b.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-5" />

              {/* Row 2 — proof metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {[
                  {
                    stat: "<30s",
                    desc: "AI knowledge search & email draft generation",
                  },
                  {
                    stat: "15 min",
                    desc: "From sign-up to your first customer insight",
                  },
                  {
                    stat: "Day 1",
                    desc: "New hire productivity with AI",
                  },
                  {
                    stat: "Zero",
                    desc: "Third-party data sharing.",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="flex flex-col items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/70 text-center"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-lg font-black text-emerald-600 leading-none">
                      {item.stat}
                    </span>
                    <span className="text-slate-700 text-xs font-semibold leading-snug">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />
    </section>
  );
};

export default HeroSection;
