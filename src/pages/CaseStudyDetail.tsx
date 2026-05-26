import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { caseStudies } from "@/components/CaseStudiesList";
import {
  ArrowLeft,
  MessageSquare,
  TrendingUp,
  BookOpen,
  Users,
  Clock,
  Database,
  Eye,
  Lightbulb,
  Shield,
  Zap,
  Workflow,
  BarChart,
  CheckCircle,
  Briefcase,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Button } from "@/components/ui/button";

const CaseStudyDetail = () => {
  useScrollToTop();
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the case study by converting title to slug if needed, or by index
  // For now, let's assume we pass an index or slug.
  // Let's find it by a simplified slug based on title.
  const study = caseStudies.find(
    (s) =>
      s.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-") === slug,
  );

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <Button onClick={() => navigate("/resources?tab=case-studies")}>
          Back to Case Studies
        </Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-transparent pb-20">
      <SEO title={`${study.title} | Case Study`} description={study.summary} />

      <div className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <Link
          to="/resources?tab=case-studies"
          className="inline-flex items-center text-slate-500 hover:text-green-600 mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-amber-50 text-amber-900 border border-amber-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              {study.industry}
            </span>
            <span className="bg-rose-50 text-rose-600 border border-rose-100 rounded-full px-4 py-1.5 text-xs font-bold">
              Pain: {study.pain}
            </span>
            <span className="bg-green-50 text-green-700 border border-green-100 rounded-full px-4 py-1.5 text-xs font-bold">
              Feature: {study.feature}
            </span>
          </div>

          <div className="flex items-start gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 shadow-sm">
              <study.icon className="w-8 h-8" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {study.title}
            </h1>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-10" />
        </div>

        {/* Content Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-green-100 p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-[100px] -z-10" />

          <div className="space-y-8">
            {study.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Solution Box */}
          <div className="mt-16 bg-green-50/50 border border-green-200 rounded-3xl p-8 md:p-12 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-green-900 text-lg uppercase tracking-widest">
                The Solution
              </h3>
            </div>
            <p className="text-xl text-green-800 leading-relaxed font-bold">
              {study.featureExplanation}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Ready to write your own success story?
          </h3>
          <Button
            size="lg"
            variant="hero"
            className="rounded-full px-12 py-7 text-lg font-bold shadow-xl hover:scale-105 transition-all"
            onClick={() =>
              window.open(
                "https://zbooking.in/PoPU8",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Book Demo
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyDetail;
