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

export interface Project {
  name: string;
  summary: string;
  details?: string;
  stack?: string[];
  links?: Link[];
  media?: Media[];
}

export interface Role {
  years: string;
  title: string;
  organisation: string;
  href?: string;
  note?: string;
  highlights?: string[];
}
