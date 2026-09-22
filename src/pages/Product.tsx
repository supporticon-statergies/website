import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Wrench,
  ArrowRight,
  Sparkles,
  Cpu,
  X,
} from "lucide-react";
import { useState, lazy, Suspense, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { AmbientAccent } from "@/components/PageVisuals";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "@/components/Marquee";
import productDemoVideo from "@/assets/product_demo.mp4";
import heroImage from "@/assets/home-imge.png";

import { useAuth } from "@/context/AuthContext";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

const Product = () => {
  const { openAuthModal } = useAuth();
  const [open, setOpen] = useState(false);
  const [showHelpdudeSubs, setShowHelpdudeSubs] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    if (location.hash === "#deployment-options" || location.state?.scrollToGrid) {
      const timer = setTimeout(() => {
        const el = document.getElementById("deployment-options");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.state]);

  return (
    <main className="overflow-x-hidden pb-12 bg-transparent relative">
      <SEO
        title="HelpDude - Product Features"
        description="Explore HelpDude's Intelligent Email Drafting and SME Admin Console features."
        canonicalPath="/product"
      />

      <AmbientAccent position="right" color="emerald" />
      <AmbientAccent position="left" color="blue" />

      {open && (
        <Suspense fallback={null}>
          <RequestDemoDialog open={open} onOpenChange={setOpen} />
        </Suspense>
      )}

      {/* Technology Partner Banner */}
      <Marquee />

      {/* Hero / Video Demo Section */}
      <section className="container mx-auto px-4 py-6 md:py-20 animate-in fade-in duration-1000">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-in slide-in-from-left duration-700 delay-200 fill-mode-both">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                HelpDude
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                HelpDude is Supporticon's AI support platform built for SaaS teams scaling
                past their first 100 customers, and for manufacturing & hardware businesses
                that support physical products. It resolves conversations by voice, phone,
                email, WhatsApp, Instagram, and Facebook, automatically where it can and
                with a drafted assist for your engineer where it can't, in every language
                your customers speak.
              </p>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 md:gap-3 mb-8">
                <Button
                  size="lg"
                  variant="hero"
                  className="font-semibold px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  onClick={() => window.open('https://helpdude-ai.supporticon.com/', '_blank')}
                >
                  Start free trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  onClick={() => setOpen(true)}
                >
                  Request a demo
                </Button>
                <Button
                  size="lg"
                  variant="hero"
                  className="font-semibold px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Install on Freshdesk
                </Button>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-700 delay-300 fill-mode-both">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/50">
                <video
                  src={productDemoVideo}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  poster={heroImage}
                  controlsList="nodownload"
                >
                  <source src={productDemoVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* The Problem HelpDude is solving */}
          <div className="mt-20 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex justify-center mb-8">
              <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
                The problem
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch text-left">
              {/* Left Side: Text Box */}
              <div className="bg-slate-50/80 p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col justify-center h-full">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  The Problem HelpDude is solving:
                </h3>
                <div className="space-y-4 text-slate-600 md:text-lg leading-relaxed">
                  <p>
                    Every SaaS company loses customers quietly — not through complaints, but through silence. This "Silent Churn" is a holistic, unsolved issue in every SaaS company, irrespective of size.
                  </p>
                  <p>
                    Data shows this happens because of two reasons: it takes a lot of effort to report an issue, and a lot of time to get it resolved. So, out of 26 dissatisfied customers, only 1 complains — the rest walk out silently and never come back.
                  </p>
                  <p>
                    The customer support function, meant to be the backbone of customer experience, is broken by design. Support teams are buried under repetitive, low-value tickets, leaving no room for the real expertise that could actually retain customers.
                  </p>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="relative w-full h-full flex items-center justify-center rounded-3xl shadow-lg border border-slate-200/50 p-6 md:p-8 overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
                {/* Decorative canvas pattern */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/product_page_image1.png" 
                    alt="Silent Churn problem" 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 shadow-md rounded-2xl bg-white" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Separator Label */}
          <div className="flex justify-center mt-12 mb-8 animate-in fade-in duration-700 delay-500">
            <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
              that helpdude solves
            </span>
          </div>

          {/* How HelpDude is solving them */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch text-left">
              {/* Left Side: Image */}
              <div className="relative w-full h-full flex items-center justify-center rounded-3xl shadow-lg border border-slate-200/50 p-6 md:p-8 overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
                {/* Decorative canvas pattern */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/product_page_image2.png" 
                    alt="How HelpDude solves the problem" 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 shadow-md rounded-2xl bg-white" 
                  />
                </div>
              </div>

              {/* Right Side: Text Box */}
              <div className="bg-slate-50/80 p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col justify-center h-full">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  How HelpDude is solving them:
                </h3>
                <div className="space-y-4 text-slate-600 md:text-lg leading-relaxed">
                  <p>
                    HelpDude is an AI-powered platform built by Supporticon to provide an effortless way to get help whenever needed, from AI or a human. We free up support teams from operational drag and redirect their time and skill toward what genuinely moves the needle — proactive, high-value customer engagement.
                  </p>
                  <p>
                    The result: fewer silent exits, stronger retention, and a support function that finally earns its place as a growth driver, not a cost center.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="mt-12 w-full bg-white border-2 border-white p-6 rounded-2xl shadow-lg text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <p className="text-lg md:text-xl text-slate-800 font-semibold md:whitespace-nowrap">
              Reduce your search time. Faster Resolution. Improve customer Retention.
            </p>
          </div>
        </div>
      </section>

      {/* Product Selection Grid */}
      <section id="deployment-options" className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Choose Your Product
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              How would you like to use HelpDude?
            </h2>
            <p className="text-slate-500 mt-3 text-sm md:text-base max-w-xl mx-auto font-medium">
              💡 Click a product below to explore its features and pricing
            </p>
          </div>

          {/* Top-level 2 grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

            {/* Grid 1: HelpDude for Freshdesk */}
            <motion.button
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => navigate("/product/freshdesk")}
              className="group relative flex flex-col text-left p-8 md:p-10 rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 shadow-xl hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 cursor-pointer overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full w-full">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 transition-transform duration-300 group-hover:scale-110">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
                    Freshdesk Plugin
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight group-hover:text-emerald-800 transition-colors">
                  HelpDude for Freshdesk
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                  A Marketplace plugin that embeds directly into every Freshdesk ticket view.
                  Zero workflow disruption. Install in 15 minutes, no IT involvement needed.
                </p>
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm group-hover:gap-3 transition-all duration-200 mt-auto">
                  Explore features & pricing
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.button>

            {/* Grid 2: HelpDude — expands sub-grids INSIDE the card */}
            <motion.div
              layout
              className={`relative flex flex-col text-left rounded-3xl border shadow-xl transition-colors duration-300 overflow-hidden h-full ${
                showHelpdudeSubs
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-indigo-50"
                  : "border-blue-200/60 bg-gradient-to-br from-blue-50 to-indigo-50"
              }`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!showHelpdudeSubs ? (
                  /* Default card view */
                  <motion.button
                    key="helpdude-default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setShowHelpdudeSubs(true)}
                    className="group relative flex flex-col text-left p-8 md:p-10 w-full h-full cursor-pointer"
                  >
                    <div className="relative z-10 flex flex-col h-full w-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-bold tracking-widest text-primary uppercase">
                          Standalone Platform
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                        HelpDude
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                        The full HelpDude platform for SaaS teams for
                        manufacturing & hardware businesses.
                      </p>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-200 mt-auto">
                        Choose your version
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.button>
                ) : (
                  /* Expanded sub-grids view — inside the same card */
                  <motion.div
                    key="helpdude-expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 p-6 md:p-8 flex flex-col gap-4"
                  >
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-bold tracking-widest text-primary uppercase">
                          HelpDude
                        </span>
                        <h3 className="text-xl font-black text-slate-900 leading-tight">
                          Choose your version
                        </h3>
                      </div>
                      <button
                        onClick={() => setShowHelpdudeSubs(false)}
                        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all duration-200 shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Sub-grid 1: Standalone */}
                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/product/standalone")}
                      className="group flex items-center gap-4 text-left p-5 rounded-2xl border border-blue-200/60 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-200 cursor-pointer w-full"
                    >
                      <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200 transition-transform duration-200 group-hover:scale-110 shrink-0">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
                        
                        </span>
                        <h4 className="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                          HelpDude Standalone
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5 line-clamp-2">
                          AI ticketing platform. Autopilot resolves, Co-Pilot assists.
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    </motion.button>

                    {/* Sub-grid 2: Manufacturing */}
                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/product/manufacturing")}
                     className="group flex items-center gap-4 text-left p-5 rounded-2xl border border-red-500/30 bg-white hover:bg-red-500/5 shadow-md hover:shadow-lg hover:shadow-red-500/10 transition-all duration-200 cursor-pointer w-full"
>
  <div className="w-11 h-11 rounded-xl bg-red-500 flex items-center justify-center shadow-md shadow-red-500/20 transition-transform duration-200 group-hover:scale-110 shrink-0">
    <Cpu className="w-5 h-5 text-white" />
  </div>

  <div className="flex-1 min-w-0 text-left">
    <span className="text-xs font-bold tracking-widest text-red-500 uppercase block">
    
    </span>

    <h4 className="text-base font-black text-slate-900 group-hover:text-red-500 transition-colors leading-snug">
      Helpdude for Manufacturing & Hardware
    </h4>

    <p className="text-slate-500 text-xs leading-relaxed mt-0.5 line-clamp-2">
      Voice, calls, email, WhatsApp & auto order tracking.
    </p>
  </div>

  <ArrowRight className="w-4 h-4 text-red-500 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
</motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Text inside the styled box */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                Now live on Freshdesk Marketplace
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 leading-tight max-w-2xl">
                Intelligent AI that resolves support tickets{" "}
                <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent block md:inline">
                  before your team opens them
                </span>
              </h2>

              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                HelpDude's AI engine automatically handles common tickets on Autopilot and empowers
                agents with AI-drafted replies on Co Pilot, as a native Freshdesk plugin or a fully
                standalone platform.
              </p>
            </div>
          </div>

          {/* Image outside the box but matching exact height */}
          <div className="lg:col-span-2 relative rounded-[2.5rem] shadow-xl border border-slate-200/60 overflow-hidden">
            <img 
              src="/productpage_image.png" 
              alt="Product Dashboard" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
