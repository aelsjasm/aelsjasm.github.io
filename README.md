# Alicia Septiani Putri Melati — Portfolio

A one-page portfolio built with React + Vite, styled around a process-flow /
P&ID visual language (feed → reactor → tank → process train → separator →
valve array → outlet) that mirrors the chemical engineering unit operations
Alicia is studying.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Add the real profile photo

The hero section currently shows a placeholder silhouette
(`public/profile-placeholder.svg`). To swap in a real photo:

1. Add your photo to `public/`, e.g. `public/profile.jpg`.
2. In `src/App.jsx`, find:
   ```jsx
   <img src="./profile-placeholder.svg" alt="Profile placeholder — replace with Alicia's photo" />
   ```
   and change the `src` to `./profile.jpg` (and update the `alt` text).
3. Square photos crop best — the circle mask is 208×208px.

## Deploy to GitHub Pages

This repo includes a ready-made GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the site and publishes it to
GitHub Pages automatically on every push to `main`.

1. Create a new GitHub repository and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push again (or re-run the workflow from the **Actions** tab) — the site
   will build and deploy automatically.
5. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

`vite.config.js` already uses a relative base path (`base: './'`), so it
works under any repository name without extra configuration — no need to
edit anything else for GitHub Pages to serve the assets correctly.

## Project structure

```
├── index.html
├── vite.config.js
├── public/
│   └── profile-placeholder.svg   ← swap for a real photo (see above)
├── src/
│   ├── main.jsx
│   ├── App.jsx                   ← all page content lives here
│   ├── index.css                 ← design tokens, layout, animations
│   └── components/
│       ├── Reveal.jsx            ← scroll-reveal wrapper (IntersectionObserver)
│       └── Pipe.jsx              ← animated pipe connector between sections
└── .github/workflows/deploy.yml  ← GitHub Pages CI/CD
```

## Editing content

All resume content (education, experience, projects, skills) is defined as
plain data arrays at the top of `src/App.jsx` — edit those arrays to update
the site without touching layout code.
