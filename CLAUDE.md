# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio / blog site built with plain HTML, CSS, and JavaScript — no build tools, no frameworks. The site explores computer science topics through blog posts and interactive generative art projects (based on the book *Generative Art with JavaScript and SVG*).

## Running the site

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Structure

```
index.html             # Landing page (bio + profile image)
blog/index.html        # Blog post listing
projects/index.html    # Projects listing
css/style.css          # Shared stylesheet (all pages)
```

New blog posts go in `blog/` as individual HTML files linked from `blog/index.html`.
New projects go in `projects/` as individual HTML files linked from `projects/index.html`.

## Design system

- **Font:** Roboto (Google Fonts) — weights 300, 400, 500, 700
- **Theme:** Material dark
- **CSS variables** defined in `:root` in `css/style.css` — use these for all colors, shadows, and radius values rather than hardcoding
- Key variables: `--primary` (#9FA8DA Indigo 200), `--background` (#121212), `--surface` (#1E1E1E), `--surface-raised` (#272727), `--on-surface` (rgba white 87%), `--text-secondary` (rgba white 60%), `--divider` (rgba white 12%)
- `.container` provides the max-width (960px) centered layout — wrap all page content in it
- Active nav link gets the `.active` class on the matching page

## Conventions

- Sub-pages (e.g. `blog/`, `projects/`) reference the stylesheet as `../css/style.css`
- Nav links use absolute paths (`/blog/`, `/projects/`) — these require a server; use `../` relative paths if serving without one
- The footer year is set dynamically via a small inline `<script>` at the bottom of each page — replicate this in new pages
- SVG icons use Material Design icon paths; keep icons inline in HTML rather than as separate files
