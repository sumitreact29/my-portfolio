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
    <section className="py-24">
      <h2 className="text-3xl font-bold mb-10">Selected Work</h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm border transition
              ${
                activeFilter === filter
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
