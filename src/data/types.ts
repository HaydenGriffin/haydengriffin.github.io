import type { ImageMetadata } from "astro";

export interface Link {
  label: string;
  href: string;
}

export interface Media {
  src: ImageMetadata;
  alt: string;
  /** "wide" for desktop screenshots, "phone" for tall phone screens shown side by side. */
  shape: "wide" | "phone";
}

/** A short silent loop in public/clips: <name>.mp4, <name>.webm and <name>-poster.jpg. */
export interface Clip {
  name: string;
  alt: string;
  shape: "wide" | "phone";
  /** Where a wide clip is anchored when it is cropped to a home card, as CSS object-position. Centred by default. */
  position?: string;
}

/**
 * One platform a home build runs on.
 * A platform built in its own repo also gets its own page, /projects/<repo>/, showing its own demo, clip or screenshots.
 */
export interface Platform {
  name: string;
  /** The repo this platform's build lives in, when it is not the project's own. */
  repo?: string;
  demo?: string;
  clip?: Clip;
  media?: Media[];
}

export interface Project {
  name: string;
  /** A public repo under github.com/HaydenGriffin. Its links, language, last update and hero image are pulled in at build time. */
  repo?: string;
  /**
   * A build whose code is private: the address of its project page, /projects/<page>/.
   * The page's write-up is src/writeups/<page>.md, in place of a README.
   */
  page?: string;
  summary: string;
  details?: string;
  stack?: string[];
  links?: Link[];
  media?: Media[];
  clip?: Clip;
  /** A page that can run inside the site, played with the keyboard. */
  demo?: string;
  /** The project's own hero image, copied into src/assets so the site never hotlinks it. */
  hero?: { src: ImageMetadata; alt: string };
  /** What a home build runs on, in the order they are named on its card. */
  platforms?: Platform[];
  /** Shown across the full width at the top of the home builds. */
  featured?: boolean;
  /** Set to false to keep a project out of the site until it is ready. */
  published?: boolean;
}

export interface Role {
  years: string;
  title: string;
  organisation: string;
  href?: string;
  note?: string;
  highlights?: string[];
}
