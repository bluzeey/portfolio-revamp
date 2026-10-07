---
title: "An outreach agent needs a stop rule"
date: "2026-10-07"
excerpt: "Reliable communication automation should preserve uncertainty and know when leaving a message unsent is the responsible action."
tags: ["AI agents", "Communication"]
featured: false
---

A communication agent needs to know when silence should remain silent.

On October 6, I reviewed 167 insurance conversations that had accumulated through my Insuveo outreach. Insuveo is the commercial insurance workflow product I am exploring. The conversations included new contacts, active exchanges, old acknowledgements, and threads where nobody had replied.

That queue did not contain 167 open opportunities. After reviewing the conversation state, I sent 15 contextual replies and 30 follow ups through Kanbox. I paused 50 dormant threads and deprioritized five weak acknowledgements. The remaining sends were paused as well.

The review did not establish that the dormant contacts were permanently uninterested. It established something narrower: I did not have enough reason to contact them again now.

That distinction feels important for any AI agent that communicates on a person's behalf.

## Silence is ambiguous state

A conventional automation often treats a missing response as a timer. Wait a fixed number of days, send another message, and repeat until the sequence ends.

The logic is easy to implement because silence becomes one predictable state. Human communication is less precise. A person may have missed the message. They may choose not to respond or plan to return later. The same absence can carry different meanings.

An agent should not invent certainty around that gap. It needs a state such as wait or dormant that preserves the ambiguity. In the October 6 workflow, new outreach was supposed to wait at least seven days before another contact, with duplicate nudges avoided. That rule creates space without pretending to know why the person has not answered.

A stop rule turns uncertainty into a responsible operating choice.

## Relationship memory is more than message history

Agent memory for outreach cannot be only a searchable transcript.

The system needs to know who last moved the conversation and whether the next action belongs to me. It should preserve a request to wait and recognize when a reply already closed the immediate question. Timing matters because a relevant message sent too soon can still feel like pressure.

This is different from retrying a failed API call. Repeating a network request can be safe when the operation is idempotent. Repeating a social request creates a new event each time. The recipient has to process it again, and the relationship carries the accumulation.

A useful communication memory should therefore record reasons for inaction. The agent may skip a thread because the last message is recent or because there is no new context to add. That skip should count as a completed decision rather than missing work.

## Activity is not evidence of movement

The numbers from the review need careful interpretation.

Forty five messages were sent. That confirms actions inside the outreach workflow. It does not confirm forty five useful conversations, a design partner, a pilot, or product fit for Insuveo. Even an active or replied state means only that a response exists. The commercial and product meaning has to be learned from what happens next.

I have seen how easily a pipeline turns volume into progress. Prospect counts rise. Follow up queues look busy. A communication agent can make both grow faster while moving no closer to a real workflow or a trusted relationship.

This changes what I would ask the automation to optimize. Sending the maximum number of eligible messages is a weak objective. The system should help maintain conversations where there is a genuine next step and leave the rest alone until new evidence appears.

That restraint is part of product distribution. A person experiences the outreach before they experience the product. Repeated contact without context teaches them something about the judgment behind the software.

## Autonomy should include abstention

AI agents are often demonstrated through visible action. They write, send, update, and close. An unsent message looks like nothing happened, which makes it easy to ignore as a product capability.

For communication, abstention can be the correct result. The agent should be able to say that it reviewed the thread and found no justified next message. A person can then inspect the reason instead of discovering later that the system kept pursuing silence.

Human control still matters. I set the outreach goal and can change the waiting rule. The agent's job is to apply that boundary consistently and surface uncertain cases rather than turn every contact into another send.

The October 6 review is one pass through a changing inbox. The categories may need correction as replies arrive, and a Kanbox success response does not prove that the outreach created useful learning. What I want from the next version is clearer: remember the relationship well enough to continue it, and respect the moments when continuing means waiting.
