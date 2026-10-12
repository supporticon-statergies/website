import { SEO } from "@/components/SEO";
import heroImage from "@/assets/home-imge.png";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/ui/motion-utils";
import {
  Brain,
  Search,
  Plug,
  Clock,
  Rocket,
  ArrowRight,
  Users,
  Lightbulb,
  TrendingUp,
  ChevronsRight,
  Hourglass,
  MessageSquare,
  Share2,
  Mail,
  Monitor,
  ZoomIn,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CXLeadersForm } from "@/components/CXLeadersForm";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";
const AISearchVisual = lazy(() => import("@/components/SectionVisuals").then(m => ({ default: m.AISearchVisual })));
const WorkflowPipelineVisual = lazy(() => import("@/components/SectionVisuals").then(m => ({ default: m.WorkflowPipelineVisual })));

const steps = [
  {
    number: "01",
    title: "Connect",
    desc: "Install on Freshdesk or launch standalone in under 15 minutes with zero IT overhead.",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
  },
  {
    number: "02",
    title: "Configure",
    desc: "Upload your Knowledge Base and connect WhatsApp, email, social channels, and phone.",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    accent: "text-teal-600",
  },
  {
    number: "03",
    title: "Activate",
    desc: "Deploy Autopilot for instant resolutions, Copilot for AI reply drafts, and Voice AI.",
    color: "from-emerald-600 to-teal-700",
    bg: "bg-emerald-50",
    accent: "text-emerald-700",
  },
  {
    number: "04",
    title: "Retain",
    desc: "Deliver faster resolutions and consistent 24/7 quality to boost customer retention.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    accent: "text-amber-600",
  },
];

const features = [
  {
    icon: Search,
    title: "Find Answers Instantly Across All Tools",
    desc: "Search across Jira, Confluence, Freshdesk and more, in seconds, not minutes.",
    accent: "bg-primary/15 text-primary",
  },
  {
    icon: Rocket,
    title: "Resolve Tickets 3x Faster",
    desc: "AI powered results help you find the right info instantly, no more digging.",
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Plug,
    title: "Set Up in Minutes, Not Days",
    desc: "Secure, read only integrations with zero engineering effort.",
    accent: "bg-purple-100 text-purple-600",
  },
  {
    icon: Brain,
    title: "Built for Speed & Simplicity",
    desc: "Clean, intuitive interface designed for real support workflows.",
    accent: "bg-amber-100 text-amber-600",
  },
];

const optionCards = [
  {
    number: "01",
    title: "Resolve Issues in Seconds, Not Days",
    desc: "AI that understands context across your knowledge base, CRM, and help docs 30-second average resolution for automated tickets.",
    gradient: "from-primary to-primary/80",
    iconColor: "text-primary",
    image: "/image1.png",
  },
  {
    number: "02",
    title: "Support Customers in Any Language—Natively",
    desc: "40+ languages, cultural nuance included. Not just translation. Real support 65% higher repurchase rates when customers get support in their language.",
    gradient: "from-primary to-primary/80",
    iconColor: "text-primary",
    image: "/image2.png",
  },
  {
    number: "03",
    title: "Humans Handle What Matters. AI Handles the Rest.",
    desc: "   AI escalates to humans with full context—no repeated explanations Your team focuses on complex issues, not routine tickets",
    gradient: "from-primary to-primary/80",
    iconColor: "text-primary",
    image: "/image3.png",
  },
  {
    number: "04",
    title: "One Conversation Across Every Channel",
    desc: "Email, chat, WhatsApp, phone—context flows seamlessly Customers don't repeat themselves. Your team doesn't search five tools",
    gradient: "from-primary to-primary/80",
    iconColor: "text-primary",
    image: "/image4.png",
  },
];

const extraOptionCards = [
  {
    number: "01",
    title: "Stop Searching. Start Answering.",
    desc: "Your agent used to dig through five different tools while a customer waited. Now they don't. HelpDude searches Jira, Confluence, Freshdesk and more — instantly — so the answer finds them, not the other way around.",
    color: "text-primary",
    image: "/cards1.png",
    fillColor: "fill-primary",
    bgColor: "bg-primary",
  },
  {
    number: "02",
    title: "The Ticket That Used to Take 20 Minutes? Now Under 30 Seconds",
    desc: "Every minute a customer waits, trust quietly erodes. HelpDude's AI surfaces the exact answer, drafted and ready, so your team resolves — not researches.",
    color: "text-primary",
    image: "/cards 2.png",
    fillColor: "fill-primary",
    bgColor: "bg-primary",
  },
  {
    number: "03",
    title: "Live By Lunch. No IT Ticket Required",
    desc: "No developers. No onboarding project. No \"we'll get to it next sprint.\" Connect your tools, and HelpDude is working before your coffee gets cold",
    color: "text-primary",
    image: "/cards 3.png",
    fillColor: "fill-primary",
    bgColor: "bg-primary",
  },
  {
    number: "04",
    title: "Built for Humans Who Support Humans",
    desc: "No cluttered dashboards. No training manuals. Just a clean, intuitive workspace your team actually enjoys using — because a tired agent can't retain a frustrated customer.",
    color: "text-primary",
    image: "/cards 4.png",
    fillColor: "fill-primary",
    bgColor: "bg-primary",
  },
];

