import { contours } from "d3-contour";
import type { Position } from "../data/types";
import { SHEET } from "./grid";
import { fractalNoise, seeded } from "./random";

/** Pixels per grid square in the map's viewBox. */
export const UNIT = 50;
/** Samples per grid square in the elevation field. */
const RESOLUTION = 6;
/** Contour interval in elevation units (one unit reads as 10 m). */
const INTERVAL = 1;
const INDEX_EVERY = 5;

type Ring = [number, number][];

const noise = fractalNoise(1897);

/** The coast runs south-west to east; land is north of this line. */
const COAST_FROM: [number, number] = [8.5, 13];
const COAST_TO: [number, number] = [20, 9.6];

function distanceInland(x: number, y: number) {
  const [ax, ay] = COAST_FROM;
  const vx = COAST_TO[0] - ax;
  const vy = COAST_TO[1] - ay;
  return -(vx * (y - ay) - vy * (x - ax)) / Math.hypot(vx, vy);
}

function hill(x: number, y: number, cx: number, cy: number, radius: number, height: number) {
  const d2 = (x - cx) ** 2 + (y - cy) ** 2;
  return height * Math.exp(-d2 / (2 * radius * radius));
}

/** Elevation in contour units. Negative is sea. */
export function elevation(x: number, y: number) {
  return (
    distanceInland(x, y) * 0.75 +
    (noise(x * 0.32, y * 0.32) - 0.5) * 3.2 +
    hill(x, y, 3, 1.5, 2.6, 5.5) +
    hill(x, y, 12.5, 2.2, 2.2, 3) +
    hill(x, y, 18, 3.5, 1.8, 2) -
    0.6
  );
}

function sampleField() {
  const width = SHEET.columns * RESOLUTION + 1;
  const height = SHEET.rows * RESOLUTION + 1;
  const values = new Array<number>(width * height);
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      values[j * width + i] = elevation(i / RESOLUTION, j / RESOLUTION);
    }
  }
  return { width, height, values };
}

/** Ramer–Douglas–Peucker, in sample units, to keep the inline SVG small. */
function simplify(ring: Ring, tolerance = 0.12): Ring {
  if (ring.length < 4) return ring;
  const keep = new Uint8Array(ring.length);
  const last = ring.length - 1;
  // Closed rings start and end on the same point, so split at the point farthest from it.
  let far = 1;
  for (let k = 1; k < last; k++) {
    const [x, y] = ring[k]!;
    const [fx, fy] = ring[far]!;
    if (Math.hypot(x - ring[0]![0], y - ring[0]![1]) > Math.hypot(fx - ring[0]![0], fy - ring[0]![1])) far = k;
  }
  keep[0] = keep[far] = keep[last] = 1;
  const stack: [number, number][] = [
    [0, far],
    [far, last],
  ];
  while (stack.length) {
    const [first, end] = stack.pop()!;
    const [ax, ay] = ring[first]!;
    const [bx, by] = ring[end]!;
    const length = Math.hypot(bx - ax, by - ay) || 1;
    let worst = 0;
    let at = -1;
    for (let k = first + 1; k < end; k++) {
      const [px, py] = ring[k]!;
      const distance = Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / length;
      if (distance > worst) {
        worst = distance;
        at = k;
      }
    }
    if (at !== -1 && worst > tolerance) {
      keep[at] = 1;
      stack.push([first, at], [at, end]);
    }
  }
  return ring.filter((_, k) => keep[k]);
}

/** Chaikin corner cutting, so contours read as drawn lines rather than a mesh. */
function soften(ring: Ring, passes = 2): Ring {
  let points = ring;
  for (let pass = 0; pass < passes; pass++) {
    const next: Ring = [];
    for (let k = 0; k < points.length - 1; k++) {
      const [x0, y0] = points[k]!;
      const [x1, y1] = points[k + 1]!;
      next.push([x0 * 0.75 + x1 * 0.25, y0 * 0.75 + y1 * 0.25], [x0 * 0.25 + x1 * 0.75, y0 * 0.25 + y1 * 0.75]);
    }
    next.push(next[0]!);
    points = next;
  }
  return points;
}

