import { SEO } from "@/components/SEO";
import ImageWithLoader from "@/components/ImageWithLoader";
import { resources } from "@/data/resources";
import { Link, useParams } from "react-router-dom";
import { ResourceContentBlock } from "@/data/resources";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const ResourceDetail = () => {
  useScrollToTop();
  const { slug = "" } = useParams();
  const resource = resources.find((a) => a.slug === slug);

  if (!resource) {
    return (
      <main className="container mx-auto px-4 py-3 md:py-16">
        <h1 className="font-display text-3xl font-bold">Resource not found</h1>
        <p className="mt-4 text-muted-foreground">
          The resource you are looking for doesn't exist.
        </p>
        <Link to="/resources" className="text-primary mt-6 inline-block">
          ← Back to Resources
        </Link>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Resource",
    headline: resource.title,
    description: resource.excerpt,
    image: resource.image,
    datePublished: resource.isoDate,
    author: resource.author || "Help Dude",
  };

  const renderContentBlock = (block: ResourceContentBlock, idx: number) => {
    switch (block.type) {
      case "heading":
        return (
          <h1
            key={idx}
            className="text-2xl font-bold mt-8 mb-4 font-display text-left"
            style={{ color: "#0f2552" }}
          >
            {block.text}
          </h1>
        );
      case "subheading":
        return (
          <h2
            key={idx}
            className="text-xl font-semibold mt-7 mb-4 font-display text-left"
            style={{ color: "#0f2552" }}
          >
            {block.text}
          </h2>
        );
      case "paragraph":
        return (
          <p
            key={idx}
            className="text-base leading-relaxed text-slate-600 mt-3 mb-3 text-left"
          >
            {block.text}
          </p>
        );
      case "list":
        return (
          <ul
            key={idx}
            className="list-disc pl-6 my-4 text-slate-600 text-left"
          >
            {block.items?.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-white/30 backdrop-blur-sm min-h-screen pb-20">
      <SEO
        title={`${resource.title}, SupportIcon`}
        description={resource.excerpt}
        canonicalPath={`/resources/${resource.slug}`}
        image={resource.image}
        jsonLd={jsonLd}
      />

      <article className="container mx-auto px-4 py-3 md:py-16">
        <header className="max-w-4xl mx-auto text-left mb-10">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700 mb-6 group"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">
              ←
            </span>{" "}
            Back to Resources
          </Link>
          <div className="flex items-center justify-start gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span>{resource.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>{resource.dateLabel}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 text-left">
            {resource.title}
          </h1>
          {resource.subtitle && (
            <p className="text-xl text-slate-500 leading-relaxed text-left">
              {resource.subtitle}
            </p>
          )}
        </header>

        {/* Featured Image - Made smaller and centred as requested */}
        <div className="relative max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
          <ImageWithLoader
            src={resource.image}
            alt={resource.alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Content Section - Reverted to Left to Right layout */}
        <section className="max-w-4xl mx-auto mt-12 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
          {resource.content.map((block, idx) => renderContentBlock(block, idx))}
        </section>

        <footer className="max-w-4xl mx-auto mt-12 text-left">
          <div className="inline-flex items-center gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">
                {resource.author?.charAt(0) || "H"}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">
                {resource.author || "Help Dude Team"}
              </p>
              <p className="text-xs text-slate-500">
                Expert Insights on Support Engineering
              </p>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default ResourceDetail;
