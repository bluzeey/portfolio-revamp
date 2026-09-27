---
title: "Someone has to own the workflow"
date: "2026-09-27"
excerpt: "AI agents become reliable when a named person controls what they may observe, change, and learn from."
tags: ["AI workflows", "Product responsibility"]
featured: false
---

Someone has to own an AI workflow before an agent can act inside it.

While preparing the recent Insuveo material, I returned to a product direction I had parked earlier in September. I had been exploring an assistant around WhatsApp because insurance work often moves through conversations. This direction ran into a basic constraint: an agent could not freely access WhatsApp data or act outside approved business integrations.

At first I treated this as a connector problem. Authority was the larger issue. Even a capable model would have an incomplete view of the work, and there was no clear operating boundary for what it could do with the information it saw.

That changed the sequence of my product questions. Model capability comes after the workflow has granted the product a legitimate place to observe and assist. Action requires another level of permission.

## Permission shapes the product

Access is often represented as a technical checkbox. Teams connect an inbox or authorize an API, then expect the work to begin. Real workflows are less tidy.

Insurance cases can move through email, calls, PDFs, spreadsheets, and messaging channels. Most official records capture only part of that movement. Working from one channel, an AI agent may produce a plausible answer while missing the context that changed elsewhere. Giving it broader access creates another responsibility: the system must respect why each person can see the information in the first place.

This affects product design before it affects compliance. For each case, the agent must know which sources it may use. Clear permission distinguishes drafting an action from executing one. The organization sets that boundary through the person accountable for the workflow.

Permission must also end. If access is withdrawn, the product should know what it may retain and what it must stop using. Agent memory is useful only when authorization travels with the memory.

## An owner creates a learning loop

Insuveo is still exploring the hypothesis. There is no revenue or completed pilot. Discovery conversations have helped map several areas of friction, but they have not shown that a particular workflow will be adopted.

Its next proof point is access to a live workflow with a named operator and regular feedback. That operator can explain why a step exists and whether an output was actually useful.

Without that ownership, product learning becomes vague. Generated summaries may look correct. Proposed follow up messages may sound professional. I still cannot know whether either one fits the case, arrives at the right moment, or creates extra work for someone else.

Ownership turns those questions into observable events. By comparing the product with the current process, the operator can show where responsibility changes hands. When the workflow breaks, that person can distinguish a model error from a missing permission or a wrong product assumption.

## Autonomy should be earned inside the workflow

The current Insuveo plan describes a possible shadow pilot around one placement or claims workflow for four to six weeks. This is still a proposal. During shadow mode, the operator stays responsible while the product learns from real cases.

The product could begin by observing within an approved scope. Its outputs could be compared with the work people already do. Authority would expand only after the system has shown where it helps and where it needs review.

This takes longer than presenting an agent that completes the whole workflow in a demo. That delay supports a more honest form of AI workflow development. Reliability comes from repeated contact with the operating environment, including its permissions and exceptions.

Beyond insurance, AI agents are moving from answering questions to taking actions across business software. That software already carries ownership and access rules, with consequences attached to every action. Intelligence does not remove this structure. Because one tool can cross several steps quickly, the structure becomes more important.

I do not yet know which Insuveo workflow will earn that access. The WhatsApp direction may remain parked, and the first live test may expose a different constraint. What feels clearer is the standard: before giving an agent more autonomy, I need to know who owns the workflow. That person should be able to limit or withdraw its authority, and inspect what it has done.
