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
  componentDidCatch(error: Error, info: ErrorInfo) { 
    if (error.message.includes("Failed to fetch dynamically imported module")) {
      const reloaded = sessionStorage.getItem("chunk_reloaded");
      if (!reloaded) {
        sessionStorage.setItem("chunk_reloaded", "true");
        window.location.reload();
        return;
      }
    }
    console.error("App crash:", error, info); 
  }
  render() {
    if (this.state.error) {
      const err = this.state.error as Error;
      return (
        <div style={{ padding: "2rem", fontFamily: "monospace", color: "#dc2626", background: "#fff" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>App Error (check console for details)</h2>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.8rem", color: "#374151" }}>{err.message}{"\n\n"}{err.stack}</pre>
          <button 
            onClick={() => { sessionStorage.removeItem("chunk_reloaded"); window.location.reload(); }}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#059669", color: "#fff", border: "none", borderRadius: "0.25rem", cursor: "pointer" }}
          >
            Force Reload
          </button>
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

function App() {

  return (
    <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter
            basename={import.meta.env.BASE_URL.replace(/\/$/, "") || undefined}
          >
            <ScrollToTop />
            <div
              className={`relative min-h-screen overflow-x-hidden`}
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
