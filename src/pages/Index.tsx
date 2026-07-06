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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CXLeadersForm } from "@/components/CXLeadersForm";
import { Button } from "@/components/ui/button";
import {
  AISearchVisual,
  WorkflowPipelineVisual,
} from "@/components/SectionVisuals";

const steps = [
  {
    number: "01",
    title: "Connect",
    desc: "Install HelpDude from the Freshdesk Marketplace. No IT project. No developer needed. Done in minutes.",
    color: "from-primary to-primary",
    bg: "bg-primary/10",
    accent: "text-primary",
  },
  {
    number: "02",
    title: "Configure",
    desc: "Upload your KB articles, set POC ownership, and configure access permissions in the SME Admin Console.",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
  },
  {
    number: "03",
    title: "Activate",
    desc: "Agents open a ticket, HelpDude searches your knowledge base and drafts the email response automatically.",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    accent: "text-teal-600",
  },
  {
    number: "04",
    title: "Retain",
    desc: "Faster resolutions, consistent quality, accurate escalations. Customers trust you enough to stay and renew.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    accent: "text-orange-600",
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

const Home = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [showCXForm, setShowCXForm] = useState(false);

  return (
    <>
      <SEO
        title="Supporticon, Empowering Support Teams"
        description="Who supports the support team? We're building the next big leap in AI to protect and empower support engineers, not replace them."
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
                  Everything Your Support Team Needs, In One Place
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                  Purpose-built for support engineers, fast, accurate, and deeply integrated.
                  Supporticon unifies your entire knowledge base so every agent answers with confidence.
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
                <AISearchVisual />
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
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
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
              <div className="absolute top-[2.8rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-emerald-200 to-amber-200 z-0" />

              <StaggerContainer className="grid grid-cols-4 gap-6 relative z-10">
                {steps.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}
                      >
                        <span className="text-xl font-black text-white">{step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Mobile vertical stepper */}
            <div className="md:hidden space-y-8">
              {steps.map((step, idx) => (
                <FadeUp key={step.number} delay={idx * 0.1}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
                      >
                        <span className="text-lg font-black text-white">{step.number}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-px flex-1 bg-slate-200 mt-3" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Animated workflow pipeline — desktop only */}
            <WorkflowPipelineVisual />

            {/* SaaS Support Readiness Assessment */}
            <div className="mt-20 pt-16 border-t border-slate-100 max-w-4xl mx-auto text-center space-y-6">
              <div className="section-label mx-auto mb-4">Readiness Assessment</div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Is your support ready to scale?
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
                Answer 20 quick questions about your SaaS support operations.<br />
                Get your overall readiness score and actionable insights instantly.
              </p>
              <div className="pt-6">
                <Button
                  size="lg"
                  variant="hero"
                  className="rounded-full px-10 py-6 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group"
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
        </section>

        <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />
      </main>
    </>
  );
};

export default Home;
