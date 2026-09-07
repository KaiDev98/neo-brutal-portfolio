"use client";
import { projects } from "../lib/data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="text-stone-400 text-sm">Interactive, motion-focused builds</p>
        </div>
        <div className="text-sm text-stone-400">Scroll to reveal</div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {}
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
