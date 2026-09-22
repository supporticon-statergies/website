import { SEO } from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { AmbientAccent } from "@/components/PageVisuals";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ThumbsUp, ThumbsDown } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
};

const faqData: Record<string, FAQItem[]> = {
  "General": [
    {
      q: "What problems does HelpDude solve?",
      a: "HelpDude helps businesses manage customer support more efficiently by combining ticket management, a searchable knowledge base, and AI-assisted responses in one platform. It reduces response times, cuts down repetitive manual work for support agents, and helps teams stay organized as ticket volume grows."
    },
    {
      q: "How is HelpDude different from other customer support platforms?",
      a: "HelpDude combines AI-driven ticket resolution with human oversight, so responses are fast but still reviewed for accuracy when needed. It's built to be simple to set up, integrates smoothly with existing tools, and focuses on giving both support teams and customers a smoother experience — not just another ticket queue."
    }
  ],
  "AI & Support": [
    {
      q: "How does HelpDude find the right solution for a ticket?",
      a: "HelpDude's AI analyzes the ticket content, matches it against your knowledge base and past resolved tickets, and suggests the most relevant solution. It learns from patterns in previous interactions to improve accuracy over time."
    },
    {
      q: "What happens when the AI cannot find a solution?",
      a: "If the AI can't confidently resolve a ticket, it automatically escalates the ticket to a human support agent, along with any partial findings or suggestions, so the agent isn't starting from scratch."
    },
    {
      q: "Can a support engineer review or modify AI-generated responses?",
      a: "Yes. Support engineers can review, edit, or fully rewrite any AI-generated response before it's sent to the customer, ensuring accuracy and a human touch when needed."
    }
  ],
  "Tickets": [
    {
      q: "How can I create a ticket?",
      a: "Tickets can be created directly through the HelpDude dashboard, via customer-submitted forms on your website, or automatically from incoming emails and chat messages — all logged in one central place."
    },
    {
      q: "Can I prioritize tickets?",
      a: "Yes. Tickets can be tagged by priority level (e.g., low, medium, high, urgent) manually or automatically based on keywords, customer tier, or SLA rules, so critical issues are handled first."
    }
  ],
  "Knowledge Base": [
    {
      q: "What is the HelpDude Knowledge Base?",
      a: "It's a centralized library of articles, guides, and FAQs that both your support team and customers can reference. It powers self-service support and helps the AI generate more accurate responses."
    },
    {
      q: "How do I create a knowledge-base article?",
      a: "From the Knowledge Base section of the dashboard, click \"New Article,\" add a title, content, and relevant tags or categories, then publish it so it's searchable by both customers and the AI."
    },
    {
      q: "Can I edit or update existing articles?",
      a: "Yes, articles can be edited anytime. Changes are saved with version history, so you can track updates or revert to a previous version if needed."
    }
  ],
  "Integrations": [
    {
      q: "What analytics does HelpDude provide?",
      a: "HelpDude offers dashboards covering ticket volume, response and resolution times, customer satisfaction scores, agent performance, and AI resolution rates — with exportable reports."
    },
    {
      q: "Can I track ticket resolution time?",
      a: "Yes. HelpDude automatically logs the time from ticket creation to resolution and displays average resolution times by category, agent, or priority level."
    },
    {
      q: "Can I monitor support team performance?",
      a: "Yes. You can view individual and team-level metrics such as tickets resolved, average response time, customer satisfaction ratings, and workload distribution."
    }
  ],
  "Language & Accessibility": [
    {
      q: "Does HelpDude support multiple languages?",
      a: "Yes, the platform interface and AI responses support multiple languages, allowing teams to support a global customer base without needing separate tools."
    },
    {
      q: "Can customers communicate with support in their preferred language?",
      a: "Yes. HelpDude can detect the customer's language and respond accordingly, or auto-translate messages so agents and customers can communicate smoothly regardless of language differences."
    },
    {
      q: "Does HelpDude support voice-based customer interactions?",
      a: "Yes, HelpDude supports voice-based support channels, allowing customer calls to be logged, transcribed, and integrated into the same ticketing system as chat and email."
    }
  ],
  "Security & Account": [
    {
      q: "Is my customer data secure?",
      a: "Yes. HelpDude uses industry-standard encryption for data in transit and at rest, along with regular security audits, to keep customer and business data protected."
    },
    {
      q: "How do I create a HelpDude account?",
      a: "Sign up on the HelpDude website with your email and business details, verify your email, and you'll be guided through a short setup process to configure your support workspace."
    },
    {
      q: "Can I manage multiple support agents?",
      a: "Yes. You can invite unlimited (or plan-dependent) team members, assign roles, and manage agent workloads directly from the admin dashboard."
    },
    {
      q: "Can I control user permissions?",
      a: "Yes. Admins can assign role-based permissions (e.g., admin, agent, viewer) to control who can access billing, edit knowledge-base articles, manage tickets, or view analytics."
    }
  ],
  "Pricing & Plans": [
    {
      q: "What are HelpDude's pricing plans?",
      a: "HelpDude typically offers tiered plans (e.g., Starter, Professional, Enterprise) based on features like ticket volume, number of agents, and AI usage. Check the pricing page for current rates."
    },
    {
      q: "Is there a free trial?",
      a: "Yes, HelpDude offers a free trial period so you can explore features before committing to a paid plan."
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes, you can change your plan anytime from the billing settings, with changes typically taking effect immediately or at the next billing cycle."
    },
    {
      q: "How does HelpDude billing work?",
      a: "Billing is typically subscription-based (monthly or annual), charged automatically to your payment method on file, with invoices available for download from your account dashboard."
    }
  ]
};

