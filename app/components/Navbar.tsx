"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-3 sm:top-4 z-20 flex items-center justify-between rounded-2xl px-4 sm:px-5 py-4 glass-surface"
    >
      {/* NAME + APPLE LOGO */}
      <div className="flex items-center gap-2 group cursor-default">
        <Apple
          size={20}
          className="text-white/90 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-lg sm:text-xl font-semibold tracking-tight">
          Sumit Bhargav
        </span>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-sm text-white/70">
        <a href="#work" className="hover:text-white">
          Work
        </a>
        <a href="#about" className="hover:text-white">
          About
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="text-xs sm:text-sm px-4 py-2 rounded-full border border-white/15 text-white/90 hover:text-white hover:border-white/40 transition"
      >
        Let’s talk
      </a>
    </motion.nav>
  );
}
