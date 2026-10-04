---
title: "The representation is not the source"
date: "2026-10-04"
excerpt: "Reliable retrieval preserves a reversible path from every useful representation back to the page a person can inspect."
tags: ["Retrieval", "Reliable AI workflows"]
featured: false
---

Every representation of a document removes something.

On October 3, I published a 1,742 word Granveo field note about reliable multimodal RAG for visual documents. It drew on seven primary research sources and focused on scans, charts, diagrams, tables, and complex PDFs. Granveo is the knowledge and retrieval product I have been building around connected documents, ideas, and research.

The practical recommendation in the note was to keep two linked views of every page. One is the source view: the original page image, its page number, and stable region coordinates. The other is built for retrieval: native text, OCR, layout blocks, tables, captions, metadata, and visual embeddings.

Writing that distinction down changed how I think about retrieval. A searchable representation is useful because it simplifies the source. The simplification is also a judgment about what can be discarded.

## Extraction creates a new claim

A PDF can look like a container of text even when the page is carrying part of the meaning.

A table header may govern several values below it. A chart legend can turn a red line into a specific series. An arrow gives a diagram direction. Reading order determines whether a footnote qualifies the paragraph above it. Plain text extraction may return every visible word and still lose the relationship that answers the question.

Derived descriptions add another layer. A model generated caption can help search find a figure. It can also omit a label or describe a relationship incorrectly. That caption should remain marked as a derived claim. It should help the system reach the source, not quietly replace it.

The risk appears because retrieval systems are often evaluated at the end. The answer sounds plausible, so the pipeline appears to work. Yet the answer model cannot recover a chart, region, or relationship that ingestion removed before the question arrived.

## Retrieval should be reversible

I now think a reliable document workflow needs a reversible path.

A retrieved sentence should lead back to its page. A table value should lead back to its cell and surrounding headers. A claim based on a chart should expose the plot, legend, units, and nearby explanation that made the reading possible. If OCR and the page image disagree, the system should preserve the disagreement and let the original page remain available for review.

Using two views does not mean sending every page to the largest vision model. The field note argues for routing questions by what they require. Exact identifiers can use lexical search. A table lookup can use structured data. A question about a chart or diagram may need visual retrieval and reasoning. When confidence is low, the system can search more than one representation and combine candidates.

The point is to keep efficiency from becoming amnesia. The index can be optimized for search while the source remains close enough to inspect.

## Evaluation begins before the answer

The same distinction changes what I would measure as an AI developer.

Before scoring the final response, I need to know whether the required page and region entered the candidate set. Did retrieval include the legend that explains the chart? Did it bring the neighbouring paragraph that defines the metric? How much irrelevant material arrived with the useful evidence? Was there enough information to answer at all?

A fluent model can hide weak retrieval. Separate evaluation makes the failure more legible. Ingestion may have discarded the structure. Retrieval may have selected the wrong page. Evidence expansion may have missed the caption. The answer model may have inferred beyond what the page supports.

Those are different engineering problems. Treating them as one answer quality score makes improvement harder and responsibility vague.

## The wider product question

Visual retrieval is a specific case of a larger problem I keep meeting in Granveo and Insuveo, the insurance workflow product I am exploring. Software makes messy information useful by turning it into cleaner forms. Each cleaner form can travel further and move faster. It can also lose the context a person needs to challenge it.

Insurance documents make the consequence easy to imagine. A value extracted from a claims file or underwriting document may be operationally useful. A reviewer may still need the original wording, page, and surrounding structure before relying on it. I have not validated a multimodal insurance workflow or measured this approach in production. The current lesson comes from research and system design.

I want the products I build to give people compressed intelligence without trapping them inside the compression. The summary, schema, embedding, and generated caption can all help. They become safer when each one admits that it is a view of the source and keeps the way back open.