const categories = Object.keys(faqData);

const FAQ = () => {
  useScrollToTop();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [helpful, setHelpful] = useState<Record<string, boolean | null>>({});

  const filteredItems = faqData[activeCategory];

  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <SEO
        title="FAQ | SupportIcon"
        description="Frequently asked questions about SupportIcon and HelpDude AI support platform."
        canonicalPath="/faq"
      />

      {/* ── Background Video Layer ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
        <video
          src="/User%20Interface.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-emerald-50/70 to-white/95" />
      </div>

      <AmbientAccent position="right" color="emerald" />

      {/* ── Hero Header — centered like reference ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h1
            className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase"
            style={{ letterSpacing: "0.04em" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="font-sans mt-4 text-base text-slate-500 max-w-xl mx-auto">
            If you can&apos;t find the answer you are looking for, please{" "}
            <a
              href="mailto:support@supporticon.ai"
              className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700 transition-colors"
            >
              contact our customer services care team.
            </a>
          </p>
        </motion.div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="max-w-7xl mx-auto px-6 pb-32 flex flex-col lg:flex-row gap-10 lg:gap-14 relative z-10">

        {/* ── Left sidebar — violet bordered box with dotted separators ── */}
        <motion.aside
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="lg:w-64 flex-shrink-0"
        >
          <div
            className="border-2 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm"
            style={{ borderColor: "#a78bfa" }}
          >
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              const isLast = idx === categories.length - 1;
              return (
                <div key={cat}>
                  <button
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(0);
                    }}
                    className={`w-full text-left px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
                      isActive
                        ? "text-emerald-600"
                        : "text-slate-700 hover:text-emerald-500"
                    }`}
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {cat}
                  </button>
                  {!isLast && (
                    <div
                      className="mx-4"
                      style={{ borderTop: "1.5px dotted #cbd5e1" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.aside>

        {/* ── Right — accordion Q&A ── */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.26 }}
            >
              {/* Category heading */}
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-5"
              >
                {activeCategory}
              </p>

              {filteredItems.length === 0 ? (
                <p className="text-slate-400 text-base">No results found.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {filteredItems.map((item, i) => {
                    const isOpen = openIndex === i;
                    const key = `${activeCategory}-${i}`;
                    return (
                      <div
                        key={i}
                        className={`rounded-xl border transition-all duration-200 ${
                          isOpen
                            ? "border-emerald-300 shadow-sm bg-white"
                            : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        {/* Question row */}
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span
                            className={`text-sm md:text-base font-medium transition-colors duration-200 leading-snug ${
                              isOpen ? "text-slate-900" : "text-slate-700"
                            }`}
                          >
                            {item.q}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className={`flex-shrink-0 transition-colors duration-200 ${
                              isOpen ? "text-emerald-500" : "text-slate-400"
                            }`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.span>
                        </button>

                        {/* Answer — animated height */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.26, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5">
                                <div className="h-px bg-slate-100 mb-4" />
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-5">
                                  {item.a}
                                </p>
                                {/* Helpful feedback */}
                                <div className="flex items-center gap-3">
                                  <span className="text-xs text-slate-400">
                                    Was this helpful?
                                  </span>
                                  <button
                                    onClick={() =>
                                      setHelpful((h) => ({ ...h, [key]: true }))
                                    }
                                    className={`p-1.5 rounded-md transition-colors ${
                                      helpful[key] === true
                                        ? "text-emerald-500 bg-emerald-50"
                                        : "text-slate-300 hover:text-slate-500 hover:bg-slate-50"
                                    }`}
                                  >
                                    <ThumbsUp className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      setHelpful((h) => ({ ...h, [key]: false }))
                                    }
                                    className={`p-1.5 rounded-md transition-colors ${
                                      helpful[key] === false
                                        ? "text-red-400 bg-red-50"
                                        : "text-slate-300 hover:text-slate-500 hover:bg-slate-50"
                                    }`}
                                  >
                                    <ThumbsDown className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default FAQ;

