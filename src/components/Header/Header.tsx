import { BriefcaseBusiness, Compass, MessageCircle, Send, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../../data/site";
import { BrandLogo } from "../BrandLogo/BrandLogo";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Header.module.css";

const tabIcons = {
  "#projects": BriefcaseBusiness,
  "#approach": Compass,
  "#about": UserRound,
  "#contact": MessageCircle,
} as const;

function sectionHref(hash: string, pathname: string) {
  return pathname === "/" ? hash : `/${hash}`;
}

function useActiveSection(pathname: string) {
  const [active, setActive] = useState<string>(() =>
    pathname === "/" ? window.location.hash || "#projects" : "#projects",
  );

  useEffect(() => {
    if (pathname !== "/") {
      setActive("#projects");
      return;
    }

    const syncFromHash = () => {
      setActive(window.location.hash || "#projects");
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const sections = site.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) {
      return () => window.removeEventListener("hashchange", syncFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    for (const section of sections) observer.observe(section);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, [pathname]);

  return active;
}

export function Header() {
  const { pathname } = useLocation();
  const active = useActiveSection(pathname);

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.inner}>
          <div className={styles.top}>
            <Link to="/" className={styles.logo} aria-label={`${site.name} — на главную`}>
              <BrandLogo size="sm" className={styles.brand} />
            </Link>

            <nav className={styles.navDesktop} aria-label="Основная навигация">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  to={sectionHref(item.href, pathname)}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              href={site.telegram.url}
              variant="secondary"
              className={styles.contact}
              aria-label={`Написать в Telegram ${site.telegram.username}`}
            >
              <Send aria-hidden="true" />
              Связаться
            </Button>
          </div>
        </Container>
      </header>

      <nav className={styles.tabBar} aria-label="Основные разделы">
        {site.nav.map((item) => {
          const Icon = tabIcons[item.href as keyof typeof tabIcons] ?? BriefcaseBusiness;
          const isActive = active === item.href;

          return (
            <Link
              key={item.href}
              to={sectionHref(item.href, pathname)}
              className={[styles.tab, isActive ? styles.tabActive : ""].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={22} strokeWidth={isActive ? 2 : 1.75} aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
