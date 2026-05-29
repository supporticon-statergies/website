import { Helmet } from "react-helmet-async";
import { absoluteAssetUrl } from "@/lib/baseUrl";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

export const SEO = ({
  title,
  description,
  canonicalPath,
  image,
  jsonLd,
}: SEOProps) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, origin).toString()
    : typeof window !== "undefined"
      ? window.location.href
      : "";
  const imageUrl = image ? absoluteAssetUrl(image) : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
