import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Search,
  Sparkles,
  Sliders,
  Route,
  Lock,
  FileText,
  Bot,
  Inbox,
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
import PricingGate from "@/components/PricingGate";

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
    icon: Search,
    title: "Unified Knowledge Search",
    desc: "AI searches KB articles, internal docs, and past resolutions simultaneously across all sources in under 30 seconds.",
  },
  {
    icon: Sparkles,
    title: "One-Click AI Drafting",
    desc: "Three complete, context-grounded email replies generated per ticket. Agent selects, optionally refines, then sends.",
  },
  {
    icon: Sliders,
    title: "Response Customisation",
    desc: "Adjust tone, language, length, and regional context in one click. LLM regenerates the reply in real time.",
  },
  {
    icon: Route,
    title: "Intelligent POC Routing",
    desc: "AI identifies the correct Dev or QA escalation contact automatically from ticket context, with no manual org-chart lookup.",
  },
  {
    icon: Lock,
    title: "SME Admin Console",
    desc: "Central control for knowledge sources, escalation ownership, and role-based permissions across all agents.",
  },
  {
    icon: FileText,
    title: "Analytics Dashboard",
    desc: "Resolution rates, Autopilot accuracy, knowledge gap reports, and agent performance, all in one view.",
  },
];

const pricingFeatures = [
  "Autopilot + Co-Pilot modes",
  "Freshdesk Marketplace plugin",
  "Unified knowledge search",
  "SME Admin console",
];

const ProductFreshdesk = ({ initialTab }: ProductPageProps) => {
  const location = useLocation();
  const isPricingPath = location.pathname.endsWith("/pricing") || initialTab === "pricing";
  const [activeTab, setActiveTab] = useState<"features" | "pricing">(isPricingPath ? "pricing" : "features");
  
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
      navigate("/product/freshdesk/pricing", { replace: true });
    } else {
      navigate("/product/freshdesk", { replace: true });
    }
  };

  return (
    <main className="overflow-x-hidden pb-16 bg-transparent min-h-screen relative">
      <SEO
        title={activeTab === "pricing" ? "HelpDude for Freshdesk – Pricing" : "HelpDude for Freshdesk – Features"}
        description="Embed HelpDude's AI directly into Freshdesk. Zero workflow disruption. Install in 15 minutes."
        canonicalPath={activeTab === "pricing" ? "/product/freshdesk/pricing" : "/product/freshdesk"}
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
            <button className="inline-flex items-center justify-center gap-1.5 px-4 h-9 rounded-xl border border-slate-200 bg-white hover:bg-green-50 hover:border-green-200 hover:text-green-700 text-slate-600 transition-all duration-200 group shrink-0 shadow-sm text-sm font-medium">
              All Products
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-primary transition-transform duration-200" />
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
                ? "bg-primary text-white shadow-md shadow-primary/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => switchTab("pricing")}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              activeTab === "pricing"
                ? "bg-primary text-white shadow-md shadow-primary/30"
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
            key="features-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
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
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-green-50 text-primary text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  FRESHWORKS MARKETPLACE PLUGIN
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]"
                >
                  AI-Powered Support Intelligence <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                    for Every Freshdesk Ticket
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium"
                >
                  Native Freshworks Marketplace plugin that resolves tickets by AI Autopilot
                  or drafts replies for your support team — directly inside ticket view!
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
                          "https://www.freshworks.com/apps/helpdude_1/",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      INSTALL ON FRESHDESK
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
                  <span className="text-xs font-bold tracking-widest text-primary uppercase bg-green-100/60 px-3 py-1 rounded-full">
                    PRODUCT FEATURES
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mt-4">
                    Built natively for Freshdesk teams
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
                        className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-6 text-primary shrink-0"
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors duration-200">{item.title}</h3>
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
            key="pricing-page"
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
                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    <Mail className="w-3.5 h-3.5" />
                    Simple · Transparent · Flexible
                  </div>
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
                    One plan, everything&nbsp;
                    <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                      you need
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                    No tiers. No surprises. One straightforward price
                    gives your team the freedom to scale support without the
                    billing headaches.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="flex justify-center md:justify-end"
                >
                  <div className="w-full max-w-[380px] aspect-square flex items-center justify-center">
                    <Suspense fallback={<div className="w-full h-full bg-green-50/50 rounded-2xl animate-pulse" />}>
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

              {/* Single Pricing Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="max-w-md mx-auto"
              >
                <div className="relative flex flex-col bg-green-50/30 p-8 md:p-10 rounded-3xl border-2 border-primary shadow-2xl hover:shadow-green-900/20 transition-shadow duration-500">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    BASIC
                  </div>

                  <div className="mb-6 text-center">
                    <div className="flex items-baseline justify-center gap-1 mt-4 mb-2">
                      <span className="text-5xl font-black text-slate-900">$36</span>
                      <span className="text-slate-500 font-medium text-sm">/ month</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700 font-medium">
                    {pricingFeatures.map((feature, idx) => (
                      <motion.li key={idx} className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.1 + idx * 0.07 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="hero"
                      className="w-full font-bold rounded-xl py-6 tracking-wider uppercase shadow-lg shadow-primary/30 group"
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
                  </motion.div>
                </div>
              </motion.div>
            </section>
          </motion.div>
          </PricingGate>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductFreshdesk;
