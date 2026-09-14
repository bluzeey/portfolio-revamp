import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { BlogIllustration } from "./BlogIllustration";
import { ArrowUpRight } from "./Icons";

type PostCardProps = {
  post: PostMeta;
};

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link className="post-card" href={`/blog/${post.slug}`}>
      <BlogIllustration compact post={post} />
      <div className="post-meta-row">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-card-bottom">
        <ul className="tag-list" aria-label="Article tags">
          {post.tags.slice(0, 2).map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <ArrowUpRight />
      </div>
    </Link>
  );
}
