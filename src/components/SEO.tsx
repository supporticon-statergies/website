import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  jsonLd?: Record<string, any>;
}

export const SEO = ({ title, description, canonicalPath, image, jsonLd }: SEOProps) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, origin).toString()
    : typeof window !== "undefined"
    ? window.location.href
    : "";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
