import { Container } from "../../components/Container/Container";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import styles from "./About.module.css";

const stackGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "Ant Design"],
  },
  {
    label: "Данные и состояние",
    items: ["TanStack Query", "Zustand"],
  },
  {
    label: "Backend и аналитика",
    items: ["Node.js", "Java", "Python", "Cube.js", "PostgreSQL"],
  },
  {
    label: "Тестирование",
    items: ["Vitest", "Playwright"],
  },
  {
    label: "Дополнительно",
    items: ["SignalR", "CASL"],
  },
] as const;

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <Container className={styles.layout}>
        <SectionHeading titleId="about-title" title="Обо мне" className={styles.heading} />

        <div className={styles.copy}>
          <p>
            Я разрабатываю продуктовые интерфейсы и разбираюсь в том, что стоит за ними.
          </p>
          <p>
            С марта 2025 по июль 2026 года я создавал с нуля ERP для продавцов Wildberries
            и Ozon: от архитектуры frontend и бизнес-модулей до прав доступа и работы
            с данными. Когда возможностей Cube.js не хватало для задач продукта, я
            расширял его серверную часть собственными API-модулями. Решения, которые
            я реализовывал, использовались в рабочем продукте.
          </p>
          <p>
            Незнакомая задача для меня — повод разобраться. Я изучаю контекст, выбираю
            решение и довожу его до рабочего результата. Если проблема выходит за пределы
            интерфейса, разбираюсь в данных и серверной логике, чтобы решить её целиком.
          </p>
          <p>
            Использую AI, чтобы быстрее разбираться в незнакомых технологиях, проверять
            гипотезы и ускорять разработку. При этом архитектурные решения, проверка кода
            и ответственность за результат остаются на мне.
          </p>

          <div className={styles.stack} aria-label="Стек">
            {stackGroups.map((group) => (
              <div key={group.label} className={styles.stackGroup}>
                <p className={styles.stackLabel}>{group.label}</p>
                <ul className={styles.stackItems}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
