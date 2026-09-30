---
title: "The permission list is part of the product"
date: "2026-09-30"
excerpt: "Shipping an AI extension forces its data access and responsibility boundaries into a form users can inspect."
tags: ["AI products", "Product distribution"]
featured: false
---

A browser permission is a product claim written in code.

On September 29, I prepared a production Chrome extension for Insuveo, the insurance workflow product I am exploring. It is designed to sit beside Gmail, use visible email context, and accept files selected by the user.

The manifest currently requests storage and activeTab. Host access covers Gmail and the configured Insuveo backend. Completing the Chrome Web Store form required a single purpose description and a justification for each permission, which turned the submission into a useful architecture review.

## The manifest describes the product honestly

A manifest forces more precision than product copy. It records which browser surfaces the extension can enter and which servers it can contact.

In the current flow, opening the panel automatically sends visible Gmail context to the configured backend. Files chosen by the user can be uploaded as well. Insuveo is intended to use that material for summaries, answers, extraction, and suggested replies. Sending emails or making insurance decisions remains outside the product boundary.

These limits need to be clear because a small interface can hide the data path. Users see a side panel inside Gmail. Behind the panel, email context may leave the browser and reach a backend. If a cloud model is added, another system may receive part of the information. The experience feels local while the computation may not be.

Writing the disclosure forced me to describe this movement in plain language. It also exposed a gap between the prototype and the production path. The production backend can currently accept PDF and spreadsheet uploads, but content extraction is unfinished. Accurate disclosure has to leave that capability unfinished in the description too.

## Single purpose should narrow the architecture

Chrome asks for one narrow, understandable purpose. That constraint helps because an AI assistant tends to expand its own scope.

Once an assistant can read email context, it is tempting to let it search more data or take actions. Continuous operation can appear useful as well. Added capabilities eventually make it harder for a user to understand what the extension is allowed to do.

The permission review also raised a smaller engineering question. activeTab may be redundant when the extension already uses a Gmail content script with explicit host access. If testing confirms that, removing it would reduce the declared permission surface while preserving the intended workflow.

Details like this rarely appear in a product demo. They matter because permissions accumulate. A capability that is convenient during development can become a permanent part of the trust users are asked to grant.

## Distribution creates a public contract

I have thought about distribution mostly as reach: publish the extension, show it to brokers, and learn whether the workflow is useful. Store submission turns internal product assumptions into public commitments.

The privacy page now has to explain the information that leaves the browser and the limits on what the system can do. Its wording must agree with the manifest. Runtime behavior has to agree with both.

For reliable AI workflow development, this alignment is part of the product. Permissions and privacy disclosure describe the same promise as the actual network request. When they drift apart, the interface can remain polished while the user's understanding becomes false.

The production extension now exists and its local package checks passed. End to end connectivity remains unverified because the backend health check timed out. Live file extraction is also incomplete. These limits belong in the product story.

I want to build software that can work inside the places where real decisions happen. Access to that context carries a cost. The closer an AI assistant gets to private operational information, the more precisely its permissions and limitations need to be expressed. Preparing the store listing has not validated Insuveo's product direction. It has clarified the responsibility attached to distributing it.
