# haydengriffin.github.io

Personal site, built with [Astro](https://astro.build). `.github/workflows/deploy.yml` deploys it to GitHub Pages on every push to `master`, and rebuilds it every morning so each project's latest release, language and last update stay current.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in dist/
pnpm check    # type-check
pnpm cv       # write a CV PDF to cv/ (not published) from the same data
```

All of the text is in `src/data/`: `profile.ts`, `work.ts`, `experience.ts` and `home.ts`. Edit those to update the site. Screenshots and the photo are in `src/assets/` and are optimised at build time.

In `home.ts`:

- `repo` is a public repo under github.com/HaydenGriffin. Its README becomes the project page (with Mermaid diagrams left out), and its links, language and latest release are pulled in at build time, so a new release shows up without an edit here.
- `page` is for a build whose code is private. Its page is written in `src/writeups/<page>.md`.
- `platforms` names what each build runs on. A platform built in its own repo gets its own page, with a switch between them.
- `featured` puts one build across the top, and `published: false` keeps one off the site until it is ready.
- `clip` is a short silent loop in `public/clips/`: `<name>.webm`, `<name>.mp4` and `<name>-poster.jpg`, with the poster the same size as the clip. On a desktop, resting the pointer on a card's image opens the clip in a larger player over it, at its own shape. The clip also plays on the project page.
- A card without a clip opens the same player as a slideshow of its `media` and each platform's.

In `work.ts`, rows that have extra content (details, a stack, links or screenshots) open when clicked.
