import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { categoryLabels, statusLabels } from "../../types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const caseUrl = project.caseStudy ? `/projects/${project.slug}` : null;

  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        {project.cover ? (
          <img src={project.cover} alt={project.alt} loading="lazy" />
        ) : (
          <div className={styles.cover} aria-hidden="true">
            <span className={styles.coverTitle}>{project.coverTitle ?? project.title}</span>
            {project.coverCaption ? (
              <span className={styles.coverCaption}>{project.coverCaption}</span>
            ) : null}
          </div>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.meta}>
          <span className={styles.chip}>{categoryLabels[project.category]}</span>
          <span className={styles.chip}>{statusLabels[project.status]}</span>
          {project.period ? <span className={styles.chip}>{project.period}</span> : null}
        </p>

        <h3 className={styles.title}>
          {caseUrl ? (
            <Link to={caseUrl} className={styles.titleLink}>
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className={styles.summary}>{project.summary}</p>

        {project.highlights.length > 0 ? (
          <ul className={styles.highlights}>
            {project.highlights.map((item) => (
              <li key={item}>
                <Check className={styles.check} size={16} strokeWidth={2} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {project.technologies.length > 0 ? (
          <ul className={styles.tech} aria-label="Технологии">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : null}

        <div className={styles.footer}>
          {caseUrl ? (
            <span className={styles.more} aria-hidden="true">
              Читать кейс
              <ArrowRight size={16} strokeWidth={1.75} />
            </span>
          ) : null}

          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.external}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              {link.label}
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
