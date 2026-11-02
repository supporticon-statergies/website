import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assetUrl } from "@/lib/baseUrl";
import heroImage from "@/assets/home-imge.png";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import {
  FadeUp,
  FadeIn,
  FloatIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion-utils";
import { ZoomIn } from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { HeroSection } from "@/components/HeroSection";
import { CXLeadersForm } from "@/components/CXLeadersForm";

const Home = () => {
  useScrollToTop();
  const [showCXForm, setShowCXForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  return (
    <>
      <SEO
        title="Supporticon, Empowering Support Teams"
        description="Support That Answers Before Customers Have to Ask Twice."
        image={heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Supporticon Strategies Private Limited",
          url:
            typeof window !== "undefined" ? window.location.origin : undefined,
          logo: supporticonUploads.image2,
        }}
      />
      <main className="relative bg-[#eaedf2]">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">

            {/* Split row: copy left, AI visual right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
              <FloatIn>
                <div className="section-label mb-6">Platform</div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-bold text-slate-900 mb-6 leading-tight">
                  One Platform — Brings your Customers from multiple channels
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-10">
                  Whether it's email, chat, Voice, WhatsApp or Instagram — HelpDude meets your customers on their terms,
                  in their language. Every conversation feels personal and has full context while hand-off to human expert.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Jira", "Confluence", "Freshdesk", "Slack", "Notion"].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/70 text-xs font-semibold text-slate-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </FloatIn>

              {/* HelpDude Unified Inbox Visual */}
              <FloatIn delay={0.05} className="mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white" style={{ height: 480 }}>
                  <iframe
                    src="/HelpDude_Unified_Inbox.html"
                    title="HelpDude Unified Inbox"
                    className="w-full"
                    style={{ height: 480, border: "none", display: "block" }}
                    scrolling="no"
                  />
                </div>
              </FloatIn>
            </div>

            {/* Friction Journey Infographic */}
            <FloatIn className="mb-20">
              <div className="text-center mb-8">
                <div className="section-label mb-4">
                  The Problem for Customers
                </div>
              </div>

              <div
                onClick={() =>
                  setSelectedImage({
                    src: "/Friction.png",
                    title: "The Problem for Customers",
                    desc: "Starts when customers face an issue → grows when support is difficult → gets worse with delayed support → breaks trust when AI guesses instead of knowing.",
                  })
                }
                className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 group cursor-zoom-in"
              >
                <img
                  src="/Friction.png"
                  alt="Customer Support Friction Journey"
                  className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                />

                {/* Quick zoom preview button */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-slate-200/80 flex items-center gap-1.5 group-hover:bg-[#93D152] group-hover:text-white transition-colors duration-200 z-10">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </div>
              </div>
            </FloatIn>

            {/* The Proof Section */}
            <div className="mb-20">
              <FloatIn>
                <div className="text-center mt-14 sm:mt-16 mb-8 sm:mb-10">
                  <div className="section-label mb-3">The Proof</div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Customer Experience decides who they stay with
                  </h3>
                </div>
              </FloatIn>

              {/* Friction Statistics Proof Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <FloatIn delay={0}>
                  <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-5xl sm:text-[54px] font-extrabold text-[#2767b0] mb-4 tracking-tight leading-none">
                      67%
                    </div>
                    <p className="text-slate-800 text-[16px] sm:text-[17px] font-medium leading-[1.5]">
                      of 18–34-year-olds stopped doing business with a brand due to a poor customer service experience.
                    </p>
                  </div>
                </FloatIn>

                <FloatIn delay={0.06}>
                  <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-5xl sm:text-[54px] font-extrabold text-[#2767b0] mb-4 tracking-tight leading-none">
                      64%
                    </div>
                    <p className="text-slate-800 text-[16px] sm:text-[17px] font-medium leading-[1.5]">
                      of consumers expect companies to interact with them without delay.
                    </p>
                  </div>
                </FloatIn>

                <FloatIn delay={0.12}>
                  <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-5xl sm:text-[54px] font-extrabold text-[#2767b0] mb-4 tracking-tight leading-none">
                      86%
                    </div>
                    <p className="text-slate-800 text-[16px] sm:text-[17px] font-medium leading-[1.5]">
                      of buyers are willing to pay more for a great customer experience.
                    </p>
                  </div>
                </FloatIn>
              </div>
            </div>

            {/* The Challenge Section */}
            <div className="mb-20">
              <FloatIn>
                <div className="text-center mt-16 sm:mt-24 mb-8 sm:mb-10">
                  <div className="section-label">The Challenge</div>
                </div>
              </FloatIn>

              {/* The Challenge for Businesses: Content Left (in a box), Image Right */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                <FloatIn delay={0} className="h-full">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col justify-center text-left h-full">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-[34px] font-bold text-slate-900 leading-tight mb-5">
                      The Reality & Challenge for Every Business
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      Statistics like these rarely justify increasing the support budget. Customer expectations keep rising, while headcount remains the same or reduces. That is the reality and challenge for every business.
                    </p>
                  </div>
                </FloatIn>

                <FloatIn delay={0.04} className="h-full">
                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: "/challenge_landing page.png",
                        title: "The Challenge for Businesses",
                        desc: "Statistics like these rarely justify increasing the support budget. Customer expectations keep rising, while headcount remains the same or reduces. That is the reality and challenge for every business.",
                      })
                    }
                    className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 group cursor-zoom-in flex items-center justify-center min-h-[300px]"
                  >
                    <img
                      src="/challenge_landing page.png"
                      alt="The Challenge for Businesses"
                      className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                    />

                    {/* Quick zoom preview button */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-slate-200/80 flex items-center gap-1.5 group-hover:bg-[#93D152] group-hover:text-white transition-colors duration-200 z-10">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Enlarge</span>
                    </div>
                  </div>
                </FloatIn>
              </div>
            </div>

            {/* HelpDude Promise Section */}
            <FloatIn className="mb-20">
              <div 
                className="rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 border border-slate-200/90 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f1f3f6 0%, #e9eef5 45%, #d5dde8 100%)",
                }}
              >
                {/* Subtle ambient light accents in background matching mockup */}
                <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 flex flex-col justify-center text-left">
                    <div className="mb-3">
                      <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0f284e] uppercase">
                        HELPDUDE
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base mt-1 font-normal leading-relaxed">
                        Let AI handle what it can. Let your experts handle what matters. No guesses.
                      </p>
                    </div>

                    <h3 className="font-normal font-sans text-2xl sm:text-3xl md:text-[30px] lg:text-[32px] text-slate-900 leading-[1.35] tracking-normal mt-3 mb-8" style={{ fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>
                      Reduce customer support costs, resolve issues faster, and deliver consistent customer experiences across channels and languages —{" "}
                      <span className="block mt-1 font-normal text-slate-800" style={{ fontWeight: 400 }}>
                        with AI that knows when to{" "}
                        <span className="relative inline-block font-semibold text-[#1e8e3e] px-1">
                          <span className="absolute inset-0 bg-emerald-400/25 blur-md rounded-full -z-10 scale-125 pointer-events-none"></span>
                          automate
                        </span>{" "}
                        and when to bring in a{" "}
                        <span className="relative inline-block font-semibold text-[#0077ff] px-1">
                          <span className="absolute inset-0 bg-sky-400/30 blur-md rounded-full -z-10 scale-125 pointer-events-none"></span>
                          human.
                        </span>
                      </span>
                    </h3>

                    <div>
                      <Link
                        to="/product"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-slate-800 text-sm font-semibold shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-slate-200/70 hover:bg-slate-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                      >
                        Discover Hybrid Support
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Floating Circular Graphic */}
                  <div className="lg:col-span-5 flex items-center justify-center lg:justify-end py-4 lg:py-0">
                    <div className="relative w-full max-w-[460px] flex items-center justify-center">
                      <motion.div
                        animate={{
                          y: [-12, 12, -12],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        onClick={() =>
                          setSelectedImage({
                            src: "/helpdude_promise_banner.jpg",
                            title: "HelpDude - Hybrid Support Promise",
                            desc: "Reduce customer support costs, resolve issues faster, and deliver consistent customer experiences across channels and languages — with AI that knows when to automate and when to bring in a human.",
                          })
                        }
                        className="relative w-full flex items-center justify-center cursor-zoom-in group select-none"
                        title="Click to view full image in high resolution"
                      >
                        <img
                          src="/helpdude_floating_circle.png"
                          alt="HelpDude Hybrid Support Promise"
                          className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(15,42,78,0.16)] group-hover:scale-[1.03] transition-transform duration-300"
                        />

                        {/* Dynamic ambient floating shadow underneath */}
                        <motion.div
                          animate={{
                            scale: [0.9, 1.08, 0.9],
                            opacity: [0.25, 0.45, 0.25],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -bottom-6 w-[70%] h-8 bg-slate-900/20 rounded-full blur-xl pointer-events-none -z-10"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatIn>

            {/* Section Header above Email Ticketing */}
            <div className="mb-20">
              <FloatIn>
                <div className="mt-16 sm:mt-24 mb-8 sm:mb-10 text-center">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight mb-4">
                    See HelpDude in Action
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Watch how HelpDude handles customer queries automatically and how it hands off to human support.
                  </p>
                </div>
              </FloatIn>

              {/* Multilingual Email Ticketing Demo - Placed Separately Below */}
              <FloatIn delay={0}>
                <div className="w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-white">
                  <iframe
                    src={assetUrl("email ticketing.html")}
                    title="Multilingual Email Ticketing Demo"
                    className="w-full h-[570px] border-none block"
                    scrolling="no"
                  />
                </div>
              </FloatIn>
            </div>

            {/* Integrations Section */}
            <div>
              <FloatIn>
                <div className="mt-16 sm:mt-24 mb-8 sm:mb-10 text-center">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight mb-4">
                    Works with Your Stack
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Connect your AI models and customer channels — all from one unified workspace.
                  </p>
                </div>
              </FloatIn>

              {/* Integrations Section Iframe */}
              <FloatIn delay={0}>
                <div className="w-full max-w-full rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-white">
                  <iframe
                    src={assetUrl("Integrations Section.html")}
                    title="HelpDude Integrations"
                    className="w-full h-[680px] border-none block"
                    scrolling="no"
                  />
                </div>
              </FloatIn>
            </div>
          </div>
        </section>

        {/* Image Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl w-[94vw] p-2 sm:p-4 bg-slate-950/95 border-slate-800 text-white rounded-2xl overflow-hidden backdrop-blur-xl">
            {selectedImage && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between px-2 pt-1 pb-1">
                  <DialogTitle className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {selectedImage.title}
                  </DialogTitle>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 max-h-[75vh] flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[75vh] object-contain select-none"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 px-2 pb-1 font-medium leading-relaxed">
                  {selectedImage.desc}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />
      </main>
    </>
  );
};

export default Home;
