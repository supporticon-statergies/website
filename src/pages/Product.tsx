import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Play } from "lucide-react";
import { useState } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import ImageWithLoader from "@/components/ImageWithLoader";
import productDemoVideo from "@/assets/product-demo.mp4";

const features = [
  "Unified search across Confluence, Jira, Freshdesk & internal docs",
  "Source citations with one-click open",
  "AI summaries and follow-up prompts",
  "Granular permissions and secure read-only access",
  "Freshdesk plugin for in-context answers",
];

const Product = () => {
  const [open, setOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main>
      <SEO
        title="Help Dude Product"
        description="Reduce file-searching time with unified search and AI answers. Available as a Freshdesk plugin."
        canonicalPath="/product"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Help Dude",
          description:
            "AI-powered unified search for support engineers with Freshdesk integration.",
        }}
      />

      <section className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold">Help Dude</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          The fastest way for support engineers to find accurate answers from your knowledge base, tickets and docs — all in one place.
        </p>
        <div className="mt-6 flex gap-3">
          <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Request Demo</Button>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold mb-4">See Help Dude in Action</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch how our AI-powered platform transforms support workflows in real-time
          </p>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-white/80 text-sm">Click to play demo video</p>
                </div>
              </div>
            ) : null}
            
            <video
              className="w-full h-full object-cover"
              controls
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              poster="/placeholder.svg"
            >
              <source src={productDemoVideo} type="video/mp4" />
              <track 
                kind="captions" 
                src="/product-demo-captions.vtt" 
                srcLang="en" 
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              HD Quality
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Captions Available
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              2:30 Duration
            </span>
          </div>
        </div>
      </section>

      <RequestDemoDialog open={open} onOpenChange={setOpen} />

      <section className="container mx-auto grid gap-6 px-4 pb-20 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Confluence · Jira · Freshdesk · GitHub · Knowledge Base · Internal Docs
          </CardContent>
        </Card>
      </section>
      <section className="container mx-auto px-4 pb-20">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Email drafts from tickets</h2>
            <p className="mt-2 text-muted-foreground">
              Help Dude analyzes each ticket, finds the most relevant docs and past tickets, and generates a ready-to-send
              email draft tailored to the issue inside Freshdesk.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Finds best source and document with citations</li>
              <li>Rewrite suggestions before sending</li>
              <li>Works natively in the Freshdesk marketplace</li>
            </ul>
          </div>
          <div className="relative">
            <ImageWithLoader
              src="/lovable-uploads/a0f67e57-b75c-41ee-9b13-ea3833ba8c08.png"
              alt="Help Dude in Freshdesk: email draft generated from a ticket with cited best document"
              className="w-full rounded-xl border shadow-brand"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto grid items-center gap-8 px-4 pb-20 md:grid-cols-2">
        <div className="relative md:order-first">
          <ImageWithLoader
            src="/lovable-uploads/314b183e-d63e-4dee-89fa-eebe141f06d0.png"
            alt="SME Admin Console dashboard: configure KB, internal articles, KT documents, QA/Dev POCs"
            className="w-full rounded-xl border shadow-brand"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold">SME Admin Console</h2>
          <p className="mt-2 text-muted-foreground">
            This is the admin page where all configuration must be done — articles, POCs, and workflows that power Help Dude.
          </p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Configure knowledge sources (KB, internal docs, KT)</li>
            <li>Define POC ownership and routing rules</li>
            <li>Control access with roles and permissions</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Product;
