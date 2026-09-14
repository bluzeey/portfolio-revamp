import Image from "next/image";
import type { Experience } from "@/data/site";
import { ArrowUpRight } from "./Icons";

type ExperienceGridProps = {
  experiences: readonly Experience[];
};

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  return (
    <div className="experience-grid">
      {experiences.map((item) => (
        <a
          className="experience-card"
          href={item.href}
          key={item.company}
          rel="noreferrer"
          target="_blank"
        >
          <div className="experience-logo-wrap">
            <Image
              alt={item.logoAlt}
              className="experience-logo"
              height={item.logoHeight}
              src={item.logo}
              width={item.logoWidth}
            />
          </div>
          <div className="experience-card-heading">
            <div>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>
            <ArrowUpRight size={16} />
          </div>
          <p className="experience-period">{item.period}</p>
          <p className="experience-description">{item.description}</p>
        </a>
      ))}
    </div>
  );
}
