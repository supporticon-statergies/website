import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Check,
  CheckCircle2,
  Mail,
  MessageSquare,
  Headphones,
  Briefcase,
  Zap,
  Package,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  BarChart3,
  Bot,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { useState, lazy, Suspense, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { AmbientAccent } from "@/components/PageVisuals";
import { motion, AnimatePresence } from "framer-motion";
import walletAnimation from "@/assets/wallet-animation.lottie";

const LazyDotLottiePlayer = lazy(() =>
  import("@dotlottie/react-player").then((module) => ({
    default: module.DotLottiePlayer,
  }))
);

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

const pricingFaqs = [
  {
    q: "What are HelpDude's pricing plans?",
    a: "HelpDude offers two simple plans: the €40/month plan (1 team member, 300 conversations/mo, Web/Email/Portal, 20 min Web Voice) and the €200/month plan (3 team members, 2,000 conversations/mo, WhatsApp, Web Voice 120 min, AI Summary & Agent Assist). For Enterprise Custom Plans, we can discuss and customize based on your specific requirements.",
  },
  {
    q: "What if I exceed my conversation or voice limits?",
    a: "Additional conversations are priced at €20/1,000 messages on the €40 plan, and €15/1,000 messages on the €200 plan. Additional Voice AI is €0.08/min on the €40 plan and €0.06/min on the €200 plan.",
  },
  {
    q: "Can I add more team members?",
    a: "Yes! On the €200/month plan, you can easily add extra team members for just €30/month per seat. For enterprise-scale teams, custom seat allocations are available.",
  },
  {
    q: "How does the Enterprise Custom Plan work?",
    a: "For Enterprise Custom Plans, we discuss directly based on your client and organizational requirements — including tailored message volume, dedicated telephony, custom AI training, on-premise options, and custom SLAs. Get in touch with our team to discuss.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! All HelpDude plans come with a 14-day free trial so you can experience full AI automation, ticketing, and omni-channel support risk-free.",
  },
  {
    q: "Can I switch or cancel my plan anytime?",
    a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time with no lock-in contracts or cancellation penalties.",
  },
];

const freshdeskFeatures = [
  "Autopilot + Co-Pilot modes",
  "Freshdesk Marketplace plugin",
  "Unified knowledge search",
  "Zero workflow disruption — install in 15 mins",
  "Email & ticket response automation",
  "Unlimited resolved tickets",
];

export default function Pricing() {
  useScrollToTop();
  const navigate = useNavigate();
  const location = useLocation();

  // Selected product tab: 'standalone' | 'plugin'
  const searchParams = new URLSearchParams(location.search);
  const initialProduct = searchParams.get("tab") || "standalone";
  const [activeProduct, setActiveProduct] = useState<"standalone" | "plugin">(
    initialProduct === "plugin" || initialProduct === "freshdesk" ? "plugin" : "standalone"
  );

  // Demo dialog state
  const [openDemo, setOpenDemo] = useState(false);

  // FAQ open items
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const tab = new URLSearchParams(location.search).get("tab");
    if (tab === "plugin" || tab === "freshdesk") {
      setActiveProduct("plugin");
    } else if (tab === "standalone") {
      setActiveProduct("standalone");
    }
  }, [location.search]);

  const switchProduct = (prod: "standalone" | "plugin") => {
    setActiveProduct(prod);
    navigate(`/pricing?tab=${prod}`, { replace: true });
  };

  return (
    <main className="overflow-x-hidden pb-16 bg-transparent min-h-screen relative">
      <SEO
        title="HelpDude Pricing – Simple, Transparent Plans for Every Team"
        description="Explore HelpDude's €40 and €200 plans, and Enterprise Custom Plans designed to scale customer support effortlessly."
        canonicalPath="/pricing"
      />

      <AmbientAccent position="right" color="emerald" />
      <AmbientAccent position="left" color="blue" />

      {openDemo && (
        <Suspense fallback={null}>
          <RequestDemoDialog open={openDemo} onOpenChange={setOpenDemo} />
        </Suspense>
      )}

      {/* Hero Header */}
      <section className="container mx-auto px-4 pt-8 md:pt-12 pb-6 md:pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Simple · Transparent · Flexible
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
              Pay only for what&nbsp;
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                you use
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              No hidden fees. Transparent, straightforward pricing with everything your team needs to scale automated support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-[480px] lg:max-w-[520px] aspect-square flex items-center justify-center">
              <Suspense fallback={<div className="w-full h-full bg-emerald-50/50 rounded-2xl animate-pulse" />}>
                <LazyDotLottiePlayer
                  src={walletAnimation}
                  autoplay
                  loop
                  className="w-full h-full scale-115 origin-center"
                />
              </Suspense>
            </div>
          </motion.div>
        </div>

        {/* Product Selector Tabs */}
        <div className="max-w-xl mx-auto mt-10 mb-12">
          <div className="text-center mb-4">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Select Product
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-inner">
            <button
              onClick={() => switchProduct("standalone")}
              className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeProduct === "standalone"
                  ? "bg-white text-blue-700 shadow-md shadow-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>HelpDude Standalone</span>
            </button>

            <button
              onClick={() => switchProduct("plugin")}
              className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeProduct === "plugin"
                  ? "bg-white text-emerald-700 shadow-md shadow-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>HelpDude in Freshdesk</span>
            </button>
          </div>
        </div>
      </section>

      {/* TAB 1: HelpDude Platform (Standalone) — 2 Main Plans + Enterprise Custom */}
      {activeProduct === "standalone" && (
        <motion.div
          key="tab-standalone"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4"
        >
          {/* Standalone Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              HelpDude Standalone
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Complete autonomous AI support across Web, Email, WhatsApp, and Voice.
            </p>
          </div>

          {/* 2 Main Pricing Cards + Enterprise Custom Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto text-left mb-16">
            
            {/* PLAN 1: €40 / month */}
            <div className="h-full flex flex-col bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <Mail className="w-3.5 h-3.5" />
                  Starter Plan
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Standard</h3>
                <p className="text-slate-600 text-sm">Perfect for early-stage teams wanting essential AI automation across web and email.</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">€40</span>
                  <span className="text-slate-500 font-medium text-sm">/ month</span>
                </div>
              </div>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-2 gap-2 border border-slate-200 rounded-xl p-3 mb-6 bg-slate-50 text-center">
                <div className="border-r border-slate-200 pr-2">
                  <div className="text-base font-bold text-slate-900">1 Member</div>
                  <div className="text-[11px] text-slate-500">Included</div>
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900">300 Convs</div>
                  <div className="text-[11px] text-slate-500">~12K messages/mo</div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 flex-1 text-sm text-slate-700 mb-8">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Channels:</strong> Web, Email, Dedicated Customer Portal</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>AI Agent</strong> for Web, Email, and Portal</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>AI Email Automation</strong></span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Web Voice:</strong> 20 minutes included</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Chat History:</strong> 1-year history</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Prebuilt analytics dashboards</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Email Support</span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="w-4 h-4 shrink-0 flex items-center justify-center font-bold text-slate-400">•</span>
                  <span>Extra convs: €20 / 1,000 messages · Voice AI: €0.08/min</span>
                </li>
              </ul>

              <Button
                onClick={() => window.open('https://helpdude-ai.supporticon.com/', '_blank')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-3 text-sm"
              >
                Start 14-day free trial
              </Button>
            </div>

            {/* PLAN 2: €200 / month (RECOMMENDED) */}
            <div className="h-full flex flex-col bg-white rounded-3xl border-2 border-emerald-500 p-8 shadow-2xl relative transition-all duration-300 scale-[1.02]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                RECOMMENDED / POPULAR
              </div>

              <div className="mb-6 mt-1">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  Growth & Omni-Channel
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Pro Business</h3>
                <p className="text-slate-600 text-sm">For scaling teams needing WhatsApp, Web Voice, and omni-channel AI automation.</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">€200</span>
                  <span className="text-slate-500 font-medium text-sm">/ month</span>
                </div>
              </div>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-2 gap-2 border border-emerald-200 rounded-xl p-3 mb-6 bg-emerald-50/40 text-center">
                <div className="border-r border-emerald-200 pr-2">
                  <div className="text-base font-bold text-slate-900">3 Members</div>
                  <div className="text-[11px] text-slate-500">Extra for €30/mo</div>
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900">2,000 Convs</div>
                  <div className="text-[11px] text-slate-500">~80K messages/mo</div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 flex-1 text-sm text-slate-700 mb-8">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Channels:</strong> Web, Email, Dedicated Customer Portal, <strong>WhatsApp</strong>, <strong>Web Voice</strong> (For SaaS)</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>AI Agent Automation</strong> in all above channels</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>AI Summary, Agent Assist</strong></span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Web Voice:</strong> 120 minutes included</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Chat History:</strong> 2-year history</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Prebuilt analytics dashboards</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Priority Support</strong></span>
                </li>
                <li className="flex gap-2.5 items-start text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="w-4 h-4 shrink-0 flex items-center justify-center font-bold text-slate-400">•</span>
                  <span>Extra convs: €15 / 1,000 · Voice AI: €0.06/min</span>
                </li>
              </ul>

              <Button
                onClick={() => window.open('https://helpdude-ai.supporticon.com/', '_blank')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl py-3 text-sm shadow-lg shadow-emerald-200"
              >
                Start 14-day free trial
              </Button>
            </div>

            {/* ENTERPRISE CUSTOM PLAN */}
            <div className="h-full flex flex-col bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  Custom Requirements
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-600 text-sm">Tailored solutions for enterprises needing high volume, custom workflows, or compliance.</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">Custom</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="border border-slate-200 rounded-xl p-3.5 mb-6 bg-slate-50 text-slate-600 text-xs leading-relaxed">
                <p className="font-semibold text-slate-900 mb-1">We discuss based on your requirements:</p>
                For Enterprise Custom Plans, we consult directly with your team and tailor the system to your exact client and support needs.
              </div>

              {/* Features List */}
              <ul className="space-y-3 flex-1 text-sm text-slate-700 mb-8">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Unlimited & Custom</strong> team members</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Custom conversation volume</strong> & pooled limits</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Dedicated voice pools & telephony integration</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Custom AI fine-tuning & knowledge models</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>SSO, RBAC & custom security policies</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Dedicated Onboarding & Account Manager</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Custom SLAs & 99.9% uptime guarantee</span>
                </li>
              </ul>

              <Button
                onClick={() => setOpenDemo(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-3 text-sm"
              >
                Discuss custom plan
              </Button>
            </div>

          </div>

          {/* Transparent Overage Summary Banner */}
          <div className="max-w-6xl mx-auto mb-16 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Additional Usage & Overage Rates
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-xs text-slate-500 uppercase font-semibold">Extra Conversations</span>
                <div className="mt-1 font-bold text-slate-900">
                  €40 plan: <span className="text-blue-600">€20 / 1,000 msgs</span>
                </div>
                <div className="mt-0.5 font-bold text-slate-900">
                  €200 plan: <span className="text-emerald-600">€15 / 1,000 msgs</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-xs text-slate-500 uppercase font-semibold">Additional Voice AI</span>
                <div className="mt-1 font-bold text-slate-900">
                  €40 plan: <span className="text-blue-600">€0.08 / min</span>
                </div>
                <div className="mt-0.5 font-bold text-slate-900">
                  €200 plan: <span className="text-emerald-600">€0.06 / min</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-xs text-slate-500 uppercase font-semibold">Extra Team Members</span>
                <div className="mt-1 font-bold text-slate-900">
                  €200 plan: <span className="text-emerald-600">€30 / member / mo</span>
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  Enterprise: Custom seat packages
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-6xl mx-auto text-left mb-16 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 md:p-10">
            <h4 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">
              Plan Comparison Breakdown
            </h4>
            <table className="w-full text-sm text-left">
              <thead>
                <tr>
                  <th className="py-4 px-6 font-bold text-slate-900 bg-white sticky left-0 z-10 w-2/5 border-b-2 border-slate-200">
                    Feature
                  </th>
                  <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/5 border-b-2 border-slate-200">
                    Standard (€40)
                  </th>
                  <th className="py-4 px-6 font-bold text-center text-emerald-700 w-1/5 border-b-2 border-slate-200 bg-emerald-50/50 rounded-t-xl">
                    Pro Business (€200)
                  </th>
                  <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/5 border-b-2 border-slate-200">
                    Enterprise Custom
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Team & Capacity */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-bold text-blue-700 bg-slate-50 text-xs uppercase tracking-wider">
                    Team Members & Volume
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Included Team Members</td>
                  <td className="py-3 px-6 text-center font-semibold text-slate-800">1 member</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">3 members (+€30/mo extra)</td>
                  <td className="py-3 px-6 text-center font-semibold text-slate-800">Custom</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Monthly Conversations</td>
                  <td className="py-3 px-6 text-center font-semibold text-slate-800">300 (~12K msgs)</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">2,000 (~80K msgs)</td>
                  <td className="py-3 px-6 text-center font-semibold text-slate-800">Custom volume</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Additional Conversations</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">€20 / 1,000 msgs</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">€15 / 1,000 msgs</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">Volume discount</td>
                </tr>

                {/* Channels */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-bold text-blue-700 bg-slate-50 text-xs uppercase tracking-wider border-t border-slate-200">
                    Supported Channels
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Web Chat & Email</td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center bg-emerald-50/30"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Dedicated Customer Portal</td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center bg-emerald-50/30"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">WhatsApp Support</td>
                  <td className="py-3 px-6 text-center text-slate-300">—</td>
                  <td className="py-3 px-6 text-center bg-emerald-50/30"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Web Voice (For SaaS)</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">20 min included</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">120 min included</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">Custom minutes</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Extra Voice AI Rate</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">€0.08 / min</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">€0.06 / min</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">Volume rate</td>
                </tr>

                {/* AI Automation */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-bold text-blue-700 bg-slate-50 text-xs uppercase tracking-wider border-t border-slate-200">
                    AI & Automation
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">AI Agent Automation</td>
                  <td className="py-3 px-6 text-center text-xs font-semibold text-slate-700">Web, Email, Portal</td>
                  <td className="py-3 px-6 text-center text-xs font-bold text-emerald-700 bg-emerald-50/30">All Channels (incl. WhatsApp & Voice)</td>
                  <td className="py-3 px-6 text-center text-xs font-semibold text-slate-700">Custom Enterprise AI</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">AI Email Automation</td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center bg-emerald-50/30"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">AI Summary & Agent Assist</td>
                  <td className="py-3 px-6 text-center text-slate-300">—</td>
                  <td className="py-3 px-6 text-center bg-emerald-50/30"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                </tr>

                {/* History & Support */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-bold text-blue-700 bg-slate-50 text-xs uppercase tracking-wider border-t border-slate-200">
                    History, Analytics & Support
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Chat History Retention</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">1 year</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">2 years</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">Unlimited / Custom</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Prebuilt Analytics Dashboards</td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center bg-emerald-50/30"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                  <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Support Level</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">Email Support</td>
                  <td className="py-3 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">Priority Support</td>
                  <td className="py-3 px-6 text-center font-medium text-slate-700">Dedicated Manager & SLAs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* TAB 2: Plug-in (HelpDude for Freshdesk) */}
      {activeProduct === "plugin" && (
        <motion.div
          key="tab-plugin"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4"
        >
          {/* Plugin Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              HelpDude in Freshdesk
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Add AI Co-Pilot intelligence directly into your existing Freshdesk workflow.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-16">
            <div className="relative flex flex-col bg-gradient-to-br from-emerald-50/60 to-teal-50/40 p-8 md:p-12 rounded-3xl border-2 border-emerald-500 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                FRESHDESK APP
              </div>

              <div className="mb-6 text-center mt-2">
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Marketplace Plugin</span>
                <div className="flex items-baseline justify-center gap-1 mt-2 mb-2">
                  <span className="text-5xl font-black text-slate-900">$36</span>
                  <span className="text-slate-500 font-medium text-sm">/ month</span>
                </div>
                <p className="text-xs text-slate-500">Install in 15 minutes · Zero workflow change</p>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1 text-sm text-slate-700 font-medium">
                {freshdeskFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl py-6 tracking-wider uppercase shadow-lg shadow-emerald-200 group"
                onClick={() =>
                  window.open(
                    "https://www.freshworks.com/apps/helpdude_1/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                INSTALL ON FRESHDESK
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Frequently Asked Questions */}
      <section className="container mx-auto px-4 pt-10 pb-16 max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
            Have Questions?
          </span>
          <h3 className="font-display text-3xl font-bold text-slate-900 mt-2">
            Pricing Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Everything you need to know about HelpDude billing and plans.
          </p>
        </div>

        <div className="space-y-3">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl bg-white/90 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span className="text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
