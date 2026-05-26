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
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import EBooks from "./pages/EBooks";
import Privacy from "./pages/Privacy";
import ResourceDetail from "./pages/ResourceDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import { FinalCTASection } from "./components/FinalCTASection";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import { WaveBackground } from "./components/WaveBackground";

import { useState, useEffect } from "react";
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
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1800); // 1.8 second loading screen
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center"
    >
      {/* Attractive Multi-Ring Loading Animation */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-[3px] border-transparent border-t-green-600 border-r-green-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute inset-2 border-[3px] border-transparent border-b-green-400 border-l-green-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 border-[3px] border-transparent border-t-emerald-300 border-r-emerald-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
        {/* Center Logo */}
        <motion.div
          className="w-10 h-10 flex items-center justify-center absolute"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={supporticonLogoIcon}
            alt="Loading Icon"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-slate-500 font-bold tracking-[0.2em] text-xs uppercase"
      >
        Loading
      </motion.div>
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
              className={`relative min-h-screen ${isLoading ? "h-screen overflow-hidden" : ""}`}
            >
              <WaveBackground />
              <SiteHeader />
              {/* Spacer so fixed navbar doesn't overlap page content */}
              <div className="h-[64px]" />

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

              <FinalCTASection />
              <SiteFooter />
              <Chatbot />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
