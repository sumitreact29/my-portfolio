"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center py-8"
    >
      <span className="text-xl font-semibold">Sumit</span>

      <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
        <a href="#work" className="hover:text-black dark:hover:text-white">Work</a>
        <a href="#about" className="hover:text-black dark:hover:text-white">About</a>
        <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
      </div>
    </motion.nav>
  );
}
