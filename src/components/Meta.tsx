import { Meta, Title } from "react-head";

interface PageMetaProps {
  title: string;
  description: string;
}

export default function PageMeta({ title, description }: PageMetaProps) {
  const defaultImage = "https://safer-eosin.vercel.app/vite.png";
  const defaultUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://safer-eosin.vercel.app";
  const siteName = "Safer";
  const locale = "en_US";

  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />

      {/* Open Graph / Facebook / LinkedIn / Discord */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={defaultImage} />
      <Meta property="og:url" content={defaultUrl} />
      <Meta property="og:site_name" content={siteName} />
      <Meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={defaultImage} />
      <Meta name="twitter:site" content="@YourTwitterHandle" />
      <Meta name="twitter:creator" content="@YourTwitterHandle" />
    </>
  );
}
