"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All", "iOS", "Android", "Web", "React Native", "Flutter"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.platform.includes(activeFilter));

  return (
    <section id="work" className="py-24">
      <div className="flex flex-col gap-4 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Case Studies
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          AI-era products, shipped and scaling
        </h2>
        <p className="text-white/60 max-w-2xl">
          A selection of apps and platforms I helped ship, optimize, and grow
          with a product-first mindset.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm border transition
              ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "border-white/15 text-white/60 hover:text-white hover:border-white/40"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
