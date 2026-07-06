import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeaturedSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      {/* Background Shapes & Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/50 rounded-full blur-[90px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-emerald-100 text-emerald-800 shadow-sm border border-emerald-200/50 transition-colors">
            📊 SaaS Support Readiness Assessment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Is your support ready to scale?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Answer 20 quick questions about your SaaS support operations.<br />
            Get your overall readiness score and actionable insights instantly.
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-xl shadow-emerald-600/30 transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white border-0 group px-10 py-6 text-base font-bold"
              onClick={() =>
                window.open(
                  "https://q-a-website.onrender.com/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Take On
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
