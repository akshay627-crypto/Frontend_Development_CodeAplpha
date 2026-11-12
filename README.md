# Frontend_Development_CodeAplha

One repository containing the three CodeAlpha frontend projects plus a root launch page. Each project is a standalone HTML/CSS/vanilla JavaScript site; no framework, build step, or package installation is required.

## Projects

- `CodeAlpha_ImageGallery/` — responsive photography gallery with category filters, keyboard-accessible lightbox, lazy loading, and image fallbacks.
- `CodeAlpha_Calculator/` — responsive calculator with arithmetic, keyboard input, history, and division-by-zero handling.
- `CodeAlpha_PersonalPortfolio/` — responsive portfolio template with mobile navigation, scroll reveals, resume template, and a documented `mailto:` contact setup. Personal details are placeholders and must be replaced before publishing.

## Run locally

Open the root `index.html` to browse all three projects. Each project also runs independently by opening its own `index.html`. For deployment-like path testing, serve this folder with any static file server; there is no build command or dependency installation.

## Technology and accessibility

HTML5, CSS3, and vanilla JavaScript. Pages use semantic landmarks, accessible names and form labels, visible keyboard focus, responsive layouts, and reduced-motion support. The gallery downloads photography from Unsplash and uses local visual fallbacks when an image fails to load.

## Repository structure

```text
index.html                         Project launch page
styles.css                         Launch page styling
CodeAlpha_ImageGallery/            Gallery site, README, and screenshots folder
CodeAlpha_Calculator/              Calculator site, README, and screenshots folder
CodeAlpha_PersonalPortfolio/       Portfolio site, README, assets, and screenshots folder
```

## Quality checks

- JavaScript syntax checks pass for all three applications.
- Interaction smoke checks cover gallery filtering/lightbox, calculator arithmetic and keyboard behavior, and portfolio navigation/contact setup.
- Local file references, internal anchors, HTML IDs, CSS brace balance, and clean Git worktrees were checked.
- Browser-rendered desktop/mobile screenshots and cross-browser console review still require a browser preview.

## Publish this single repository

Create a public GitHub repository named exactly `Frontend_Development_CodeAplha`, without a generated README, `.gitignore`, or license. From this folder, run:

```powershell
git init -b main
git add .
git commit -m "Complete CodeAlpha frontend projects"
git remote add origin https://github.com/<username>/Frontend_Development_CodeAplha.git
git push -u origin main
```

Then enable GitHub Pages from **Settings → Pages → Deploy from a branch → main / root**. The root launch page should be served at `https://<username>.github.io/Frontend_Development_CodeAplha/`; the three projects will be available under their directory paths. Confirm each deployment URL in repository settings before submitting.

## Submission checklist

- [ ] Replace the personal portfolio placeholders and its example profile/project links.
- [ ] Replace `CodeAlpha_PersonalPortfolio/assets/resume-template.txt` with a real resume and update the download link.
- [ ] Set the contact email in `CodeAlpha_PersonalPortfolio/script.js`.
- [ ] Capture desktop and mobile screenshots in each project's `screenshots/` folder.
- [ ] Create the single public repository, push `main`, enable Pages, and verify its URLs.
