"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { OFFICES, type Office } from "@/lib/offices";

const TAU = Math.PI * 2;
const DEG = Math.PI / 180;

const GLOBE_PX = 640;

const AUTO_ROTATE_SPEED = 0.0024;
const FOCUS_DAMPING = 0.08;
const TILT_MAX = 0.6;
const MARKER_RADIUS = 0.85;

function shortestWrap(target: number, current: number) {
  let delta = (target - current) % TAU;
  if (delta > Math.PI) delta -= TAU;
  if (delta < -Math.PI) delta += TAU;
  return current + delta;
}

function focusForOffice(office: Office) {
  return {
    phi: -Math.PI / 2 - office.lng * DEG,
    theta: Math.max(-TILT_MAX, Math.min(TILT_MAX, office.lat * DEG)),
  };
}

function locationToVector(lat: number, lng: number) {
  const phi = lat * DEG;
  const theta = lng * DEG - Math.PI;
  const cosPhi = Math.cos(phi);
  return {
    x: -cosPhi * Math.cos(theta),
    y: Math.sin(phi),
    z: cosPhi * Math.sin(theta),
  };
}

function projectMarker(
  lat: number,
  lng: number,
  phi: number,
  theta: number,
) {
  const v = locationToVector(lat, lng);
  const x = v.x * MARKER_RADIUS;
  const y = v.y * MARKER_RADIUS;
  const z = v.z * MARKER_RADIUS;

  const cp = Math.cos(phi);
  const sp = Math.sin(phi);
  const ct = Math.cos(theta);
  const st = Math.sin(theta);

  const c = cp * x + sp * z;
  const s = sp * st * x + ct * y - cp * st * z;
  const zView = -sp * ct * x + st * y + cp * ct * z;

  return {
    nx: (c + 1) / 2,
    ny: (-s + 1) / 2,
    depth: zView,
  };
}

