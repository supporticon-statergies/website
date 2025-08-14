import { SEO } from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const SME = () => {
  useScrollToTop();
  
  return (
    <main>
      <SEO
        title="SME — Supporticon"
        description="Configure articles, define POCs, and understand natural-language drafting and assignment workflows."
        canonicalPath="/sme"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Supporticon SME configuration",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold">SME Tools & Configuration</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Guide for Subject Matter Experts to manage knowledge, POCs, and workflows that power HelpDude in the Freshdesk marketplace.
        </p>
      </section>

      {/* Zig-zag: Natural-language drafting */}
      <section className="container mx-auto grid items-center gap-8 px-4 pb-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold">Natural‑language email drafting</h2>
          <p className="mt-3 text-muted-foreground">
            If you know the issue and solution, describe them in plain English. HelpDude turns this into a
            polished email draft with clear structure and tone, citing the most relevant KB or internal docs for
            verification.
          </p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Type the ticket issue and the solution in natural language.</li>
            <li>One‑click draft generation with citations and re‑write controls.</li>
            <li>Send or refine inside Freshdesk.</li>
          </ul>
        </div>
        <div className="relative md:order-last">
          <img
            src="./lovable-uploads/b9a509ee-6eef-484f-bfe7-03bd697db110.png"
            alt="Help Dude email drafting inputs: issue and solution fields with submit and send actions"
            className="w-full rounded-xl border shadow-brand"
            loading="lazy"
          />
        </div>
      </section>

      {/* Zig-zag: POC flow */}
      <section className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div className="relative md:order-first">
          <img
            src="./lovable-uploads/314b183e-d63e-4dee-89fa-eebe141f06d0.png"
            alt="Dashboard with sections for KB, Internal Articles, KT Documents, QA POCs, Dev POCs and more"
            className="w-full rounded-xl border shadow-brand"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold">POC assignment when answer is unknown</h2>
          <p className="mt-3 text-muted-foreground">
            When the system cannot confidently produce an answer, it auto‑routes the ticket to the correct
            Point‑of‑Contact (POC) based on topic, component, or product area—so nothing gets stuck.
          </p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Finds the best POC from configured ownership rules.</li>
            <li>Assigns the ticket with context and related materials.</li>
            <li>Keeps a clear audit trail for escalations.</li>
          </ul>
        </div>
      </section>

      {/* Zig-zag: Article configuration */}
      <section className="container mx-auto grid items-center gap-8 px-4 pb-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold">Configure Articles for better answers</h2>
          <p className="mt-3 text-muted-foreground">
            SMEs can curate KB/Internal Articles and KT docs to improve draft quality. Keep content up‑to‑date,
            tag ownership, and map synonyms so search finds the right piece instantly.
          </p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Manage KB and Internal Articles with categories and tags.</li>
            <li>Link KT documents and validated responses.</li>
            <li>Control visibility with role‑based access.</li>
          </ul>
        </div>
        <div className="relative md:order-last">
          <img
            src="./lovable-uploads/b9a509ee-6eef-484f-bfe7-03bd697db110.png"
            alt="Inputs and controls used by SMEs to configure email drafting rules and articles"
            className="w-full rounded-xl border shadow-brand"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default SME;
