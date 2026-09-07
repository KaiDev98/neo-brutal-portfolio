"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const delay = index * 0.12;
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 24, opacity: 0, scale: 0.99 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="block p-4 brutal-card hover:scale-[1.01] transition-transform"
    >
      <div className="w-full h-36 bg-gradient-to-br from-[rgba(0,0,0,0.12)] to-[rgba(255,255,255,0.02)] rounded-sm flex items-end p-3">
        <div className="text-xs uppercase text-stone-300">{project.tags.join(" • ")}</div>
      </div>

      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-stone-400 text-sm">{project.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-accent text-sm font-medium">View project →</div>
        <div className="text-xs text-stone-400">2026</div>
      </div>
    </motion.a>
  );
}
