import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion-utils";
import { CheckCircle, ChevronRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-200/30 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 text-center max-w-4xl">
        <FadeUp>
          <div className="section-label mx-auto mb-8 w-fit">Get Started Today</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Setup in 15 Minutes.{" "}
            <span className="gradient-text">Customer Outcomes from Day One.</span>
          </h2>
          <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sign up and see your first customer intelligence insight in under 15
            minutes. No implementation project. No IT dependency.
            Your customers start experiencing the difference the same week you deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="hero"
              className="rounded-full px-10 py-6 text-base font-bold shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.freshworks.com/apps/helpdude_1/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Start Your Exclusive Trial
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Free to start
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Live in minutes
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default FinalCTASection;
