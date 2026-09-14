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
        title="Working Notes — Sahil Maheshwari"
        description="Notes from Sahil Maheshwari on AI products, insurance workflows, knowledge systems and building through uncertainty."
        path="/blog"
      />
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow"><span className="status-dot" /> Writing from the work</p>
          <h1>Working notes, not polished certainty.</h1>
          <p>Ideas from customer conversations, prototypes, engineering decisions and the questions that survive them.</p>
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
