import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { ArrowUpRight } from "@/components/portfolio/Icons";
import { PageShell } from "@/components/portfolio/PageShell";
import { PostCard } from "@/components/portfolio/PostCard";
import { Seo } from "@/components/portfolio/Seo";
import { bookingUrl } from "@/data/site";
import { getAllPosts, type PostMeta } from "@/lib/posts";

type BlogProps = { posts: PostMeta[] };

export const getStaticProps: GetStaticProps<BlogProps> = async () => ({
  props: { posts: getAllPosts() }
});

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageShell>
      <Seo
        title="AI Workflow Essays | Sahil Maheshwari"
        description="Essays from AI developer Sahil Maheshwari about AI workflows, software, human judgment, connected knowledge, and staying useful as engineering changes."
        path="/blog"
      />
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow"><span className="status-dot" /> Writing from the work</p>
          <h1>Essays on AI workflows and the future of software.</h1>
          <p className="page-hero-intro">Thoughts on useful AI, connected knowledge, human judgment, and what engineers need as the work changes.</p>
          <div className="page-hero-actions">
            <a className="text-link" href={bookingUrl} rel="noreferrer" target="_blank">Book a demo <ArrowUpRight /></a>
          </div>
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
