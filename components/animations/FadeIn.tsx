"use client";

import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const { hiddenFadeUp, visibleFadeUp, viewport, transition } = useMotionPrefs();

  return (
    <motion.div
      initial={hiddenFadeUp}
      whileInView={visibleFadeUp}
      viewport={viewport}
      transition={transition(delay)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
