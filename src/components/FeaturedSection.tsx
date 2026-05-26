import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import postImage from "@/assets/post_image.png";

export const FeaturedSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#e8f5d8] to-[#c8e6a0]">
      {/* Background Shapes & Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/50 rounded-full blur-[90px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left: Image Card */}
          <Card className="border-0 shadow-xl bg-white/30 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={postImage}
              alt="Featured Insight"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-full transition-transform duration-700 group-hover:scale-105"
            />
          </Card>

          {/* Center: Content + Button */}
          <Card className="border border-white/20 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 flex flex-col justify-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-green-100 text-green-800 shadow-sm border border-green-200/50 group-hover:bg-green-200 transition-colors">
                ✨ Featured Insight
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display tracking-tight text-slate-900 leading-tight">
                Empower your support team with AI.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Discover how modern teams are leveraging Supporticon to protect
                their mental health while delivering world-class customer
                experiences.
              </p>
              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg shadow-green-600/20 hover:shadow-xl shadow-green-600/30 transition-all duration-300 bg-green-600 hover:bg-green-700 text-white border-0 group px-8"
                >
                  <Link to="/resources">
                    Explore Resources
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Right: Must read list card */}
          <Card className="border border-white/20 shadow-xl bg-white/90 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-800">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm">
                📚
              </span>
              Must Reads
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "The Future of AI in Support Channels",
                  time: "5 min read",
                  tag: "Guide",
                },
                {
                  title: "Building Resilient CX Teams Today",
                  time: "4 min read",
                  tag: "Culture",
                },
                {
                  title: "Automating the Mundane Seamlessly",
                  time: "6 min read",
                  tag: "Strategy",
                },
                {
                  title: "Mental Health on the Frontline",
                  time: "8 min read",
                  tag: "Wellness",
                },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100/80 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex-1">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-800 group-hover:text-green-600 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  {i !== 3 && (
                    <div className="h-px w-full bg-slate-100 mt-5 group-hover:bg-green-100 transition-colors" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                to="/resources"
                className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1.5 group transition-colors"
              >
                View all articles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
