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

Create a public repository named `CodeAlpha_Calculator`, push this folder to `main`, then enable Pages from **Settings → Pages → Deploy from a branch → main / root**. `index.html` is at the root, so no build output is needed. Verify the URL shown in repository settings after publishing.

## Screenshots

Save desktop and mobile captures in `screenshots/` before submission. See `screenshots/README.md` for suggested sizes.
