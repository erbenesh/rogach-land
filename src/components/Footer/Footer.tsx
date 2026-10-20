import { Mail, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { phoneHref, site } from "../../data/site";
import { BrandLogo } from "../BrandLogo/BrandLogo";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.name} aria-label={`${site.name} — на главную`}>
            <BrandLogo size="sm" />
          </Link>
          <p className={styles.tagline}>{site.tagline}</p>
        </div>

        <div className={styles.meta}>
          <a
            href={site.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Send size={16} strokeWidth={1.75} aria-hidden="true" />
            {site.telegram.label}
          </a>
          {site.email ? (
            <a href={`mailto:${site.email}`} className={styles.link}>
              <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
              {site.email}
            </a>
          ) : null}
          {site.phone ? (
            <a href={phoneHref(site.phone)} className={styles.link}>
              <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
              {site.phone}
            </a>
          ) : null}
          <p className={styles.year}>© {year}</p>
        </div>
      </Container>
    </footer>
  );
}
