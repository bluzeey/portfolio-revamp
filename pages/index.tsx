import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ArrowUpRight, MailIcon, SparkIcon } from "@/components/portfolio/Icons";
import { PageShell } from "@/components/portfolio/PageShell";
import { PostCard } from "@/components/portfolio/PostCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Seo } from "@/components/portfolio/Seo";
import { principles, projects, proofPoints } from "@/data/site";
import { getAllPosts, type PostMeta } from "@/lib/posts";

type HomeProps = {
  latestPosts: PostMeta[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: { latestPosts: getAllPosts().slice(0, 3) }
});

export default function Home({ latestPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sahil Maheshwari",
    url: "https://sahilmaheshwari.com",
    jobTitle: "Product Engineer and Founder",
    address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
    sameAs: [
      "https://github.com/bluzeey",
      "https://www.linkedin.com/in/sahil-maheshwari/",
      "https://x.com/TalkinIdeas"
    ]
  };

  return (
    <PageShell>
      <Seo />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Bangalore · Building and learning in public</p>
            <h1>I build products that turn messy information into <span>useful decisions.</span></h1>
            <p className="hero-intro">
              I’m Sahil—a product-focused engineer and founder working across AI, knowledge systems and commercial insurance. I like problems where the hard part is understanding the workflow before writing the software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight /></a>
              <Link className="button button-accent" href="/blog">Read what I’m learning</Link>
            </div>
          </div>

          <aside className="current-card" aria-label="What Sahil is working on now">
            <div className="current-card-header">
              <span>Current threads</span>
              <SparkIcon className="accent-icon" />
            </div>
            <div className="thread-map" aria-hidden="true">
              <span className="map-node map-node-main">Sahil</span>
              <span className="map-line map-line-one" />
              <span className="map-line map-line-two" />
              <span className="map-line map-line-three" />
              <span className="map-node map-node-one">Insurance</span>
              <span className="map-node map-node-two">Context</span>
              <span className="map-node map-node-three">Agents</span>
            </div>
            <ol className="current-list">
              <li><span>01</span><div><strong>Insuveo</strong><p>Finding where context breaks across commercial insurance workflows.</p></div></li>
              <li><span>02</span><div><strong>Granveo</strong><p>Exploring durable memory and connected knowledge for AI systems.</p></div></li>
              <li><span>03</span><div><strong>Field notes</strong><p>Turning conversations, prototypes and contradictions into useful writing.</p></div></li>
            </ol>
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

      <section className="section" id="work">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">Selected work</p>
            <div>
              <h2>Products, systems and experiments with a reason to exist.</h2>
              <p>I work from the underlying decision or bottleneck—not from a technology looking for somewhere to land.</p>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section section-surface" id="approach">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">How I work</p>
            <div>
              <h2>Curious about the system. Practical about the next step.</h2>
              <p>The pattern across my work is simple: get close to reality, make the uncertainty explicit, and build a loop that can teach us something.</p>
            </div>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="writing">
        <div className="shell">
          <div className="section-heading-grid writing-heading">
            <p className="section-kicker">Working notes</p>
            <div>
              <h2>What I’m noticing while I build.</h2>
              <p>Short essays from product discovery, engineering, insurance conversations and the uncomfortable parts of choosing what to build.</p>
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
            <h2>Engineer by craft. Founder by temperament. Researcher when the map is missing.</h2>
          </div>
          <div className="about-copy">
            <p>I’ve spent more than four years building in early-stage teams across AI, commerce and healthcare. I’m happiest where product judgment and engineering meet: shaping the problem, shipping the first version, and staying close enough to users to change my mind.</p>
            <p>Right now I’m studying how information moves through Indian commercial insurance while continuing to explore agent memory, research tools and better interfaces for complex knowledge.</p>
            <div className="availability"><span className="status-dot" /><span>Open to thoughtful conversations with builders, operators and domain experts.</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-inner">
          <div>
            <p className="section-kicker">Let’s compare notes</p>
            <h2>Working on a difficult information workflow?</h2>
            <p>I’d enjoy hearing where the current process breaks—and what people do to keep it moving anyway.</p>
          </div>
          <a className="button button-light" href="mailto:sahilm1711@gmail.com"><MailIcon /> Email Sahil</a>
        </div>
      </section>
    </PageShell>
  );
}
