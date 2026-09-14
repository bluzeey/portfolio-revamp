import type { Project } from "@/data/site";
import {
  ArrowUpRight,
  FlutFastMark,
  GranveoMark,
  InsuveoMark,
  KanbanCastMark
} from "./Icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const marks = {
    insuveo: InsuveoMark,
    granveo: GranveoMark,
    flutfast: FlutFastMark,
    kanbancast: KanbanCastMark
  } as const;
  const Mark = marks[project.mark];
  const content = (
    <>
      <div className="project-card-topline">
        <Mark className="project-mark" />
        {project.href ? <ArrowUpRight /> : null}
      </div>
      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-lead">{project.description}</p>
      <p className="project-detail">{project.detail}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies and themes`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      {project.href ? <span className="project-link-label">{project.linkLabel ?? "Explore project"}</span> : null}
    </>
  );

  const className = "project-card project-card-featured";

  if (project.href) {
    return (
      <a className={className} href={project.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
