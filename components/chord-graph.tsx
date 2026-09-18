"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { LIVE, POINTS, POINT_COUNT, STATIC_CHORDS, onRing } from "@/lib/chord";
import { SERVICES, serviceAnchor, type ServiceId } from "@/lib/site";

const QUESTION = Object.fromEntries(
  SERVICES.map((service) => [service.id, service.question]),
) as Record<ServiceId, string>;

type Chord = { a: number; b: number; born: number; life: number; peak: number };

export function ChordGraph() {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<string>("mouse");
  const armedRef = useRef<ServiceId | null>(null);
  const [animated, setAnimated] = useState(false);
  const [active, setActive] = useState<ServiceId | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!box || !canvas || !ctx || !wide || reduce) return;

    let size = 0;
    let frame = 0;
    let last = 0;
    let lastSpawn = 0;
    let visible = true;
    const chords: Chord[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = box.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const position = (i: number, t: number) => {
      const p = POINTS[i];
      return [
        p.x * size + Math.sin(t * p.speed + p.phase) * 3,
        p.y * size + Math.cos(t * p.speed * 0.8 + p.phase) * 3,
      ];
    };

    const spawn = (now: number) => {
      const count = 1 + Math.floor(Math.random() * 2);
      for (let k = 0; k < count && chords.length < 9; k++) {
        const a = Math.floor(Math.random() * POINT_COUNT);
        const b =
          (a + 6 + Math.floor(Math.random() * (POINT_COUNT - 12))) % POINT_COUNT;
        chords.push({
          a,
          b,
          born: now,
          life: 4000 + Math.random() * 4000,
          peak: 0.15 + Math.random() * 0.1,
        });
      }
    };

    const draw = (now: number) => {
      frame = requestAnimationFrame(draw);
      if (now - last < 15) return; // cap at ~60fps on high refresh screens
      last = now;
      const t = now / 1000;

      if (now - lastSpawn > 700) {
        spawn(now);
        lastSpawn = now;
      }

      ctx.clearRect(0, 0, size, size);
      ctx.lineWidth = 1;
      for (let i = chords.length - 1; i >= 0; i--) {
        const c = chords[i];
        const age = (now - c.born) / c.life;
        if (age >= 1) {
          chords.splice(i, 1);
          continue;
        }
        const envelope = Math.min(1, age / 0.3, (1 - age) / 0.3);
        const [ax, ay] = position(c.a, t);
        const [bx, by] = position(c.b, t);
        ctx.strokeStyle = `rgba(255,255,255,${c.peak * envelope})`;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }

      for (let i = 0; i < POINT_COUNT; i++) {
        const [x, y] = position(i, t);
        ctx.fillStyle = `rgba(255,255,255,${POINTS[i].alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 0.8 + POINTS[i].size * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(draw);
    };

    // Continue from the server-rendered frame: its chords start mid-life.
    const now = performance.now();
    STATIC_CHORDS.slice(0, 8).forEach(([a, b], i) => {
      const life = 5000 + i * 400;
      chords.push({ a, b, born: now - life * (0.3 + i * 0.05), life, peak: 0.18 });
    });
    lastSpawn = now;

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(box);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(frame);
    });
    io.observe(box);
    setAnimated(true);
    start();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, []);

  const onClick = (event: MouseEvent<HTMLAnchorElement>, id: ServiceId) => {
    // Touch has no hover: first tap reveals the question, second navigates.
    if (pointerRef.current !== "mouse" && event.detail > 0 && armedRef.current !== id) {
      event.preventDefault();
      armedRef.current = id;
      setActive(id);
    }
  };

  const fired = LIVE.find((live) => live.id === active);
  const from = fired ? onRing(fired.angle) : null;
  const to = fired ? onRing(fired.angle + 180) : null;
  const label = fired ? onRing(fired.angle + 180, 0.4) : null;

  return (
    <div ref={boxRef} className="chord" data-animated={animated || undefined}>
      <svg
        className="chord-static"
        viewBox="0 0 1000 1000"
        aria-hidden="true"
        focusable="false"
      >
        {STATIC_CHORDS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={POINTS[a].x * 1000}
            y1={POINTS[a].y * 1000}
            x2={POINTS[b].x * 1000}
            y2={POINTS[b].y * 1000}
            stroke="#fff"
            strokeOpacity={0.18}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {POINTS.map((point, i) => (
          <circle
            key={i}
            cx={point.x * 1000}
            cy={point.y * 1000}
            r={2.6 + point.size * 3.2}
            fill="#fff"
            fillOpacity={point.alpha}
          />
        ))}
      </svg>

      <canvas ref={canvasRef} className="chord-canvas" aria-hidden="true" />

      <svg className="chord-fired" viewBox="0 0 1000 1000" aria-hidden="true">
        {from && to ? (
          <line
            key={active}
            x1={from.x * 1000}
            y1={from.y * 1000}
            x2={to.x * 1000}
            y2={to.y * 1000}
            pathLength={1}
            vectorEffect="non-scaling-stroke"
          />
        ) : null}
        {to ? <circle key={`end-${active}`} cx={to.x * 1000} cy={to.y * 1000} r={6} /> : null}
      </svg>

      {label && fired ? (
        <p
          key={`q-${active}`}
          className="chord-question"
          aria-hidden="true"
          style={{
            left: `${label.x * 100}%`,
            top: `${label.y * 100}%`,
            translate: `${-((Math.cos(((fired.angle + 180) * Math.PI) / 180) + 1) / 2) * 100}% ${-((Math.sin(((fired.angle + 180) * Math.PI) / 180) + 1) / 2) * 100}%`,
          }}
        >
          {QUESTION[fired.id]}
        </p>
      ) : null}

      <ul className="chord-live" aria-label="What do you need?">
        {LIVE.map((live) => {
          const at = onRing(live.angle);
          return (
            <li key={live.id}>
              <a
                href={`#${serviceAnchor(live.id)}`}
                className="chord-point"
                data-active={active === live.id || undefined}
                style={{ left: `${at.x * 100}%`, top: `${at.y * 100}%` }}
                onPointerDown={(event) => {
                  pointerRef.current = event.pointerType;
                }}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setActive(live.id);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === "mouse") setActive(null);
                }}
                onFocus={() => setActive(live.id)}
                onBlur={() => {
                  armedRef.current = null;
                  setActive(null);
                }}
                onClick={(event) => onClick(event, live.id)}
              >
                <span className="chord-dot" aria-hidden="true">
                  ?
                </span>
                <span className="sr-only">{QUESTION[live.id]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
