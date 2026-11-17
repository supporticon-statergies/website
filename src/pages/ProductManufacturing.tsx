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
  AlertCircle,
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

import { useAuth } from "@/context/AuthContext";



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

const ProductManufacturing = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <main className="overflow-x-hidden pb-16 bg-transparent min-h-screen relative">
      <SEO
        title="HelpDude Manufacturing & Hardware – Features"
        description="AI support built for manufacturing and hardware businesses. Voice, calls, email, WhatsApp and automatic order tracking."
        canonicalPath="/product/manufacturing"
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
      </div>

      {/* ── Features Page ── */}
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
        
    </main>
  );
};

export default ProductManufacturing;
