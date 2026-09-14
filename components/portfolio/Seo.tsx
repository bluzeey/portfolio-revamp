import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

const siteUrl = "https://sahilmaheshwari.com";
const defaultTitle = "Sahil Maheshwari — Product Engineer & Founder";
const defaultDescription =
  "Sahil Maheshwari builds AI products and information workflows across research, knowledge systems and commercial insurance.";

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@TalkinIdeas" />
    </Head>
  );
}
