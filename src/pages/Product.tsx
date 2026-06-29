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
} from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
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
  useScrollToTop();

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"freshdesk" | "standalone">(
    "freshdesk",
  );

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
              Less time searching. Fewer inconsistent answers. Faster
              resolutions. Customers who trust you enough to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
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
                    no IT project required.
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
                    needed. Inbound emails become tickets. Autopilot resolves what
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
                          Autopilot mode
                        </h4>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                          Zero touch resolution
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      Inbound email arrives, AI searches your knowledge base,
                      and, if confidence exceeds the threshold, sends a
                      complete, professional reply to the customer
                      automatically. No agent required.
                    </p>

                    <ol className="space-y-4">
                      {[
                        "Email arrives at HelpDude support inbox",
                        "AI embeds and vector searches knowledge base",
                        "Match above 60% confidence threshold",
                        "LLM generates reply, and SES dispatches to customer",
                        "Response, match score, and metadata logged",
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
                          Co Pilot mode
                        </h4>
                        <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wider mt-0.5">
                          Human in the loop
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      Complex tickets route to agents with three AI drafted
                      reply options ready. Agent selects, refines in one click,
                      and sends, completing a 15-minute task in under 2 minutes.
                    </p>

                    <ul className="space-y-4">
                      {[
                        {
                          letter: "A",
                          text: "Agent opens ticket, clicks HelpDude button",
                        },
                        {
                          letter: "B",
                          text: "AI surfaces top 3 drafts from full knowledge base",
                        },
                        {
                          letter: "C",
                          text: "Agent selects draft, refines tone/language/length",
                        },
                        {
                          letter: "D",
                          text: "Or: types solution, AI formats professionally",
                        },
                        {
                          letter: "E",
                          text: "Or: escalates — AI auto routes to Dev/QA POC",
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

                {/* Subtitle */}
                <div className="border-t border-slate-100 pt-12 mb-8">
                  <h4 className="text-xl font-bold text-slate-900">
                    Standalone feature set
                  </h4>
                </div>

                {/* 4 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email to ticket ingestion",
                      desc: "Inbound emails parsed via AWS SES, converted to tickets with full metadata extraction automatically.",
                    },
                    {
                      icon: Zap,
                      title: "Autopilot resolution",
                      desc: "Common tickets resolved 24/7 without agent involvement. Configurable confidence threshold.",
                    },
                    {
                      icon: BookOpen,
                      title: "Self improving knowledge base",
                      desc: "SME validated resolutions automatically promoted into the article pool, compounding AI accuracy over time.",
                    },
                    {
                      icon: BarChart,
                      title: "Analytics & reporting",
                      desc: "Autopilot success rate, knowledge gap reports, SLA tracking, and agent performance metrics.",
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
              Enterprise AI that resolves support tickets{" "}
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
        </div>
      </section>

      {/* Video Modal Removed */}
    </main>
  );
};

export default Product;
