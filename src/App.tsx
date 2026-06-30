import { Component, type ReactNode, type ErrorInfo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error("App crash:", error, info); }
  render() {
    if (this.state.error) {
      const err = this.state.error as Error;
      return (
        <div style={{ padding: "2rem", fontFamily: "monospace", color: "#dc2626", background: "#fff" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>App Error (check console for details)</h2>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.8rem", color: "#374151" }}>{err.message}{"\n\n"}{err.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const Features = lazy(() => import("./pages/Features"));
const Resources = lazy(() => import("./pages/Resources"));
const Events = lazy(() => import("./pages/Events"));
const EBooks = lazy(() => import("./pages/EBooks"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ResourceDetail = lazy(() => import("./pages/ResourceDetail"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Terms = lazy(() => import("./pages/Terms"));
const Legal = lazy(() => import("./pages/Legal"));
import SiteHeader from "./components/layout/SiteHeader";
const SiteFooter = lazy(() => import("./components/layout/SiteFooter"));
const FinalCTASection = lazy(() => import("./components/FinalCTASection").then(m => ({ default: m.FinalCTASection })));
import ScrollToTop from "./components/ScrollToTop";
import { WaveBackground } from "./components/WaveBackground";

import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import supporticonLogoIcon from "@/assets/supporticon_logo.png";

const queryClient = new QueryClient();

const Preloader = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  useEffect(() => {
    // Detect search engines / crawler bots to bypass preloader for SEO safety
    const isBot = typeof navigator !== 'undefined' && 
      /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent || '');
    
    if (isBot) {
      onLoadingComplete();
      return;
    }

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1200); // 1.2s total duration for a premium, fast loading transition under 2s

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center">
        {/* Brand Logo with soft scaling pulse */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-16 h-16 flex items-center justify-center"
        >
          {/* Subtle surrounding glow ring */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-xl animate-pulse" />
          <img
            src={supporticonLogoIcon}
            alt="Supporticon"
            className="w-12 h-12 object-contain relative z-10 animate-bounce"
            style={{ animationDuration: "3s" }}
          />
        </motion.div>

        {/* Brand Text */}
        <h2 className="tracking-[0.25em] text-[11px] font-black text-slate-800 mt-6 select-none leading-none pl-[0.25em]">
          SUPPORTICON
        </h2>
        
        {/* Micro-text description */}
        <span className="text-[9px] text-slate-400 font-medium tracking-wide mt-1.5 opacity-80">
          AI-Powered Helpdesk
        </span>

        {/* Premium thin linear progress indicator */}
        <div className="w-36 h-[2px] bg-slate-100 rounded-full overflow-hidden mt-6 relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <AnimatePresence>
            {isLoading && (
              <Preloader onLoadingComplete={() => setIsLoading(false)} />
            )}
          </AnimatePresence>

          <BrowserRouter
            basename={import.meta.env.BASE_URL.replace(/\/$/, "") || undefined}
          >
            <ScrollToTop />
            <div
              className={`relative min-h-screen overflow-x-hidden ${isLoading ? "h-screen overflow-hidden" : ""}`}
            >
              <WaveBackground />
              <SiteHeader />
              {/* Spacer so fixed navbar doesn't overlap page content */}
              <div className="h-[64px]" />

              <Suspense fallback={<div className="h-screen bg-transparent" />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/sources" element={<EBooks />} />
                  <Route path="/resources/:slug" element={<ResourceDetail />} />
                  <Route
                    path="/resources/case-study/:slug"
                    element={<CaseStudyDetail />}
                  />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>

              <Suspense fallback={<div className="h-48 bg-transparent" />}>
                <FinalCTASection />
                <SiteFooter />
              </Suspense>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
