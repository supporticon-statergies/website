import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  FileText,
  Sparkles,
  Sliders,
  Route,
  Lock,
  ChevronDown,
  Search,
  Mail,
  BookOpen,
  BarChart,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ImageWithLoader from "@/components/ImageWithLoader";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));
import productDemoVideo from "@/assets/product_demo.mp4";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import postImage from "@/assets/post_image.png";
import heroImage from "@/assets/home-imge.png";
import videoThumbnail from "@/assets/thmb.png";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import ImageZoom from "@/components/ui/image-zoom";
import Marquee from "@/components/Marquee";
import { ProductEcosystemVisual, AmbientAccent } from "@/components/PageVisuals";
import { motion } from "framer-motion";

const Product = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  useScrollToTop();

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"freshdesk" | "standalone">(
    "freshdesk",
  );
  const [showOptionDialog, setShowOptionDialog] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle URL tab parameter and scroll to section
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "freshdesk" || tabParam === "standalone") {
      setActiveTab(tabParam);
      
      const element = document.getElementById("deployment-options");
      if (element) {
        const scrollTimeout = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(scrollTimeout);
      }
    }
  }, [searchParams, location.key]);

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

      {/* Technology Partner Banner — Product page only */}
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
                HelpDude is Supporticon's flagship customer support software,
                purpose-built for SaaS support teams. It gives your engineers
                unified knowledge search, AI generated email responses, and
                automatic escalation routing, so every customer interaction is
                handled with the speed, accuracy, and care that drives retention
                and renewal.
              </p>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 md:gap-3 mb-8">
                <Button
                  size="lg"
                  variant="hero"
                  className="font-semibold px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
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
                      "noopener,noreferrer",
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

          {/* New One line sentence spanning the entire width */}
          <div className="mt-12 w-full bg-white border-2 border-white p-6 rounded-2xl shadow-lg text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <p className="text-lg md:text-xl text-slate-800 font-semibold md:whitespace-nowrap">
              Reduce your search time. Faster Resolution. Improve customer Retention.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section id="deployment-options" className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Two Deployment Options
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              Choose how HelpDude fits your stack
            </h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-100/80 backdrop-blur-md rounded-2xl border border-slate-200/50 relative w-full max-w-xl shadow-inner">
              <button
                onClick={() => setActiveTab("freshdesk")}
                className={`flex-1 py-3 px-4 md:px-6 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 relative z-10 ${
                  activeTab === "freshdesk"
                    ? "text-white font-bold scale-102"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                HelpDude for Freshdesk
                {activeTab === "freshdesk" && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("standalone")}
                className={`flex-1 py-3 px-4 md:px-6 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 relative z-10 ${
                  activeTab === "standalone"
                    ? "text-white font-bold scale-102"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                HelpDude Platform
                {activeTab === "standalone" && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>

          <div className="mt-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {activeTab === "freshdesk" ? (
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl animate-in fade-in duration-300">
                {/* Paragraph */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
                  <p className="text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
                    A Marketplace plugin that embeds directly into every Freshdesk
                    ticket view. Zero workflow disruption. Install in 15 minutes,
                    no IT involvment needed.
                  </p>
                  <Button
                    size="lg"
                    className="font-semibold px-6 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 shadow-md"
                    onClick={() =>
                      window.open(
                        "https://www.freshworks.com/apps/helpdude_1/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    Install on Freshdesk
                  </Button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      icon: Search,
                      title: "Unified knowledge search",
                      desc: "AI searches KB articles, internal docs, and past resolutions simultaneously across all sources in under 30 seconds.",
                    },
                    {
                      icon: Sparkles,
                      title: "One click AI drafting",
                      desc: "Three complete, context-grounded email replies generated per ticket. Agent selects, optionally refines, then sends.",
                    },
                    {
                      icon: Sliders,
                      title: "Response customisation",
                      desc: "Adjust tone, language, length, and regional context in one click. LLM regenerates the reply in real time.",
                    },
                    {
                      icon: Route,
                      title: "Intelligent POC routing",
                      desc: "AI identifies the correct Dev or QA escalation contact automatically from ticket context, with no manual org-chart lookup.",
                    },
                    {
                      icon: Lock,
                      title: "SME admin console",
                      desc: "Central control for knowledge sources, escalation ownership, and role based permissions across all agents.",
                    },
                    {
                      icon: FileText,
                      title: "Analytics dashboard",
                      desc: "Resolution rates, Autopilot accuracy, knowledge gap reports, and agent performance, all in one view.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 text-emerald-600 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Freshdesk CTA Button at the bottom */}
                <div className="mt-12 text-center border-t border-slate-100 pt-8 flex flex-col items-center">
                  <p className="text-slate-600 mb-4 font-medium">
                    Ready to embed HelpDude's intelligence directly into your Freshdesk ticket views?
                  </p>
                  <Button
                    size="lg"
                    className="font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                    onClick={() =>
                      window.open(
                        "https://www.freshworks.com/apps/helpdude_1/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    Install HelpDude on Freshdesk
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl animate-in fade-in duration-300">
                {/* Paragraph */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
                  <p className="text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
                    A complete, standalone email ticketing platform. No Freshdesk
                    needed. Support Tickets become tickets. Autopilot resolves what
                    it can. Co Pilot handles everything else.
                  </p>
                  <Button
                    size="lg"
                    className="font-semibold px-6 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 shadow-md"
                    onClick={() =>
                      window.open(
                        "https://helpdude-ai.supporticon.com/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    Go to HelpDude
                  </Button>
                </div>

                {/* 2 Column Autopilot / Co Pilot Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  {/* Left Column: Autopilot */}
                  <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xl transition-all duration-300">
                    <div className="bg-primary/10/50 p-4 rounded-2xl flex items-center gap-4 mb-6 border border-primary/20">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                          Autopilot Mode
                        </h4>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                          AI handles customer tickets automatically
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      When a customer creates a ticket, HelpDude reads the question, finds the best answer from your company's information, and replies automatically if it's confident about the answer. Your team doesn't have to do anything.
                    </p>

                    <ol className="space-y-4">
                      {[
                        "Customer creates a support ticket.",
                        "HelpDude looks through your company's guides, FAQs, and documents.",
                        "If it finds the correct answer with high confidence.",
                        "It creates a professional reply and sends it to the customer automatically.",
                        "The entire ticket and response are saved for future reference.",
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded bg-primary/15 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <p className="text-slate-700 font-medium">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Right Column: Co Pilot */}
                  <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xl transition-all duration-300">
                    <div className="bg-emerald-50/50 p-4 rounded-2xl flex items-center gap-4 mb-6 border border-emerald-100/50">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                          Co-Pilot Mode
                        </h4>
                        <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wider mt-0.5">
                          AI helps your support team resolve tickets faster
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      When a customer's ticket needs a human, HelpDude prepares the reply for your support team. The agent only needs to review it, make small changes if needed, and send it.
                    </p>

                    <ul className="space-y-4">
                      {[
                        {
                          letter: "A",
                          text: "A support team member opens the customer's ticket.",
                        },
                        {
                          letter: "B",
                          text: "HelpDude suggests the three best reply options.",
                        },
                        {
                          letter: "C",
                          text: "The agent chooses one and edits it if needed.",
                        },
                        {
                          letter: "D",
                          text: "Or the agent types a simple answer, and HelpDude turns it into a clear, professional response.",
                        },
                        {
                          letter: "E",
                          text: "If the issue needs another team (like Developers or QA), HelpDude sends it to the right person automatically.",
                        },
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {step.letter}
                          </div>
                          <p className="text-slate-700 font-medium">
                            {step.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>


                {/* Standalone CTA Button at the bottom */}
                <div className="mt-12 text-center border-t border-slate-100 pt-8 flex flex-col items-center">
                  <p className="text-slate-600 mb-4 font-medium">
                    Ready to streamline your support with our standalone ticketing platform?
                  </p>
                  <Button
                    size="lg"
                    className="font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                    onClick={() =>
                      window.open(
                        "https://helpdude-ai.supporticon.com/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    Get Started with HelpDude
                  </Button>
                </div>
              </div>
            )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0"></span>
              Now live on Freshdesk Marketplace
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-900 leading-tight mt-6 max-w-4xl">
              Intelligent AI that resolves support tickets{" "}
              <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent block md:inline">
                before your team opens them
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl font-normal">
              HelpDude's AI engine automatically handles common tickets on
              Autopilot and empowers agents with AI-drafted replies on Co Pilot,
              as a native Freshdesk plugin or a fully standalone platform.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Button
                size="lg"
                variant="hero"
                className="font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowOptionDialog(true)}
              >
                Install HelpDude
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Removed */}
      <Dialog open={showOptionDialog} onOpenChange={setShowOptionDialog}>
        <DialogContent className="sm:max-w-xl p-8 rounded-3xl border border-slate-100/50 bg-white/95 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-left">
          <DialogHeader className="text-center sm:text-center pb-4 border-b border-slate-100">
            <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight">
              Get Started with HelpDude
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-2">
              Choose the deployment model that best fits your support team's workflow.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {/* Option 1: HelpDude for Freshdesk */}
            <button
              onClick={() => {
                setShowOptionDialog(false);
                window.open(
                  "https://www.freshworks.com/apps/helpdude_1/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 text-left hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  HelpDude for Freshdesk
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  Marketplace plugin that embeds directly in Freshdesk ticket views. Zero workflow disruption.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:underline">
                Explore Freshdesk Integration
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>

            {/* Option 2: HelpDude Standalone */}
            <button
              onClick={() => {
                setShowOptionDialog(false);
                window.open(
                  "https://helpdude-ai.supporticon.com/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-left hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  HelpDude Standalone
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  A standalone AI ticketing platform. Inbound emails automatically converted, logged, and resolved.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                Explore Standalone Platform
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Product;
