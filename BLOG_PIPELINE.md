# Daily blog pipeline

This repository publishes Sahil Maheshwari's essays from Markdown files in `content/blog`.

## Content contract

Create one file named `YYYY-MM-DD-short-kebab-slug.md` with this frontmatter:

```yaml
---
title: "A specific, human title"
date: "YYYY-MM-DD"
excerpt: "One sentence that names the idea and why Sahil cares about it."
tags: ["Primary topic", "Secondary topic"]
featured: false
---
```

The body should usually be 600 to 900 words. Use short paragraphs. Add headings only when the thought changes direction.

## Source order

1. Start with Sahil's newest first hand notes, project entries, conversations, and changed opinions from the past few days.
2. Look for the wider question behind a specific observation. Recurring themes include access to intelligence, information continuity, personal knowledge, human judgment, learning, and responsibility in AI products.
3. Use Granveo, Insuveo, FlutFast, and KanbanCast as evidence when they help. The article should still make sense to a reader who has never heard of any of them.
4. Draw on lessons from Pave, Silatus, CodeVyasa, Assembo, and Aqualogica only when the source supports the detail.
5. Relevant themes may use natural search language such as AI developer, AI workflow development, AI agents, retrieval, agent memory, and workflow automation. Use the phrase that fits the thought. Never repeat a term merely to target a keyword.

## Editorial rules

1. Preserve every fact, name, date, and metric. Never invent a meeting, quote, result, or product capability.
2. Write in Sahil's first person voice. He is curious, direct, and willing to leave a question unresolved.
3. Choose one broad idea and develop it through a concrete experience. Do not turn private notes into a diary entry or a project update.
4. Separate observation from inference. Keep unfinished work honest with words such as "exploring," "testing," or "building" when they describe the current state.
5. Do not expose private correspondence, contact details, or sensitive personal material.
6. Read the existing posts before choosing a topic. Do not repeat their central argument.

## Human writing check

1. State the point directly. Remove staged openings and the repeated "not X but Y" formula.
2. Do not use em dashes, en dashes, or double hyphens as punctuation. Use a period, comma, colon, or a rewritten sentence.
3. Avoid decorative bold text, dramatic fragments, forced groups of three, and one line endings that repeat the previous paragraph.
4. Replace sales language and abstract AI phrases with the concrete detail that supports the claim.
5. Read the draft aloud. Vary sentence length and keep Sahil's uncertainty where it is part of the thought.

## Conversation prompt

Every published article page includes a shared invitation to book a demo or email Sahil. Do not paste a repeated sales paragraph into the Markdown. Let the article reach its own honest conclusion and allow the site component to carry the invitation.

## Publishing behavior

The daily automation reads current project context, this contract, and recent posts. It creates one Markdown file. Repository checks then validate the copy rule, TypeScript, linting, and the production build.
