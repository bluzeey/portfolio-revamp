import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

function wordsToMinutes(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 210));
}

function parseMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  if (typeof data.title !== "string" || typeof data.date !== "string" || typeof data.excerpt !== "string") {
    throw new Error(`Post "${slug}" must include string title, date, and excerpt fields.`);
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    throw new Error(`Post "${slug}" has an invalid date. Use YYYY-MM-DD.`);
  }

  const tags = Array.isArray(data.tags)
    ? data.tags.filter((tag): tag is string => typeof tag === "string")
    : [];

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags,
    featured: data.featured === true,
    readingMinutes: wordsToMinutes(content)
  };
}

function postFiles() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md");
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data, content } = matter(source);
      return parseMeta(slug, data, content);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("Invalid post slug.");
  }

  const source = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
  const { data, content } = matter(source);
  const processed = await remark().use(html).process(content);

  return {
    ...parseMeta(slug, data, content),
    contentHtml: processed.toString()
  };
}
