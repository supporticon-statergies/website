import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BarChart,
  Globe,
  Mail,
  Shield,
  Bot,
  Inbox,
  Check,
  MessageSquare,
  Headphones,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { AmbientAccent } from "@/components/PageVisuals";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const RequestDemoDialog = lazy(() => import("@/components/RequestDemoDialog"));

const featuresList = [
  {
    icon: Users,
    title: "Live Agent Support",
    desc: "One click. A full conversation. In your customer's preferred language. The moment a customer clicks the HelpDude AI agent from inside your product, they're in a live voice conversation — no forms, no typing, no waiting. Every question is answered end-to-end, professionally and warmly, in the language your customer is most comfortable speaking.",
  },
  {
    icon: Headphones,
    title: "Inbound Voice Calls",
    desc: "Your support line, answered like a human. Every call to your support number is picked up instantly. HelpDude resolves it directly from your Knowledge Base. Exceptions are forwarded to a support engineer with the full conversation context already attached — zero repetition for the customer.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Messaging",
    desc: "The same intelligence, everywhere your customers already are. WhatsApp, Instagram, Facebook, and every messaging channel your customers use run on the same Autopilot and Co-Pilot logic as email — inside one unified inbox instead of five scattered ones.",
  },
  {
    icon: Zap,
    title: "Autopilot Mode",
    desc: "Tickets resolved before your team even sees them. HelpDude reads every incoming ticket, searches your Knowledge Base, and replies automatically the moment it's confident in the answer. No agent action required.",
  },
  {
    icon: Users,
    title: "Co-Pilot Mode",
    desc: "For tickets, when Autopilot isn't confident, HelpDude drafts the contextual complete reply. Your agent refines it if needed, and sends it in seconds — instead of writing a response from scratch.",
  },
  {
    icon: Mail,
    title: "Email-to-Ticket Conversion",
    desc: "Every conversation becomes a fully-logged ticket, automatically. Incoming support emails are converted into tickets with full context, priority level, and conversation history attached — no manual entry, no lost thread.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    desc: "One engine, every language, real-time. HelpDude automatically detects and replies in your customer's language across every channel — Live Agent, voice, email, and messaging — with real-time translation built in. No separate setup per language, no manual translation step.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    desc: "Your support performance, in one live dashboard. Track resolution rates, Autopilot accuracy, and agent performance in real time, from a single dashboard — no exporting data across five tools to build a report.",
  },
  {
    icon: Shield,
    title: "Role-Based Permissions",
    desc: "Centralized control over who can access what. Manage knowledge-source access, escalation paths, and agent permissions from one place — so sensitive data and critical workflows stay locked down as your team scales.",
  },
];
const ProductStandalone = () => {
  const { openAuthModal } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <main className="overflow-x-hidden pb-16 bg-transparent min-h-screen relative">
      <SEO
        title="HelpDude Standalone – Features"
        description="A complete standalone AI ticketing platform. No Freshdesk needed. Autopilot resolves tickets automatically."
        canonicalPath="/product/standalone"
      />

      <AmbientAccent position="right" color="blue" />
      <AmbientAccent position="left" color="emerald" />

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
            <button className="inline-flex items-center justify-center gap-1.5 px-4 h-9 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-slate-600 transition-all duration-200 group shrink-0 shadow-sm text-sm font-medium">
              All Products
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-transform duration-200" />
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
        key="standalone-features-page"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
            <section className="container mx-auto px-4 pt-6 md:pt-8 pb-12 md:pb-20">
              <div className="max-w-5xl mx-auto text-center">
                {/* Animated Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  STANDALONE AI TICKETING PLATFORM
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]"
                >
                  Standalone AI Ticketing Platform <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    for SaaS Support Teams
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium"
                >
                No Freshdesk or third-party helpdesk/ticketing tool is required.
                Customers will get their doubts clarified with HelpDude’s AI Voice agent,
                which sits on the bottom right of your product screen. If not solved,
                the Voice agent raises a ticket with the full context, Autopilot resolves automatically if it’s confident,
                else Co-Pilot assists your team.
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
                          "https://helpdude-ai.supporticon.com/",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      ACCESS HELPDUDE
                      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Features Cards Grid */}
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100/60 px-3 py-1 rounded-full">
                    PLATFORM FEATURES
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mt-4">
                    Everything built in Zero extras required
                  </h2>
                </motion.div>

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
                        className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 shrink-0"
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors duration-200">{item.title}</h3>
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

export default ProductStandalone;
