# EGOR ROGACH — портфолио

Персональный сайт: продуктовый frontend и кейсы.

**Стек:** React, TypeScript, Vite, React Router  
**Адрес:** https://erbenesh.github.io/rogach-land/

## Локальный запуск

```bash
npm install
npm run dev
```

Dev-сервер работает с base-path `/rogach-land/`, как и production.

## Сборка

```bash
npm run build
npm run preview
```

В `dist/` дополнительно создаётся `404.html` — копия `index.html`, чтобы прямые ссылки на кейсы открывались на GitHub Pages.

## Публикация

1. Запушить ветку `main` в `erbenesh/rogach-land`.
2. В GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) соберёт и опубликует сайт.

## Где контент

| Файл | Что внутри |
|------|------------|
| `src/data/site.ts` | Имя, позиционирование, Telegram, адрес сайта |
| `src/data/projects.ts` | Список проектов и карточки |
| `src/data/cases/*.ts` | Тексты кейсов |

Контакт: [Telegram @reibenesh](https://t.me/reibenesh)
