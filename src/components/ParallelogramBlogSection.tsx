import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category?: string;
  dateLabel?: string;
  author?: string;
}

interface ParallelogramBlogSectionProps {
  articles: Article[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Single card with strict alternating parallelogram + zig zag image position
// ─────────────────────────────────────────────────────────────────────────────
const ParallelogramCard: React.FC<{ article: Article; index: number }> = ({
  article,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // STRICT alternating logic
  // even index (0, 2, 4…) → image LEFT,  content RIGHT, skewX(-10deg)
  // odd  index (1, 3, 5…) → image RIGHT, content LEFT,  skewX(+10deg)
  const isEven = index % 2 === 0;
  const outerSkew = isEven ? -10 : 10; // parallelogram direction
  const innerSkew = isEven ? 10 : -10; // reverse → content stays straight

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {/* ── Outer parallelogram shell ── */}
      <div
        className="overflow-hidden rounded-2xl shadow-xl border border-green-100 bg-white/80 backdrop-blur-md hover:shadow-2xl hover:border-green-300 transition-shadow duration-300"
        style={{
          transform: `skewX(${outerSkew}deg)`,
          transformOrigin: "center",
        }}
      >
        {/* ── Counter-skew so content is always upright ── */}
        <div
          style={{
            transform: `skewX(${innerSkew}deg)`,
            transformOrigin: "center",
          }}
        >
          {/* ── Row: even → row (image L), odd → row-reverse (image R) ── */}
          <div
            className={`flex flex-col items-stretch ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* ── IMAGE side (fixed size, no zoom) ── */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <ImageWithLoader
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover"
                  // NO scale/zoom transforms
                />
                {/* Dim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                {/* Category badge */}
                {article.category && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-[10px] font-bold rounded-full shadow">
                    {article.category}
                  </span>
                )}
              </div>
            </div>

            {/* ── TEXT side ── */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center p-6 md:p-8 lg:p-10">
              {/* Meta */}
              {(article.dateLabel || article.author) && (
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  {article.dateLabel}
                  {article.author ? ` · ${article.author}` : ""}
                </p>
              )}

              {/* Title */}
              <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-snug mb-3 line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Read Full Story button — unchanged routing */}
              <Link
                to={`/resources/${article.slug}`}
                className="inline-flex items-center gap-2 self-start bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-green-700 transition-all duration-300 hover:gap-3 shadow hover:shadow-lg group"
              >
                Read Full Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Section wrapper — sequential stagger via individual card inView triggers
// ─────────────────────────────────────────────────────────────────────────────
const ParallelogramBlogSection: React.FC<ParallelogramBlogSectionProps> = ({
  articles,
}) => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto px-2">
      {articles.map((article, index) => (
        <ParallelogramCard key={article.slug} article={article} index={index} />
      ))}
    </div>
  );
};

export default ParallelogramBlogSection;
