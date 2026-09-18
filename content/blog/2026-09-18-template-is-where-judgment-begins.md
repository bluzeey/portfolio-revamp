---
title: "The template is where judgment begins"
date: "2026-09-18"
excerpt: "Templates encode what repeats, while the exceptions show where people and AI systems still need to reason carefully."
tags: ["AI workflows", "Product design"]
featured: false
---

A template becomes valuable when it makes the exception easier to see.

I was reminded of this in a recent conversation about insurance operations. Policy documents followed fixed templates, yet each case still required changes to the wording and details. The work also moved across teams responsible for underwriting, submissions, and reporting. Internal tooling had already reduced parts of the drafting effort, while people still had to coordinate what changed and whether it was correct.

At first, this sounds like an obvious opportunity for more automation. The deeper question is what the template is doing and where its authority ends.

## Repetition contains knowledge

A good template is more than text copied from an earlier file. It is a compressed record of decisions that have been made repeatedly.

Someone decided which clauses belong in the document. The structure reflects how information should be reviewed. Required fields prevent common omissions. Even the order can help another person understand what deserves attention first.

Removing that repetition can save time, but recreating the document from a blank page would lose the accumulated knowledge inside the template. The useful system begins with what the organization already knows.

I learned a related lesson while building FlutFast, a product that packaged recurring Flutter setup such as authentication, onboarding, payments, analytics, and backend configuration. Its value came from giving a developer a coherent starting point. The template reduced setup work. The developer still had to decide how the application should behave.

The starting point and the decision belong together.

## The exception carries the risk

In the insurance workflow I heard about, the repeated structure was only one part of the work. The wording changed because the policy, customer, or case required something different. Those differences may look small in a document comparison, yet they can carry much of the meaning.

This changes how I think about AI workflow development. A system that generates a polished document is less useful if the reviewer cannot quickly identify where it departed from the approved base.

The product should make the delta visible. Which clause changed? What case detail caused the change? Was the wording selected from an accepted variation or drafted for this case? Who needs to review it?

These questions make the exception inspectable. They also give a person a narrower and more meaningful review task than reading the entire document as if every sentence were equally uncertain.

## AI should preserve the baseline

Generative models are good at producing plausible variation. In template driven work, variation is precisely where caution increases.

An AI agent could fill known fields, suggest wording, and route the draft to the appropriate team. It could compare the result with the base document and attach the evidence used for each important change. These are possible product behaviors, not capabilities I have proved in an insurance system.

The baseline matters because it gives the model and the reviewer a shared reference. Without it, a fluent draft can quietly change language that nobody intended to revisit. With it, the system can separate routine completion from a decision that deserves attention.

This is also a more honest way to measure automation. Counting completed documents may hide whether reviewers are spending more time finding subtle changes. A better measure would include the effort required to verify the exceptions and recover from an incorrect one. I am still learning which measures insurance teams actually use, so this remains a design question rather than a settled metric.

## Coordination is part of the document

The recent conversation also involved communication between several teams and biweekly reporting on the work. That detail matters because a document rarely belongs to one person from beginning to end.

A wording change may begin with information from a submission, require an underwriting decision, and later appear in a report. The final file shows the result while hiding much of the coordination that produced it.

A reliable AI workflow should preserve enough of that path for the next person to understand the change. It does not need to record every message. It should keep the source, the reason for the exception, and the approval that allowed it to move forward.

## The edge deserves the product

I am still exploring which insurance problem is specific and painful enough to build around. This conversation did not give me a finished product idea. It gave me a better way to look at operational work.

The repeated center of a process is often visible and easy to demonstrate. The difficult edge contains the local knowledge, responsibility, and handoffs that determine whether the output can be trusted. AI can reduce the cost of the repeated center. The product becomes valuable when it helps people handle the edge with more clarity.
