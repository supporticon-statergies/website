import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Product from "./pages/Product";
import Articles from "./pages/Articles";
import Events from "./pages/Events";
import Privacy from "./pages/Privacy";
import ArticleDetail from "./pages/ArticleDetail";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import Marquee from "./components/Marquee"; // ✅ Added import

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div>
              <SiteHeader />
              <Marquee /> {/* ✅ Added Marquee below SiteHeader */}

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/events" element={<Events />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <SiteFooter />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
