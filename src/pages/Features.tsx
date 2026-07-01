import { SEO } from "@/components/SEO";
import { CheckCircle, XCircle } from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useReveal } from "@/hooks/use-reveal";
import { FeatureAIVisual, AmbientAccent } from "@/components/PageVisuals";
import { FadeUp, FadeIn } from "@/components/ui/motion-utils";
import { motion } from "framer-motion";

const comparison = [
  {
    without: "Agents tab-switch across 5+ tools just to find the right answer",
    with: "Unified AI search across knowledge base in < 30 seconds",
  },
  {
    without: "Email responses written from scratch, slow, inconsistent, off brand",
    with: "One click AI email drafts from ticket context in your brand tone",
  },
  {
    without: "Escalations stall while teams search Slack for the right POC",
    with: "Intelligent POC routing, right person engaged instantly",
  },
  {
    without: "Senior engineers become human search engines and bottlenecks",
    with: "Expert knowledge distributed instantly across your entire team",
  },
  {
    without: "New hires take weeks to ramp, customers feel every gap",
    with: "New hires resolve tickets with confidence from Week One",
  },
  {
    without: "Support's impact on revenue stays invisible to leadership",
    with: "ROI dashboards make support's impact on retention measurable",
  },
];

const Features = () => {
  useScrollToTop();
  const reveal = useReveal();

  return (
    <main className="min-h-screen bg-transparent pb-24 relative">
      <SEO
        title="Features, SupportIcon"
        description="Help Dude is an AI co pilot that lives inside your Freshdesk ticket view, surfacing grounded answers in under 30 seconds."
        canonicalPath="/features"
      />

      {/* Ambient accents */}
      <AmbientAccent position="right" color="emerald" />
      <AmbientAccent position="left"  color="blue"    />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div
          ref={reveal.ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${reveal.revealClasses}`}
        >
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl text-slate-900 tracking-normal">
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent pr-2 box-decoration-clone">
                Everything Your Team Needs.
              </span>
              <span className="block mt-2 pr-2">Nothing Your Customers Should Ever Notice.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              HelpDude works silently behind every ticket so agents look brilliant
              and customers feel understood.
            </p>
          </div>
          <div className="relative">
            <FeatureAIVisual />
          </div>
        </div>
      </div>

      {/* Section 4: Core Features */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-slate-900 text-center leading-tight">
            Core Features of HelpDude, and the Customer Outcomes They Create
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Unified Knowledge Search
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → Right answer, every time, in &lt;30 sec
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Searches across KB articles, internal docs, knowledge transfer content, and past resolved tickets in a single AI powered query with citation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                One-Click AI Email Drafting
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → Professional responses at CX speed
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Reads ticket context, finds the most relevant knowledge, and drafts a complete, brand-toned response in one click under 30 seconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Intelligent POC Escalation
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → High-value issues, zero friction
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Analyses ticket content and automatically identifies the correct Dev or QA POC for every escalation, no Slack-searching required.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Enterprise-Grade Security
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → Customer trust, protected end to end
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                All data stored exclusively on AWS and MongoDB Atlas. Zero third-party sharing. Role-based access keeps the right people in the right seats.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                SME Admin Console
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → CX consistency managed at scale
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Configure knowledge sources, define escalation ownership, and manage role based permissions from a single control centre. No code required.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                ROI & Pattern Intelligence
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → Support becomes a growth engine
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Recurring ticket patterns surface automatically. Support impact on retention becomes measurable, giving your team a seat at the leadership table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 to-white pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="section-label mb-4 mx-auto w-fit">The Problem We Solve</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                Your SAAS company Is Losing Customers, Silently.
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                Slow replies. Inconsistent answers. Missed escalations. These aren't
                operational problems, they're revenue leaks that compound quietly
                every single day.
              </p>
            </div>
          </FadeUp>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 shadow-2xl bg-white">
              <div className="grid grid-cols-2 border-b border-slate-100">
                <div className="p-6 md:p-8">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <XCircle className="w-4 h-4 text-red-400" />
                    Without Supporticon
                  </span>
                </div>
                <div className="p-6 md:p-8 bg-emerald-50/50">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest">
                    <CheckCircle className="w-4 h-4" />
                    With Supporticon
                  </span>
                </div>
              </div>
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="grid grid-cols-2 border-b border-slate-100/80 last:border-0 group hover:bg-slate-50/30 transition-colors"
                >
                  <div className="p-5 md:p-7 flex gap-3 items-start">
                    <XCircle className="w-4 h-4 text-red-300 shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-slate-500 leading-relaxed">
                      {row.without}
                    </span>
                  </div>
                  <div className="p-5 md:p-7 flex gap-3 items-start bg-emerald-50/20 group-hover:bg-emerald-50/40 transition-colors">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
                      {row.with}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
};

export default Features;
