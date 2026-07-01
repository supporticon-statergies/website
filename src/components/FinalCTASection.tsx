import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion-utils";
import { CheckCircle, ChevronRight, Zap, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function FinalCTASection() {
  const navigate = useNavigate();
  const [showOptionDialog, setShowOptionDialog] = useState(false);
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
              onClick={() => setShowOptionDialog(true)}
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

      <Dialog open={showOptionDialog} onOpenChange={setShowOptionDialog}>
        <DialogContent className="sm:max-w-xl p-8 rounded-3xl border border-slate-100/50 bg-white/95 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-left">
          <DialogHeader className="text-center sm:text-center pb-4 border-b border-slate-100">
            <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight">
              Get Started with HelpDude
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-2">
              Choose the deployment model that best fits your support team's workflow.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">

 {/* Option 2: HelpDude Standalone */}
            <button
              onClick={() => {
                setShowOptionDialog(false);
                window.open(
                  "https://helpdude-ai.supporticon.com/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-left hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  HelpDude Standalone
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  A standalone AI ticketing platform. Inbound emails automatically converted, logged, and resolved.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                Explore Standalone Platform
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>


            {/* Option 1: HelpDude for Freshdesk */}
            <button
              onClick={() => {
                setShowOptionDialog(false);
                window.open(
                  "https://www.freshworks.com/apps/helpdude_1/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 text-left hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  HelpDude for Freshdesk
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  Marketplace plugin that embeds directly in Freshdesk ticket views. Zero workflow disruption.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:underline">
                Explore Freshdesk Integration
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>

           
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default FinalCTASection;
