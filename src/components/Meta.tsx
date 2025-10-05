import { Title, Meta, Link } from "react-head";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function PageMeta({
  title,
  description,
  keywords = "",
  image = "https://www.facebook.com/images/fb_icon_325x325.png",
  url = typeof window !== "undefined" ? window.location.href : "",
}: PageMetaProps) {
  return (
    <>
      {/* Basic Meta */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      {keywords && <Meta name="keywords" content={keywords} />}
      <Link rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      <Meta property="og:url" content={url} />
      <Meta property="og:site_name" content="Safer" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={image} />
    </>
  );
}
