import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExperienceGrid } from "@/components/portfolio/ExperienceGrid";
import { ArrowUpRight, MailIcon } from "@/components/portfolio/Icons";
import { PageShell } from "@/components/portfolio/PageShell";
import { PostCard } from "@/components/portfolio/PostCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Seo } from "@/components/portfolio/Seo";
import { experiences, projects, proofPoints, visions } from "@/data/site";
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
    image: "https://sahilmaheshwari.com/images/profile/sahil-maheshwari.jpg",
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
            <p className="eyebrow"><span className="status-dot" /> Bangalore · Product engineer and founder</p>
            <h1>I build tools that help people think with <span>more context.</span></h1>
            <p className="hero-intro">
              I am Sahil, a self taught product engineer and founder. I work on applied AI, personal knowledge systems, and insurance operations. I care about what happens after an answer appears: whether someone can understand it and use it to make a better decision.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See what I am building <ArrowUpRight /></a>
              <Link className="button button-accent" href="/blog">Read the essays</Link>
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
              <p>How can software preserve the context around a decision while leaving the final judgment with the person responsible?</p>
              <div className="profile-links">
                <a href="https://www.linkedin.com/in/sahil-maheshwari/" rel="noreferrer" target="_blank">LinkedIn <ArrowUpRight size={14} /></a>
                <a href="https://github.com/bluzeey" rel="noreferrer" target="_blank">GitHub <ArrowUpRight size={14} /></a>
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

      <section className="section" id="experience">
        <div className="shell">
          <div className="section-heading-grid">
            <p className="section-kicker">Experience</p>
            <div>
              <h2>Four roles and one product that shaped how I build.</h2>
              <p>I learned to stay close to the user, ship in small pieces, and measure whether the work made anything better.</p>
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
              <h2>Two ideas I keep returning to.</h2>
              <p>Granveo began with personal knowledge. Insuveo began with insurance operations. Both ask how useful context can survive a complicated process.</p>
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
            <p className="section-kicker">Direction</p>
            <div>
              <h2>What I want software to make easier.</h2>
              <p>The projects change. These questions have stayed with me and shape what I choose to build next.</p>
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
              <h2>Essays about the direction behind the work.</h2>
              <p>I write about useful AI, human judgment, connected knowledge, and the choices that become clearer while building.</p>
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
            <h2>Engineer by craft. Founder because I like unfinished maps.</h2>
          </div>
          <div className="about-copy">
            <p>I started building with early stage teams in 2021. Since then, I have worked across commerce, research software, learning products, and applied AI. I am happiest when product judgment and engineering happen in the same room.</p>
            <p>Right now I am studying how information moves through Indian commercial insurance. I am also thinking about personal knowledge, responsible agents, and tools that make hard subjects easier to understand.</p>
            <div className="availability"><span className="status-dot" /><span>Open to conversations with builders, operators, and people who know a difficult domain well.</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-inner">
          <div>
            <p className="section-kicker">Compare notes</p>
            <h2>Have a difficult workflow or a useful disagreement?</h2>
            <p>I would like to hear how the work happens today and where the current tools lose the thread.</p>
          </div>
          <a className="button button-light" href="mailto:sahilm1711@gmail.com"><MailIcon /> Email Sahil</a>
        </div>
      </section>
    </PageShell>
  );
}
