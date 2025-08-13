import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-helpdude.jpg";
import Spotlight from "@/components/Spotlight";
import { Brain, Timer, Search, Plug } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <SEO
        title="Help Dude — AI for Support Engineers"
        description="Unify search across Confluence, Jira, Freshdesk and more. Reduce time-to-answer with AI-powered insights."
        image={heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Help Dude",
          url: typeof window !== "undefined" ? window.location.origin : undefined,
          logo: "/lovable-uploads/8a9c0dca-e50e-459a-afc4-1e08634ad78b.png",
        }}
      />
      <main>
        <section className="relative overflow-hidden bg-subtle-gradient">
          <div className="container mx-auto grid items-center gap-10 px-4 py-20 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                <span className="text-brand-gradient">Find answers fast</span> with an AI teammate for support engineers
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Help Dude unifies search across Confluence, Jira, Freshdesk and your internal docs. Cut file-searching time and focus on solving customer problems.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <Link to="/product">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/articles">Read Articles</Link>
                </Button>
              </div>
              <ul className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <li className="rounded-full border px-3 py-1">Confluence</li>
                <li className="rounded-full border px-3 py-1">Jira</li>
                <li className="rounded-full border px-3 py-1">Freshdesk</li>
                <li className="rounded-full border px-3 py-1">Knowledge Base</li>
                <li className="rounded-full border px-3 py-1">Internal Docs</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Illustration: AI assistant organizing docs and tickets"
                className="w-full rounded-xl border shadow-brand"
                loading="eager"
              />
              <Spotlight className="absolute inset-0" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold">Why teams choose Help Dude</h2>
            <p className="mt-2 text-muted-foreground">
              Purpose-built for support engineers — fast, accurate and deeply integrated.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, title: "Unified search", desc: "Search once across Confluence, Jira, Freshdesk and more." },
              { icon: Timer, title: "Save hours", desc: "Slash file-finding time with AI-assisted results." },
              { icon: Plug, title: "Plug & play", desc: "Easy setup with secure, read-only integrations." },
              { icon: Brain, title: "Answers, not links", desc: "Summarized insights with citations to the original sources." },
            ].map((f) => (
              <Card key={f.title} className="hover-scale">
                <CardHeader>
                  <f.icon className="h-5 w-5 text-primary" />
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
