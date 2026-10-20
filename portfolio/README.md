# Portfolio site

A static site (plain HTML, CSS, and a little JavaScript) built for GitHub Pages. You don't need a build step, a framework, or `npm install`.

```
index.html          ← home page content (the file you'll edit most)
projects/           ← one page per in-depth project
styles.css          ← colors, fonts, layout
script.js           ← mobile menu, project filters, copy buttons
assets/
  resume.pdf        ← REPLACE with your real résumé (keep this file name)
  favicon.svg       ← browser tab icon
  img/              ← project images + the hero topo graphic
.nojekyll           ← tells GitHub Pages to serve the files as they are
```

## 1. Fill in your details

In `index.html`, search for `EDIT:`. Each one marks something to change:

- **Name**: in `<title>`, the meta tags, the header, and the footer
- **Coordinates** above the headline: use your university's or hometown's lat/long
- **Headline and intro**
- **About**: your own 2–3 paragraphs, degree, graduation date, location
- **Projects** (see below)
- **Skills**: keep only what you can talk about in an interview
- **Experience & education**
- **Contact**: email, phone, and LinkedIn. Change both the `href` and the visible text, and the `data-copy` value on the Copy buttons.

Then replace `assets/resume.pdf` with your résumé exported as PDF. **Keep the file name `resume.pdf`** so every download link keeps working.

## 2. Add or change projects

Each project is one `<article class="project">…</article>` block. To add one, copy a block and edit it:

- **Image**: put a PNG/JPG in `assets/img/` and change the `src`. A 16:10 shape works best (for example 1600×1000). Export maps from ArcGIS Pro or QGIS at about 1600px wide so the file stays under ~500 KB.
- **`data-tags`**: controls the filter buttons. Use any of `analysis`, `carto`, `rs`, `dev`, separated by spaces.
- **Links**: point them to a PDF in `assets/`, an ArcGIS StoryMap, a GitHub repo, or a web map. To link a PDF map, drop it in `assets/` and use `href="assets/your-map.pdf"`.

**Project pages.** A project with several maps can get its own page, like `projects/nevada-mineral-exploration.html`. Copy that file, rename it, and swap the text and images. Clicking any map opens it full screen. Link the card on the home page to the new file.

## 3. Preview locally

Opening `index.html` directly mostly works, but the hero map graphic only shows when the site is served. From the `portfolio` folder:

```bash
npx http-server -p 8080
```

Then open http://localhost:8080.

## 4. Publish on GitHub Pages

1. Create a new public repo on GitHub named **`your-username.github.io`** (use your actual username). The site will then live at `https://your-username.github.io`.
2. Upload the *contents* of this `portfolio` folder (not the folder itself) to the repo. You can drag and drop on GitHub's "Add file → Upload files" page, or use git:
   ```bash
   git init
   ```
   ```bash
   git add .
   ```
   ```bash
   git commit -m "Initial portfolio"
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git remote add origin https://github.com/your-username/your-username.github.io.git
   ```
   ```bash
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. Wait a minute or two, then visit the URL.

Any later change you push goes live automatically within a couple of minutes.

## A note on your phone number

The page is public, and scrapers do collect phone numbers from portfolio sites. Some people show only email and LinkedIn and put the phone number on the résumé PDF. That choice is yours. If you'd rather leave the phone out, delete the Phone `<li>` in the contact section.

## Design notes

- Colors are defined once at the top of `styles.css` (`--paper`, `--ink`, `--accent`, …). A dark version switches on automatically when the visitor's device is in dark mode.
- Fonts: Newsreader (headings), IBM Plex Sans (body), IBM Plex Mono (small labels), all loaded from Google Fonts.
- The hero topographic graphic is a real contour set generated with marching squares, and it takes its color from the CSS, so it follows the theme.
