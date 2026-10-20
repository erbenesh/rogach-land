import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { phoneHref, site } from "../../data/site";
import styles from "./Contact.module.css";

interface ContactLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  hint: string;
  external?: boolean;
}

const links: ContactLink[] = [
  {
    icon: Send,
    label: "Telegram",
    value: site.telegram.username,
    href: site.telegram.url,
    hint: "Предпочтительный способ связи",
    external: true,
  },
  ...(site.email
    ? [
        {
          icon: Mail,
          label: "Почта",
          value: site.email,
          href: `mailto:${site.email}`,
          hint: "Откроется ваш почтовый клиент",
        },
      ]
    : []),
  ...(site.phone
    ? [
        {
          icon: Phone,
          label: "Телефон",
          value: site.phone,
          href: phoneHref(site.phone),
          hint: "Нажмите, чтобы позвонить",
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="contact-title" className={styles.title}>
            Есть задача? Давайте обсудим
          </h2>
          <p className={styles.description}>
            Открыт к предложениям о работе и к проектным задачам.
            Выберите удобный способ связи.
          </p>
        </div>

        <ul className={styles.list}>
          {links.map(({ icon: Icon, label, value, href, hint, external }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.link}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className={styles.text}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{value}</span>
                  <span className={styles.hint}>{hint}</span>
                </span>
                <ArrowUpRight className={styles.arrow} size={20} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
