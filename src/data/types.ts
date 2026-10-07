/**
 * Map feature classes follow Ordnance Survey lettering conventions:
 * settlements are upright condensed, water is blue italic, areas are
 * letterspaced caps, and antiquities (pre-2020 work) are blackletter.
 */
export type FeatureClass = "settlement" | "water" | "area" | "antiquity";

export interface Link {
  label: string;
  href: string;
}

/** A point on the sheet, in grid units (one unit = one grid square). */
export interface Position {
  x: number;
  y: number;
}

export interface Feature {
  id: string;
  name: string;
  class: FeatureClass;
  position: Position;
  /** One line, as it would sit on the map. */
  summary: string;
  /** The back of the entry: what it is and what Hayden did. */
  details: string[];
  years: string;
  role?: string;
  stack: string[];
  links?: Link[];
}

export interface RouteStop {
  id: string;
  years: string;
  title: string;
  organisation: string;
  where: string;
  class: FeatureClass;
  position: Position;
  highlights: string[];
}
