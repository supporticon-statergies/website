import { SEO } from "@/components/SEO";
import ImageWithLoader from "@/components/ImageWithLoader";
import { articles } from "@/data/articles";
import { Link, useParams } from "react-router-dom";
import { ArticleContentBlock } from "@/data/articles";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const ArticleDetail = () => {
  useScrollToTop();
  const { slug = "" } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <p className="mt-4 text-muted-foreground">The article you are looking for doesn't exist.</p>
        <Link to="/articles" className="text-primary mt-6 inline-block">← Back to Articles</Link>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.isoDate,
    author: article.author || "Help Dude",
  };

  const renderContentBlock = (block: ArticleContentBlock, idx: number) => {
    switch (block.type) {
      case "heading":
        return (
          <h1
            key={idx}
            className="text-2xl font-bold mt-8 mb-4"
            style={{ color: "#0f2552" }}
          >
            {block.text}
          </h1>
        );
      case "subheading":
        return (
          <h2
            key={idx}
            className="text-2xl font-semibold mt-7 mb-4"
            style={{ color: "#0f2552" }}
          >
            {block.text}
          </h2>
        );
      case "paragraph":
        return <p key={idx} className="text-base leading-relaxed mt-3 mb-3">{block.text}</p>;
      case "list":
        return (
          <ul key={idx} className="list-disc pl-6 my-4">
            {block.items?.map((item, i) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <SEO
        title={`${article.title} — Help Dude`}
        description={article.excerpt}
        canonicalPath={`/articles/${article.slug}`}
        image={article.image}
        jsonLd={jsonLd}
      />

      <article className="container mx-auto px-4 py-12">
        <header className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold">{article.title}</h1>
          {article.subtitle && (
            <p className="mt-2 text-lg text-muted-foreground">{article.subtitle}</p>
          )}
          <p className="mt-1 text-sm text-muted-foreground">
            {article.dateLabel}{article.author ? ` • ${article.author}` : ""}
          </p>
        </header>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg border">
          <ImageWithLoader
            src={article.image}
            alt={article.alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <section className="prose prose-slate dark:prose-invert max-w-none mt-8">
          {article.content.map((block, idx) => renderContentBlock(block, idx))}
        </section>

        <aside className="mt-10">
          <Link to="/articles" className="text-primary">← Back to Articles</Link>
        </aside>
      </article>
    </main>
  );
};

export default ArticleDetail;