import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageShell } from "@/components/portfolio/PageShell";
import { PostCard } from "@/components/portfolio/PostCard";
import { Seo } from "@/components/portfolio/Seo";
import { getAllPosts, type PostMeta } from "@/lib/posts";

type BlogProps = { posts: PostMeta[] };

export const getStaticProps: GetStaticProps<BlogProps> = async () => ({
  props: { posts: getAllPosts() }
});

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageShell>
      <Seo
        title="Writing | Sahil Maheshwari"
        description="Essays from Sahil Maheshwari about useful AI, human judgment, connected knowledge, and the future he wants to help build."
        path="/blog"
      />
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow"><span className="status-dot" /> Writing from the work</p>
          <h1>Essays on the future I want to help build.</h1>
          <p>Thoughts on useful AI, connected knowledge, human judgment, and what I learn while turning those ideas into products.</p>
        </div>
      </section>
      <section className="section blog-index-section">
        <div className="shell posts-grid posts-grid-all">
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>
    </PageShell>
  );
}
