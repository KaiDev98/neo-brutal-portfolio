"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.06]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [0, 6]);

  return (
    <section ref={ref} className="py-20">
      <motion.div
        style={{ scale }}
        className="rounded-lg p-12 brutal-card overflow-hidden"
      >
        <motion.div
          style={{ filter: blur.interpolate((b) => `blur(${b}px)`) }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl h1-brutal">
            Crafting Brutal, Futuristic Interfaces
          </h1>
          <p className="mt-6 text-stone-300 max-w-2xl">
            Neo‑Brutalism meets Sci‑Fi — immersive scrollytelling, high‑contrast panels, and neon accents. Scroll to explore interactive projects and visual narratives.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-3 brutal-card accent-outline text-black bg-accent text-sm font-semibold">
              Explore Projects
            </a>
            <a href="#contact" className="px-5 py-3 brutal-card border border-stone-200 text-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* subtle floating geometric */}
        <motion.div
          aria-hidden
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 0.035 }}
          transition={{ duration: 1.8 }}
          className="absolute -z-10 right-6 top-6 w-48 h-48 rounded-sm bg-gradient-to-br from-[rgba(0,255,213,0.10)] to-[rgba(255,61,129,0.04)]"
        />
      </motion.div>
    </section>
  );
}
