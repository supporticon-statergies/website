import { SEO } from "@/components/SEO";
import { CheckCircle, XCircle } from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useReveal } from "@/hooks/use-reveal";
import { AmbientAccent } from "@/components/PageVisuals";
import { FadeUp, FadeIn } from "@/components/ui/motion-utils";
import { motion } from "framer-motion";


const comparison = [
  {
    without: "Customers wait on hold or dig through FAQs",
    with: "Live Agent and Inbound Voice resolve by conversation, instantly",
  },
  {
    without: "Every channel is a separate inbox and a separate wait time",
    with: "Omnichannel Autopilot/Copilot unifies WhatsApp, Instagram, Facebook, and email",
  },
  {
    without: "Non-English customers get a slower, translated experience",
    with: "Every feature works natively in every language",
  },
  {
    without: "Hardware issues are tracked across scattered spreadsheets and calls",
    with: "Automated Tracking follows every repair from report to resolution",
  },
  {
    without: "Agents tab-switch across 5+ tools for one answer",
    with: "Unified AI search across your KB in under 30 seconds",
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
          className={`grid md:grid-cols-2 gap-12 items-start ${reveal.revealClasses}`}
        >
          <div className="max-w-2xl self-start pt-8 md:pt-16">
            <h1 className="font-display text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl text-slate-900 tracking-normal">
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent pr-2 box-decoration-clone">
                Six ways HelpDude turns customer friction into effortless resolution
              </span>
              <span className="block mt-2 pr-2">before trust is broken</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            From first voice interaction to final update,
            HelpDude handles the routine—so customers and engineers focus on what matters.
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center">
            <div
              className="rounded-3xl overflow-hidden bg-transparent"
              style={{ width: "100%", maxWidth: "680px", aspectRatio: "1 / 1" }}
            >
              <iframe
                src="/HelpDude_Rotating_Wheel.html"
                className="w-full h-full border-0 block pointer-events-none"
                title="HelpDude Rotating Wheel"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Core Features */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-slate-900 text-center leading-tight">
            Core Features of HelpDude, and the Customer Outcomes They Create
          </h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* Feature 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_12px_35px_rgba(26,127,181,0.18)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Live Agent Support
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → One Click. A Full Conversation. In customer's preferred language
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                The moment a customer clicks your HelpDude's AI agent logo from the same product screen that takes the full conversation by voice — no forms, no typing, no waiting. Every question is answered end-to-end, professionally and warmly in your customers' preferred language.
                </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_12px_35px_rgba(26,127,181,0.18)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
               Inbound Voice Calls
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
               → Your Support Line, Answered Like a Human
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Every call to your support number is picked up instantly. HelpDude resolves it directly from your Knowledge Base. Exceptions get forwarded to a support engineer with the full context of conversations already captured — zero repetition of the issue explanation for the customer.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_12px_35px_rgba(26,127,181,0.18)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Email Ticketing — Autopilot & Copilot
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → Two Modes. One Seamless Resolution.
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Every emailed ticket context is analysed with your Knowledge Base & trusted documents. If HelpDude AI finds a confident answer,
                Autopilot resolves and replies instantly. If HelpDude AI doubts, Copilot provides a drafted reply for your engineers to validate and send
                combining the AI Auto-pilot and co-pilot capability with full automation.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_12px_35px_rgba(26,127,181,0.18)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Omnichannel Messaging
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
               → The Same Intelligence, Everywhere.
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              WhatsApp, Instagram, Facebook, and every channel your customers already message you run on the same Autopilot and Copilot logic as email, in one unified inbox instead of scattered  inboxes.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_12px_35px_rgba(26,127,181,0.18)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
               Multi-language Support
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
               → Every Feature. Every Language.
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Live Agent, voice calls, email, and omnichannel messaging all work in the language your customer speaks — no separate setup and no translation workaround.</p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-green-50/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_12px_35px_rgba(26,127,181,0.18)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Automated Tracking (Manufacturing & Hardware)
              </h3>
              <div className="text-primary font-medium text-sm md:text-base mb-4 leading-snug">
                → From Reported to Resolved — Automatically Tracked.
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Purpose-built for physical products: every hardware issue ticket is tracked through diagnosis, repair, spare-part shipment, and field visit in a single timeline, with recurring failure patterns surfaced automatically. Exclusive to manufacturing and hardware businesses.
              </p>
            </motion.div>
          </motion.div>
  
      </section>

      {/* The Problem We Solve */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 to-white pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="section-label mb-4 mx-auto w-fit">The Problem We Solve</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-12">
                Your SaaS company may be losing customers and you may not know why.
              </h2>
              
              <div className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto space-y-6 mb-12">
                <p>
                  Silent churn starts when customers face friction but don't report it. Reporting an issue takes effort. Getting it resolved takes time. So instead of asking for help, customers simply disengage and leave.
                </p>
                <p>
                  Meanwhile, support teams are overwhelmed with repetitive issues, leaving less time for the complex problems where human expertise can truly make a difference.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                {/* Left Side: Wording in a box */}
                <div className="bg-slate-50/80 p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-lg flex items-center h-full">
                  <p className="font-bold text-slate-800 text-xl md:text-3xl leading-snug">
                    HelpDude makes getting help effortless for customers and reduces the support burden with an AI Support Intelligence layer—so your teams can focus on the issues that matter most and retain more customers.
                  </p>
                </div>

                {/* Right Side: Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/feature_page.png" 
                    alt="HelpDude support intelligence" 
                    className="w-full h-full object-contain rounded-3xl shadow-lg border border-slate-200/50 hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
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
