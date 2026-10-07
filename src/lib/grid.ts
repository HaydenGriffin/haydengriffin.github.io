import type { Position } from "../data/types";

/** The sheet is 20 grid squares wide and 13 tall. */
export const SHEET = { columns: 20, rows: 13 } as const;

/** Grid lines are numbered like an OS sheet: eastings rise to the east, northings to the north. */
export const FIRST_EASTING = 40;
export const TOP_NORTHING = 93;
export const SQUARE_LETTERS = "HG";

export const easting = (x: number) => FIRST_EASTING + x;
export const northing = (y: number) => TOP_NORTHING - y;

const tenths = (value: number) => String(Math.floor(value * 10) % 1000).padStart(3, "0");

/** A six-figure grid reference, e.g. "HG 524 853". */
export function gridRef({ x, y }: Position): string {
  return `${SQUARE_LETTERS} ${tenths(easting(x))} ${tenths(northing(y))}`;
}