export function OfficesGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [activeId, setActiveId] = useState<string>(OFFICES[0].id);
  const [hovered, setHovered] = useState<boolean>(false);

  const hoveredRef = useRef(hovered);
  const activeIdRef = useRef(activeId);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    activeIdRef.current = activeId;
    const office = OFFICES.find((o) => o.id === activeId);
    if (!office) return;
    const focus = focusForOffice(office);
    motion.current.targetPhi = shortestWrap(focus.phi, motion.current.phi);
    motion.current.targetTheta = focus.theta;
    motion.current.interactive = true;
  }, [activeId]);

  const initialFocus = focusForOffice(OFFICES[0]);
  const motion = useRef({
    phi: initialFocus.phi,
    theta: initialFocus.theta,
    targetPhi: initialFocus.phi,
    targetTheta: initialFocus.theta,
    interactive: true,
  });

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: GLOBE_PX * dpr,
      height: GLOBE_PX * dpr,
      phi: motion.current.phi,
      theta: motion.current.theta,
      dark: 1,
      diffuse: 1.25,
      mapSamples: 22000,
      mapBrightness: 5,
      baseColor: [0.45, 0.55, 0.48],
      markerColor: [0.82, 0.91, 0.83],
      glowColor: [0.16, 0.32, 0.21],
      opacity: 0.95,
      markers: OFFICES.map((o) => ({
        location: [o.lat, o.lng] as [number, number],
        size: 0.06,
      })),
    });

    let rafId = 0;

    const tick = () => {
      const m = motion.current;

      if (m.interactive || hoveredRef.current) {
        m.phi += (m.targetPhi - m.phi) * FOCUS_DAMPING;
        m.theta += (m.targetTheta - m.theta) * FOCUS_DAMPING;
        if (
          Math.abs(m.targetPhi - m.phi) < 0.0008 &&
          Math.abs(m.targetTheta - m.theta) < 0.0008 &&
          !hoveredRef.current
        ) {
          m.interactive = false;
        }
      } else {
        m.phi += AUTO_ROTATE_SPEED;
      }

      globe.update({ phi: m.phi, theta: m.theta });

      for (const office of OFFICES) {
        const el = markerRefs.current[office.id];
        if (!el) continue;

        const proj = projectMarker(office.lat, office.lng, m.phi, m.theta);

        const fade =
          proj.depth >= 0.15
            ? 1
            : proj.depth <= -0.05
              ? 0
              : (proj.depth + 0.05) / 0.2;

        el.style.left = `${(proj.nx * 100).toFixed(3)}%`;
        el.style.top = `${(proj.ny * 100).toFixed(3)}%`;
        el.style.opacity = fade.toFixed(3);
        el.style.pointerEvents = proj.depth > 0 ? "auto" : "none";
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
    };
  }, []);

  const active = OFFICES.find((o) => o.id === activeId) ?? OFFICES[0];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,205,184,0.08)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
          <div
            ref={stageRef}
            className="relative w-full max-w-[640px] aspect-square"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <canvas
              ref={canvasRef}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                contain: "layout paint size",
              }}
            />

            <div
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(208,233,212,0.12) 0%, transparent 55%)",
                mixBlendMode: "screen",
              }}
            />

            {OFFICES.map((office) => {
              const isActive = office.id === activeId;
              return (
                <button
                  key={office.id}
                  ref={(el) => {
                    markerRefs.current[office.id] = el;
                  }}
                  type="button"
                  onMouseEnter={() => setActiveId(office.id)}
                  onFocus={() => setActiveId(office.id)}
                  onClick={() => setActiveId(office.id)}
                  aria-label={`Focus globe on ${office.city} office`}
                  className="absolute group"
                  style={{
                    transform: "translate(-50%, -50%)",
                    transition: "opacity 240ms ease-out",
                    willChange: "left, top, opacity",
                  }}
                >
                  <MarkerDot active={isActive} />
                  <MarkerLabel office={office} active={isActive} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <OfficeRoster
            offices={OFFICES}
            activeId={activeId}
            onHover={setActiveId}
            active={active}
          />
        </div>
      </div>
    </div>
  );
}

function MarkerDot({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className="relative block"
      style={{ width: 14, height: 14 }}
    >
      <span
        className={`absolute inset-0 rounded-full ${
          active ? "bg-primary-fixed" : "bg-primary-fixed/60"
        }`}
        style={{
          boxShadow: active
            ? "0 0 0 2px rgba(208,233,212,0.35), 0 0 24px rgba(208,233,212,0.55)"
            : "0 0 0 1px rgba(208,233,212,0.25), 0 0 12px rgba(208,233,212,0.35)",
          transition: "all 240ms ease-out",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary-fixed"
        style={{
          animation: active
            ? "office-marker-pulse 2.2s ease-out infinite"
            : "office-marker-flicker 4.5s ease-in-out infinite",
        }}
      />
    </span>
  );
}

function MarkerLabel({
  office,
  active,
}: {
  office: Office;
  active: boolean;
}) {
  return (
    <span
      className="absolute left-4 top-1/2 -translate-y-1/2 text-left whitespace-nowrap select-none"
      style={{
        opacity: active ? 1 : 0,
        transition: "opacity 320ms ease-out",
      }}
    >
      <span className="block text-[10px] tracking-[0.2em] uppercase text-primary-fixed/70">
        {office.index} · {office.country}
      </span>
      <span className="block font-display text-headline-sm text-primary-fixed leading-none mt-1">
        {office.city}
      </span>
      <span className="block mt-2 h-px w-12 bg-primary-fixed/40" />
    </span>
  );
}

function OfficeRoster({
  offices,
  activeId,
  onHover,
  active,
}: {
  offices: Office[];
  activeId: string;
  onHover: (id: string) => void;
  active: Office;
}) {
  return (
    <div className="text-on-primary">
      <p className="text-label-caps uppercase text-on-primary-container mb-4">
        Select an office
      </p>

      <ul className="divide-y divide-on-primary/10 border-t border-b border-on-primary/10 mb-10">
        {offices.map((office) => {
          const isActive = office.id === activeId;
          return (
            <li key={office.id}>
              <button
                type="button"
                onMouseEnter={() => onHover(office.id)}
                onFocus={() => onHover(office.id)}
                onClick={() => onHover(office.id)}
                aria-pressed={isActive}
                className="group w-full text-left py-5 flex items-baseline justify-between gap-6 transition-colors"
              >
                <span className="flex items-baseline gap-6">
                  <span
                    className={`font-display text-label-caps tracking-[0.2em] transition-colors ${
                      isActive
                        ? "text-primary-fixed"
                        : "text-on-primary-container"
                    }`}
                  >
                    {office.index}
                  </span>
                  <span
                    className={`font-display text-headline-sm transition-colors ${
                      isActive ? "text-primary-fixed" : "text-on-primary"
                    }`}
                  >
                    {office.city}
                  </span>
                </span>
                <span
                  className={`text-label-caps uppercase transition-all ${
                    isActive
                      ? "text-primary-fixed translate-x-0"
                      : "text-on-primary-container/70 group-hover:text-on-primary-container"
                  }`}
                >
                  {office.founding ? "Founding" : office.opened.replace("Opened ", "")}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        key={active.id}
        className="animate-[office-detail-enter_400ms_ease-out]"
      >
        <span className="text-label-caps uppercase text-on-primary-container">
          Currently viewing
        </span>
        <h3 className="font-display text-headline-lg text-on-primary mt-3 mb-2">
          {active.city}
        </h3>
        <p className="text-label-caps uppercase text-on-primary-container/80 mb-6">
          {active.country} · {active.opened}
        </p>

        <p className="font-display italic text-body-lg text-primary-fixed leading-relaxed mb-6">
          {active.expertise}
        </p>

        <ul className="space-y-2 mb-6">
          {active.practice.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-body-md text-on-primary-container"
            >
              <span
                aria-hidden
                className="mt-[10px] w-1 h-1 bg-primary-fixed rounded-full shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-on-primary/10 text-body-md text-on-primary-container">
          <div>
            <dt className="text-label-caps uppercase text-on-primary-container/70 mb-1">
              Address
            </dt>
            <dd className="text-on-primary leading-snug">
              {active.street}
              <br />
              {active.postal}
            </dd>
          </div>
          <div>
            <dt className="text-label-caps uppercase text-on-primary-container/70 mb-1">
              Languages
            </dt>
            <dd className="text-on-primary">{active.languages.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
