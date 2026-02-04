"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  image,
  link,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-3xl
        bg-[#0f121a]/80
        border border-white/10
        shadow-[0_20px_60px_rgba(6,10,20,0.5)]
        hover:border-white/25 transition
        max-w-[540px] mx-auto
        min-h-[520px]
      "
    >
      {/* IMAGE */}
      <div className="relative h-72 lg:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Gradient overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/70 via-black/20 to-transparent
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
          Featured build
        </div>

        <h3 className="text-xl font-semibold mb-1 text-white">
          {title}
        </h3>

        <p className="text-sm text-white/60 mb-4">
          {subtitle}
        </p>

        <p className="text-sm text-white/70 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="
                text-xs px-3 py-1 rounded-full
                bg-white/5
                text-white/70
              "
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-white
            group-hover:text-white/80 transition
          "
        >
          View on App Store <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}
