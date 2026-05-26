import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
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
}

interface ScrollSnapBlogSectionProps {
  articles: Article[];
  type: "blog" | "case-studies";
}

// Generate a gradient based on article index
const getGradientByIndex = (index: number): string => {
  const gradients = [
    "from-blue-600 via-purple-600 to-pink-600",
    "from-emerald-600 via-teal-600 to-cyan-600",
    "from-orange-600 via-red-600 to-pink-600",
    "from-violet-600 via-purple-600 to-fuchsia-600",
    "from-green-600 via-emerald-600 to-teal-600",
    "from-indigo-600 via-purple-600 to-pink-600",
  ];
  return gradients[index % gradients.length];
};

const ScrollSnapBlogSection: React.FC<ScrollSnapBlogSectionProps> = ({
  articles,
  type,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || isScrolling) return;

      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const itemHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / itemHeight);

      if (newIndex !== activeIndex && newIndex < articles.length) {
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex, articles.length, isScrolling]);

  const handleArticleClick = (index: number) => {
    setIsScrolling(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  const currentArticle = articles[activeIndex];
  const progress = ((activeIndex + 1) / articles.length) * 100;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
      {/* Left Panel - Sticky Visual (40%) */}
      <div className="hidden lg:block fixed left-0 top-0 w-2/5 h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentArticle && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Try to load image, fallback to gradient */}
              <div className="relative w-full h-full">
                <ImageWithLoader
                  src={currentArticle.image}
                  alt={currentArticle.alt}
                  className="w-full h-full object-cover"
                />
                {/* Fallback gradient for missing images */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getGradientByIndex(
                    activeIndex,
                  )} opacity-0 hover:opacity-10 transition-opacity`}
                />
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block mb-4 px-3 py-1 bg-green-500/20 backdrop-blur border border-green-400/30 rounded-full text-green-300 text-xs font-semibold">
                    {type === "blog" ? "📝 Article" : "📊 Case Study"}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 leading-tight line-clamp-3">
                    {currentArticle.title}
                  </h3>
                  {currentArticle.category && (
                    <p className="text-sm text-white/60">
                      {currentArticle.category}
                    </p>
                  )}
                  {currentArticle.dateLabel && (
                    <p className="text-sm text-white/60">
                      {currentArticle.dateLabel}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-green-600"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Right Panel - Scrollable Articles (60% on desktop, 100% on mobile) */}
      <div
        ref={scrollContainerRef}
        className="lg:ml-2/5 w-full lg:w-3/5 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {articles.map((article, index) => (
          <motion.div
            key={article.slug}
            className="h-screen w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 snap-start"
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Mobile Image - Shows on small screens */}
            <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 bg-gradient-to-br from-slate-200 to-slate-300">
              <ImageWithLoader
                src={article.image}
                alt={article.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-2xl">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block mb-4 px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-semibold uppercase tracking-widest"
              >
                {type === "blog" ? "📝 Blog" : "📊 Case Study"}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
              >
                {article.title}
              </motion.h2>

              {/* Meta */}
              {article.category && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-slate-500 text-sm mb-4 font-medium"
                >
                  {article.category}
                </motion.p>
              )}
              {article.dateLabel && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-slate-500 text-sm mb-6 font-medium"
                >
                  {article.dateLabel}
                </motion.p>
              )}

              {/* Excerpt */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-lg text-slate-600 leading-relaxed mb-8 line-clamp-4"
              >
                {article.excerpt}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to={
                    type === "blog"
                      ? `/resources/${article.slug}`
                      : `/resources/case-study/${article.slug}`
                  }
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:gap-5 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  {type === "blog" ? "Read Article" : "View Case Study"}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Article Index */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-12 pt-8 border-t border-slate-200"
              >
                <p className="text-sm text-slate-500 font-medium">
                  {index + 1} of {articles.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Progress Indicator */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-green-600"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Navigation Dots - Desktop only */}
      <div className="hidden lg:fixed lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col lg:gap-3 lg:z-40">
        {articles.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleArticleClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-green-600 scale-125"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title={`Go to article ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      {activeIndex === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:fixed lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 lg:flex lg:items-center lg:gap-2 lg:text-slate-600 lg:text-sm lg:font-medium lg:pointer-events-none"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ScrollSnapBlogSection;
