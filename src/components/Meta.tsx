import { Helmet } from "react-helmet";

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
    <Helmet>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/png" href={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Safer" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
