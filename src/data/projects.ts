import type { Project } from "../types/project";
import { erpMarketplaceCase } from "./cases/erpMarketplace";

export const projects: Project[] = [
  {
    id: "erp-marketplace",
    slug: "erp-marketplace",
    title: "ERP для продавцов маркетплейсов",
    category: "development",
    summary:
      "Сделал с нуля frontend ERP для селлеров Wildberries и Ozon и написал backend-модули на Cube.js: товары, дашборды, права и многокомпанийность, AI-отзывы, техподдержка.",
    status: "completed",
    period: "2025 — 2026",
    role: "Frontend с нуля, backend-модули на Cube.js",
    cover: `${import.meta.env.BASE_URL}images/erp/cover-products.png`,
    coverTitle: "ERP",
    coverCaption: "Wildberries · Ozon",
    alt: "Таблица товаров в ERP для продавцов маркетплейсов",
    highlights: [
      "Архитектура с изолированными фичами",
      "Конструктор графиков и дашборды",
      "Directory API на сервере Cube.js",
      "Роли, права и несколько компаний в одном аккаунте",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      "TanStack Query",
      "Zustand",
      "CASL",
      "SignalR",
      "Cube.js",
      "Node.js",
      "PostgreSQL",
    ],
    featured: true,
    order: 1,
    caseStudy: erpMarketplaceCase,
    links: [
      {
        label: "Открыть продукт",
        href: "https://lk.boostixerp.ru",
      },
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  return getFeaturedProjects()
    .filter((project) => project.slug !== slug && Boolean(project.caseStudy))
    .slice(0, limit);
}
