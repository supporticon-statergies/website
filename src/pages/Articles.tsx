import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageWithLoader from "@/components/ImageWithLoader";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Articles = () => {
  useScrollToTop();
  return (
    <main>
      <SEO
        title="Articles — SupportIcon"
        description="Insights and guides for support engineering leaders and practitioners."
        canonicalPath="/articles"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
        name: "SupportIcon Articles",
        }}
      />

      <section className="container mx-auto px-4 py-3 md:py-16">
        <h1 className="font-display text-4xl font-bold">Articles</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Knowledge for support engineers: workflows, tooling and AI best practices.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card key={a.slug} className="hover-scale">
              {a.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-t-md border-b">
                  <ImageWithLoader
                    src={a.image}
                    alt={a.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle className="line-clamp-2">{a.title}</CardTitle>
                {a.subtitle && (
                  <p className="text-sm text-muted-foreground">{a.subtitle}</p>
                )}
                <p className="text-xs text-muted-foreground">{a.dateLabel}{a.author ? ` • ${a.author}` : ""}</p>
              </CardHeader>

              <CardContent className="text-muted-foreground space-y-3">
                <p className="line-clamp-4">{a.excerpt}</p>
                <Link
                  to={`/articles/${a.slug}`}
                  aria-label={`Read ${a.title}`}
                  className="mt-2 inline-block text-primary"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Articles;

