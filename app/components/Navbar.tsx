"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center py-8"
    >
      {/* NAME + APPLE LOGO */}
      <div className="flex items-center gap-2 group cursor-default">
        <Apple
          size={20}
          className="text-black dark:text-white
      transition-transform duration-300
      group-hover:scale-110"
        />
        <span className="text-xl font-bold tracking-tight">Sumit Bhargav</span>
      </div>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
        <a href="#work" className="hover:text-black dark:hover:text-white">
          Work
        </a>
        <a href="#about" className="hover:text-black dark:hover:text-white">
          About
        </a>
        <a href="#contact" className="hover:text-black dark:hover:text-white">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
