# CodeAlpha Calculator

A responsive, keyboard-friendly calculator with a premium dark interface and a session history. Arithmetic is implemented directly in JavaScript; it does not execute user input or use `eval()`.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static file server. No build step or package installation is required.

## Features

- Addition, subtraction, multiplication, division, decimal entry, sign toggle, percent, clear, and backspace.
- Keyboard support for digits, decimal, operators, Enter/equals, Escape, Backspace/Delete, and percent.
- Chained calculations, repeated equals, readable errors for division by zero, and floating-point rounding for display.
- Recent session history with a clear-history control.
- Responsive layout, accessible control labels, visible focus states, and reduced-motion support.

## Technology

HTML5, CSS3, and vanilla JavaScript. No runtime dependencies.

## Structure

```text
index.html       Calculator interface
styles.css       Theme, layout, and responsive rules
script.js        Arithmetic and keyboard interactions
screenshots/     Screenshot capture directory
```

## Checks

- [ ] Verify basic operations and chained operations.
- [ ] Check `0.1 + 0.2`, decimals, percent, sign toggle, clear, and delete.
- [ ] Confirm division by zero displays a readable error.
- [ ] Test keyboard controls and history clearing.
- [ ] Check phone, tablet, and desktop widths and browser console.

## GitHub Pages

This project is included in the public `Frontend_Development_CodeAplpha` repository. Pages is configured from its `main` branch and repository root. The calculator URL is `https://akshay627-crypto.github.io/Frontend_Development_CodeAplpha/CodeAlpha_Calculator/`; verify it after the Pages build finishes.

## Screenshots

Save desktop and mobile captures in `screenshots/` before submission. See `screenshots/README.md` for suggested sizes.
