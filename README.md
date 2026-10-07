# haydengriffin.github.io

Personal site, drawn as an Ordnance Survey-style map sheet. Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in dist/
pnpm check    # type-check
```

## Where things live

- `src/data/`: all of the content. `profile.ts` holds the cover and contact details, `work.ts` the PayMidas entries, `route.ts` the career history, and `home.ts` the home builds. Editing these files updates the site.
- `src/lib/terrain.ts`: generates the map at build time (contours from seeded noise, woodland, buildings). It is deterministic, so the sheet looks the same on every build.
- `src/lib/grid.ts`: the sheet's grid and six-figure grid references.
- `src/components/map/`: the overview map, the hand-placed geography (river, roads, label positions) and the inset maps.
- `src/components/sections/`: one component per page section.

Every feature has a `position` in grid squares (the sheet is 20 × 13). It sets where the feature is plotted on the map and its grid reference. If you add a feature, give it a label in `src/components/map/geography.ts`.
