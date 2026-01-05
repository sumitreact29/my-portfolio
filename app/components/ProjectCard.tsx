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
        group relative rounded-3xl overflow-hidden
        bg-white dark:bg-[#111113]
        border border-gray-200 dark:border-white/5
        shadow-sm hover:shadow-xl dark:shadow-black/40
      "
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
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
            from-black/50 via-black/10 to-transparent
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-black dark:text-[#F5F5F7]">
          {title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-[#A1A1AA] mb-4">
          {subtitle}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="
                text-xs px-3 py-1 rounded-full
                bg-gray-100 dark:bg-white/5
                text-gray-700 dark:text-gray-300
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
            text-black dark:text-[#F5F5F7]
            group-hover:underline
          "
        >
          View on App Store <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}
