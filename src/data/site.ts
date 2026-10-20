/** Пустая строка — контакт не показывается на сайте. */
const email: string = "xeevux@gmail.com";
const phone: string = "";

export const site = {
  name: "EGOR ROGACH",
  tagline: "Продуктовый frontend — от интерфейса до API",
  description:
    "React и TypeScript. Делаю сложные рабочие продукты с нуля. Основной фокус — frontend, но если задаче не хватает серверного слоя — пишу его сам и довожу до продакшена.",
  url: "https://erbenesh.github.io/rogach-land",
  telegram: {
    username: "@reibenesh",
    url: "https://t.me/reibenesh",
    label: "Telegram",
  },
  email,
  phone,
  nav: [
    { label: "Проекты", href: "#projects" },
    { label: "Подход", href: "#approach" },
    { label: "Обо мне", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ],
} as const;

/** `+7 (999) 123-45-67` → `tel:+79991234567` */
export function phoneHref(value: string) {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}
