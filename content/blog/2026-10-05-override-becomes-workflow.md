---
title: "The override becomes the workflow"
date: "2026-10-05"
excerpt: "A useful limit protects attention by making exceptions scarce, visible, and difficult to repeat without thought."
tags: ["Product design", "Human agency"]
featured: false
---

A limit that can always be extended becomes practice for ignoring limits.

I saw this in an attention blocker I had built for Instagram. After ten minutes, the extension interrupted the page and offered a Continue action. I began clicking it repeatedly. The interruption still appeared at the right time, but the button had become part of the browsing habit. My hand knew the route around the boundary.

On October 4, I replaced that flow with a stricter prototype. It keeps one ten minute Instagram allowance shared across tabs. Once per day, I can use a two minute wrap up after giving a reason and waiting through a 30 second pause. When that ends, the site locks for 60 minutes without another Continue action. Refreshing or reopening the page, even after restarting the browser, should preserve the timer.

Nineteen automated checks passed. I have not yet confirmed the extension through a live Chrome installation, and I do not have evidence that it will change my behaviour. The implementation has already clarified a product question for me: what should software do when the easiest interaction keeps a person inside a choice they were trying to leave?

## An exception can become the default

The original Continue button respected my immediate decision. It also made that decision almost free.

Each click was reasonable in isolation. Another few minutes felt small, and the warning disappeared as soon as I asked. Repeating the exception changed the meaning of the feature. The blocker was no longer enforcing a ten minute limit. It was asking a question whose expected answer had become Continue.

This can happen in many products. A warning that appears too often becomes visual noise. An approval step with no meaningful consequence becomes a reflex. An AI agent that asks for confirmation before every action may look responsible while teaching the user to approve without reading.

The interface still contains a choice. The person may be exercising less judgment each time it appears.

## Good friction gives the decision shape

The replacement makes the exception finite. I can use one short wrap up, and I have to state why. The 30 second pause gives the intention time to become explicit. After that, the boundary becomes firm for an hour.

This design may be too strict. Live use could show that the wrap up is poorly timed or that a browser restart creates an unexpected failure. Those are open questions. What matters in the current prototype is that the exception has a visible cost and an end.

I am starting to think of friction as a way to give a decision shape. The pause can separate an intention from a reflex, while the required reason makes the exception inspectable later. The lock stops the interface from renegotiating the same boundary every few minutes.

The product still needs restraint. Friction can become punishment, and punishment does not create understanding. A useful boundary should be connected to a choice the person made earlier and remain predictable when it activates.

## Responsible software may refuse to optimize continuation

A great deal of software is designed to reduce interruption. Faster onboarding and fewer clicks can make ordinary work easier. Attention tools expose the limit of that instinct because continuation is sometimes the failure state.

AI products will meet the same tension. An assistant can remove effort from drafting another message, opening another task, or continuing a workflow. That convenience is valuable when it serves a clear goal. It can also make repeated action easier than reconsidering whether the action still belongs.

A responsible AI agent may need to notice when an exception is repeating. It could show the original intention, preserve the reason for the last override, or require a stronger review before continuing. The goal would be to support human judgment at the moment when the interface has made judgment easy to skip.

This is different from an agent deciding what is good for the user. The person should set the boundary and understand its consequences. The system's responsibility is to keep that earlier decision from dissolving into a series of effortless exceptions.

## Agency can include a durable no

I care about this beyond one extension because I want to build software that expands what people can do without quietly weakening their ability to stop.

Granveo began from a desire to preserve the path behind a decision. My work on reliable AI workflows keeps returning to permission and human approval. The attention blocker adds another piece. A person's refusal can be important state. The product should not treat every no as temporary friction waiting for a more convenient yes.

The new blocker is still a prototype. Its automated checks prove that the intended rules hold in the tested code paths. They do not prove that the rules are humane or effective in daily use. That evidence can only come after I live with the boundary and see whether it creates a real pause, or merely another ritual to work around.
