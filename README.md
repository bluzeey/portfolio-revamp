# Sahil Maheshwari — Portfolio

A strict-TypeScript Next.js portfolio for Sahil's product work, current research threads and working notes.

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

This runs strict TypeScript checking, ESLint and a production build. The same command runs in GitHub Actions.

## Publishing a post

Add a Markdown file to `content/blog`. The complete schema, editorial constraints and automation behavior live in [`BLOG_PIPELINE.md`](./BLOG_PIPELINE.md).

## Design

The visual source is [`DESIGN.md`](./DESIGN.md): an Inter-based dark system built from a near-black canvas, a three-step surface ladder, restrained cobalt-violet and a buttercup accent. The implementation adapts those tokens to a personal portfolio rather than reproducing the reference site's content structure.
