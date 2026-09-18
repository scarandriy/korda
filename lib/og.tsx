import { ImageResponse } from "next/og";
import { POINTS, STATIC_CHORDS } from "@/lib/chord";

export const OG_SIZE = { width: 1200, height: 630 };

// The static ring as an SVG data URI, so every card carries the brand mark.
const ring = (() => {
  const lines = STATIC_CHORDS.map(
    ([a, b]) =>
      `<line x1="${POINTS[a].x * 1000}" y1="${POINTS[a].y * 1000}" x2="${POINTS[b].x * 1000}" y2="${POINTS[b].y * 1000}" stroke="#fff" stroke-opacity="0.2" stroke-width="2"/>`,
  ).join("");
  const dots = POINTS.map(
    (p) =>
      `<circle cx="${p.x * 1000}" cy="${p.y * 1000}" r="${4 + p.size * 5}" fill="#fff" fill-opacity="${p.alpha}"/>`,
  ).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">${lines}${dots}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
})();

export function ogImage({ title, caption }: { title: string; caption?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
            width: 720,
          }}
        >
          <div style={{ fontSize: 34, letterSpacing: -1 }}>korda</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 60,
                fontWeight: 600,
                letterSpacing: -2,
                lineHeight: 1.02,
              }}
            >
              {title}
            </div>
            {caption ? (
              <div style={{ fontSize: 26, color: "#8a8a8a" }}>{caption}</div>
            ) : null}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ring} width={520} height={520} alt="" style={{ marginTop: 55 }} />
      </div>
    ),
    OG_SIZE,
  );
}
