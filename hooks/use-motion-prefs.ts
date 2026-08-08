"use client";

import { useReducedMotion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

export const MOTION_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function useMotionPrefs() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion() ?? false;

  const fadeInY = prefersReducedMotion ? 0 : isMobile ? 15 : 24;
  const fadeInX = prefersReducedMotion ? 0 : isMobile ? 10 : 20;
  const fadeInDuration = prefersReducedMotion ? 0.01 : isMobile ? 0.45 : 0.8;
  const sectionDuration = prefersReducedMotion ? 0.01 : isMobile ? 0.4 : 0.6;
  const heroDuration = prefersReducedMotion ? 0.01 : isMobile ? 0.35 : 0.8;

  const staggerDelay = (index: number, step = 0.1) =>
    prefersReducedMotion ? 0 : index * (isMobile ? step * 0.5 : step);

  const heroDelay = (delay: number) =>
    prefersReducedMotion ? 0 : isMobile ? delay * 0.45 : delay;

  const viewport = {
    once: true as const,
    margin: (isMobile ? "-5%" : "-10%") as "-5%" | "-10%",
  };

  const transition = (
    delay = 0,
    duration = fadeInDuration,
    ease: [number, number, number, number] = [...MOTION_EASE]
  ) => ({
    duration,
    ease,
    delay: prefersReducedMotion ? 0 : delay,
  });

  return {
    isMobile,
    prefersReducedMotion,
    fadeInY,
    fadeInX,
    fadeInDuration,
    sectionDuration,
    heroDuration,
    staggerDelay,
    heroDelay,
    viewport,
    transition,
    ease: MOTION_EASE,
    hiddenFadeUp: { opacity: 0, y: fadeInY },
    visibleFadeUp: { opacity: 1, y: 0 },
    hiddenFadeLeft: { opacity: 0, x: -fadeInX },
    visibleFadeLeft: { opacity: 1, x: 0 },
    hiddenFade: { opacity: 0 },
    visibleFade: { opacity: 1 },
    hiddenScale: { opacity: 0, scale: prefersReducedMotion || isMobile ? 1 : 0.95 },
    visibleScale: { opacity: 1, scale: 1 },
  };
}
