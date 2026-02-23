# Spotify Web Client

Веб-приложение для потокового воспроизведения музыки, реализованное на базе Next.js с использованием App Router, архитектура построена по принципам Feature-Sliced Design, проект ориентирован на масштабируемость, производительность и строгую структурную дисциплину.

---

## Основные характеристики

- серверные компоненты используются по умолчанию
- клиентские компоненты подключаются только для интерактивных сценариев
- минимизация client-bundle
- строгие архитектурные границы между слоями

---

## Технологический стек

### Core

- Next.js, App Router
- React 18
- TypeScript

### State Management

- Redux Toolkit — UI-состояние
- TanStack Query — серверные данные

### Styling

- SCSS Modules
- CSS variables
- next/font для self-hosted шрифтов

### Code Quality

- ESLint
- Prettier
- Stylelint
- Husky
- lint-staged

---

## Архитектура проекта

Проект структурирован по слоям Feature-Sliced Design, каждый слой имеет четкую зону ответственности.

```
src/
  app/         # routing слой
  pages/       # страницы
  widgets/     # крупные UI-блоки
  features/    # пользовательские сценарии
  entities/    # доменные модели
  shared/      # переиспользуемые компоненты
  providers/   # глобальные провайдеры
  store/       # Redux store
```

### Принципы разделения

- app — только маршрутизация и layout
- pages — композиция страницы
- widgets — крупные блоки интерфейса
- features — действия пользователя
- entities — бизнес-сущности
- shared — универсальные компоненты и утилиты

---

## Запуск проекта

Установка зависимостей:

```bash
npm install
```

Режим разработки:

```bash
npm run dev
```

Production-сборка:

```bash
npm run build
npm start
```
