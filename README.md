# hoon.ro

Personal portfolio for Caleb Ro — software engineer building platforms, automation, and AI-integrated tooling at scale.

**[hoon.ro](https://hoon.ro)**

## Stack

| Area | Tech |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Bundler | Vite 6 |
| Routing | React Router 7 |
| Styling | CSS Modules (dark/light theme, OS-aware) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | TypeScript check + production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | TypeScript check only (no emit) |

## Deployment

Push to `main`. GitHub Actions builds the site and deploys to GitHub Pages. Custom domain `hoon.ro` is configured via the Pages API — DNS A records point to:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## Structure

```
src/
├── main.tsx                  Entry point, router + theme provider
├── index.css                 Global styles, CSS custom properties, reset
├── data/projects.ts          Projects data
├── context/ThemeContext.tsx   Dark/light theme (OS-aware, localStorage)
├── hooks/useScrollReveal.ts  IntersectionObserver scroll reveal
├── components/
│   ├── Nav.tsx              Fixed nav with scroll detection
│   ├── Hero.tsx             Hero with code-snippet visual
│   ├── About.tsx            About section with photo + skills
│   ├── ProjectCard.tsx      Clickable project tile
│   ├── Contact.tsx          Contact section with mailto
│   └── Footer.tsx           Footer with social links
└── routes/
    ├── __root.tsx            Layout route (Nav + Outlet + Footer)
    └── index.tsx             Home page composing all sections
```
