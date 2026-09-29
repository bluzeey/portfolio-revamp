---
title: "The demo data is already a product decision"
date: "2026-09-29"
excerpt: "Synthetic workflows shape what a prototype can appear to prove, so their assumptions need to stay visible."
tags: ["Product discovery", "AI prototypes"]
featured: false
---

The data inside a prototype can decide the answer before a user asks the question.

On September 28, I built an Insuveo demo around a Gmail style insurance inbox. The prototype has six role specific mailboxes: claims adjuster, commercial underwriter, broker placement, policy servicing, employee benefits, and insurance operations. Each role has 40 fictional threads with three messages, creating 720 synthetic messages across the prototype.

In the side panel, a user can search those messages, calculate simple operational views, and follow an answer back to its sources. Retrieval and calculations currently run locally. The prototype has no Gmail connection or live AI model. Its current behavior does not represent customer validation.

Building the interface was the straightforward part. Writing the fictional work exposed a harder problem. If I create every inbox around missing documents and unresolved case details, the copilot will look useful because I designed the world to need it.

## Fictional data creates real assumptions

Synthetic inboxes have no neutral cases. Every subject line, attachment, status, and handoff expresses an opinion about how the work operates.

Risk increases when the demo is also being used to discover the product. Polished answers can feel like proof that the workflow exists in the form I imagined. In reality, the retrieval logic may only be finding information I placed in convenient locations.

One research conversation on September 28 made this concrete. In one insurance setting, the submissions process had already been completely automated and was no longer considered a gap. Other areas still appeared open to improvement, including claims and reporting work. Endorsement processes remained procedural, while some property underwriting work used Excel for property history, construction, and age. One described rule was that properties built before 1950 might be rejected because of higher risk.

I cannot turn one conversation into a universal market conclusion. Still, the point shows how quickly a synthetic workflow can become stale or misleading. A demo inbox full of manual submission friction may present a product for a problem that a particular organization has already removed.

## Variation belongs inside the fixture

Different levels of automation maturity belong in the prototype. One role may work through a structured system. Another may still coordinate exceptions through email. Even within the same company, submissions and claims can have different owners and procedures.

Visual realism is secondary. Useful fixtures include conditions that could make the copilot unnecessary or unreliable.

Some messages should contain enough evidence for a grounded answer. Others should expose a missing attachment or an unresolved contradiction. Pulling an already automated workflow back into email would only give the assistant artificial work.

For an AI developer, this is close to evaluation design. Synthetic data defines the tasks and failure boundaries before the model or retrieval layer is judged. When those assumptions stay hidden, a strong demo can be measuring agreement with its author.

## The prototype needs a way to fail

Credible prototypes should be able to return an unsatisfying result for the right reason. The result may expose incomplete evidence or conflicting messages. Sometimes the requested action belongs in another system. These outcomes can reveal more than a confident summary.

Source links let a reviewer inspect how the answer was formed. I also need a record of why each synthetic scenario exists and what would count as failure. That record would make the fixture easier to revise when research changes the product view.

Operator review against real workflow structure is the next useful step, using anonymized cases only if access and permission are established. I have not reached that stage. The current demo proves that a role based inbox and local copilot interaction can be simulated. This proves nothing yet about whether the chosen questions matter in daily insurance work.

Synthetic data lets me build before private operational data is available. That makes early experimentation possible. The same freedom gives me unusual control over the result. For now, I need to treat the dataset as an argument that remains open to correction.
