import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const targets = [
  "content/blog",
  "pages",
  "components/portfolio",
  "data/site.ts",
  "BLOG_PIPELINE.md",
  "README.md"
];
const sourceExtensions = new Set([".md", ".ts", ".tsx"]);

function collect(target) {
  const absolute = path.join(root, target);
  const stat = fs.statSync(absolute);

  if (stat.isFile()) return [absolute];

  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(absolute, entry.name);
    if (entry.isDirectory()) return collect(path.relative(root, child));
    return sourceExtensions.has(path.extname(entry.name)) ? [child] : [];
  });
}

const problems = [];

for (const file of targets.flatMap(collect)) {
  const relative = path.relative(root, file);
  const lines = fs.readFileSync(file, "utf8").split("\n");

  lines.forEach((line, index) => {
    if (/[\u2013\u2014]/u.test(line)) {
      problems.push(`${relative}:${index + 1} contains a long dash`);
    }

    if (path.extname(file) === ".md" && /\s--\s/u.test(line)) {
      problems.push(`${relative}:${index + 1} uses a double hyphen as punctuation`);
    }
  });
}

if (problems.length > 0) {
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log("Copy check passed.");
