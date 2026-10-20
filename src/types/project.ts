export type ProjectCategory = "development" | "3d" | "motion";

export type ProjectStatus = "live" | "completed" | "in-progress" | "experiment";

export interface CaseFact {
  label: string;
  value: string;
}

export interface CaseItem {
  title: string;
  text: string;
}

export interface CaseMedia {
  src: string;
  alt: string;
  caption?: string;
  /** mobile — узкий кадр телефона в сетке рядом с другими */
  layout?: "wide" | "mobile";
}

export interface CaseStudy {
  intro: string;
  facts: CaseFact[];
  context: string[];
  constraints: string[];
  contribution: CaseItem[];
  decisions: CaseItem[];
  outcome: string[];
  media?: CaseMedia[];
  note?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  status: ProjectStatus;
  period?: string;
  role: string;
  cover: string | null;
  coverTitle?: string;
  coverCaption?: string;
  alt: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  order: number;
  caseStudy?: CaseStudy;
  links?: { label: string; href: string }[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  development: "Разработка",
  "3d": "3D",
  motion: "Видео и motion",
};

export const statusLabels: Record<ProjectStatus, string> = {
  live: "В продакшене",
  completed: "Завершён",
  "in-progress": "В разработке",
  experiment: "Эксперимент",
};
