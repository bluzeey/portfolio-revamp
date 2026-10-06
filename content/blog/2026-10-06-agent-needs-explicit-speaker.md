---
title: "An agent needs to know who it speaks for"
date: "2026-10-06"
excerpt: "Autonomous communication becomes responsible when every action is bound to the intended account and visible identity."
tags: ["AI agents", "Product responsibility"]
featured: false
---

An agent can be authenticated and still be uncertain about who it is speaking as.

I ran into this while testing a Substack Threads connector on October 5. The goal was practical: let an automation find recent posts and publish thoughtful replies from my account. A validation run made 13 attempts. Ten sends were confirmed and three returned an Auth failed response. Five of the ten replies were independently visible under the intended profile. The other five had send confirmations, but the read back checks failed.

None of this proves that a reply was published from the wrong identity. A review of the automation repository did reveal that its profile detection could select another available profile when the intended one was not resolved. That was a code risk, not an observed outcome. Syntax checks passed, while full dependency tests were unavailable. I would not call the system ready for unattended operation yet.

The experience exposed a wider problem. When an AI agent communicates in public, identity is part of the action itself.

## A valid session is only the beginning

Authentication answers whether the software can access an account. It does not fully answer which profile should speak or whose history should guide the reply. The public destination has to be explicit as well.

That distinction can disappear in a simple tool call. The agent receives a post, writes a response, and calls a send function. If the connector returns success, the workflow may mark the task complete. The message carries more than text, though. It inherits the reputation and relationships of the visible account.

Choosing the wrong profile would be a serious routing error. The same sentence can mean something different when it comes from another person or publication. Existing conversations may also change how a new reply is understood.

The system therefore needs a stable actor before it generates the message. If the intended profile cannot be resolved, stopping is the correct behaviour.

## Voice is operational state

Product teams often treat tone as a prompt. A few instructions tell the model to sound thoughtful or concise.

The speaker's identity includes more than tone. It includes what that person has already said, which topics they engage with, and what they are willing to promise. An autonomous reply can create an expectation of another conversation. It can also appear inconsistent with an earlier position.

This is where agent memory becomes concrete. Memory should help preserve continuity in the person's public voice. It should not turn every past interaction into reusable context. The agent needs the relevant history and the authority to use it within a clear boundary.

For my Threads workflow, that could begin with a narrow rule: use one explicit profile identifier, refuse fallback to another profile, and store the public result beside the original post. The code should know who acted before deciding what happened.

## Confirmation needs the same identity

The difference between a send confirmation and a visible reply also matters.

A connector may report that it accepted the request. Read back asks a stronger question: can the system find the resulting reply under the intended profile and connect it to the target post? The first result describes a request. The second describes the public state that the automation meant to create.

Five replies in the test had both forms of evidence. Five had only the connector's send confirmation because the read back failed. I cannot turn that gap into a claim that the replies were absent. I can use it to define the missing verification.

The action record should preserve the target and the profile identifier. When the resulting public object can be retrieved, it should be attached to that record. If verification remains unavailable, the state should stay uncertain rather than quietly becoming completed.

## Autonomy carries someone into the room

I am interested in AI agents that participate where work and relationships already happen. Communication is attractive because the interface is familiar and the action feels small. A reply can still carry a person's name into a conversation they did not personally open.

That changes the standard for workflow automation. Permission to call the service is necessary. Reliable representation also requires identity binding and a visible history of what was said.

The Threads experiment is incomplete. Ten send confirmations show that the connector can perform part of the workflow, while the authentication failures and partial read back show where the operating model remains weak. The profile selection risk was found during review, not through a public mistake.

I want to resolve that boundary before making the routine more autonomous. The next useful test is whether every reply can remain bound to one explicit profile from selection through read back.
