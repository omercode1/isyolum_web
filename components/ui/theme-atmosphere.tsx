"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";

const CONTOURS = [
  "M-180 136C-84 44 8 65 100 138C189 208 255 187 365 78C458 -12 568 5 666 94C758 177 839 186 973 62C1109 -64 1237 -18 1365 102C1454 185 1555 194 1665 81",
  "M-160 214C-75 101 40 118 133 201C237 293 342 268 440 160C538 52 638 51 744 152C853 255 947 262 1064 143C1185 20 1303 28 1415 142C1511 239 1607 247 1700 153",
  "M-130 291C-51 204 39 198 123 276C213 360 302 357 399 268C504 172 604 183 694 278C788 376 887 371 1000 266C1106 166 1208 170 1308 270C1405 368 1515 370 1638 256",
  "M-140 370C-47 283 48 286 131 359C216 434 314 431 407 350C503 265 594 277 689 365C783 454 882 457 989 359C1092 265 1185 265 1288 361C1388 454 1493 456 1631 340",
  "M-138 448C-41 373 48 374 142 442C238 514 323 514 419 442C518 368 604 371 703 443C806 516 901 517 1013 438C1118 362 1207 367 1316 443C1420 516 1517 513 1634 431",
  "M-124 526C-45 466 46 465 140 519C239 577 324 576 422 523C522 470 613 473 707 528C805 584 900 584 1010 523C1111 466 1207 467 1301 524C1402 584 1502 585 1638 512",
];

export function ThemeAtmosphere() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const atmosphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const element = atmosphereRef.current;
        if (!element) return;
        element.style.setProperty("--topo-x", `${event.clientX}px`);
        element.style.setProperty("--topo-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-20] overflow-hidden">
      <div ref={atmosphereRef} className="dark-topography hidden size-full dark:block">
        <svg viewBox="0 0 1440 680" preserveAspectRatio="none" className="absolute inset-0 size-full opacity-80">
          {CONTOURS.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke="rgba(96,165,250,0.2)"
              strokeWidth="1.15"
              strokeDasharray="8 14"
              initial={{ strokeDashoffset: 0 }}
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [-240 - index * 16, 0] }}
              transition={{ duration: 24 + index * 2.5, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
        <svg viewBox="0 0 1440 680" preserveAspectRatio="none" className="topography-spotlight absolute inset-0 size-full">
          {CONTOURS.map((path) => <path key={path} d={path} fill="none" stroke="rgba(147,197,253,0.9)" strokeWidth="1.7" />)}
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(37,99,235,0.2),transparent_25%),radial-gradient(circle_at_25%_72%,rgba(30,64,175,0.17),transparent_32%)]" />
      </div>

      <div className="light-aurora size-full dark:hidden">
        <div className="aurora-orb aurora-orb-one" />
        <div className="aurora-orb aurora-orb-two" />
        <div className="aurora-orb aurora-orb-three" />
        <div className="aurora-orb aurora-orb-four" />
        <div className="light-noise absolute inset-0" />
      </div>
    </div>
  );
}
