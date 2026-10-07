/** Deterministic PRNG (mulberry32) so the sheet is identical on every build. */
export function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Smooth 2D value noise summed over octaves. */
export function fractalNoise(seed: number) {
  const random = seeded(seed);
  const size = 256;
  const lattice = Float64Array.from({ length: size * size }, random);
  const at = (x: number, y: number) => lattice[((y & (size - 1)) * size + (x & (size - 1)))]!;
  const smooth = (t: number) => t * t * (3 - 2 * t);

  const noise = (x: number, y: number) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const sx = smooth(x - x0);
    const sy = smooth(y - y0);
    const top = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * sx;
    const bottom = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * sx;
    return top + (bottom - top) * sy;
  };

  return (x: number, y: number, octaves = 5) => {
    let total = 0;
    let amplitude = 1;
    let frequency = 1;
    let range = 0;
    for (let i = 0; i < octaves; i++) {
      total += noise(x * frequency, y * frequency) * amplitude;
      range += amplitude;
      amplitude *= 0.5;
      frequency *= 2;
    }
    return total / range;
  };
}
