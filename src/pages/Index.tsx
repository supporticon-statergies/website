import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-imge.png";
import Spotlight from "@/components/Spotlight";
import { Brain, Timer, Search, Plug, Heart, Shield, Users, Zap, Clock, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Home = () => {
  useScrollToTop();
  
  return (
    <>
      <SEO
        title="Supporticon — Empowering Support Teams"
        description="Who supports the support team? We're building the next big leap in AI to protect and empower support engineers, not replace them."
        image={heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Supporticon Strategies Private Limited",
          url: typeof window !== "undefined" ? window.location.origin : undefined,
          logo: "/lovable-uploads/8a9c0dca-e50e-459a-afc4-1e08634ad78b.png",
        }}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-subtle-gradient">
          <div className="container mx-auto grid items-center gap-10 px-4 py-20 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                <span className="text-brand-gradient">Who supports</span> the support team?
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                What if the next big leap in AI… wasn't about replacing people — but actually protecting them?
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <Link to="/product">Join the Movement</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Born from experience</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Support team collaboration and empowerment"
                className="w-full rounded-xl border shadow-brand"
                loading="eager"
              />
              <Spotlight className="absolute inset-0" />
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-4xl font-bold mb-6">
                Support teams are always on
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Replying...</h3>
                  <p className="text-muted-foreground">24/7 customer support across time zones</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Escalating...</h3>
                  <p className="text-muted-foreground">Managing complex issues and urgent requests</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Explaining...</h3>
                  <p className="text-muted-foreground">Patiently guiding customers through solutions</p>
                </div>
              </div>
              <div className="mt-12 p-6 bg-background rounded-xl border shadow-sm">
                <p className="text-lg text-muted-foreground italic">
                  "All while hiding their burnout behind 'Happy to help!' replies."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold mb-6">
                  At Supporticon Strategies Private Limited
                </h2>
                <p className="text-xl text-muted-foreground">
                  We asked one simple question:
                </p>
                <div className="mt-8 inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-2xl">👉</span>
                  <span className="text-xl font-semibold text-primary">Who supports the support team?</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">That one question became a mission</h3>
                </div>
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">That mission became a movement</h3>
                </div>
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">And now — it's almost time ⏲️</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We're Building Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-4xl font-bold mb-6">
                📢 Something we've been quietly building...
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-background p-8 rounded-xl border shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">🚀 For the humans behind every helpdesk</h3>
                  <p className="text-muted-foreground">Supporting the people who support others</p>
                </div>
                <div className="bg-background p-8 rounded-xl border shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">🚀 For the calm in every customer chaos</h3>
                  <p className="text-muted-foreground">Bringing peace to stressful situations</p>
                </div>
                <div className="bg-background p-8 rounded-xl border shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">🚀 For the frontline, not the dashboard</h3>
                  <p className="text-muted-foreground">Tools that work for people, not metrics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-5xl font-bold mb-6">
                <span className="text-brand-gradient">#Supporticon</span> is coming
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                And we're not here to disrupt 🚫 —
              </p>
              <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-full">
                <span className="text-3xl">✨</span>
                <span className="text-2xl font-bold text-primary">We're here to Empower</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold">Why teams choose Supporticon</h2>
              <p className="mt-2 text-muted-foreground">
                Purpose-built for support engineers — fast, accurate and deeply integrated.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Search, title: "Unified search", desc: "Search once across Confluence, Jira, Freshdesk and more." },
                { icon: Timer, title: "Save hours", desc: "Slash file-finding time with AI-assisted results." },
                { icon: Plug, title: "Plug & play", desc: "Easy setup with secure, read-only integrations." },
                { icon: Brain, title: "User-friendly UI", desc: "Intuitive interface for admins to configure sources." },
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-4xl font-bold mb-6">
                Ready to support your support team?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the movement that's putting people first in support technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/product" className="flex items-center gap-2">
                    Get Early Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/articles">Read Our Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
