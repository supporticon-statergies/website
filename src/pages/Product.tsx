import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Play, X } from "lucide-react";
import { useState } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import ImageWithLoader from "@/components/ImageWithLoader";
import productDemoVideo from "@/assets/product-demo.mp4";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import postImage from "@/assets/post_image.jpg";

const features = [
  "Unified search across knowledge base, internal articles and knowledge transfer articles",
  "One-click email generation based on ticket using relevant articles",
  "POC flow: find the correct POC and assign tickets based on user response",
  "User data securely stored only in AWS and MongoDB Atlas",
];

const Product = () => {
  useScrollToTop();
  
  const [open, setOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Debug logging for poster image
  console.log('Poster image path:', postImage);
  console.log('Product demo video path:', productDemoVideo);

  return (
    <main>
      <SEO
        title="Help Dude"
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

      <RequestDemoDialog open={open} onOpenChange={setOpen} />

      {/* Video Demo Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Side - Hero Content */}
            <div>
              <h1 className="font-display text-4xl font-bold mb-4">Help Dude</h1>
              <p className="text-lg text-muted-foreground mb-6">
                AI-powered solution for support engineers: reduce the time spent searching for the right article, drafting ticket responses, and finding the correct POC to assign tickets. No more endless tab-switching—everything you need in one place.
              </p>
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Request Demo</Button>
            </div>
            
            {/* Right Side - Video */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl cursor-pointer" onClick={() => setShowVideoModal(true)}>
                {/* Fallback image that shows when video is not loaded */}
                <img 
                  src={postImage} 
                  alt="Help Dude Product Demo" 
                  className="w-full h-full object-cover"
                  style={{ display: isVideoPlaying ? 'none' : 'block' }}
                />
                
                <video
                  className="w-full h-full object-contain"
                  controls
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  poster={postImage}
                  onLoadStart={() => console.log('Video loading started, poster:', postImage)}
                  onLoadedData={() => console.log('Video data loaded')}
                  style={{ display: isVideoPlaying ? 'block' : 'none' }}
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
                
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-sm font-medium">Click to play demo video</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
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
        </div>
      )}

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
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Freshdesk
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Zoho Desk <span className="text-xs text-muted-foreground ml-1">(coming soon)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Zendesk <span className="text-xs text-muted-foreground ml-1">(coming soon)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="container mx-auto px-4 pb-20">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Email drafts from tickets</h2>
            {/* <p className="mt-2 text-muted-foreground">
              Draft emails directly from articles: Help Dude uses the selected article as a base, and support engineers can also describe the issue and solution to generate a tailored email draft. The system finds the correct POC to assign the ticket, and lets support engineers adjust the tone, language, and length of the draft as needed.
            </p> */}
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Drafts emails directly from articles</li>
              <li>Also drafts emails based on support engineer-provided issue and solution</li>
              <li>Finds and assigns the correct POC for the ticket</li>
              <li>Allows support engineers to change tone, language, and length of the draft</li>
              <li>Works natively in the Freshdesk marketplace</li>
            </ul>
          </div>
          <div className="relative">
            <ImageWithLoader
              src="./lovable-uploads/a0f67e57-b75c-41ee-9b13-ea3833ba8c08.png"
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
            src="./lovable-uploads/314b183e-d63e-4dee-89fa-eebe141f06d0.png"
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
            <li>Define Dev and QA POC ownership </li>
            <li>Control access with roles and permissions</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Product;
