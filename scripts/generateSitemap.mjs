import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const siteUrl = "https://sahilmaheshwari.com";
const postsDirectory = path.join(process.cwd(), "content", "blog");
const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const posts = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md")
  .map((file) => {
    const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
    const { data } = matter(source);

    if (typeof data.date !== "string") {
      throw new Error(`${file} must include a date before the sitemap can be generated.`);
    }

    return {
      path: `/blog/${file.replace(/\.md$/, "")}`,
      lastModified: data.date
    };
  })
  .sort((a, b) => b.lastModified.localeCompare(a.lastModified));

const latestDate = posts[0]?.lastModified ?? new Date().toISOString().slice(0, 10);
const entries = [
  { path: "/", lastModified: latestDate, changeFrequency: "weekly", priority: "1.0" },
  { path: "/blog", lastModified: latestDate, changeFrequency: "daily", priority: "0.9" },
  ...posts.map((post) => ({
    ...post,
    changeFrequency: "monthly",
    priority: "0.8"
  }))
];

const urls = entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(`${siteUrl}${entry.path}`)}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(outputPath, sitemap, "utf8");
console.log(`Generated sitemap with ${entries.length} URLs.`);
