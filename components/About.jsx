"use client";
import { about } from "../lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-8 brutal-card p-6"
      >
        <div>
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-stone-300">{about.desc}</p>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            <li className="p-2 brutal-card">Animation Systems</li>
            <li className="p-2 brutal-card">Design Systems</li>
            <li className="p-2 brutal-card">Performance</li>
            <li className="p-2 brutal-card">Interaction Design</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-stone-400">Skills & Tools</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {['React', 'Next.js', 'Tailwind', 'Framer Motion', 'WebGL', 'Figma'].map((s) => (
              <div key={s} className="px-3 py-2 brutal-card text-xs">{s}</div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
