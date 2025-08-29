import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-imge.png";
import Spotlight from "@/components/Spotlight";
import { Brain, Timer, Search, Plug, Heart, Shield, Users, Zap, Clock, Star, ArrowRight, CheckCircle, Play, X, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState, useEffect } from "react";
import productDemoVideo from "@/assets/product-demo.mp4";
import { CXLeadersForm } from "../components/CXLeadersForm";

const Home = () => {
  useScrollToTop();
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showCXForm, setShowCXForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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
          logo: "/supporticon-uploads/8a9c0dca-e50e-459a-afc4-1e08634ad78b.png",
        }}
      />  
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-subtle-gradient">
          <div className="container mx-auto grid items-center gap-10 px-4 py-3 md:py-20 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">Who supports</span> the support team?
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
            <div className="relative order-1 md:order-2">
              <div
                className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-brand cursor-pointer"
                onClick={() => setShowVideoModal(true)}
              >
                {/* Fallback image that shows when video is not loaded */}
                                 <img
                   src={heroImage}
                   alt="Support team collaboration and empowerment"
                   className="w-full h-full object-cover"
                   style={{
                     display: isVideoPlaying || isVideoPaused ? "none" : "block",
                   }}
                 />

                                 <video
                   className={`w-full h-full object-contain ${
                     isMobile && isVideoPaused ? 'mobile-video-paused' : ''
                   }`}
                   controls={!isMobile || !isVideoPaused}
                   controlsList={isMobile && isVideoPaused ? "nodownload nofullscreen noremoteplayback" : undefined}
                   disablePictureInPicture={isMobile && isVideoPaused}
                   onPlay={() => {
                     setIsVideoPlaying(true);
                     setIsVideoPaused(false);
                   }}
                   onPause={() => {
                     setIsVideoPlaying(false);
                     setIsVideoPaused(true);
                   }}
                   onEnded={() => {
                     setIsVideoPlaying(false);
                     setIsVideoPaused(false);
                   }}
                   poster={heroImage}
                   style={{
                     display: isVideoPlaying || isVideoPaused ? "block" : "none",
                     ...(isMobile && isVideoPaused && {
                       pointerEvents: 'none',
                     })
                   }}
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

                                 {(!isVideoPlaying || isVideoPaused) ? (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                     <div className="text-center space-y-6">
                       {!isVideoPaused && !isVideoPlaying && (
                         <div>
                           <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                             <Play className="h-8 w-8 text-white ml-1" />
                           </div>
                           <p className="text-white/90 text-sm font-medium">
                             Click to play demo video
                           </p>
                         </div>
                       )}

                       {isVideoPaused && (
                         <div>
                           <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const video = e.currentTarget.closest('.relative')?.querySelector('video') as HTMLVideoElement;
                                  if (video) {
                                    video.play();
                                  }
                                }}>
                             <Play className="h-8 w-8 text-white ml-1" />
                           </div>
                           <p className="text-white/90 text-sm font-medium">
                             Continue watching
                           </p>
                         </div>
                       )}
                       
                       {/* CX Leaders Insight Hub Button in Video Overlay */}
                       <div className={isVideoPaused ? "mt-4" : "mt-6"}>
                         <Button 
                           onClick={(e) => {
                             e.stopPropagation();
                             setShowCXForm(true);
                           }}
                           variant="hero" 
                           size="lg"
                           className="text-white border-none shadow-brand hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                         >
                           <FileText className="w-5 h-5 mr-2" />
                           CX Leaders Insight Hub
                         </Button>
                       </div>
                     </div>
                   </div>
                 ) : null}
              </div>
              <Spotlight className="absolute inset-0" />
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-12 md:py-20 bg-muted/30">
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
        <section className="py-12 md:py-20">
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
        <section className="py-12 md:py-20 bg-muted/30">
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
        <section className="py-12 md:py-20">
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
        <section className="py-12 md:py-20 bg-muted/30">
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
        <section className="py-12 md:py-20">
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
                className={`w-full h-full object-contain ${
                  isMobile && isVideoPaused ? 'mobile-video-paused' : ''
                }`}
                controls={!isMobile || !isVideoPaused}
                controlsList={isMobile && isVideoPaused ? "nodownload nofullscreen noremoteplayback" : undefined}
                disablePictureInPicture={isMobile && isVideoPaused}
                autoPlay
                onPlay={() => {
                  setIsVideoPlaying(true);
                  setIsVideoPaused(false);
                }}
                onPause={() => {
                  setIsVideoPlaying(false);
                  setIsVideoPaused(true);
                }}
                onEnded={() => {
                  setIsVideoPlaying(false);
                  setIsVideoPaused(false);
                }}
                style={{
                  ...(isMobile && isVideoPaused && {
                    pointerEvents: 'none',
                  })
                }}
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

              {/* Modal Video Overlay for Paused State */}
              {isVideoPaused && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-center space-y-6">
                    <div>
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors"
                           onClick={() => {
                             const video = document.querySelector('.fixed video') as HTMLVideoElement;
                             if (video) {
                               video.play();
                             }
                           }}>
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      <p className="text-white/90 text-lg font-medium">
                        Continue watching
                      </p>
                    </div>
                    
                    {/* CX Leaders Insight Hub Button in Modal */}
                    <div className="mt-6">
                      <Button 
                        onClick={() => {
                          setShowCXForm(true);
                          setShowVideoModal(false); // Close modal when opening form
                        }}
                        variant="hero" 
                        size="lg"
                        className="text-white border-none shadow-brand hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        CX Leaders Insight Hub
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CX Leaders Form */}
        <CXLeadersForm 
          open={showCXForm} 
          onOpenChange={setShowCXForm}
        />
      </main>
    </>
  );
};

export default Home;
