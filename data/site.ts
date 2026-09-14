export type Project = {
  title: string;
  description: string;
  detail: string;
  eyebrow: string;
  tags: readonly string[];
  mark: "insuveo" | "granveo" | "flutfast" | "kanbancast";
  href?: string;
  linkLabel?: string;
};

export const bookingUrl = "https://calendar.app.google/xmXnGT5w1P6AmDa87";
export const resumeUrl = "/Sahil_Maheshwari_Resume.pdf";

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
};

export const proofPoints = [
  { value: "50K+", label: "people reached by research products" },
  { value: "100K+", label: "hours saved through research workflows" },
  { value: "500K+", label: "people served by a commerce product" },
  { value: "13%", label: "conversion lift through product experiments" }
] as const;

export const capabilities = [
  {
    number: "01",
    title: "Find the right workflow",
    body: "I map the current process, the people making decisions, the information they need, and the places where context gets lost."
  },
  {
    number: "02",
    title: "Build the AI system",
    body: "I turn that map into agents, retrieval, memory, structured outputs, and integrations that fit the way the team already works."
  },
  {
    number: "03",
    title: "Make it reliable",
    body: "I design evaluations, source visibility, human review, and recovery paths so the workflow can handle real inputs and honest uncertainty."
  },
  {
    number: "04",
    title: "Ship the product around it",
    body: "I build the interface and production system with TypeScript, Next.js, Python, Postgres, and the infrastructure needed to keep improving it."
  }
] as const;

export const experiences: readonly Experience[] = [
  {
    company: "Pave",
    role: "Lead Engineer",
    period: "Mar 2025 to present",
    description:
      "I own technical direction across product experiments, learning tools, and applied AI workflows.",
    logo: "/images/experience/pave.png",
    logoAlt: "Pave The Way AI",
    logoWidth: 192,
    logoHeight: 192,
    href: "https://www.pavetheway.ai/"
  },
  {
    company: "Silatus",
    role: "Senior Engineer",
    period: "Jun 2023 to Mar 2025",
    description:
      "I built research and content tools used by more than 50,000 people, contributing to more than 100,000 hours saved.",
    logo: "/images/experience/silatus.svg",
    logoAlt: "Silatus",
    logoWidth: 501,
    logoHeight: 126,
    href: "https://silatus.com/"
  },
  {
    company: "CodeVyasa",
    role: "Full Stack Engineer",
    period: "Jun 2022 to Jun 2023",
    description:
      "I built and maintained consumer products, including Aqualogica's commerce experience.",
    logo: "/images/experience/codevyasa.svg",
    logoAlt: "CodeVyasa",
    logoWidth: 168,
    logoHeight: 32,
    href: "https://www.codevyasa.com/"
  },
  {
    company: "Assembo",
    role: "Full Stack Engineer",
    period: "Sep 2021 to Jun 2022",
    description:
      "I worked on authentication and a Zoom transcription bot, then helped reduce prototype costs by 15%.",
    logo: "/images/experience/assembo.png",
    logoAlt: "Assembo",
    logoWidth: 256,
    logoHeight: 256,
    href: "https://assembo.ai/"
  },
  {
    company: "Aqualogica",
    role: "Selected client work",
    period: "Through CodeVyasa",
    description:
      "I maintained a shopping experience serving more than 500,000 people. Interface experiments improved conversion by 13%.",
    logo: "/images/experience/aqualogica.svg",
    logoAlt: "Aqualogica",
    logoWidth: 127,
    logoHeight: 23,
    href: "https://aqualogica.in/"
  }
] as const;

export const projects: readonly Project[] = [
  {
    title: "Insuveo",
    eyebrow: "Building now · Insurance research",
    description:
      "A set of careful agents for collecting the information that insurance work depends on.",
    detail:
      "Insuveo explores agents that gather workflow data and ask for missing details. Each run starts with a plan that a person reviews, then returns the gaps and the sources behind its result.",
    tags: ["Product discovery", "Applied AI", "Commercial insurance"],
    mark: "insuveo",
    href: "https://github.com/bluzeey/insuveo",
    linkLabel: "View the build"
  },
  {
    title: "Granveo",
    eyebrow: "Founder project · Personal knowledge",
    description:
      "A personal knowledge system that helps ideas, sources, and project memory stay connected.",
    detail:
      "I built experiments around visual graphs, semantic retrieval, source history, and agent memory. I am testing whether a system can recover useful context while showing what it knows and where that knowledge came from.",
    tags: ["Knowledge graphs", "Agent memory", "Research tools"],
    mark: "granveo",
    href: "https://github.com/bluzeey/granveo-mcp",
    linkLabel: "Explore the public work"
  },
  {
    title: "FlutFast",
    eyebrow: "Commercial product · Mobile development",
    description:
      "A Flutter starter kit that removes repeated setup from the first weeks of a mobile product.",
    detail:
      "I turned the plumbing I kept rebuilding into a product with authentication, onboarding, payments, analytics, backend services, and AI integrations. FlutFast taught me how packaging and distribution shape the value of engineering work.",
    tags: ["Flutter", "Developer tools", "Product engineering"],
    mark: "flutfast",
    href: "https://www.flutfast.com/",
    linkLabel: "Visit FlutFast"
  },
  {
    title: "KanbanCast",
    eyebrow: "Commercial build · Project communication",
    description:
      "A project tool for turning the work on a Kanban board into updates people can share.",
    detail:
      "I worked across the web product, browser extension, embeddable components, and a Flutter package. The experiment asked whether project progress could become useful communication without making a team duplicate its work.",
    tags: ["Workflow automation", "Product communication", "Cross platform"],
    mark: "kanbancast",
    href: "https://kanbancast.com/",
    linkLabel: "Visit KanbanCast"
  }
] as const;

export const visions = [
  {
    number: "01",
    title: "Intelligence should feel less scarce",
    body: "A useful tool helps more people understand difficult subjects and act on what they learn. Access to an answer is only the beginning."
  },
  {
    number: "02",
    title: "Context should survive the handoff",
    body: "Teams lose time when the reason behind a decision disappears. Software can preserve the source, the change, and the open question."
  },
  {
    number: "03",
    title: "AI will enter every useful workflow",
    body: "As more work becomes digital, every document, decision, and handoff becomes a place where AI can assist. The real work is making those additions coherent."
  },
  {
    number: "04",
    title: "Limits should be visible",
    body: "AI earns trust when people can see its evidence, its uncertainty, and the point where someone must make the call."
  },
  {
    number: "05",
    title: "Communication is part of engineering",
    body: "A strong engineer can explain the problem, connect technical choices to the business, and help different people move toward the same result."
  },
  {
    number: "06",
    title: "Learning should create agency",
    body: "The best knowledge tools leave people more capable than they were before using them. That is the future I want to spend time building."
  }
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/bluzeey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-maheshwari/" },
  { label: "X", href: "https://x.com/TalkinIdeas" }
] as const;
