# haydengriffin.github.io

Personal site, built with [Astro](https://astro.build). `.github/workflows/deploy.yml` deploys it to GitHub Pages on every push to `master`.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in dist/
pnpm check    # type-check
pnpm cv       # regenerate public/hayden-griffin-cv.pdf from the /cv page
```

All of the text is in `src/data/`: `profile.ts`, `work.ts`, `experience.ts` and `home.ts`. Edit those to update the site. Rows that have extra content (details, a stack, links or screenshots) open when clicked. Screenshots and the photo are in `src/assets/` and are optimised at build time. The CV PDF is generated from the same data, so run `pnpm cv` after editing it.
