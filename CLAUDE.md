# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio / blog site built with plain HTML, CSS, and JavaScript, bundled with Vite. The site explores computer science topics through blog posts and interactive generative art projects (based on the book *Generative Art with JavaScript and SVG*).

## Running the site

```bash
npm run dev      # dev server with hot reload → http://localhost:5173/home/
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html             # Landing page (bio + profile image)
blog/index.html        # Blog post listing
projects/index.html    # Projects listing
  generative-art-js-svg/index.html
    01-hello-svg/
      index.html
      hello-svg.js     # Co-located with its HTML
css/style.css          # Shared stylesheet
src/shared/
  utils.js             # Exported utility functions (setYear, etc.)
  page.js              # Common page init — imported by all pages with no page-specific JS
vite.config.js         # Multi-page entry points — add new pages here
```

New blog posts go in `blog/` linked from `blog/index.html`.
New projects go in `projects/` linked from `projects/index.html`.
## Design system

- **Font:** Roboto (Google Fonts) — weights 300, 400, 500, 700
- **Theme:** Material dark
- **CSS variables** defined in `:root` in `css/style.css` — use these for all colors, shadows, and radius values rather than hardcoding
- Key variables: `--primary` (#9FA8DA Indigo 200), `--background` (#121212), `--surface` (#1E1E1E), `--surface-raised` (#272727), `--on-surface` (rgba white 87%), `--text-secondary` (rgba white 60%), `--divider` (rgba white 12%)
- `.container` provides the max-width (960px) centered layout — wrap all page content in it
- Active nav link gets the `.active` class on the matching page

## Conventions

- All asset paths use absolute paths (`/css/style.css`, `/src/shared/page.js`) — Vite resolves these from the project root in both dev and build
- Page-specific JS files are co-located with their HTML and referenced as `./filename.js`. Shared code lives in `src/shared/` and is imported with absolute paths: `import '/src/shared/page.js'`
- Pages with no unique JS use `<script type="module" src="/src/shared/page.js">` directly. When a page needs its own JS, create a file named after the page (never `index.js`) alongside the HTML
- Every new HTML page must be added as an entry point in `vite.config.js`
- SVG icons use Material Design icon paths; keep icons inline in HTML rather than as separate files
