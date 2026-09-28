---
title: "An attention agent needs a theory of progress"
date: "2026-09-28"
excerpt: "An attention agent becomes useful when it connects time to the evidence and state changes the work was meant to produce."
tags: ["Personal knowledge", "AI agents"]
featured: false
---

A time tracker can show where my attention went. I still have to decide whether the work moved.

On September 27, I looked at an early ActivityWatch v0.14.0b8 sample from my Mac. The tracker recorded 1 hour and 32 minutes of active time. Of that, 1 hour, 16 minutes, and 45 seconds was uncategorized, about 83 percent. One of the top windows was called “Productivity Causality Problem.”

I could start by building an agent that reads window titles and connects them to projects. This would clean up the chart while leaving a harder question: what change was this time supposed to create?

## Categories describe the surface

A category can tell me which project or activity received time. That label says little about whether the activity produced useful evidence.

An hour spent sending thoughtful discovery messages may be valuable if it opens access to a workflow I can observe. That hour may add very little when it repeats a pattern that has already failed. Writing code can create a working test, or it can deepen a product assumption that nobody has agreed to use.

Application names cannot make that distinction. A model reading the screen will struggle too unless it knows the current goal and the expected next state.

This is where personal knowledge becomes more than a history of documents and browser tabs. Such a system needs a view of what I am trying to learn. It should know which hypothesis a task belongs to and what evidence could change the plan. Classification gains value from that surrounding model.

## Progress needs a next state

My recent Insuveo work makes the gap visible. Insuveo's outreach system has a suppression ledger with 3,112 people and an insurance contact database with 401 entries. One recent automated run identified six new prospects after checking the shared records and prior activity.

Those numbers show that the workflow is doing real operational work. The system deduplicates against earlier activity and preserves continuity. They do not establish that the product hypothesis has moved.

Insuveo still has zero confirmed design partners. Meaningful progress follows a narrower path: a reply can lead to a meeting, a meeting may create access to a live workflow, and that access can support a pilot. Each step changes what I am able to learn. Prospect volume matters only when I can see how it contributes to the next state.

An attention agent should make this path explicit. When it labels a block of time as outreach, it could also show which transition the work was intended to support. Later, the agent could compare that intention with what happened. A task may be complete while the transition remains open.

That difference would help me avoid rewarding myself for volume alone. It would also prevent the opposite error. Some work has a delayed result. A conversation or essay may become useful weeks later, so the system should preserve uncertainty instead of declaring the time wasted.

## The agent should expose its model

I do not want an attention tool that grades every hour. Productivity depends heavily on context, and a confident score would hide the assumptions behind it.

Rather than scoring the work, the agent could state which goal it thinks a block supported and point to the relevant artifacts. I should be able to correct that link or mark it as unknown. Goals may also change. Over time, those corrections might produce a more useful model of how my work actually moves.

This matters beyond personal productivity. Many AI agents will be evaluated by the number of actions they take because action is easy to count. Emails sent and tickets closed can both rise while the underlying outcome stays still. Reliable AI workflow development needs measures that reflect the state people care about, along with a visible explanation of how an action was expected to affect it.

This ActivityWatch sample is small, and I have not built the attention agent yet. Its 83 percent uncategorized share may shrink once the basic rules improve. Still, the missing categories revealed a more important design problem. I need the tool to help me inspect the relationship between attention, evidence, and progress, while leaving room for that relationship to be wrong.
