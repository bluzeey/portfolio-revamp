---
title: "A merged change is still a hypothesis"
date: "2026-09-16"
excerpt: "AI can accelerate software changes, but the work is only complete when the intended behavior is visible and verified in production."
tags: ["Reliable AI workflows", "Software delivery", "Engineering"]
featured: false
---

A change that exists in the repository can still be missing from the product.

I ran into this while working on the Granveo website. I expected recent changes to appear on the live site, including the blog in the navigation. They did not appear as expected. Some images were broken, and the mobile sidebar was not working properly. I even tried pushing a manual commit to see whether the deployed page would update.

The exact cause was still unresolved when I wrote this. The code could be present on the main branch while the production experience remained somewhere else. That gap has made me think about what completion means when software can be changed faster than ever.

## Production has its own truth

A repository shows what was written and committed. It does not show what a user can reach.

Between those two states sits a delivery system. The deployment may watch the wrong branch. A build can fail. An environment setting can point the application toward an older source. Generated pages may not refresh when expected. A browser may hold an old asset. I am listing possible causes here, not claiming that one of them explains the Granveo issue.

The important part is that the interface seen by the user is the final evidence. A green commit does not replace that evidence.

This sounds obvious until the work becomes distributed across several services. A developer can inspect the source and see the intended change. The hosting platform can show a deployment. The live page can still disagree with both. Each system reports one part of the state, so confidence requires connecting them.

## AI makes verification more valuable

AI tools are reducing the time needed to produce a plausible change. An AI developer can ask an agent to add a page, repair a component, or update copy and receive a useful diff quickly. That is real leverage. It also moves the bottleneck.

When writing the change becomes cheap, understanding whether it worked carries more of the value.

The agent needs feedback from the environment where the change will live. Did the build use the new commit? Does the route resolve? Is the navigation visible on a narrow screen? Can a real user reach the article? These checks are part of the implementation because they test the outcome that motivated the code.

Without that loop, workflow automation can create a strange form of progress. More changes are produced, more commits accumulate, and the person still cannot tell which version is real. The output grows while confidence falls.

## Completion needs an observable claim

I want to become more precise about the claim behind each change.

“Added a blog link” is a statement about code. “A visitor can open the production site on mobile, find the blog in the navigation, and reach the article” is an observable claim. The second version tells me what to verify.

This changes how I think about reliable AI workflows. A task should carry its success condition through the whole path. The agent can inspect the repository, make the edit, wait for the deployment, and check the resulting page. If the result differs from the intention, that difference becomes the next input instead of an invisible failure.

Some checks can be automated. Others need a person, especially when the question involves visual quality or whether an interaction feels understandable. The point is to preserve evidence of completion rather than trust the existence of an artifact.

## The feedback loop is part of the product

I started Granveo because I was interested in connecting scattered information. The deployment problem showed me another kind of continuity. An intention begins in a conversation, becomes a code change, passes through infrastructure, and finally appears as an experience. Losing the thread anywhere along that path creates uncertainty about what the system is doing.

This matters beyond websites. An AI agent that prepares an insurance workflow also needs confirmation that a document reached the right stage. A research tool needs to show that a source actually supports the generated claim. In each case, the system should connect its action to visible evidence in the world it is trying to change.

I am still resolving the specific Granveo issue, and I do not want to turn one deployment problem into a universal theory. It has given me a useful standard, though. Faster software development should shorten the distance between an idea and verified reality. Producing more code is only one part of that distance.
