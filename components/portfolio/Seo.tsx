import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

const siteUrl = "https://sahilmaheshwari.com";
const defaultTitle = "Sahil Maheshwari | AI Developer for Reliable AI Workflows";
const defaultDescription =
  "AI developer Sahil Maheshwari designs and ships reliable AI workflows, agents, retrieval systems, and full stack products for teams with complex work.";

export function Seo({
  title = defaultTitle,
  description = defaultDescription,
  path = "",
  type = "website",
  publishedTime
}: SeoProps) {
  const canonical = `${siteUrl}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#101010" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/images/favicon.png" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Sahil Maheshwari" />
      <meta property="og:image" content={`${siteUrl}/images/profile/sahil-maheshwari.jpg`} />
      <meta property="og:image:alt" content="Portrait of Sahil Maheshwari" />
      <meta property="og:image:width" content="460" />
      <meta property="og:image:height" content="460" />
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {type === "article" ? <meta property="article:author" content={`${siteUrl}/#sahil`} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@TalkinIdeas" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/images/profile/sahil-maheshwari.jpg`} />
    </Head>
  );
}
