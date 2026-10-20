import type { ReactNode } from "react";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Expand, Send } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Lightbox } from "../components/Lightbox/Lightbox";
import { getProjectBySlug, getRelatedProjects } from "../data/projects";
import { site } from "../data/site";
import { categoryLabels, statusLabels, type CaseItem } from "../types/project";
import styles from "./ProjectPage.module.css";

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function ItemGrid({ items, numbered = false }: { items: CaseItem[]; numbered?: boolean }) {
  return (
    <ul className={styles.items}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.item}>
          {numbered ? (
            <span className={styles.itemIndex}>{String(index + 1).padStart(2, "0")}</span>
          ) : null}
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemText}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function ProjectPage() {
  const { slug = "" } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    return <Navigate to="/404" replace />;
  }

  const { caseStudy } = project;
  const related = getRelatedProjects(project.slug);
  const media = caseStudy.media ?? [];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>
          <Link to="/#projects" className={styles.back}>
            <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
            Все проекты
          </Link>

          <header className={styles.hero}>
            <p className={styles.meta}>
              <span>{categoryLabels[project.category]}</span>
              <span>{statusLabels[project.status]}</span>
            </p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.intro}>{caseStudy.intro}</p>
            {project.links && project.links.length > 0 ? (
              <div className={styles.actions}>
                {project.links.map((link) => (
                  <Button key={link.href} href={link.href} variant="secondary">
                    {link.label}
                    <ArrowUpRight aria-hidden="true" />
                  </Button>
                ))}
              </div>
            ) : null}
          </header>

          <dl className={styles.facts}>
            {caseStudy.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <CaseSection title="Задача">
            {caseStudy.context.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </CaseSection>

          <CaseSection title="Ограничения">
            <ul className={styles.list}>
              {caseStudy.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Инженерные решения">
            <ItemGrid items={caseStudy.decisions} numbered />
          </CaseSection>

          <CaseSection title="Результат">
            {caseStudy.outcome.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </CaseSection>

          {media.length > 0 ? (
            <CaseSection title="Интерфейс">
              <div className={styles.media}>
                {media.map((item, index) => (
                  <figure
                    key={item.src}
                    className={[
                      styles.figure,
                      item.layout === "mobile" ? styles.figureMobile : styles.figureWide,
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      className={styles.figureButton}
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`Открыть на весь экран: ${item.caption ?? item.alt}`}
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <span className={styles.expand} aria-hidden="true">
                        <Expand size={16} strokeWidth={1.75} />
                      </span>
                    </button>
                    {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            </CaseSection>
          ) : null}

          {project.technologies.length > 0 ? (
            <CaseSection title="Стек">
              <ul className={styles.tech}>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </CaseSection>
          ) : null}

          {caseStudy.note ? <p className={styles.note}>{caseStudy.note}</p> : null}

          {related.length > 0 ? (
            <CaseSection title="Другие проекты">
              <ul className={styles.related}>
                {related.map((item) => (
                  <li key={item.id}>
                    <Link to={`/projects/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </CaseSection>
          ) : null}

          <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>Есть задача? Давайте обсудим</h2>
            <Button href={site.telegram.url} variant="primary">
              <Send aria-hidden="true" />
              Написать в Telegram
            </Button>
          </section>
        </Container>
      </main>
      <Footer />

      {lightboxIndex !== null ? (
        <Lightbox
          items={media}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      ) : null}
    </>
  );
}