const circleSteps = [
  {
    id: "01",
    title: "No Need to Raise a Ticket for Small Things",
    desc: "Just one click on the voice bot, live at the bottom right of the product screen. Talk in your own language and get your doubts clarified — instantly.",
    gradient: "from-[hsl(var(--brand-green))] to-[hsl(var(--brand-green))]",
    Icon: Hourglass,
  },
  {
    id: "02",
    title: "Don't Worry About Telling the Same Story Twice",
    desc: "If the voice bot can't solve it live, it escalates to a support agent with the complete story and full transcript — no follow-up questions over email, just the answer. If it's simple, the customer gets their answer right away. If it's complex, HelpDude hands it off to a human agent with full context already shared, so they never have to repeat themselves.",
    gradient: "from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red))]",
    Icon: MessageSquare,
  },
  {
    id: "03",
    title: "Reach Out, Anywhere",
    desc: "Email, chat, or WhatsApp — your customer starts the conversation on whatever channel is easiest for them. No forms to fill, no ticket numbers to remember.",
    gradient: "from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue))]",
    Icon: Share2,
  },
  {
    id: "04",
    title: "Get Understood Instantly",
    desc: " HelpDude's AI reads their issue, pulls context from your knowledge base, and responds in their own language — in seconds, not hours",
    gradient: "from-[hsl(var(--brand-yellow))] to-[hsl(var(--brand-yellow))]",
    Icon: Mail,
  },
  {
    id: "05",
    title: "Feel Heard, Stay Loyal",
    desc: "No waiting. No re-explaining. No silence. Just a resolution that makes them trust you enough to stick around.",
    gradient: "from-[hsl(var(--brand-green))] to-[hsl(var(--brand-green))]",
    Icon: Monitor,
  },
];

