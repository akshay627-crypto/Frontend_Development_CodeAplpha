# CodeAlpha Personal Portfolio

A responsive, accessible portfolio template built with HTML, CSS, and vanilla JavaScript. Personal details, education, skills, and project links remain clearly marked placeholders because no biography or resume information was provided.

## Personalize before publishing

1. Replace `[Your Name]`, role, location, about copy, skills, project details, and education in `index.html`.
2. Replace the example GitHub and GitHub Pages platform links with your real repository and deployed project URLs. The current links intentionally point to the platform home pages.
3. Set `contactAddress` in `script.js` to your email. The contact form validates its fields and opens the visitor’s email application with a prefilled message; it does not submit to a server.
4. Replace `assets/resume-template.txt` with your real resume (for example, `assets/resume.pdf`) and update the download link in `index.html`.
5. Replace the GitHub and LinkedIn profile URLs in the footer.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static file server. No build step or package installation is required. Google Fonts are optional; system fallbacks are included.

## Sections and features

- Hero, about, technical skills, projects, education, resume download, contact form, and social footer.
- Responsive mobile navigation with keyboard Escape support and anchor-based smooth scrolling.
- Scroll-triggered section reveals with reduced-motion support.
- Project cards with replaceable GitHub and live-demo links.
- SEO description and Open Graph metadata, semantic sections, skip link, accessible form labels, and visible focus styles.
- Contact form setup documented above; `mailto:` opens a draft in the visitor’s configured email client.

## Technology

HTML5, CSS3, and vanilla JavaScript. No runtime dependencies.

## Structure

```text
index.html                  Portfolio content and metadata
styles.css                  Theme, responsive layout, and motion
script.js                   Navigation, reveals, and contact form
assets/resume-template.txt  Clearly marked resume starter
screenshots/                Screenshot capture directory
```

## Checks

- [ ] Replace every bracketed prompt and example platform URL.
- [ ] Test navigation and contact form at desktop and mobile widths.
- [ ] Confirm the resume download points to your real resume.
- [ ] Check keyboard navigation, reduced motion, browser console, and internal anchors.
- [ ] Validate metadata, links, and HTML/CSS before submission.

## GitHub Pages

Create a public repository named `CodeAlpha_PersonalPortfolio`, push this folder to `main`, then enable Pages from **Settings → Pages → Deploy from a branch → main / root**. The entry point and assets are relative to the root. Verify the published URL in repository settings after deployment.

## Screenshots

Save desktop and mobile captures in `screenshots/` before submission. See `screenshots/README.md` for suggested sizes.
