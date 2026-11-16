# CodeAlpha Image Gallery

A responsive photography portfolio gallery built with HTML, CSS, and vanilla JavaScript. The gallery uses remote Unsplash image URLs; if an image cannot load, its card switches to a styled local fallback instead of showing a broken-image icon.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static file server. No build step or package installation is required. An internet connection is needed for the photography and optional web fonts.

## Features

- Responsive CSS Grid with landscape, architecture, and portrait filters.
- Full-screen lightbox with previous/next buttons, arrow-key navigation, Escape to close, and backdrop dismissal.
- Keyboard-accessible image cards, lazy-loaded images, and loading-error fallbacks.
- Reduced-motion support, semantic landmarks, responsive layouts, and accessible labels.

## Technology

HTML5, CSS3, and vanilla JavaScript. No runtime dependencies.

## Structure

```text
index.html       Page structure and metadata
styles.css       Theme, layout, responsive rules, and motion
script.js        Gallery data, filters, and lightbox behavior
screenshots/     Screenshot capture directory
```

## Checks

- [ ] Filter each category and confirm the visible count updates.
- [ ] Open an image and test both arrows, keyboard arrows, Escape, and the close button.
- [ ] Check the layout at phone, tablet, and desktop widths.
- [ ] Disable network access and confirm image fallbacks appear cleanly.
- [ ] Check browser console and accessibility labels.

## GitHub Pages

This project is included in the public `Frontend_Development_CodeAplpha` repository. Pages is configured from its `main` branch and repository root. The gallery URL is `https://akshay627-crypto.github.io/Frontend_Development_CodeAplpha/CodeAlpha_ImageGallery/`; verify it after the Pages build finishes.

## Screenshots

Save desktop and mobile captures in `screenshots/` before submission. See `screenshots/README.md` for suggested sizes.