const Home = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [showCXForm, setShowCXForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

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
      <main className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">

            {/* Split row: copy left, AI visual right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
              <FadeUp>
                <div className="section-label mb-6">Platform</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
               One Platform. Every Channel. Support That Understands

                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                 HelpDude brings together email, chat, WhatsApp, voice, and social into one 
                 intelligent platform. Every conversation has full context. Every response feels 
                 personal. Every hand-off to a human comes with the complete story.
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
              </FadeUp>

              {/* AI Search Visual */}
              <FadeIn delay={0.15}>
                <Suspense fallback={<div className="h-[400px]" />}>
                  <AISearchVisual />
                </Suspense>
              </FadeIn>
            </div>

            {/* Feature highlights */}
            <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
              {features.map((f) => (
                <StaggerItem key={f.title} className="h-full">
                  <HoverCard className="h-full">
                    <div className="premium-card p-7 h-full flex flex-col">
                      <div className={`w-12 h-12 ${f.accent} rounded-xl flex items-center justify-center mb-5 shrink-0`}>
                        <f.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug min-h-[2.75rem]">
                        {f.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed flex-1">{f.desc}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl xl:max-w-[1520px]">
            <FadeUp>
              <div className="text-center mb-12">
                <div className="section-label mb-4 text-emerald-600 bg-emerald-50 border-emerald-200">
                  Powering Better Customer Support
                </div>
              </div>
            </FadeUp>

            {/* Options Cards added above the sentence */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-7 mb-16">
              {optionCards.map((opt) => (
                <StaggerItem key={opt.number} className="relative w-full h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group">
                  {/* Clickable Image showcase container for maximum clarity */}
                  <div 
                    onClick={() => setSelectedImage({ src: opt.image, title: opt.title, desc: opt.desc })}
                    className="relative w-full aspect-[16/11] bg-slate-900 overflow-hidden border-b border-slate-100/90 cursor-zoom-in"
                    title="Click to view full image in high resolution"
                  >
                    <img 
                      src={opt.image} 
                      alt={opt.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    {/* Badge number */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow-sm border border-white/60 z-10">
                      {opt.number}
                    </div>

                    {/* Quick zoom preview button */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-700 shadow-sm border border-white/60 flex items-center gap-1.5 group-hover:bg-primary group-hover:text-white transition-colors duration-200 z-10">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Enlarge</span>
                    </div>

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Content area */}
                  <div className="p-6 text-left flex-1 flex flex-col bg-white">
                    <h3 className="font-bold text-[17px] text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                      {opt.title}
                    </h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                      {opt.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp>
              <div className="text-center mt-12 mb-12">
                <div className="section-label mb-4 text-emerald-600 bg-emerald-50 border-emerald-200">
                  Power Up Your Support Team
                </div>
              </div>
            </FadeUp>

            {/* Extra Options Cards added below */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pt-8 pl-4 pr-2">
              {extraOptionCards.map((opt) => (
                <StaggerItem key={`extra-${opt.number}`} className="relative w-full group">
                  {/* The spiky burst shape behind */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`absolute -top-12 -left-12 w-36 h-36 ${opt.fillColor} drop-shadow-md z-0 transition-transform group-hover:scale-105 group-hover:rotate-12 duration-500`}
                  >
                    <path d="M12 2l2.4 2.8 3.7-.4 1.1 3.5 3.3 1.7-1.8 3.2 1.8 3.2-3.3 1.7-1.1 3.5-3.7-.4L12 22l-2.4-2.8-3.7.4-1.1-3.5-3.3-1.7 1.8-3.2-1.8-3.2 3.3-1.7 1.1-3.5 3.7.4L12 2z"/>
                  </svg>
                  
                  {/* The Card */}
                  <div className="relative bg-white rounded-[1.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-10 h-full min-h-[320px] flex flex-col transition-transform group-hover:-translate-y-1 duration-300">
                    
                    {/* The blurred blob attached to the card */}
                    <div className={`absolute -top-8 -left-8 w-32 h-32 ${opt.bgColor} rounded-full opacity-70 blur-[28px] pointer-events-none z-10`}></div>

                    <div className="relative z-20 w-full flex items-center justify-center mb-8 mt-2">
                      <img 
                        src={opt.image} 
                        alt={`Option ${opt.number}`} 
                        className="max-w-full h-[120px] object-contain drop-shadow-xl" 
                      />
                    </div>
                    
                    <div className="text-center mt-auto relative z-20 flex-1 flex flex-col">
                      <div className="min-h-[3.5rem] flex items-center justify-center mb-3">
                        <h3 className={`font-bold text-[15px] tracking-wider uppercase leading-tight ${opt.color}`}>
                          {opt.title}
                        </h3>
                      </div>
                      <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Zig Zag Circle Steps */}
            <FadeUp>
              <div className="text-center mt-8 mb-2">
                <div className="section-label mb-4 text-emerald-600 bg-emerald-50 border-emerald-200">
                  Answers Without Waiting
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-4 mb-6">
                
                </h2>
              </div>
            </FadeUp>
            <div className="relative w-full max-w-7xl xl:max-w-[1400px] mx-auto px-4 md:px-8 py-2 hidden md:block h-[520px]">
              {/* Connecting line */}
              <svg className="absolute top-16 left-4 md:left-8 right-4 md:right-8 h-[440px] z-0 pointer-events-none" style={{ width: 'calc(100% - 2rem)' }}>
                <line x1="10%" y1="125" x2="30%" y2="285" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
                <line x1="30%" y1="285" x2="50%" y2="125" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
                <line x1="50%" y1="125" x2="70%" y2="285" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
                <line x1="70%" y1="285" x2="90%" y2="125" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
              </svg>

              <StaggerContainer className="relative top-2 w-full h-[560px] grid grid-cols-5 z-10">
                {circleSteps.map((step, idx) => {
                  const isTop = idx % 2 === 0;
                  return (
                    <StaggerItem key={step.id} className="relative w-full h-full flex justify-center">
                      <div className={`absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br ${step.gradient} p-[5px] shadow-2xl transition-transform hover:scale-105 ${isTop ? "top-0" : "top-[200px]"}`}>
                        <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center p-6 text-center shadow-inner border border-slate-700/50 overflow-hidden">
                          <step.Icon className="w-8 h-8 mb-2 text-white/90 flex-shrink-0" strokeWidth={1.5} />
                          <h4 className="font-bold text-white text-[14px] mb-2 tracking-wide leading-snug">{step.title}</h4>
                          <p className="text-[10.5px] text-slate-300 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            {/* Mobile layout for circles */}
            <StaggerContainer className="md:hidden flex flex-col items-center gap-8 py-16 relative">
               <div className="absolute top-16 bottom-16 left-1/2 -translate-x-1/2 w-2 bg-[#334155] z-0 rounded-full"></div>
               {circleSteps.map((step) => (
                 <StaggerItem key={step.id} className="relative z-10">
                   <div className={`w-[300px] h-[300px] rounded-full bg-gradient-to-br ${step.gradient} p-[5px] shadow-2xl`}>
                     <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center p-6 text-center shadow-inner border border-slate-700/50 overflow-hidden">
                        <step.Icon className="w-8 h-8 mb-2 text-white/90 flex-shrink-0" strokeWidth={1.5} />
                        <h4 className="font-bold text-white text-[14px] mb-2 tracking-wide leading-snug">{step.title}</h4>
                        <p className="text-[10.5px] text-slate-300 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                   </div>
                 </StaggerItem>
               ))}
            </StaggerContainer>

            <FadeUp>
              <div className="text-center mb-16">
                <div className="section-label mb-4">How It Works</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  From Sign Up to Customer Outcomes in 15 Minutes
                </h2>
              </div>
            </FadeUp>

            {/* Desktop stepper */}
            <div className="hidden md:block relative">
              {/* connecting line */}
              <div className="absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 z-0 opacity-60" />

              <StaggerContainer className="grid grid-cols-4 gap-6 relative z-10">
                {steps.map((step) => (
                  <StaggerItem key={step.number} className="h-full">
                    <div className="flex flex-col items-center text-center h-full p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-emerald-500/10 mb-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-xl font-black text-white">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2.5">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Mobile vertical stepper */}
            <div className="md:hidden space-y-6">
              {steps.map((step, idx) => (
                <FadeUp key={step.number} delay={idx * 0.1}>
                  <div className="flex gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
                      >
                        <span className="text-lg font-black text-white">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Animated workflow pipeline — desktop only */}
            <Suspense fallback={<div className="h-20" />}>
              <WorkflowPipelineVisual />
            </Suspense>

          </div>
        </section>

        {/* ── HELPDUDE DATA FLOW ────────────────────────────────────────── */}
        <section className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden bg-white">
          <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
            {/* section header */}
            <FadeUp>
              <div className="text-center mb-12">
                <div className="section-label mx-auto mb-4">Data Flow</div>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  How Helpdude Works
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-500 max-w-xl mx-auto">
                 Every channel, one intelligent engine — see how friction gets resolved before your customers lose trust in you.
                </p>
              </div>
            </FadeUp>

            {/* iframe card */}
            <FadeIn delay={0.1}>
              <div
                className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                style={{ aspectRatio: "1140 / 560" }}
              >
                <iframe
                  src="/HelpDude_Data_Flow.html"
                  className="w-full h-full border-0 block"
                  title="HelpDude Data Flow"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-2 md:px-4 max-w-6xl">

            {/* SaaS Support Readiness Assessment */}
            <div className="mt-6 pt-12 border-t border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-6 lg:gap-8 items-center w-full max-w-[1100px] mx-auto">

                {/* Robot image on the left */}
                <div className="relative overflow-hidden flex items-center justify-center lg:justify-start lg:-ml-8">
                  <img 
                    src="/robot_home.png" 
                    alt="Readiness Assessment Robot" 
                    className="w-full max-w-[360px] lg:max-w-[420px] h-auto object-contain object-left"
                  />
                </div>

                {/* Text inside styled box on the right */}
                <div className="bg-white p-8 md:p-10 lg:p-12 min-h-[360px] md:min-h-[400px] rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden flex flex-col justify-center text-left max-w-[760px] w-full justify-self-end">
                  <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                      Readiness Assessment
                    </div>
                    
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-5">
                      Is your support ready to scale?
                    </h2>
                    
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-8">
                      Answer 20 quick questions about your SaaS support operations.<br className="hidden md:block" />
                      Get your overall readiness score and actionable insights instantly.
                    </p>
                    
                    <div>
                      <Button
                        size="lg"
                        variant="hero"
                        className="rounded-full px-8 py-5 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group w-full sm:w-auto"
                        onClick={() =>
                          window.open(
                            "https://q-a-website.onrender.com/",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Assess Support Readiness
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />

        {/* High-Resolution Image Lightbox Modal */}
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
      </main>
    </>
  );
};

export default Home;
