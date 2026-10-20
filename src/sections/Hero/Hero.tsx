import { ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { site } from "../../data/site";
import styles from "./Hero.module.css";

const imagesBase = `${import.meta.env.BASE_URL}images/erp`;

const proof = [
  { value: "16 мес.", label: "ERP с нуля до продакшена" },
  { value: "100 000+", label: "записей в таблицах и отчётах" },
  { value: "WB + Ozon", label: "данные двух маркетплейсов" },
  { value: "Front + API", label: "frontend и серверные модули на Cube.js" },
] as const;

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            Открыт к предложениям
          </p>

          <h1 id="hero-name" className={styles.name}>
            <span className={styles.nameLine}>EGOR</span>
            <span className={styles.nameLine}>ROGACH</span>
          </h1>

          <div className={styles.copy}>
            <p className={styles.tagline}>
              Строю сложные продукты с&nbsp;нуля — от&nbsp;архитектуры до&nbsp;продакшена
            </p>
            <p className={styles.description}>
              {site.description} Последний проект — ERP для продавцов Wildberries
              и Ozon: весь frontend и backend-модули на Cube.js в проде.
            </p>

            <div className={styles.actions}>
              <Button to="/projects/erp-marketplace" variant="primary">
                Смотреть кейс ERP
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button href={site.telegram.url} variant="secondary">
                <Send aria-hidden="true" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>

        <Link
          to="/projects/erp-marketplace"
          className={styles.showcase}
          aria-label="Кейс: ERP для продавцов маркетплейсов"
        >
          <span className={styles.desktopShot}>
            <img
              src={`${imagesBase}/10-chart-editor.png`}
              alt=""
              width={1024}
              height={694}
              fetchPriority="high"
            />
          </span>
          <span className={styles.phoneShot}>
            <img
              src={`${imagesBase}/11-mobile-ai-reviews.png`}
              alt=""
              width={443}
              height={961}
            />
          </span>
          <span className={styles.showcaseLabel}>
            Кейс · ERP для маркетплейсов
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </Link>

        <dl className={styles.proof}>
          {proof.map((item) => (
            <div key={item.value} className={styles.proofItem}>
              <dt className={styles.proofLabel}>{item.label}</dt>
              <dd className={styles.proofValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
