# Soaib's Portfolio

A personal portfolio site built with modern frontend tooling. This repository contains a responsive, component-based React site showcasing projects, skills, education, and contact information.

## Deployment

Link :-  

## Features

- Clean, responsive layout with separate sections: Hero, About, Skills, Projects, Education, Contact, and Footer.
- Component-driven structure for easy extension and reuse.
- Fast development and build using Vite.
- Styling with Tailwind CSS and PostCSS for utility-first design.
- SEO-friendly simple markup and optimized assets.

## Technologies Used

- React (JSX)
- Vite (dev server, fast build)
- Tailwind CSS
- PostCSS
- ESLint (project linting)
- Node.js / npm

## What’s Included

- `index.html` — App entry HTML.
- `src/main.jsx` — App bootstrapping.
- `src/App.jsx` — Top-level app component.
- `src/index.css` — Tailwind base and project styles.
- `src/components/` — Reusable UI components:
	- `Header.jsx` — site header / navigation
	- `Hero.jsx` — hero / intro section
	- `About.jsx` — about me section
	- `Skills.jsx` — skills list / badges
	- `Projects.jsx` — project cards / links
	- `Education.jsx` — education timeline
	- `Contact.jsx` — contact form or contact details
	- `Footer.jsx` — footer and social links
- `src/pages/Home.jsx` — home page composition of components
- `public/` — static assets (favicon, images)
- `tailwind.config.js`, `postcss.config.js`, `vite.config.js` — project configs

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Deployment

- Deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages). Vercel/Netlify works out-of-the-box with Vite projects.

## Notes & Customization

- Add or update projects in `src/components/Projects.jsx`.
- Update content and images in `src/assets/images`.
- Tailwind utilities are configured via `tailwind.config.js`.

## Contact

If you want edits, deployment help, or commits prepared, tell me how you'd like to proceed.

## License

This project is free to use. Add a LICENSE file (e.g., MIT) if you want a specific license.

