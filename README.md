# Brand System

A standalone component show-case built on React and MUI (Material UI), driven
by a shared design-token system. It demonstrates 11 core components — Button,
TextField, Checkbox, Radio, Switch, Select, Dialog, Card, Chip, Avatar, and
Tabs — each with its own theme overrides and Storybook stories.

## What's inside

- `tokens/tokens.json` — raw and semantic design tokens (color, spacing,
  typography, border, elevation).
- `src/styles/tokens.css` — the same tokens exposed as CSS custom properties.
- `src/styles/global.css` — base page styles.
- `src/components/` — the 11 components, plus shared internal plumbing
  (`src/components/internal/`) including the theme composition and provider.
- `demo/` — a minimal Vite + React app rendering every component.

## Getting started

```bash
npm install
npm run dev          # demo app at http://localhost:5173
npm run storybook    # Storybook at http://localhost:6006
```

## Tech stack

React 18, MUI 7, Emotion, Vite 6, Storybook 10, FontAwesome (free icons).

## Project structure

```
brand-system/
├── README.md
├── package.json
├── tokens/
│   └── tokens.json
├── src/
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   └── components/
│       ├── internal/       # shared theme, provider, icon, tooltip, adornment
│       ├── Button/
│       ├── TextField/
│       ├── Checkbox/
│       ├── Radio/
│       ├── Switch/
│       ├── Select/
│       ├── Dialog/
│       ├── Card/
│       ├── Chip/
│       ├── Avatar/
│       └── Tabs/
└── demo/
    └── index.tsx
```
