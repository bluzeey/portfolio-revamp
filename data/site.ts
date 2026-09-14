export type Project = {
  title: string;
  description: string;
  detail: string;
  eyebrow: string;
  tags: readonly string[];
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const proofPoints = [
  { value: "50K+", label: "people reached by products I helped build" },
  { value: "100K+", label: "hours saved through research workflows" },
  { value: "13%", label: "conversion lift through product experiments" },
  { value: "Top 300", label: "builders selected from 25,000 at Vibecon" }
] as const;

export const projects: readonly Project[] = [
  {
    title: "Insuveo",
    eyebrow: "Building now · Insurance workflows",
    description:
      "A clearer operating layer for commercial insurance teams working across submissions, quotes, placement and claims.",
    detail:
      "The work starts with field research across Indian underwriters, brokers, claims teams and corporate buyers—then turns recurring coordination and context gaps into focused product experiments.",
    tags: ["Product discovery", "AI workflows", "Commercial insurance"],
    href: "https://github.com/bluzeey/insuveo-web",
    linkLabel: "View the build",
    featured: true
  },
  {
    title: "Granveo",
    eyebrow: "Founder project · Knowledge systems",
    description:
      "A thinking layer that connects documents, ideas and sources instead of leaving knowledge trapped in separate tabs.",
    detail:
      "I explored visual graphs, semantic retrieval, temporal provenance and agent memory—especially the question of how an AI system can recover the right context without pretending to know more than it does.",
    tags: ["Knowledge graphs", "Agent memory", "Research tools"],
    featured: true
  },
  {
    title: "AI research platform",
    eyebrow: "Lead engineer · Product systems",
    description:
      "Research, content-generation and decision-support workflows designed for real users rather than isolated model demos.",
    detail:
      "I led product engineering across structured outputs, retrieval and workflow automation. Earlier research tools on the platform reached 50K+ users and contributed to more than 100K hours saved.",
    tags: ["TypeScript", "Python", "LLM applications"]
  },
  {
    title: "Commerce experimentation",
    eyebrow: "Frontend engineering · At scale",
    description:
      "A faster experimentation loop for a consumer brand serving more than 500K users.",
    detail:
      "By pairing implementation with A/B testing and close attention to the buying journey, the work improved conversion by 13%—a useful lesson in measuring product decisions, not just shipping them.",
    tags: ["Experimentation", "React", "Conversion"]
  }
] as const;

export const principles = [
  {
    number: "01",
    title: "Start with the messy reality",
    body: "I speak with the people doing the work, map exceptions and handoffs, and resist turning the first complaint into a feature list."
  },
  {
    number: "02",
    title: "Build the smallest useful loop",
    body: "A prototype should answer a real question. I prefer a narrow workflow with observable value over a broad AI promise."
  },
  {
    number: "03",
    title: "Keep judgment visible",
    body: "Good automation preserves sources, uncertainty and human control. It makes decisions easier to inspect instead of hiding them behind a confident answer."
  }
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/bluzeey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-maheshwari/" },
  { label: "X", href: "https://x.com/TalkinIdeas" }
] as const;
