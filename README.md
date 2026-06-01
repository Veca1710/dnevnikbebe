# Bebin Dnevnik Website

Official landing page for Bebin Dnevnik, a simple baby diary app for tracking daily activities, reminders, and day summaries.

## Project Structure

```txt
public/
  background.png
  background-mobile.png
  appimage.png
  favicon.png
  social-thumbnail.jpg
  step-welcome.png
  step-dnevnik.png
  step-podsetnik.png
  step-pregled.png

src/
  App.jsx
  index.css

index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
```

## Required Assets

The following files should exist in the `public` folder:

- `background.png` — desktop hero background image
- `background-mobile.png` — mobile hero background image
- `appimage.png` — phone mockup used in the hero section
- `favicon.png` — website favicon
- `social-thumbnail.jpg` — Open Graph / social sharing image
- `step-welcome.png` — onboarding / add baby screenshot
- `step-dnevnik.png` — diary tab screenshot
- `step-podsetnik.png` — reminders tab screenshot
- `step-pregled.png` — day overview screenshot

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Vercel Settings

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

## Notes

- Primary brand color: `rgb(159, 174, 142)`
- The website copy is in Serbian Latin.
- Keep file names lowercase and avoid duplicates such as `.PNG`, `.png.png`, `.svg.svg`, `.DS_Store`, or `._filename`.


## Vercel Registry Fix

This project intentionally does not include `package-lock.json`.

A `.npmrc` file is included to force Vercel to use the public npm registry:

```txt
registry=https://registry.npmjs.org/
```

Recommended Vercel settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```
