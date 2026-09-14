# Daily blog pipeline

This repository publishes Sahil Maheshwari's working notes from Markdown files in `content/blog`.

## Content contract

Create one file named `YYYY-MM-DD-short-kebab-slug.md` with this frontmatter:

```yaml
---
title: "A specific, human title"
date: "YYYY-MM-DD"
excerpt: "One sentence that names the observation and why it matters."
tags:
  - Primary topic
  - Secondary topic
featured: false
---
```

The body should normally be 500–900 words. Use Markdown headings, short paragraphs and lists only when they make the idea clearer.

## Source order

1. Sahil's newest first-hand project conversations and notes from the last 24–72 hours.
2. Current work on Insuveo and Indian commercial-insurance workflows.
3. Product and engineering lessons from Granveo, research agents and knowledge systems.
4. Founder lessons that are grounded in a concrete event, experiment or changed belief.

## Editorial rules

- Preserve facts, names, dates and metrics exactly. Never invent a meeting, quote, result or product capability.
- Write in Sahil's first-person voice: direct, curious and willing to name uncertainty.
- Prefer one useful observation over a broad trend summary.
- Separate what someone said, what Sahil observed and what Sahil now infers.
- Do not expose private correspondence, contact details or sensitive personal material.
- Do not turn discovery notes into sales copy. Avoid stock AI language, inflated claims and generic introductions.
- Do not repeat the central argument of an existing post. Read the latest posts before selecting a topic.
- Keep unfinished work honest: use “exploring,” “testing” or “building” when that is the real state.

## Publishing behavior

The daily ChatGPT automation reads current project context, checks this contract and recent posts, then creates exactly one new Markdown file. A repository check validates TypeScript, linting and the production build for every proposed change.
