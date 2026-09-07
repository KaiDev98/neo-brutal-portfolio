"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-20 py-8 text-center text-sm text-stone-400"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">© {new Date().getFullYear()} Your Name — Made with motion & brutal clarity</div>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="px-3 py-2 brutal-card">Github</a>
          <a href="#" className="px-3 py-2 brutal-card">Dribbble</a>
          <a href="#" className="px-3 py-2 brutal-card">LinkedIn</a>
        </div>
      </div>
    </motion.footer>
  );
}
