# Shreya Mane — Portfolio

A responsive React + Vite portfolio. Content, project links, and the résumé path are centralized in `src/data.ts`.

## Replace the placeholders

1. Add Shreya's portrait and Smart India Hackathon photographs to `public/images/`, then replace the labelled placeholder blocks in `src/App.tsx` with those image paths.
2. Add the real résumé PDF to `public/` and set `siteConfig.resumePath` in `src/data.ts` (for example, `"Shreya-Mane-Resume.pdf"`).
3. Add GitHub or live-demo URLs in `siteConfig.projectLinks`. Empty values intentionally render as editable placeholders.

## GitHub Pages

The Vite config reads the public base path from `FIGMA_PUBLIC_URL`. For a repository named `portfolio`, build with:

```bash
FIGMA_PUBLIC_URL=/portfolio pnpm build
```

Deploy the generated `dist/` folder with GitHub Actions or `gh-pages`. For a user/organization site (`username.github.io`), build without the variable so the base path remains `/`.
