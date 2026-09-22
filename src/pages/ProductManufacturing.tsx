import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Headphones,
  Wrench,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Truck,
  Check,
  Mail,
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
    icon: Headphones,
    title: "Live Voice Support on Widget",
    desc: "The moment a customer opens your support widget, AI picks up the conversation by voice — no queue, no waiting for a human agent.",
  },
  {
    icon: Phone,
    title: "Inbound Call Handling & Routing",
    desc: "Calls are answered and resolved directly when possible, or routed to the right engineer with full transcript and context.",
  },
  {
    icon: Wrench,
    title: "Email Ticketing with Auto-Resolution",
    desc: "Common issues are triaged and resolved automatically; everything else gets a drafted reply ready for an agent to review.",
  },
  {
    icon: MessageCircle,
    title: "Unified Omnichannel Inbox",
    desc: "Every conversation — WhatsApp, Instagram, Facebook, Email, Voice — lands in one unified inbox for your team.",
  },
  {
    icon: Sparkles,
    title: "Multi-Language Support",
    desc: "Customers get help in their own language on voice, email, or chat with real-time AI translation across all channels.",
  },
  {
    icon: Truck,
    title: "Automatic Order & Shipment Tracking",
    desc: "From dispatch to delivery, HelpDude tracks every order automatically — sending real-time updates by email & WhatsApp.",
  },
];

