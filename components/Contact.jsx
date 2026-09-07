"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="brutal-card p-6"
      >
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="text-stone-300 mt-2">Interested in working together or want a custom demo? Drop a message.</p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Your name" className="p-3 brutal-card" />
          <input placeholder="Email" className="p-3 brutal-card" />
          <textarea placeholder="Message" className="p-3 brutal-card md:col-span-2" rows={4} />
          <button type="submit" className="px-5 py-3 brutal-card bg-accent text-black font-semibold md:col-span-2">
            Send message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
