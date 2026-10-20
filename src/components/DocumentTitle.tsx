import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { site } from "../data/site";

const defaultTitle = `${site.name} — продуктовый frontend`;

export function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectMatch = pathname.match(/\/projects\/([^/]+)\/?$/);
    if (projectMatch) {
      const project = getProjectBySlug(projectMatch[1]);
      document.title = project
        ? `${project.title} — ${site.name}`
        : `Страница не найдена — ${site.name}`;
      return;
    }

    if (pathname.includes("404")) {
      document.title = `Страница не найдена — ${site.name}`;
      return;
    }

    document.title = defaultTitle;
  }, [pathname]);

  return null;
}
