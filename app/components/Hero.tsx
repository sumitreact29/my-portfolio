"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold leading-tight mb-6"
      >
        Senior iOS & Product Engineer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xl text-gray-600 dark:text-gray-400 mb-10"
      >
        I build high-performance iOS applications using Swift & SwiftUI.
        <br />
        <span className="text-gray-500 dark:text-gray-500">
          iOS-first engineer building mobile, web, and cross-platform products
          used by real users.
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex gap-6"
      >
        <a
          href="#work"
          className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:opacity-80"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="text-sm px-6 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
