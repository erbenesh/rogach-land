import { Check, Copy, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { phoneHref, site } from "../../data/site";
import { BrandLogo } from "../BrandLogo/BrandLogo";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!site.email) return;
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard may be unavailable */
    }
  };

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
            <span className={styles.emailGroup}>
              <a href={`mailto:${site.email}`} className={styles.link}>
                <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                {site.email}
              </a>
              <button
                type="button"
                className={styles.copyButton}
                onClick={copyEmail}
                aria-label={copied ? "Адрес скопирован" : `Скопировать ${site.email}`}
              >
                {copied ? (
                  <Check size={15} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Copy size={15} strokeWidth={1.75} aria-hidden="true" />
                )}
              </button>
            </span>
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
