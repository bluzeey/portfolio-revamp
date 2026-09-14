# Sahil Maheshwari portfolio

A strict TypeScript Next.js portfolio for Sahil's work, experience, and essays.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

This checks the writing rule, TypeScript, ESLint, and the production build. The same command runs in GitHub Actions.

## Publishing a post

Add a Markdown file to `content/blog`. The complete schema, editorial constraints and automation behavior live in [`BLOG_PIPELINE.md`](./BLOG_PIPELINE.md).

## Design

The visual source is [`DESIGN.md`](./DESIGN.md). It uses Inter, a near black canvas, three dark surface tones, restrained cobalt violet, and a buttercup accent. The portfolio adds a compact header, a five logo work history, personal project symbols, and Sahil's portrait.