const toPixels = (value: number) => Math.round((value / RESOLUTION) * UNIT);

function ringPath(ring: Ring) {
  const softened = soften(simplify(ring));
  let last = "";
  let d = "";
  for (const [x, y] of softened) {
    const point = `${toPixels(x)} ${toPixels(y)}`;
    if (point === last) continue;
    d += d ? `L${point}` : `M${point}`;
    last = point;
  }
  return `${d}Z`;
}

function ringLength(ring: Ring) {
  let total = 0;
  for (let k = 1; k < ring.length; k++) {
    total += Math.hypot(ring[k]![0] - ring[k - 1]![0], ring[k]![1] - ring[k - 1]![1]);
  }
  return total;
}

export interface Contour {
  level: number;
  index: boolean;
  path: string;
  /** Where to letter the height on index contours. */
  label?: { x: number; y: number; angle: number; text: string };
}

function labelFor(rings: Ring[], level: number): Contour["label"] {
  const longest = rings.reduce((best, ring) => (ringLength(ring) > ringLength(best) ? ring : best), rings[0]!);
  const margin = RESOLUTION * 0.6;
  const max = { x: SHEET.columns * RESOLUTION - margin, y: SHEET.rows * RESOLUTION - margin };
  const inside = longest
    .map((point, k) => ({ point, k }))
    .filter(({ point: [x, y] }) => x > margin && y > margin && x < max.x && y < max.y);
  const pick = inside[Math.floor(inside.length * 0.45)];
  if (!pick) return undefined;
  const before = longest[Math.max(0, pick.k - 2)]!;
  const after = longest[Math.min(longest.length - 1, pick.k + 2)]!;
  let angle = (Math.atan2(after[1] - before[1], after[0] - before[0]) * 180) / Math.PI;
  if (angle > 90) angle -= 180;
  if (angle < -90) angle += 180;
  return { x: toPixels(pick.point[0]), y: toPixels(pick.point[1]), angle: Math.round(angle), text: String(Math.round(level * 10)) };
}

export function buildTerrain() {
  const { width, height, values } = sampleField();
  const generator = contours().size([width, height]);
  const max = Math.max(...values);

  const [land] = generator.thresholds([0])(values);
  const landPath = land!.coordinates.flatMap((polygon) => polygon.map((ring) => ringPath(ring as Ring))).join("");

  const lines: Contour[] = [];
  for (let level = INTERVAL; level < max; level += INTERVAL) {
    const [shape] = generator.thresholds([level])(values);
    const rings = shape!.coordinates.flatMap((polygon) => polygon as Ring[]).filter((ring) => ringLength(ring) > RESOLUTION * 0.8);
    if (rings.length === 0) continue;
    const step = Math.round(level / INTERVAL);
    const index = step % INDEX_EVERY === 0;
    lines.push({
      level,
      index,
      path: rings.map(ringPath).join(""),
      label: index ? labelFor(rings, level) : undefined,
    });
  }

  let summit = { x: 0, y: 0, value: -Infinity };
  values.forEach((value, k) => {
    if (value > summit.value) summit = { x: k % width, y: Math.floor(k / width), value };
  });

  return {
    landPath,
    contours: lines,
    summit: {
      x: toPixels(summit.x),
      y: toPixels(summit.y),
      height: Math.round(summit.value * 10),
    },
  };
}

/** An irregular closed outline around a centre, for woodland and similar areas. */
export function blob(center: Position, radius: { x: number; y: number }, seed: number, points = 28) {
  const random = seeded(seed);
  const wobble = fractalNoise(seed);
  const ring: Ring = [];
  for (let k = 0; k <= points; k++) {
    const t = (k % points) / points;
    const angle = t * Math.PI * 2;
    const r = 0.72 + wobble(Math.cos(angle) * 1.4 + 9, Math.sin(angle) * 1.4 + 9, 3) * 0.6 + random() * 0.04;
    ring.push([(center.x + Math.cos(angle) * radius.x * r) * RESOLUTION, (center.y + Math.sin(angle) * radius.y * r) * RESOLUTION]);
  }
  ring[points] = ring[0]!;
  return ringPath(ring);
}

