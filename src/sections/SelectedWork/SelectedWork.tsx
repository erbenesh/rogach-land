import { Container } from "../../components/Container/Container";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { getFeaturedProjects } from "../../data/projects";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          titleId="projects-title"
          title="Избранные проекты"
          description="Практические задачи, решения и результаты"
        />

        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
