import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

interface AnimProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fade + slide up on scroll into view */
export function FadeUp({ children, delay = 0, className = "" }: AnimProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: easeSmooth, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Pure fade in on scroll */
export function FadeIn({ children, delay = 0, className = "" }: AnimProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its children */
export function StaggerContainer({
  children,
  className = "",
}: Omit<AnimProps, "delay">) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Item used inside StaggerContainer */
export function StaggerItem({
  children,
  className = "",
}: Omit<AnimProps, "delay">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, ease: easeSmooth },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Hover-lift card wrapper */
export function HoverCard({
  children,
  className = "",
}: Omit<AnimProps, "delay">) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
