import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BarChart,
  Globe,
  Mail,
  Shield,
  Bot,
  Inbox,
  Check,
  MessageSquare,
  Headphones,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, lazy, Suspense, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { AmbientAccent } from "@/components/PageVisuals";
import { motion, AnimatePresence } from "framer-motion";
import walletAnimation from "@/assets/wallet-animation.lottie";
import PricingGate from "@/components/PricingGate";
import { useAuth } from "@/context/AuthContext";

const LazyDotLottiePlayer = lazy(() =>
  import("@dotlottie/react-player").then((module) => ({
    default: module.DotLottiePlayer,
  }))
);

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

interface ProductPageProps {
  initialTab?: "features" | "pricing";
}

const featuresList = [
  {
    icon: Users,
    title: "Live Agent Support",
    desc: "One click. A full conversation. In your customer's preferred language. The moment a customer clicks the HelpDude AI agent from inside your product, they're in a live voice conversation — no forms, no typing, no waiting. Every question is answered end-to-end, professionally and warmly, in the language your customer is most comfortable speaking.",
  },
  {
    icon: Headphones,
    title: "Inbound Voice Calls",
    desc: "Your support line, answered like a human. Every call to your support number is picked up instantly. HelpDude resolves it directly from your Knowledge Base. Exceptions are forwarded to a support engineer with the full conversation context already attached — zero repetition for the customer.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Messaging",
    desc: "The same intelligence, everywhere your customers already are. WhatsApp, Instagram, Facebook, and every messaging channel your customers use run on the same Autopilot and Co-Pilot logic as email — inside one unified inbox instead of five scattered ones.",
  },
  {
    icon: Zap,
    title: "Autopilot Mode",
    desc: "Tickets resolved before your team even sees them. HelpDude reads every incoming ticket, searches your Knowledge Base, and replies automatically the moment it's confident in the answer. No agent action required.",
  },
  {
    icon: Users,
    title: "Co-Pilot Mode",
    desc: "For tickets, when Autopilot isn't confident, HelpDude drafts the contextual complete reply. Your agent refines it if needed, and sends it in seconds — instead of writing a response from scratch.",
  },
  {
    icon: Mail,
    title: "Email-to-Ticket Conversion",
    desc: "Every conversation becomes a fully-logged ticket, automatically. Incoming support emails are converted into tickets with full context, priority level, and conversation history attached — no manual entry, no lost thread.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    desc: "One engine, every language, real-time. HelpDude automatically detects and replies in your customer's language across every channel — Live Agent, voice, email, and messaging — with real-time translation built in. No separate setup per language, no manual translation step.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    desc: "Your support performance, in one live dashboard. Track resolution rates, Autopilot accuracy, and agent performance in real time, from a single dashboard — no exporting data across five tools to build a report.",
  },
  {
    icon: Shield,
    title: "Role-Based Permissions",
    desc: "Centralized control over who can access what. Manage knowledge-source access, escalation paths, and agent permissions from one place — so sensitive data and critical workflows stay locked down as your team scales.",
  },
];
const ProductStandalone = ({ initialTab }: ProductPageProps) => {
  const { openAuthModal } = useAuth();
  const location = useLocation();
  const isPricingPath = location.pathname.endsWith("/pricing") || initialTab === "pricing";
  const [activeTab, setActiveTab] = useState<"features" | "pricing">(isPricingPath ? "pricing" : "features");

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [activeChannel, setActiveChannel] = useState<"mail" | "mail-web" | "mail-web-voice">("mail");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToTop();

  useEffect(() => {
    if (location.pathname.endsWith("/pricing")) {
      setActiveTab("pricing");
    } else {
      setActiveTab("features");
    }
  }, [location.pathname]);

  const switchTab = (tab: "features" | "pricing") => {
    setActiveTab(tab);
    if (tab === "pricing") {
      navigate("/product/standalone/pricing", { replace: true });
    } else {
      navigate("/product/standalone", { replace: true });
    }
  };

  return (
    <main className="overflow-x-hidden pb-16 bg-transparent min-h-screen relative">
      <SEO
        title={activeTab === "pricing" ? "HelpDude Standalone – Pricing" : "HelpDude Standalone – Features"}
        description="A complete standalone AI ticketing platform. No Freshdesk needed. Autopilot resolves tickets automatically."
        canonicalPath={activeTab === "pricing" ? "/product/standalone/pricing" : "/product/standalone"}
      />

      <AmbientAccent position="right" color="blue" />
      <AmbientAccent position="left" color="emerald" />

      {open && (
        <Suspense fallback={null}>
          <RequestDemoDialog open={open} onOpenChange={setOpen} />
        </Suspense>
      )}

      {/* ── Top Product Navigation ── */}
      <div className="container mx-auto px-4 md:px-8 pt-6 pb-2 flex items-center gap-3">

        {/* All Products Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="inline-flex items-center justify-center gap-1.5 px-4 h-9 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-slate-600 transition-all duration-200 group shrink-0 shadow-sm text-sm font-medium">
              All Products
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-transform duration-200" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 p-2 rounded-xl">
            <DropdownMenuItem onClick={() => navigate("/product/freshdesk")} className="cursor-pointer rounded-lg px-3 py-2 font-medium text-slate-700">
              Freshdesk Integration
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/product/standalone")} className="cursor-pointer rounded-lg px-3 py-2 font-medium text-slate-700">
              Standalone Software
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/product/manufacturing")} className="cursor-pointer rounded-lg px-3 py-2 font-medium text-slate-700">
              Manufacturing & Hardware
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Features / Pricing pill buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => switchTab("features")}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              activeTab === "features"
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => switchTab("pricing")}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              activeTab === "pricing"
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Pricing
          </button>
        </div>
      </div>

      {/* ── Page Content Switch ── */}

      <AnimatePresence mode="wait">
        {activeTab === "features" ? (
          /* FEATURES PAGE */
          <motion.div
            key="standalone-features-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <section className="container mx-auto px-4 pt-6 md:pt-8 pb-12 md:pb-20">
              <div className="max-w-5xl mx-auto text-center">
                {/* Animated Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  STANDALONE AI TICKETING PLATFORM
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]"
                >
                  Standalone AI Ticketing Platform <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    for SaaS Support Teams
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium"
                >
                No Freshdesk or third-party helpdesk/ticketing tool is required.
                Customers will get their doubts clarified with HelpDude’s AI Voice agent,
                which sits on the bottom right of your product screen. If not solved,
                the Voice agent raises a ticket with the full context, Autopilot resolves automatically if it’s confident,
                else Co-Pilot assists your team.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mb-4 inline-block"
                >
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <Button
                      size="lg"
                      variant="hero"
                      className="font-bold text-base md:text-lg px-8 py-7 rounded-xl shadow-xl shadow-primary/30 transition-all duration-300 inline-flex items-center gap-3 uppercase tracking-wider group"
                      onClick={() =>
                        window.open(
                          "https://helpdude-ai.supporticon.com/",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      ACCESS HELPDUDE
                      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Features Cards Grid */}
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100/60 px-3 py-1 rounded-full">
                    PLATFORM FEATURES
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mt-4">
                    Everything built in Zero extras required
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {featuresList.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                      whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
                      className="flex flex-col bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-lg transition-shadow duration-300 group cursor-default"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 shrink-0"
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors duration-200">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          /* DEDICATED PRICING PAGE */
          <PricingGate>
          <motion.div
            key="standalone-pricing-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <section className="container mx-auto px-4 pt-6 md:pt-8 pb-12 md:pb-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center md:text-left"
                >
                  <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    <Mail className="w-3.5 h-3.5" />
                    Simple · Transparent · Flexible
                  </div>
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
                    Pay only for what&nbsp;
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      you use
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                    No hidden fees. No complicated tiers. Every channel is priced transparently,
                    giving your team the freedom to scale support without the billing headaches.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="flex justify-center md:justify-end"
                >
                  <div className="w-full max-w-[400px] aspect-square flex items-center justify-center">
                    <Suspense fallback={<div className="w-full h-full bg-blue-50/50 rounded-2xl animate-pulse" />}>
                      <LazyDotLottiePlayer
                        src={walletAnimation}
                        autoplay
                        loop
                        className="w-full h-full"
                      />
                    </Suspense>
                  </div>
                </motion.div>
              </div>

              {/* Channel Tabs */}
              <div className="flex items-center justify-center gap-2 mb-16">
                <div className="inline-flex items-center p-1 rounded-lg bg-slate-100 border border-slate-200">
                  <button
                    onClick={() => setActiveChannel("mail")}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                      activeChannel === "mail"
                        ? "bg-[#0b5cba] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Mail only
                  </button>
                  <button
                    onClick={() => setActiveChannel("mail-web")}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                      activeChannel === "mail-web"
                        ? "bg-[#0b5cba] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Mail + Web
                  </button>
                  <button
                    onClick={() => setActiveChannel("mail-web-voice")}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                      activeChannel === "mail-web-voice"
                        ? "bg-[#0b5cba] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Mail + Web + Voice
                  </button>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-[1400px] mx-auto text-left mb-16">
                
                {/* Starter */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
                >
                  <div className={`h-full flex flex-col bg-white rounded-2xl border-2 border-[#1265b7] overflow-hidden transition-all duration-300 ${activeChannel === 'mail' ? 'shadow-2xl scale-105 -translate-y-4 relative z-10' : 'shadow-sm hover:shadow-md opacity-70 hover:opacity-100'}`}>
                    <div className="bg-transparent text-slate-900 p-6 min-h-[140px]">
                      <div className="w-8 h-8 flex items-center justify-center rounded bg-[#1265b7]/10 mb-3">
                        <Mail className="w-4 h-4 text-[#1265b7]" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">Starter</h3>
                      <p className="text-slate-700 text-xs">For small teams getting email support off the ground.</p>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-6">
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-bold text-slate-900">$15</span>
                          <span className="text-sm font-medium text-slate-700 mb-1">/agent/mo</span>
                        </div>
                        <div className="text-xs text-slate-600 mt-1">≈ ₹1425 /agent/mo</div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border border-slate-200 rounded-lg p-3 mb-6 bg-slate-50">
                        <div>
                          <div className="text-sm font-bold text-slate-900">2</div>
                          <div className="text-[10px] text-slate-700 uppercase">Agents</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">500</div>
                          <div className="text-[10px] text-slate-700 uppercase">Tickets/mo</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">—</div>
                          <div className="text-[10px] text-slate-700 uppercase">Voice</div>
                        </div>
                      </div>

                      <ul className="space-y-3 flex-1 text-sm text-slate-800 mb-6">
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#1265b7] mt-0.5 shrink-0" /> Email ticketing — inbound & outbound (SES)</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#1265b7] mt-0.5 shrink-0" /> Up to 2 agent seats</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#1265b7] mt-0.5 shrink-0" /> 500 tickets/mo included</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#1265b7] mt-0.5 shrink-0" /> AI replies grounded in your knowledge base</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#1265b7] mt-0.5 shrink-0" /> Article-based KB, unlimited articles</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#1265b7] mt-0.5 shrink-0" /> Email support</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Basic */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  <div className={`h-full flex flex-col bg-white rounded-2xl border-2 border-[#619c3b] overflow-hidden transition-all duration-300 ${activeChannel === 'mail-web' ? 'shadow-2xl scale-105 -translate-y-4 relative z-10' : 'shadow-sm hover:shadow-md opacity-70 hover:opacity-100'}`}>
                    <div className="bg-transparent text-slate-900 p-6 min-h-[140px]">
                      <div className="w-8 h-8 flex items-center justify-center rounded bg-[#619c3b]/10 mb-3">
                        <MessageSquare className="w-4 h-4 text-[#619c3b]" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">Basic</h3>
                      <p className="text-slate-700 text-xs">For growing teams running email and live chat together.</p>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-6">
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-bold text-slate-900">$29</span>
                          <span className="text-sm font-medium text-slate-700 mb-1">/agent/mo</span>
                        </div>
                        <div className="text-xs text-slate-600 mt-1">≈ ₹2755 /agent/mo</div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border border-slate-200 rounded-lg p-3 mb-6 bg-slate-50">
                        <div>
                          <div className="text-sm font-bold text-slate-900">5</div>
                          <div className="text-[10px] text-slate-700 uppercase">Agents</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">2,000</div>
                          <div className="text-[10px] text-slate-700 uppercase">Tickets/mo</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">200 min</div>
                          <div className="text-[10px] text-slate-700 uppercase">Voice</div>
                        </div>
                      </div>

                      <ul className="space-y-3 flex-1 text-sm text-slate-800 mb-6">
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#619c3b] mt-0.5 shrink-0" /> Everything in Starter, plus:</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#619c3b] mt-0.5 shrink-0" /> 5 agent seats, 2,000 tickets/mo</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#619c3b] mt-0.5 shrink-0" /> OCR on emailed attachments (Textract)</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#619c3b] mt-0.5 shrink-0" /> Priority email support</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Pro */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                >
                  <div className={`h-full flex flex-col bg-white rounded-2xl border-2 border-[#de2723] overflow-hidden transition-all duration-300 ${activeChannel === 'mail-web-voice' ? 'shadow-2xl scale-105 -translate-y-4 relative z-10' : 'shadow-sm hover:shadow-md opacity-70 hover:opacity-100'}`}>
                    <div className="bg-transparent text-slate-900 p-6 min-h-[140px] relative">
                      <div className="absolute top-4 right-4 bg-[#de2723] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        Recommended
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center rounded bg-[#de2723]/10 mb-3">
                        <Headphones className="w-4 h-4 text-[#de2723]" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">Pro</h3>
                      <p className="text-slate-700 text-xs pr-16">For teams with CRM-scale volume across every channel.</p>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-6">
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-bold text-slate-900">$49</span>
                          <span className="text-sm font-medium text-slate-700 mb-1">/agent/mo</span>
                        </div>
                        <div className="text-xs text-slate-600 mt-1">≈ ₹4655 /agent/mo</div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border border-slate-200 rounded-lg p-3 mb-6 bg-slate-50">
                        <div>
                          <div className="text-sm font-bold text-slate-900">20</div>
                          <div className="text-[10px] text-slate-700 uppercase">Agents</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">10,000</div>
                          <div className="text-[10px] text-slate-700 uppercase">Tickets/mo</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">750 min</div>
                          <div className="text-[10px] text-slate-700 uppercase">Voice</div>
                        </div>
                      </div>

                      <ul className="space-y-3 flex-1 text-sm text-slate-800 mb-6">
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#de2723] mt-0.5 shrink-0" /> Everything in Basic, plus:</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#de2723] mt-0.5 shrink-0" /> 20 agent seats, 10,000 tickets/mo</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#de2723] mt-0.5 shrink-0" /> Multi-language replies (Translate + Comprehend)</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#de2723] mt-0.5 shrink-0" /> Custom domain + SSL for your help center</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#de2723] mt-0.5 shrink-0" /> Priority chat support</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Enterprise */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="h-full flex flex-col bg-white rounded-2xl border-2 border-[#b38e12] shadow-sm hover:shadow-md opacity-70 hover:opacity-100 overflow-hidden transition-all duration-300">
                    <div className="bg-transparent text-slate-900 p-6 min-h-[140px]">
                      <div className="w-8 h-8 flex items-center justify-center rounded bg-[#b38e12]/10 mb-3">
                        <Briefcase className="w-4 h-4 text-[#b38e12]" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                      <p className="text-slate-700 text-xs">For organizations building support systems at scale.</p>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-6">
                        <div className="flex items-end gap-1">
                          <span className="text-sm font-medium text-slate-700 mb-2">Custom, from</span>
                          <span className="text-4xl font-bold text-slate-900">$89</span>
                          <span className="text-sm font-medium text-slate-700 mb-1">/agent/mo</span>
                        </div>
                        <div className="text-xs text-slate-600 mt-1">≈ ₹8455 /agent/mo</div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border border-slate-200 rounded-lg p-3 mb-6 bg-slate-50">
                        <div>
                          <div className="text-sm font-bold text-slate-900">50+</div>
                          <div className="text-[10px] text-slate-700 uppercase">Agents</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">30,000+</div>
                          <div className="text-[10px] text-slate-700 uppercase">Tickets/mo</div>
                        </div>
                        <div className="border-l border-slate-200 pl-2">
                          <div className="text-sm font-bold text-slate-900">6,000+ min</div>
                          <div className="text-[10px] text-slate-700 uppercase">Voice</div>
                        </div>
                      </div>

                      <ul className="space-y-3 flex-1 text-sm text-slate-800 mb-6">
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#b38e12] mt-0.5 shrink-0" /> Everything in Pro, plus:</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#b38e12] mt-0.5 shrink-0" /> 50+ agent seats, custom ticket volume</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#b38e12] mt-0.5 shrink-0" /> SSO & role-based access control (RBAC)</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#b38e12] mt-0.5 shrink-0" /> Dedicated onboarding & support</li>
                        <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-[#b38e12] mt-0.5 shrink-0" /> Custom SLAs</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Overage Section */}
              <div className="max-w-[1400px] mx-auto text-left mb-16">
                <h4 className="text-sm font-bold text-slate-900 mb-4">Overage, all plans</h4>
                <div className="flex flex-col gap-2">
                  <div className="border border-slate-200 rounded-lg p-4 bg-white flex justify-between items-center text-sm">
                    <span className="text-slate-600">Extra ticket beyond plan limit</span>
                    <span className="font-bold text-slate-900">~$0.02 <span className="text-slate-400 font-normal">(₹1.90)</span> each</span>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4 bg-white flex justify-between items-center text-sm">
                    <span className="text-slate-600">Extra web session beyond limit</span>
                    <span className="font-bold text-slate-900">~$0.02 <span className="text-slate-400 font-normal">(₹1.90)</span> each</span>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4 bg-white flex justify-between items-center text-sm">
                    <span className="text-slate-600">Extra voice minute beyond bundle</span>
                    <span className="font-bold text-slate-900">~$0.08-0.12 <span className="text-slate-400 font-normal">/min</span></span>
                  </div>
                </div>
                
                <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">
                  Figures sourced from HelpDude's internal Infrastructure Cost & SaaS Pricing documentation (Aug 11, 2026), Section 5, benchmarked against Freshdesk / Zoho Desk / Zendesk-style helpdesk pricing. USD→INR shown at ≈₹95. Actual AWS + AI cost per agent/month runs ~$2-15 at these volumes, so even the Starter tier carries 90%+ gross margin. Enterprise volumes and voice pools are custom — figures shown are "from" pricing.
                </p>
              </div>

              {/* Feature Comparison Table */}
              <div className="max-w-[1400px] mx-auto text-left mb-16 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                <h4 className="text-3xl font-display font-black text-slate-900 mb-8 text-center">Compare features</h4>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 font-bold text-slate-900 bg-white sticky left-0 z-10 w-1/3 border-b-2 border-slate-200"></th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 border-b-2 border-slate-200">Starter</th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 border-b-2 border-slate-200">Basic</th>
                      <th className="py-4 px-6 font-bold text-center text-[#de2723] w-1/6 border-b-2 border-slate-200">Pro</th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 border-b-2 border-slate-200">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Core Ticketing */}
                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-bold text-[#de2723] bg-white text-base">Core Ticketing & Channels</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Email ticketing</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Live chat widget</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Inbound call handling</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">WhatsApp integration</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>

                    {/* Category: AI & Automation */}
                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-bold text-[#de2723] bg-white text-base border-t border-slate-200 mt-4">AI & Automation</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">AI Co-Pilot (drafts)</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">AI Autopilot (auto-reply)</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Multi-language translation</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </motion.div>
          </PricingGate>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductStandalone;
