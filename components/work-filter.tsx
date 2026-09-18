"use client";

import { useState, type ReactNode } from "react";
import { DIRECTIONS, WORK } from "@/lib/work";
import type { ServiceId } from "@/lib/site";

// Bands are server-rendered and passed in by slug; the filter only toggles them.
export function WorkFilter({ bands }: { bands: Record<string, ReactNode> }) {
  const [filter, setFilter] = useState<ServiceId | "all">("all");
  const shown = WORK.filter(
    (item) => filter === "all" || item.directions.includes(filter),
  );

  return (
    <>
      <div className="shell">
        <div className="filters" role="group" aria-label="Filter by service">
          {DIRECTIONS.map((direction) => (
            <button
              key={direction.id}
              type="button"
              className="filter"
              aria-pressed={filter === direction.id}
              onClick={() => setFilter(direction.id)}
            >
              {direction.label}
            </button>
          ))}
        </div>
      </div>
      <div className="bands" aria-live="polite">
        {shown.length ? (
          shown.map((item) => <div key={item.slug}>{bands[item.slug]}</div>)
        ) : (
          <p className="shell dim bands-empty">
            No published case in this area yet. Ask on Telegram and we’ll talk
            through similar work.
          </p>
        )}
      </div>
    </>
  );
}
