import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { BlogIllustration } from "@/components/portfolio/BlogIllustration";
import { ConversationCta } from "@/components/portfolio/ConversationCta";
import { ArrowLeft } from "@/components/portfolio/Icons";
import { PageShell } from "@/components/portfolio/PageShell";
import { formatDate } from "@/components/portfolio/PostCard";
import { Seo } from "@/components/portfolio/Seo";
import { getAllPosts, getPostBySlug, type Post } from "@/lib/posts";

type PostPageProps = { post: Post };

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug;
  if (typeof slug !== "string") return { notFound: true };
  return { props: { post: await getPostBySlug(slug) } };
};

export default function PostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const articleUrl = `https://sahilmaheshwari.com/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    image: "https://sahilmaheshwari.com/images/profile/sahil-maheshwari.jpg",
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      "@id": "https://sahilmaheshwari.com/#sahil",
      name: "Sahil Maheshwari",
      url: "https://sahilmaheshwari.com"
    }
  };

  return (
    <PageShell>
      <Seo
        title={`${post.title} | Sahil Maheshwari`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        publishedTime={post.date}
        type="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <article className="article-shell">
        <header className="article-header shell narrow-shell">
          <Link className="back-link" href="/blog"><ArrowLeft /> All writing</Link>
          <div className="post-meta-row">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <ul className="tag-list" aria-label="Article tags">
            {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </header>
        <div className="article-illustration-shell shell">
          <BlogIllustration post={post} />
        </div>
        <div className="article-divider" />
        <div className="prose shell narrow-shell" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <ConversationCta />
      </article>
    </PageShell>
  );
}
