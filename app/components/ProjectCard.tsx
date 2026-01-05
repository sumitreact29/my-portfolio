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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900"
    >
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{subtitle}</p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium group-hover:underline"
        >
          View on App Store <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}
