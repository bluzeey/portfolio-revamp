import type { Project } from "@/data/site";
import { ArrowUpRight } from "./Icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const content = (
    <>
      <div className="project-card-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="project-eyebrow">{project.eyebrow}</span>
        {project.href ? <ArrowUpRight /> : null}
      </div>
      <h3>{project.title}</h3>
      <p className="project-lead">{project.description}</p>
      <p className="project-detail">{project.detail}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies and themes`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      {project.href ? <span className="project-link-label">{project.linkLabel ?? "Explore project"}</span> : null}
    </>
  );

  const className = `project-card${project.featured ? " project-card-featured" : ""}`;

  if (project.href) {
    return (
      <a className={className} href={project.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
