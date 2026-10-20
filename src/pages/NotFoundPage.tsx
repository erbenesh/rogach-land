import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container className={styles.inner}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.text}>
            Такой страницы нет. Вернитесь на главную или к списку проектов.
          </p>
          <div className={styles.actions}>
            <Button to="/" variant="primary">
              На главную
            </Button>
            <Link to="/#projects" className={styles.secondary}>
              К проектам
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
