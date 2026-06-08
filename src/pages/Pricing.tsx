import { SEO } from "@/components/SEO";
import {
  Mail,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  HeadphonesIcon,
  RefreshCw,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import walletAnimation from "@/assets/wallet-animation.lottie";
import { AmbientAccent } from "@/components/PageVisuals";
import { lazy, Suspense } from "react";

const LazyDotLottiePlayer = lazy(() =>
  import("@dotlottie/react-player").then((module) => ({
    default: module.DotLottiePlayer,
  }))
);

const features = [
  { icon: Zap, text: "Instant ticket creation & assignment" },
  { icon: Shield, text: "Priority based routing & SLA tracking" },
  { icon: HeadphonesIcon, text: "Omnichannel support (email, chat, web)" },
  { icon: RefreshCw, text: "Auto escalation & resolution workflows" },
  { icon: CheckCircle2, text: "Real time analytics & reporting" },
  { icon: Star, text: "Dedicated account support" },
];

const faqs = [
  {
    q: "What counts as one ticket?",
    a: "A ticket is any support request created by a customer or agent, regardless of channel (email, chat, portal). Each unique case is billed as one ticket.",
  },
  {
    q: "Do unused tickets roll over?",
    a: "Yes. Any unused tickets in your current cycle roll over to the next month, so you never lose what you've paid for.",
  },
  {
    q: "Is there a minimum purchase?",
    a: "No minimum. Start with as few tickets as you need. Scale up anytime, additional packs are available at the same rate.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank transfers, and invoicing for enterprise customers.",
  },
];

const Pricing = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-transparent relative">
      <SEO
        title="Pricing, SupportIcon"
        description="Simple, transparent pricing. Pay only for what you use, 1 ticket = ₹10. No hidden fees."
        canonicalPath="/pricing"
      />

      {/* Subtle ambient accent only — no heavy hero graphic */}
      <AmbientAccent position="right" color="emerald" />

      {/* ── Hero ── */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <Mail className="w-3.5 h-3.5" />
              Simple · Transparent · Flexible
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
              Pay only for what&nbsp;
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #065f46 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                you use
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
              No seats. No tiers. No surprises. Every ticket costs the same,
              giving your team the freedom to scale support without the billing
              headaches.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] aspect-square flex items-center justify-center">
              <Suspense fallback={<div className="w-full h-full bg-green-50/50 rounded-2xl animate-pulse" />}>
                <LazyDotLottiePlayer
                  src={walletAnimation}
                  autoplay
                  loop
                  className="w-full h-full"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Pricing Card ── */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-900/10"
            style={{
              background:
                "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
              border: "1.5px solid rgba(22,163,74,0.2)",
            }}
          >
            {/* Top band */}
            <div
              className="px-10 pt-10 pb-8 flex flex-col md:flex-row items-center md:items-start gap-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(22,163,74,0.12) 0%, rgba(16,185,129,0.08) 100%)",
                borderBottom: "1px solid rgba(22,163,74,0.15)",
              }}
            >
              {/* Price display */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-2">
                  Pay Per Ticket
                </p>
                <div className="flex items-end gap-2 justify-center md:justify-start">
                  <span className="text-7xl font-black text-slate-900 leading-none">
                    ₹10
                  </span>
                  <div className="mb-2 text-left">
                    <span className="block text-slate-500 text-base font-medium">
                      per
                    </span>
                    <span className="block text-slate-700 text-xl font-bold leading-tight">
                      ticket
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-slate-500 text-sm max-w-xs mx-auto md:mx-0">
                  One flat rate. Every channel. No matter the volume.
                </p>
              </div>

              {/* Mail visual */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center">
                <div
                  className="relative w-52 h-36 flex flex-col items-center justify-center rounded-2xl shadow-xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #16a34a 0%, #065f46 100%)",
                  }}
                >
                  {/* Envelope body */}
                  <div className="absolute inset-4 rounded-xl border-2 border-white/25 bg-white/10" />

                  {/* Envelope flap (SVG triangle) */}
                  <svg
                    viewBox="0 0 208 60"
                    className="absolute top-4 left-4 right-4 w-[calc(100%-2rem)]"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                    }}
                  >
                    <polygon
                      points="0,0 104,52 208,0"
                      fill="rgba(255,255,255,0.18)"
                    />
                    <polyline
                      points="0,0 104,52 208,0"
                      fill="none"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Mail icon + price */}
                  <div className="relative flex flex-col items-center justify-center gap-1 mt-4">
                    <Mail className="w-7 h-7 text-white/80" />
                    <p className="text-white text-2xl font-black leading-none">
                      ₹10
                    </p>
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest">
                      per ticket
                    </p>
                  </div>
                </div>
                <p className="text-xs text-green-700 font-semibold mt-3 tracking-wide">
                  = one resolved customer case
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="px-10 py-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                Everything included in every ticket
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {features.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3.5 border border-green-100/60 hover:border-green-300/60 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <Icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium leading-snug pt-1">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA strip */}
            <div
              className="px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ borderTop: "1px solid rgba(22,163,74,0.15)" }}
            >
              <p className="text-sm text-slate-500 text-center sm:text-left">
                Need a custom volume deal?{" "}
                <Link
                  to="/contact"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Talk to sales →
                </Link>
              </p>
              <Link
                to="https://zbooking.in/PoPU8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 transition-all duration-200 text-sm"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-4 pb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
          How billing works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "A ticket is opened",
              desc: "Customer submits a request via any channel, email, chat, or the support portal.",
            },
            {
              step: "02",
              title: "₹10 is charged",
              desc: "One flat charge per unique ticket, regardless of resolution time or complexity.",
            },
            {
              step: "03",
              title: "Case is closed",
              desc: "Your team resolves the issue. Reports and SLA data are logged automatically.",
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-white/80 backdrop-blur-xl border border-green-100/60 rounded-[1.5rem] p-6 shadow-lg shadow-green-900/5 hover:shadow-green-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              <p
                className="text-5xl font-black mb-4"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #065f46)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step}
              </p>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 pb-28 max-w-2xl mx-auto">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white/80 backdrop-blur-xl border border-green-100/60 rounded-2xl shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-slate-800 text-sm hover:text-green-700 transition-colors">
                {q}
                <span className="ml-4 flex-shrink-0 text-green-500 group-open:rotate-45 transition-transform duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 3v12M3 9h12"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-green-50 pt-3">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
