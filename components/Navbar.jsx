"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 max-w-6xl mx-auto px-6"
    >
      <nav className="flex items-center justify-between p-3 brutal-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-panel text-accent rounded-sm font-bold brutal-card accent-outline">
            NB
          </div>
          <div>
            <div className="text-sm font-medium">Your Name</div>
            <div className="text-xs text-stone-400">Futuristic UI</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-sm hover:text-accent transition">Projects</a>
          <a href="#about" className="text-sm hover:text-accent transition">About</a>
          <a href="#contact" className="text-sm hover:text-accent transition">Contact</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 brutal-card"
          aria-label="menu"
        >
          <div className="w-6 h-0.5 bg-stone-200 my-[3px]" />
          <div className="w-6 h-0.5 bg-stone-200 my-[3px]" />
          <div className="w-6 h-0.5 bg-stone-200 my-[3px]" />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 p-4 brutal-card"
        >
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>
        </motion.div>
      )}
    </motion.header>
  );
}
