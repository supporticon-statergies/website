import React, { useState } from "react";
import videoThumbnail from "@/assets/thmb.png";
import { SEO } from "@/components/SEO";
import ImageWithLoader from "@/components/ImageWithLoader";
import { Link, useSearchParams } from "react-router-dom";
import { resources } from "@/data/resources";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { CaseStudiesList } from "@/components/CaseStudiesList";
import {
  Play,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { assetUrl } from "@/lib/baseUrl";
import { KnowledgeHubVisual, AmbientAccent } from "@/components/PageVisuals";

const categories = [
  { id: "sources", label: "Sources" },
  { id: "blogs", label: "Blogs" },
  { id: "case-studies", label: "Case Studies" },
  { id: "videos", label: "Videos" },
  { id: "events", label: "Events" },
];

const EventsView = () => {
  const [showPastEventDetails, setShowPastEventDetails] = useState(false);

  return (
    <div className="text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-green-100/80 drop-shadow-sm text-green-700 font-semibold text-sm border border-green-200">
        Upcoming & Past Events
      </div>
      <h2 className="font-display text-4xl font-extrabold mb-8 text-slate-900 leading-tight">
        Empowering customers to{" "}
        <span className="text-green-600">learn and grow</span> together
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        At events we showcase the success stories of our customers, and bring
        digital transformation & service experience leaders together.
      </p>

      {/* Two Cards Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Past Events Card - Left Side */}
        <div
          onClick={() => setShowPastEventDetails(!showPastEventDetails)}
          className="bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-8 shadow-lg relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:border-green-300"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-green-200 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50"></div>
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              ✅ Past Events
            </h3>
            <p className="text-slate-600 font-medium text-lg mb-4">
              SupportIcon HackFest 2025
            </p>
            <p className="text-slate-500 text-sm">
              October 31 to November 1, 2025
            </p>
            <p className="text-green-600 font-semibold mt-4">
              {showPastEventDetails ? "Hide Details" : "View Details"} →
            </p>
          </div>
        </div>

        {/* Upcoming Events Card - Right Side */}
        <div className="bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50 bg-primary"></div>
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              📅 Upcoming Events
            </h3>
            <p className="text-slate-600 font-medium text-lg">
              Stay tuned! We'll be announcing new events and webinars soon.
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Details Section */}
      {showPastEventDetails && (
        <div className="mt-8 bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-6 md:p-12 shadow-lg relative overflow-hidden text-left animate-in fade-in zoom-in duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50"></div>

          <div className="bg-slate-50/50 rounded-2xl p-6 md:p-8">
            <h4 className="text-2xl font-bold mb-4 text-slate-900">
              🚀 SupportIcon HackFest 2025
            </h4>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              A 2-Day Intensive Development Sprint, where students and early
              career builders got hands on with real ticketing system software
              development, from first idea to market ready pitch.
            </p>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 mb-8">
              <h5 className="font-semibold text-slate-900 mb-4">
                Event Details
              </h5>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Date:</strong> October 31 to November 1, 2025
                </li>
                <li>
                  <strong>Time:</strong> 9:00 AM to 5:00 PM (IST)
                </li>
                <li>
                  <strong>Venue:</strong> Annapoorana Engineering College,
                  Salem, Tamil Nadu, India
                </li>
              </ul>
            </div>

            <h5 className="text-xl font-bold mb-4 text-slate-900">
              Not Your Traditional Hackathon
            </h5>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Most hackathons end at 'build something cool'. HackFest 2025 took
              participants further, applying the same industrial standards used
              to build the best ticketing system products in the market.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Estimate reading time
const readingTime = (excerpt: string) => {
  const words = excerpt.split(" ").length * 15; // approx full article words
  return Math.max(3, Math.round(words / 200));
};

// Featured card, for the top side by side articles
const BlogFeaturedCard = ({
  article,
  index,
}: {
  article: (typeof resources)[0];
  index: number;
}) => {
  const { ref, revealClasses } = useReveal();
  return (
    <div ref={ref} className={revealClasses}>
      <Link to={`/resources/${article.slug}`} className="group block h-full">
        <div className="h-full relative rounded-3xl overflow-hidden bg-white shadow-xl border border-green-100 hover:shadow-2xl hover:border-green-300 transition-all duration-500">
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <ImageWithLoader
              src={article.image}
              alt={article.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Featured badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
              <Sparkles className="w-3 h-3" />
              Article {index + 1}
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-500/20 backdrop-blur text-green-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-400/30">
                  {article.category === "Elevate Your Support"
                    ? "🚀 Elevate"
                    : "✨ Exp."}
                </span>
                <span className="flex items-center gap-1 text-white/70 text-[10px]">
                  <Clock className="w-3 h-3" /> {readingTime(article.excerpt)}{" "}
                  min read
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2 transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-white/70 text-xs line-clamp-2 mb-3">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-slate-300 font-bold text-xs group-hover:gap-3 transition-all duration-300">
                Read full article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Individual blog card
const BlogCard = ({
  article,
  index,
}: {
  article: (typeof resources)[0];
  index: number;
}) => {
  const { ref, revealClasses } = useReveal();
  return (
    <div
      ref={ref}
      className={revealClasses}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Link to={`/resources/${article.slug}`} className="group block h-full">
        <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white/75 backdrop-blur-md border border-green-100 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300">
          {/* Image */}
          <div className="relative h-44 overflow-hidden flex-shrink-0">
            <ImageWithLoader
              src={article.image}
              alt={article.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-white/95 backdrop-blur text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-green-100/50">
                {article.category === "Elevate Your Support"
                  ? "🚀 Elevate"
                  : "✨ Exp."}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <Clock className="w-3 h-3" /> {readingTime(article.excerpt)} min
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <CalendarDays className="w-3 h-3" /> {article.dateLabel}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2 line-clamp-2 transition-colors duration-300">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-500 text-[11px] line-clamp-3 flex-1 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-green-50 flex items-center justify-between">
              <div className="flex items-center gap-2 group/author hover:bg-slate-500 px-3 py-1.5 rounded-full transition-colors duration-300 -ml-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-white" />
                </div>
                <span className="text-[10px] font-medium text-slate-500 group-hover/author:text-white transition-colors">
                  {article.author || "Help Dude"}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 group-hover:gap-2 transition-all duration-300">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Resources = () => {
  useScrollToTop();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "sources";

  // First 2 articles for the top side by side section
  const [featured1, featured2, ...rest] = resources;

  return (
    <main className="min-h-screen bg-transparent pb-20 overflow-hidden">
      <SEO
        title="Resources, SupportIcon"
        description="Insights and guides for support engineering leaders and practitioners."
        canonicalPath="/resources"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SupportIcon Resources",
        }}
      />

      {/* Ambient accents */}
      <AmbientAccent position="right" color="emerald" />
      <AmbientAccent position="left"  color="blue"    />

      <section className="container mx-auto px-4 py-8 md:py-16 relative">
        {/* ✅ Decorative Oval Background Shape - centered behind heading */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1200px] aspect-[2/1] bg-green-100/40 rounded-[100%] blur-3xl -z-10 animate-in fade-in zoom-in duration-1000" />

        {/* Header content — split layout: copy left, visual right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-green-200/50">
              <Sparkles className="w-3.5 h-3.5" />
              Knowledge Hub
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Resource Hub
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              Workflows, AI best practices, and stories from the frontlines of
              support engineering.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <KnowledgeHubVisual />
          </div>
        </div>

        {/* Filter tabs container - The "Whole Big Oval Shape" */}
        <div className="relative mb-16 max-w-fit mx-auto bg-white/70 backdrop-blur-xl rounded-full border border-green-100 p-1.5 shadow-xl flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                searchParams.set("tab", cat.id);
                setSearchParams(searchParams);
              }}
              className={`px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "text-slate-500 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content panels */}
        {activeTab === "sources" ? (
          <div className="text-center py-20 px-4 bg-white/60 backdrop-blur-md rounded-3xl border border-green-100 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Download Our Sources
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              In depth playbooks crafted for support teams, download and share
              with your crew.
            </p>
            <Link
              to="/sources"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg shadow-primary/30"
            >
              Get The Modern Customer Success Playbook
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : activeTab === "case-studies" ? (
          <CaseStudiesList />
        ) : activeTab === "videos" ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Watch &amp; Learn
              </h2>
              <p className="text-slate-500">
                See Supporticon in action, product walkthroughs, demos, and
                insights.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-green-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800">
                <video
                  className="w-full h-full object-contain bg-white"
                  controls
                  playsInline
                  poster={videoThumbnail}
                  controlsList="nodownload"
                >
                  <source
                    src={assetUrl("/supporticon_video_720p.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-green-600 ml-0.5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                    Product Demo
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Supporticon, See It in Action
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Watch how Supporticon empowers support engineers to find
                  answers instantly, resolve tickets faster, and eliminate
                  burnout, all from one unified AI powered platform.
                </p>
              </div>
            </div>
          </div>
        ) : activeTab === "events" ? (
          <div className="max-w-6xl mx-auto">
            <EventsView />
          </div>
        ) : (
          /* Default Resource Grid Layout */
          <div>
            {/* Top Side by Side Featured Articles */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <BlogFeaturedCard article={featured1} index={0} />
              <BlogFeaturedCard article={featured2} index={1} />
            </div>

            {/* Section Divider */}
            <div className="flex items-center gap-4 my-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-100 to-transparent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 px-4">
                Latest Insights
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-100 to-transparent" />
            </div>

            {/* Consistently 3 columns for regular grid on desktop */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article, i) => (
                <BlogCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Resources;
