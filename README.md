# Caden Otis - Personal Portfolio Website

My personal portfolio website showcasing my academic background, professional experience, skills, and projects. Built with plain HTML, CSS, and a small amount of JavaScript, and hosted on GitHub Pages.

## Pages

Pages use directory-based clean URLs (no `.html`): each page is an `index.html` inside its own folder, served at `/Portfolio/<name>/`.

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` (root `index.html`) | Landing page with hero section, intro, and quick-link guide cards to each section |
| Experience | `/experience/` | Work history at Rice Lake Weighing Systems and John Deere |
| Skills | `/skills/` | Technical skills organized into categories (languages, web tech, tools, hardware) |
| Projects | `/projects/` | Projects from coursework and personal work (portfolio, Wordle, temp sensor, processor, Roomba) |
| Honors | `/honors/` | Academic honors, awards, and scholarship programs |
| Contact | `/contact/` | Contact info including email, LinkedIn, and GitHub |
| 404 | `/404.html` | Custom 404 page with compass icon and link back to homepage |

Each page carries a relative `<base>` tag — `./` on the root pages, `../` on the subpages — so relative links to shared assets (`style.css`, `images/…`, `auto-generate-year.js`) resolve at any folder depth.

## Tech Stack

- HTML5
- CSS3 (Flexbox, SVG icons)
- JavaScript (`auto-generate-year.js` — keeps the footer copyright year current)

## Running Locally

There is no build step or dependencies — just static files. Because the pages use folder URLs (`/experience/`, `/skills/`, …), you need a local web server. Opening the file directly from disk (`file://`) or using an extension like VS Code's Live Server will not work, because neither maps a folder to its `index.html`.

```bash
# run this from the repository root
python3 -m http.server 8000
```

Then visit http://localhost:8000. The home page is at `/`, and the other pages at `/experience/`, `/skills/`, and so on.

## Deployment

The site is deployed to GitHub Pages from the `main` branch (root directory). Pushing to `main` automatically updates the live site at https://cadenrotis.github.io/Portfolio/.
