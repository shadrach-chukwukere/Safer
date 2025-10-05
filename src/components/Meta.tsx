import { Meta, Title } from "react-head";

interface PageMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function PageMeta({
  title,
  description,
  keywords,
}: PageMetaProps) {
  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      {keywords && <Meta name="keywords" content={keywords} />}
    </>
  );
}
