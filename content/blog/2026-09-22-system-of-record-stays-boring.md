---
title: "The system of record should stay boring"
date: "2026-09-22"
excerpt: "AI can interpret messy communication while a deterministic system preserves the authoritative state of the work."
tags: ["AI workflows", "Software architecture"]
featured: false
---

A reliable AI workflow needs a boring place where the truth is stored.

I kept returning to this while evaluating an insurance email agent. Larger insurers already have internal software and technical teams. They can require employees or agents to enter structured data into those systems. If the record already exists, what should an AI layer actually own?

The question becomes harder because insurance coordination does not stay inside one tool. Email and WhatsApp carry questions, attachments, clarifications, and updates between several parties. Some of that information may reach the internal system. Some may remain in a thread or on a person's phone. Creating another dashboard could produce one more partial version of the case. This suggests a boundary between interpretation and authority.

## A record has a narrow job

A system of record should answer ordinary questions consistently. Which customer does this case belong to? What documents have been received? What is the current status? Who changed it, and when?

These questions do not need creative answers. They need stable identifiers, permissions, required fields, and an audit trail. The structure may feel rigid, but that rigidity gives the organization a shared reference.

This helps explain why large companies keep investing in internal software even when much of the work still happens over email. The internal system establishes an official state. Communication explains how people reached it.

Forcing every conversation into a form would lose useful context. Letting every message become an equal source of truth would create a different problem. The product has to preserve the difference between evidence about the work and the accepted state of the work.

## AI can interpret the edge

The messy boundary is where AI may help.

With appropriate access, a system could read an incoming email, connect it to the likely case, identify an attached document, and prepare a proposed update. It could notice that a required detail appears to be missing or bring a relevant message to the reviewer's attention. These are product possibilities I am exploring, not capabilities I have proved in an insurance deployment.

The word proposed matters. An extracted policy number may be wrong. A message may refer to two cases. A summary can omit the sentence that changes the meaning. The model can organize the material, while the authoritative change still needs a clear rule for validation or review.

WhatsApp makes the boundary even more visible. A product cannot assume it can read a private or encrypted conversation. Access depends on the channel, consent, and the available integration. Useful context may exist there without being technically or ethically available to an agent.

This limits the fantasy of a system that understands everything. It also creates a better design question: given the information the product is allowed to use, what can it prepare safely?

## Every suggestion needs a path home

An AI summary that floats beside the real record can create more work. Someone has to compare it with the case, decide what matters, and enter the result elsewhere.

A better workflow would keep the suggestion attached to its source and its destination. The user should be able to see which email or document supplied a value, where that value will be written, and whether the update has been accepted. The model output becomes a reviewable proposal connected to the existing record.

I learned a related lesson while building Granveo, a tool for connecting notes, documents, and sources. Retrieval was useful only when the answer stayed connected to the path that produced it. In an operational system, that path also needs an endpoint. Information should become part of the record through a visible decision.

An AI agent needs enough context to interpret the current event. The institution needs a durable, governed record that another person can trust later.

## The architecture affects distribution

This boundary changes how I think about entering a market with established software.

A new product can begin as a layer beside the systems a company already uses. That lowers the amount of process it has to replace. It can focus on one painful transition, such as moving information from an authorized inbox into a review queue.

The approach still has difficult distribution questions. A larger insurer may prefer to build the layer internally. Integrations can require security reviews and cooperation from an existing vendor. I have not yet spoken with enough operations teams to know who owns this problem or whether an email agent is the right starting point.

That uncertainty is useful. It stops the architecture from becoming a pitch before the workflow has been understood.

I am still exploring the product. The principle feels more stable than the current idea. AI can work in the ambiguous space where information first arrives. The official state should remain inspectable, permissioned, and deliberately changed.