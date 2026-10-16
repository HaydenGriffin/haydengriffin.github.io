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

/** The groups the open-source home builds are shown in. */
export type ProjectGroup = "tv" | "home";

export interface Project {
  name: string;
  /** A public repo under github.com/HaydenGriffin. Its links, language, last update and hero image are pulled in at build time. */
  repo?: string;
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
  /** Which group a home build is shown in. */
  group?: ProjectGroup;
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