/** A rectangle in grid units that symbols must stay out of, such as a label. */
export interface Box {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const inBox = (x: number, y: number, box: Box) => x > box.left && x < box.right && y > box.top && y < box.bottom;

/** Trees scattered inside an ellipse, skipping the sea, settlements and lettering. */
export function scatterTrees(
  center: Position,
  radius: { x: number; y: number },
  count: number,
  seed: number,
  avoid: Position[],
  keepClear: Box[] = [],
) {
  const random = seeded(seed);
  const trees: { x: number; y: number; kind: "broad" | "conifer" }[] = [];
  let attempts = 0;
  while (trees.length < count && attempts < count * 20) {
    attempts++;
    const angle = random() * Math.PI * 2;
    const r = Math.sqrt(random()) * 0.78;
    const x = center.x + Math.cos(angle) * radius.x * r;
    const y = center.y + Math.sin(angle) * radius.y * r;
    if (elevation(x, y) < 0.3) continue;
    if (avoid.some((p) => Math.hypot(p.x - x, p.y - y) < 0.75)) continue;
    if (keepClear.some((box) => inBox(x, y, box))) continue;
    if (trees.some((t) => Math.hypot(t.x / UNIT - x, t.y / UNIT - y) < 0.32)) continue;
    trees.push({ x: Math.round(x * UNIT), y: Math.round(y * UNIT), kind: random() > 0.3 ? "broad" : "conifer" });
  }
  return trees;
}

/** Small building footprints clustered around a settlement. */
export function buildings(center: Position, count: number, spread: number, seed: number) {
  const random = seeded(seed);
  const street = random() * 180;
  const result: { x: number; y: number; w: number; h: number; angle: number }[] = [];
  let attempts = 0;
  while (result.length < count && attempts < count * 30) {
    attempts++;
    const angle = random() * Math.PI * 2;
    const r = Math.sqrt(random()) * spread;
    const x = center.x + Math.cos(angle) * r;
    const y = center.y + Math.sin(angle) * r * 0.75;
    if (elevation(x, y) < 0.25) continue;
    if (result.some((b) => Math.hypot(b.x / UNIT - x, b.y / UNIT - y) < 0.13)) continue;
    result.push({
      x: Math.round(x * UNIT * 10) / 10,
      y: Math.round(y * UNIT * 10) / 10,
      w: Math.round((3 + random() * 6) * 10) / 10,
      h: Math.round((2.5 + random() * 4) * 10) / 10,
      angle: Math.round(street + (random() > 0.5 ? 90 : 0) + (random() - 0.5) * 12),
    });
  }
  return result;
}

/** A smooth path through points (Catmull-Rom converted to cubic Béziers), in pixels. */
export function smoothPath(points: Position[]) {
  const p = points.map(({ x, y }) => ({ x: x * UNIT, y: y * UNIT }));
  const r = (n: number) => Math.round(n * 10) / 10;
  let d = `M${r(p[0]!.x)} ${r(p[0]!.y)}`;
  for (let k = 0; k < p.length - 1; k++) {
    const p0 = p[Math.max(0, k - 1)]!;
    const p1 = p[k]!;
    const p2 = p[k + 1]!;
    const p3 = p[Math.min(p.length - 1, k + 2)]!;
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += `C${r(c1.x)} ${r(c1.y)} ${r(c2.x)} ${r(c2.y)} ${r(p2.x)} ${r(p2.y)}`;
  }
  return d;
}

/** A ragged woodland boundary along the top of a band, in a 1000-wide viewBox. */
export function woodlandEdge(seed: number, height = 48) {
  const wobble = fractalNoise(seed);
  const steps = 80;
  let d = `M0 ${height}`;
  for (let k = 0; k <= steps; k++) {
    const x = (k / steps) * 1000;
    const y = Math.round((0.15 + wobble(k * 0.09, 3, 4) * 0.85) * height * 10) / 10;
    d += `L${Math.round(x)} ${y}`;
  }
  return `${d}L1000 ${height}Z`;
}
