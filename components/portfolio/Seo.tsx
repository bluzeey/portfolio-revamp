import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

const siteUrl = "https://sahilmaheshwari.com";
const defaultTitle = "Sahil Maheshwari | Product Engineer and Founder";
const defaultDescription =
  "Sahil Maheshwari builds tools that help people learn, preserve context, and make difficult decisions with more clarity.";

export function Seo({
  title = defaultTitle,
  description = defaultDescription,
  path = "",
  type = "website"
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
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@TalkinIdeas" />
    </Head>
  );
}