const ProductManufacturing = ({ initialTab }: ProductPageProps) => {
  const location = useLocation();
  const isPricingPath = location.pathname.endsWith("/pricing") || initialTab === "pricing";
  const [activeTab, setActiveTab] = useState<"features" | "pricing">(isPricingPath ? "pricing" : "features");

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToTop();

  // Pricing gate form
  const [pricingUnlocked, setPricingUnlocked] = useState(false);
  const [pricingForm, setPricingForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [pricingSubmitting, setPricingSubmitting] = useState(false);
  const [pricingSubmitted, setPricingSubmitted] = useState(false);

  const handlePricingFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPricingSubmitting(true);
    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || "";
      if (apiKey) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: apiKey,
            subject: "Pricing Inquiry - Hardware & Manufacturing",
            to: "jaimanisa@supporticon.com",
            name: pricingForm.name,
            email: pricingForm.email,
            phone: pricingForm.phone,
            company: pricingForm.company,
            message: `${pricingForm.name} from ${pricingForm.company} is requesting to view Hardware & Manufacturing pricing.\nPhone: ${pricingForm.phone}\nEmail: ${pricingForm.email}`,
          }),
        });
      } else {
        // Fallback mailto
        const body = encodeURIComponent(`Name: ${pricingForm.name}\nEmail: ${pricingForm.email}\nPhone: ${pricingForm.phone}\nCompany: ${pricingForm.company}\n\nRequesting Hardware & Manufacturing pricing.`);
        window.open(`mailto:jaimanisa@supporticon.com?subject=Pricing Inquiry - Hardware %26 Manufacturing&body=${body}`);
      }
      setPricingSubmitted(true);
      setTimeout(() => setPricingUnlocked(true), 1200);
    } catch {
      setPricingUnlocked(true);
    } finally {
      setPricingSubmitting(false);
    }
  };

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
      navigate("/product/manufacturing/pricing", { replace: true });
    } else {
      navigate("/product/manufacturing", { replace: true });
    }
  };

  return (
    <main className="overflow-x-hidden pb-16 bg-transparent min-h-screen relative">
      <SEO
        title={activeTab === "pricing" ? "HelpDude Manufacturing & Hardware – Pricing" : "HelpDude Manufacturing & Hardware – Features"}
        description="AI support built for manufacturing and hardware businesses. Voice, calls, email, WhatsApp and automatic order tracking."
        canonicalPath={activeTab === "pricing" ? "/product/manufacturing/pricing" : "/product/manufacturing"}
      />

      <AmbientAccent position="right" color="emerald" />
      <AmbientAccent position="left" color="blue" />

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
            <button className="inline-flex items-center justify-center gap-1.5 px-4 h-9 rounded-xl border border-slate-200 bg-white hover:bg-red-50 hover:border-red-200 hover:text-red-700 text-slate-600 transition-all duration-200 group shrink-0 shadow-sm text-sm font-medium">
              All Products
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-red-600 transition-transform duration-200" />
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
                ? "bg-red-500 text-white shadow-md shadow-red-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => switchTab("pricing")}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              activeTab === "pricing"
                ? "bg-red-500 text-white shadow-md shadow-red-200"
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
            key="mfg-features-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <section className="container mx-auto px-4 pt-6 md:pt-8 pb-12 md:pb-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto text-center"
              >
                {/* Animated Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-50 text-red-700 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  VOICE & ORDER TRACKING AI PLATFORM
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]"
                >
                  AI-Powered Voice & Order Tracking <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
                    for Hardware & Manufacturing
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium"
                >
                  Resolve support tickets by voice, phone calls, email, WhatsApp, and social media.
                  Automate shipment tracking and warranty inquiries effortlessly.
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
                      className="font-bold text-base md:text-lg px-8 py-7 rounded-xl shadow-xl shadow-red-500/30 transition-all duration-300 inline-flex items-center gap-3 uppercase tracking-wider group"
                      onClick={() => setOpen(true)}
                    >
                      REQUEST HARDWARE DEMO
                      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </section>

            {/* Features Cards Grid */}
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-100/60 px-3 py-1 rounded-full">
                    HARDWARE & MANUFACTURING FEATURES
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mt-4">
                    Built for physical product operations
                  </h2>
                </div>

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
                        className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-6 text-red-600 shrink-0"
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-red-600 transition-colors duration-200">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          /* DEDICATED PRICING PAGE */
          <motion.div
            key="mfg-pricing-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <section className="container mx-auto px-4 pt-12 md:pt-16 pb-12 md:pb-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center md:text-left"
                >
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    <Mail className="w-3.5 h-3.5" />
                    Simple · Transparent · Flexible
                  </div>
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
                    Pay only for&nbsp;
                    <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
                      what you use
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                    No seats. No tiers. No surprises. Every ticket costs the same,
                    giving your team the freedom to scale support without the billing
                    headaches.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="flex justify-center md:justify-end"
                >
                  <div className="w-full max-w-[380px] aspect-square flex items-center justify-center">
                    <Suspense fallback={<div className="w-full h-full bg-red-50/50 rounded-2xl animate-pulse" />}>
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

              {/* Billing Toggle (Monthly / Yearly) */}
              <div className="flex items-center justify-center gap-4 mb-16">
                <div className="inline-flex items-center p-1.5 rounded-full bg-slate-200/80 border border-slate-300/60 shadow-inner">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                      billingCycle === "monthly"
                        ? "bg-white text-slate-900 shadow-md"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                      billingCycle === "yearly"
                        ? "bg-red-400 text-red-950 shadow-md shadow-red-400/30"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>

              {/* Pricing Cards — blurred until contact form is submitted */}
              <div className="relative">

                {/* Blurred pricing cards */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto text-left"
                  style={!pricingUnlocked ? { filter: "blur(6px)", pointerEvents: "none", userSelect: "none" } : {}}
                >
                {/* Starter Tier */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <span className="text-xs font-black tracking-widest text-slate-400 uppercase">STARTER</span>
                    <div className="flex items-baseline gap-1 mt-2 mb-2">
                      <span className="text-5xl font-black text-slate-900">₹19</span>
                      <span className="text-slate-500 font-medium text-sm">/ ticket</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Up to 500 tickets/month</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-600 font-medium">
                    {["AI Co-Pilot drafted replies", "Unified knowledge search", "Email ticketing & translation"].map((feat, i) => (
                      <motion.li key={i} className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07 }}
                      >
                        <Check className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-6 tracking-wider uppercase shadow-md shadow-red-500/20 group"
                      onClick={() => window.open('https://helpdude-ai.supporticon.com/', '_blank')}
                    >
                      GET STARTED
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Basic Tier */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <span className="text-xs font-black tracking-widest text-slate-400 uppercase">BASIC</span>
                    <div className="flex items-baseline gap-1 mt-2 mb-2">
                      <span className="text-5xl font-black text-slate-900">₹18</span>
                      <span className="text-slate-500 font-medium text-sm">/ ticket</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Up to 1,000 tickets/month</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-600 font-medium">
                    {["AI Co-Pilot drafted replies", "Unified knowledge search", "Basic inbound call routing"].map((feat, i) => (
                      <motion.li key={i} className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.12 + i * 0.07 }}
                      >
                        <Check className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-6 tracking-wider uppercase shadow-md shadow-red-500/20 group"
                      onClick={() => window.open('https://helpdude-ai.supporticon.com/', '_blank')}
                    >
                      GET STARTED
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Standard / Pro Tier (MOST POPULAR) */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className="relative flex flex-col bg-red-50/30 p-8 md:p-10 rounded-3xl border-2 border-red-400 shadow-2xl scale-[1.03] transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-400 text-red-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md"
                  >
                    MOST POPULAR
                  </motion.div>

                  <div className="mb-6">
                    <span className="text-xs font-black tracking-widest text-red-700 uppercase">PRO STANDARD</span>
                    <div className="flex items-baseline gap-1 mt-2 mb-2">
                      <motion.span
                        key={billingCycle}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-5xl font-black text-slate-900"
                      >
                        {billingCycle === "yearly" ? "₹15" : "₹17"}
                      </motion.span>
                      <span className="text-slate-500 font-medium text-sm">
                        / ticket {billingCycle === "yearly" ? "billed annually" : ""}
                      </span>
                    </div>
                    <p className="text-xs text-red-800 font-semibold">Up to 2,000 tickets/month</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700 font-medium">
                    {["Autopilot + Co-Pilot modes", "Inbound call routing & voice support", "Automatic order & shipment tracking", "Multi-language translation support"].map((feat, i) => (
                      <motion.li key={i} className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.07 }}
                      >
                        <Check className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="hero"
                      className="w-full font-bold rounded-xl py-6 tracking-wider uppercase shadow-lg shadow-red-500/30 group"
                      onClick={() => window.open('https://helpdude-ai.supporticon.com/', '_blank')}
                    >
                      GET STARTED
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Enterprise Tier */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <span className="text-xs font-black tracking-widest text-slate-400 uppercase">ENTERPRISE</span>
                    <div className="flex items-baseline gap-1 mt-2 mb-2">
                      <span className="text-4xl font-black text-slate-900">Custom</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Unlimited tickets & calls</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-600 font-medium">
                    {["Unlimited ticket volume", "Custom Knowledge Integrations", "Dedicated Account Manager & SLA"].map((feat, i) => (
                      <motion.li key={i} className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }}
                      >
                        <Check className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-6 tracking-wider uppercase group"
                      onClick={() => setOpen(true)}
                    >
                      CONTACT SALES
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>
                </div>

                {/* Contact form overlay - shown when pricing is locked */}
                {!pricingUnlocked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-8 w-full max-w-md"
                    >
                      {pricingSubmitted ? (
                        <div className="text-center py-4">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you!</h3>
                          <p className="text-slate-500 text-sm">Our sales team will reach out shortly. Unlocking pricing now...</p>
                        </div>
                      ) : (
                        <>
                          <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                              Pricing Available on Request
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Want to see our pricing?</h3>
                            <p className="text-slate-500 text-sm">Share your details and our sales team will personalise the best plan for you.</p>
                          </div>

                          <form onSubmit={handlePricingFormSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Jane Doe"
                                  value={pricingForm.name}
                                  onChange={(e) => setPricingForm(f => ({ ...f, name: e.target.value }))}
                                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Company *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Acme Corp"
                                  value={pricingForm.company}
                                  onChange={(e) => setPricingForm(f => ({ ...f, company: e.target.value }))}
                                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-slate-600 mb-1">Work Email *</label>
                              <input
                                type="email"
                                required
                                placeholder="jane@company.com"
                                value={pricingForm.email}
                                onChange={(e) => setPricingForm(f => ({ ...f, email: e.target.value }))}
                                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number *</label>
                              <input
                                type="tel"
                                required
                                placeholder="+91 98765 43210"
                                value={pricingForm.phone}
                                onChange={(e) => setPricingForm(f => ({ ...f, phone: e.target.value }))}
                                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                              />
                            </div>
                            <motion.button
                              type="submit"
                              disabled={pricingSubmitting}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.97 }}
                              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-500/30 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                              {pricingSubmitting ? (
                                <>
                                  <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full block"
                                  />
                                  Sending...
                                </>
                              ) : (
                                <span>Contact Sales &amp; View Pricing</span>
                              )}
                            </motion.button>
                            <p className="text-center text-[10px] text-slate-400 mt-1">
                              We will get back to you within 24 hours. No spam, ever.
                            </p>
                          </form>
                        </>
                      )}
                    </motion.div>
                  </div>
                )}
              </div>


              <div className="max-w-[1400px] mx-auto text-left mb-16 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                <h4 className="text-3xl font-display font-black text-slate-900 mb-8 text-center">Compare features</h4>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 font-bold text-slate-900 bg-white sticky left-0 z-10 w-1/3 border-b-2 border-slate-200"></th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 border-b-2 border-slate-200">Starter</th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 border-b-2 border-slate-200">Basic</th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 text-red-600 border-b-2 border-slate-200">Pro Standard</th>
                      <th className="py-4 px-6 font-bold text-center text-slate-900 w-1/6 border-b-2 border-slate-200">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Core Features */}
                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-bold text-[#de2723] bg-white text-base">Core Ticket & Channel Handling</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Email ticketing & translation</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Basic inbound call routing</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Automatic order tracking</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>

                    {/* Category: AI Features */}
                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-bold text-[#de2723] bg-white text-base border-t border-slate-200 mt-4">AI Features</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">AI Co-Pilot drafted replies</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Unified knowledge search</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">AI Autopilot mode</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>

                    {/* Category: Advanced Features */}
                    <tr>
                      <td colSpan={5} className="py-4 px-6 font-bold text-[#de2723] bg-white text-base border-t border-slate-200 mt-4">Advanced & Enterprise</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Custom Knowledge Integrations</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-slate-50/50 sticky left-0 z-10 font-medium">Dedicated Account Manager</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-700 bg-white sticky left-0 z-10 font-medium">Custom SLA</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center text-slate-300">—</td>
                      <td className="py-3 px-6 text-center"><Check className="w-5 h-5 mx-auto text-slate-900" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductManufacturing;
