import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExperienceGrid } from "@/components/portfolio/ExperienceGrid";
import { ArrowUpRight, MailIcon } from "@/components/portfolio/Icons";
import { PageShell } from "@/components/portfolio/PageShell";
import { PostCard } from "@/components/portfolio/PostCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Seo } from "@/components/portfolio/Seo";
import { bookingUrl, capabilities, experiences, projects, proofPoints, resumeUrl, visions } from "@/data/site";
import { getAllPosts, type PostMeta } from "@/lib/posts";

type HomeProps = {
  latestPosts: PostMeta[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: { latestPosts: getAllPosts().slice(0, 3) }
});

export default function Home({ latestPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://sahilmaheshwari.com/#profile",
    url: "https://sahilmaheshwari.com",
    name: "Sahil Maheshwari, AI developer",
    mainEntity: {
      "@type": "Person",
      "@id": "https://sahilmaheshwari.com/#sahil",
      name: "Sahil Maheshwari",
      alternateName: "TalkinIdeas",
      description: "AI developer and product engineer who designs and ships reliable AI workflows for complex work.",
      image: "https://sahilmaheshwari.com/images/profile/sahil-maheshwari.jpg",
      url: "https://sahilmaheshwari.com",
      jobTitle: "AI Developer and Product Engineer",
      knowsAbout: [
        "AI workflow development",
        "AI agents",
        "retrieval augmented generation",
        "agent memory",
        "LLM applications",
        "Next.js",
        "Python"
      ],
      address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
      sameAs: [
        "https://github.com/bluzeey",
        "https://www.linkedin.com/in/sahil-maheshwari/",
        "https://x.com/TalkinIdeas"
      ]
    }
  };

  return (
    <PageShell>
      <Seo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c") }}
      />

      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Bangalore · AI developer and product engineer</p>
            <h1>I build <span>AI workflows</span> for complex work.</h1>
            <p className="hero-intro">
              I help teams turn repetitive, information heavy processes into working AI products. I bring agents, retrieval, memory, tool integrations, and human review into one clear workflow that people can understand and improve.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href={bookingUrl} rel="noreferrer" target="_blank">Book a demo <ArrowUpRight /></a>
              <a className="button button-primary" href="#work">See selected work</a>
            </div>
          </div>

          <aside className="profile-card" aria-label="About Sahil Maheshwari">
            <div className="profile-image-wrap">
              <Image
                alt="Sahil Maheshwari"
                className="profile-image"
                height={460}
                priority
                sizes="(max-width: 960px) 70vw, 360px"
                src="/images/profile/sahil-maheshwari.jpg"
                width={460}
              />
            </div>
            <div className="profile-card-copy">
              <p className="profile-label"><span className="status-dot" /> Current question</p>
              <p>Where can AI remove coordination while keeping the evidence, exceptions, and final judgment visible?</p>
              <div className="profile-links">
                <a href="https://www.linkedin.com/in/sahil-maheshwari/" rel="noreferrer" target="_blank">LinkedIn <ArrowUpRight size={14} /></a>
                <a href="https://github.com/bluzeey" rel="noreferrer" target="_blank">GitHub <ArrowUpRight size={14} /></a>
                <a href={resumeUrl} rel="noreferrer" target="_blank">Resume <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected outcomes">
        <div className="shell proof-grid">
          {proofPoints.map((point) => (
            <div className="proof-item" key={point.value}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-surface" id="services">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">AI workflow development</p>
            <div>
              <h2>From a messy process to a product people can use.</h2>
              <p>I work across discovery, AI system design, reliability, and full stack product engineering. The model is one part of the result. The workflow around it decides whether it becomes useful.</p>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">Experience</p>
            <div>
              <h2>Work across AI research, commerce, and product infrastructure.</h2>
              <p>I have led AI product development, built research systems used by more than 50,000 people, improved a commerce experience serving more than 500,000 people, and worked closely with founders from product idea through production.</p>
            </div>
          </div>
          <ExperienceGrid experiences={experiences} />
        </div>
      </section>

      <section className="section section-surface" id="work">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">Selected work</p>
            <div>
              <h2>Products that moved from repeated work into a system.</h2>
              <p>Granveo and Insuveo explore current questions around memory and AI agents. FlutFast and KanbanCast came from earlier attempts to package recurring engineering and communication work into products.</p>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section" id="vision">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">Thoughts in progress</p>
            <div>
              <h2>Ideas I keep testing through the work.</h2>
              <p>These are working beliefs about AI, software, learning, and the kind of engineer I want to become. Building gives me a way to test where each one is incomplete.</p>
            </div>
          </div>
          <div className="vision-grid">
            {visions.map((vision) => (
              <article className="vision-card" key={vision.number}>
                <span>{vision.number}</span>
                <h3>{vision.title}</h3>
                <p>{vision.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface" id="writing">
        <div className="shell">
          <div className="section-heading-grid writing-heading">
            <p className="section-kicker">Writing</p>
            <div>
              <h2>Essays about AI, software, and staying useful.</h2>
              <p>I write about reliable AI workflows, human judgment, connected knowledge, product distribution, and what engineers need as the work changes.</p>
              <Link className="text-link" href="/blog">Browse all writing <ArrowUpRight /></Link>
            </div>
          </div>
          <div className="posts-grid">
            {latestPosts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="section-kicker">A little context</p>
            <h2>I like work where product judgment and engineering share the same room.</h2>
          </div>
          <div className="about-copy">
            <p>I started building with early stage teams in 2021. At Pave and Silatus, I moved deeper into AI research, content generation, and decision support. CodeVyasa, Aqualogica, and Assembo taught me to connect technical changes to adoption, conversion, and operating cost.</p>
            <p>FlutFast taught me that engineering becomes a product when someone can discover it, understand it, and use it. Granveo and Insuveo now let me explore memory, agents, and human review in domains where context matters.</p>
            <p>I am especially interested in teams that have valuable information spread across documents, tools, and people. That is where an AI workflow can reduce repeated work while giving human judgment a better place to operate.</p>
            <div className="availability"><span className="status-dot" /><span>Available for conversations about AI products, workflow prototypes, and difficult operating problems.</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-inner">
          <div>
            <p className="section-kicker">Build together</p>
            <h2>Where is your team still stitching work together by hand?</h2>
            <p>If a process depends on research, documents, repeated decisions, or moving context between tools, I can help you map and prototype an AI workflow around it.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={bookingUrl} rel="noreferrer" target="_blank">Book a demo <ArrowUpRight /></a>
            <a className="button button-primary" href="mailto:sahilm1711@gmail.com"><MailIcon /> Email me</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
