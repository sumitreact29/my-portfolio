"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        {/* <div
          className="
            absolute inset-0
            bg-[url('/images/hero-light.jpg')]
            dark:bg-[url('/images/hero-dark.jpg')]
            bg-cover bg-center
            opacity-40 dark:opacity-25
          "
        /> */}

        <div
          className="
            absolute inset-0
            bg-[url('/images/hero-light.jpg')]
            dark:bg-[url('/images/hero-light.jpg')]
            bg-cover bg-center
            opacity-100 dark:opacity-100
          "
        />

        {/* GRADIENT MASK */}
        <div
          className="absolute inset-0 bg-gradient-to-b
          from-white/90 via-white/70 to-white
          dark:from-[#0B0B0C]/90 dark:via-[#0B0B0C]/70 dark:to-[#0B0B0C]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">
        <Navbar />

        <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
          <Hero />

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <img
                src="/images/profile_Sam.png"
                alt="Sumit Bhargav"
                className="w-72 h-72 object-cover rounded-3xl shadow-2xl"
              />

              {/* SOFT GLOW */}
              <div
                className="absolute -inset-6 rounded-3xl
                bg-indigo-500/20 dark:bg-indigo-400/10
                blur-3xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
