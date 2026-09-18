import type { ServiceId } from "@/lib/site";

// Ring geometry shared by the server-rendered static frame and the canvas,
// so the first paint and the animation start from the same composition.
// Coordinates are unit space: centre (0.5, 0.5), ring radius RADIUS.

export const RADIUS = 0.44;
export const POINT_COUNT = 76;

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type RingPoint = {
  x: number;
  y: number;
  size: number; // 0..1, scaled per renderer
  alpha: number;
  phase: number;
  speed: number;
};

const rand = mulberry32(20250918);

const round = (n: number) => Math.round(n * 1e4) / 1e4;

export const POINTS: RingPoint[] = Array.from({ length: POINT_COUNT }, (_, i) => {
  const angle = (i / POINT_COUNT) * Math.PI * 2 + (rand() - 0.5) * 0.05;
  const r = RADIUS * (1 + (rand() - 0.5) * 0.06);
  return {
    x: round(0.5 + Math.cos(angle) * r),
    y: round(0.5 + Math.sin(angle) * r),
    size: round(0.35 + rand() * 0.65),
    alpha: round(0.35 + rand() * 0.65),
    phase: rand() * Math.PI * 2,
    speed: 0.25 + rand() * 0.35,
  };
});

// Chords for the static frame: non-adjacent pairs, a quiet handful.
export const STATIC_CHORDS: [number, number][] = Array.from({ length: 16 }, () => {
  const a = Math.floor(rand() * POINT_COUNT);
  const b = (a + 8 + Math.floor(rand() * (POINT_COUNT - 16))) % POINT_COUNT;
  return [a, b];
});

export function onRing(angleDeg: number, radius = RADIUS) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: 0.5 + Math.cos(a) * radius, y: 0.5 + Math.sin(a) * radius };
}

// Live points sit on the left and top; their questions surface on the
// opposite side, so no question ever lands on another live point.
export const LIVE: { id: ServiceId; angle: number }[] = [
  { id: "web", angle: 160 },
  { id: "cro", angle: 205 },
  { id: "integration", angle: 250 },
  { id: "software", angle: 295 },
];
