// src/hooks/useScrollGrow.ts
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook to create scroll-based animations (e.g., grow, fade, translate)
 * for elements as they enter or exit the viewport.
 *
 * @param options - Configuration for the scroll effect.
 * - start: Normalized scroll position (0 to 1) where the animation begins relative to the target element.
 * - end: Normalized scroll position (0 to 1) where the animation ends relative to the target element.
 * @returns An object containing:
 * - ref: A React ref to be attached to the target HTML element.
 * - scrollYProgress: A Framer Motion MotionValue representing the scroll progress.
 * - start: The calculated start value for useTransform.
 * - end: The calculated end value for useTransform.
 */
const useScrollGrow = (options?: { start?: number; end?: number }) => {
  const ref = useRef<HTMLDivElement>(null); // Ref to attach to the element you want to animate
  const { scrollYProgress } = useScroll({
    target: ref,
    // Defines when the animation starts and ends relative to the target element's entry/exit
    // 'start end': when the top of the target element hits the bottom of the viewport
    // 'end start': when the bottom of the target element hits the top of the viewport
    offset: ['start end', 'end start'],
  });

  // Default start and end points for the animation within the scroll progress
  const start = options?.start ?? 0;
  const end = options?.end ?? 1;

  return { ref, scrollYProgress, start, end };
};

export default useScrollGrow;