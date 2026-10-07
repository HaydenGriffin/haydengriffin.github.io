import type { FeatureClass, Position } from "../../data/types";

/** Hand-placed geography that the generated terrain doesn't provide. */

export const river: Position[] = [
  { x: 6.6, y: -0.2 },
  { x: 7.1, y: 1.5 },
  { x: 8.5, y: 3.0 },
  { x: 9.7, y: 4.3 },
  { x: 10.8, y: 5.7 },
  { x: 11.0, y: 7.6 },
  { x: 10.55, y: 9.2 },
  { x: 10.9, y: 10.6 },
  { x: 11.25, y: 13.6 },
];

/** Where the river widens from stream to river. */
export const RIVER_WIDENS_AT = 4;

export const roads: { kind: "b" | "minor"; points: Position[] }[] = [
  {
    kind: "b",
    points: [
      { x: 7.6, y: 4.0 },
      { x: 9.6, y: 5.9 },
      { x: 9.75, y: 8.3 },
      { x: 10.55, y: 9.2 },
      { x: 12.6, y: 9.55 },
      { x: 14.6, y: 8.9 },
      { x: 16.2, y: 6.9 },
      { x: 19.4, y: 5.4 },
      { x: 20.4, y: 5.2 },
    ],
  },
  { kind: "minor", points: [{ x: 14.6, y: 8.9 }, { x: 13.4, y: 8.3 }, { x: 12.4, y: 7.6 }, { x: 12.2, y: 6.4 }, { x: 13.2, y: 5.5 }, { x: 14.2, y: 5.2 }] },
  { kind: "minor", points: [{ x: 14.6, y: 8.9 }, { x: 16.6, y: 8.9 }, { x: 18.3, y: 8.5 }] },
  { kind: "minor", points: [{ x: 10.55, y: 9.2 }, { x: 8.7, y: 9.1 }, { x: 7.3, y: 8.75 }] },
  { kind: "minor", points: [{ x: 4.6, y: 5.2 }, { x: 6.2, y: 4.3 }, { x: 7.6, y: 4.0 }] },
];

export const woodland = { center: { x: 4.9, y: 9.6 }, radius: { x: 3.9, y: 2.5 } };

/** Small woods elsewhere on the sheet, so the House isn't the only green. */
export const copses: { center: Position; radius: { x: number; y: number } }[] = [
  { center: { x: 12.6, y: 3.4 }, radius: { x: 1.1, y: 0.6 } },
  { center: { x: 17.6, y: 2.4 }, radius: { x: 1.4, y: 0.8 } },
  { center: { x: 6.2, y: 1.2 }, radius: { x: 0.9, y: 0.5 } },
  { center: { x: 1.2, y: 4.0 }, radius: { x: 0.8, y: 0.9 } },
];

export interface Label {
  text: string;
  class: FeatureClass;
  /** Offset from the feature in grid units. */
  dx: number;
  dy: number;
  anchor?: "start" | "middle" | "end";
  size: number;
  caps?: boolean;
  /** What the lettering sits on, so its halo matches the ground. */
  ground?: "wood" | "sea";
}

/** Lettering for each plotted feature, sized by importance like OS place names. */
export const labels: Record<string, Label> = {
  paymidas: { text: "PAYMIDAS", class: "settlement", dx: 0.15, dy: 0.95, anchor: "middle", size: 34, caps: true },
  "smart-escrow": { text: "Smart Escrow", class: "settlement", dx: 0.45, dy: -0.15, anchor: "start", size: 19 },
  "base-platform": { text: "Base platform", class: "settlement", dx: 0.4, dy: 0.5, anchor: "start", size: 16 },
  "group-sites": { text: "Group websites", class: "settlement", dx: 0, dy: -0.55, anchor: "middle", size: 15 },
  "payments-bridge": { text: "Payments bridge", class: "water", dx: 0.3, dy: 0.72, anchor: "start", size: 14 },
  modernisation: { text: "LEGACY MODERNISATION", class: "area", dx: 0.2, dy: -0.45, anchor: "middle", size: 11 },
  jumptech: { text: "JUMPTECH", class: "settlement", dx: -0.6, dy: 0.15, anchor: "end", size: 24, caps: true },
  irmacos: { text: "IRMACOS", class: "settlement", dx: 0, dy: -0.45, anchor: "middle", size: 15, caps: true },
  ratio: { text: "Ratio", class: "antiquity", dx: -0.35, dy: 0.15, anchor: "end", size: 19 },
  fivium: { text: "Fivium", class: "antiquity", dx: 0.35, dy: 0.15, anchor: "start", size: 19 },
  surrey: { text: "University of Surrey", class: "antiquity", dx: 0.35, dy: 0.5, anchor: "start", size: 18 },
  integrations: { text: "CUSTOM INTEGRATIONS", class: "area", dx: 0, dy: 0, anchor: "middle", size: 11, ground: "wood" },
  voice: { text: "LOCAL VOICE", class: "area", dx: 0, dy: 0, anchor: "middle", size: 11, ground: "wood" },
  "ask-the-house": { text: "ASK THE HOUSE", class: "area", dx: 0, dy: 0, anchor: "middle", size: 11, ground: "wood" },
  "food-app": { text: "Food for iPhone", class: "settlement", dx: 0.3, dy: 0.12, anchor: "start", size: 14, ground: "wood" },
  "tv-app": { text: "House for webOS", class: "settlement", dx: -0.3, dy: 0.12, anchor: "end", size: 14, ground: "wood" },
  homelab: { text: "HOMELAB", class: "area", dx: 0, dy: 0, anchor: "middle", size: 12 },
};

/** Names for things on the sheet that aren't entries. */
export const placeNames: (Label & Position)[] = [
  { text: "THE HOUSE", class: "area", x: 4.6, y: 9.55, dx: 0, dy: 0, anchor: "middle", size: 22, ground: "wood" },
  { text: "SURREY HILLS", class: "area", x: 5.6, y: 0.62, dx: 0, dy: 0, anchor: "middle", size: 14 },
  { text: "River Settle", class: "water", x: 11.3, y: 6.55, dx: 0, dy: 0, anchor: "start", size: 14 },
  { text: "SEPA & SWIFT", class: "water", x: 16.4, y: 11.6, dx: 0, dy: 0, anchor: "middle", size: 20, ground: "sea" },
];

/** How many buildings to draw at each settlement, and how far they spread. */
export const settlementSize: Record<string, { count: number; spread: number }> = {
  paymidas: { count: 46, spread: 0.95 },
  jumptech: { count: 30, spread: 0.7 },
  "smart-escrow": { count: 14, spread: 0.42 },
  "base-platform": { count: 12, spread: 0.4 },
  "group-sites": { count: 10, spread: 0.38 },
  irmacos: { count: 8, spread: 0.3 },
  ratio: { count: 5, spread: 0.22 },
  fivium: { count: 6, spread: 0.25 },
  surrey: { count: 9, spread: 0.3 },
  "food-app": { count: 3, spread: 0.12 },
  "tv-app": { count: 3, spread: 0.12 },
};
