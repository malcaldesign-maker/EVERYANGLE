import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Thin gradient bar at the top of the viewport that fills as the user scrolls.
 * Subtle but premium — these are the touches that separate "looks great" from
 * "feels great."
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.6 });
  return <motion.div className="scroll-progress-bar" style={{ scaleX, width: '100%' }} aria-hidden="true" />;
}
