"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70"
      >
        AI-Ready Product Engineer
        <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-soft" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.6 }}
        className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
      >
        Building iOS, Web, and AI-first products with
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CF2C5] via-[#6AA9FF] to-[#F6C453]">
          {" "}
          human-centered experience
        </span>
        .
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-6 text-lg text-white/70"
      >
        Senior iOS engineer with 6+ years of experience building performance-driven apps and AI-enhanced user flows.
        I help teams ship scalable, polished products across Apple platforms and the web.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="relative inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium transition hover:scale-[1.02] animate-shimmer"
        >
          View Case Studies
        </a>

        <a
          href="#contact"
          className="text-sm px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70"
      >
        <div className="glass-surface rounded-2xl px-5 py-4">
          <p className="text-white text-lg font-semibold">500K+ users</p>
          <p className="text-white/60">Apps in the wild</p>
        </div>
        <div className="glass-surface rounded-2xl px-5 py-4">
          <p className="text-white text-lg font-semibold">25% retention</p>
          <p className="text-white/60">Improved via AI flows</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8 sm:mt-10 glass-surface rounded-2xl px-5 py-4"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
          Toolkit
        </p>
        <div className="overflow-hidden marquee-mask">
          <div className="marquee gap-4 text-xs sm:text-sm text-white/70 whitespace-nowrap">
            {[
              "SwiftUI",
              "LLM UX",
              "Next.js",
              "Cloud Functions",
              "AI Workflows",
              "Combine",
              "Design Systems",
              "Analytics",
              "Growth Experiments",
              "Performance",
            ]
              .concat([
                "SwiftUI",
                "LLM UX",
                "Next.js",
                "Cloud Functions",
                "AI Workflows",
                "Combine",
                "Design Systems",
                "Analytics",
                "Growth Experiments",
                "Performance",
              ])
              .map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
