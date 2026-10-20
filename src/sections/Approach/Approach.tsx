import { Code2, Compass, Rocket, Search } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import styles from "./Approach.module.css";

const principles = [
  {
    icon: Search,
    title: "Разобраться в задаче",
    text: "Кто пользователь, какие данные, какие права и где ограничения — до первой строчки кода.",
  },
  {
    icon: Compass,
    title: "Выбрать решение под контекст",
    text: "Не самое модное, а то, что выдержит объём данных и дальнейшее развитие продукта.",
  },
  {
    icon: Rocket,
    title: "Довести до продакшена",
    text: "Состояния загрузки и ошибок, мобильная версия, тесты на критичную логику.",
  },
  {
    icon: Code2,
    title: "Оставить код понятным",
    text: "Строгая типизация, границы модулей и структура, в которой команде легко разобраться.",
  },
] as const;

export function Approach() {
  return (
    <section id="approach" className={styles.section} aria-labelledby="approach-title">
      <Container>
        <SectionHeading titleId="approach-title" title="Подход" />

        <ol className={styles.list}>
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
