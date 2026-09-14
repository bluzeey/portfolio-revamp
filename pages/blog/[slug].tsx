import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
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
  return (
    <PageShell>
      <Seo title={`${post.title} — Sahil Maheshwari`} description={post.excerpt} path={`/blog/${post.slug}`} type="article" />
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
        <div className="article-divider" />
        <div className="prose shell narrow-shell" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </PageShell>
  );
}
