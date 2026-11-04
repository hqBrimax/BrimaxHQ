"use client";

import { useState } from "react";
import { portfolioProjects } from "@/data/portfolio";

const categories = ["All", ...new Set(portfolioProjects.map((p) => p.category))];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Selected work
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Security-focused projects built for the AI agent economy and Solana ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-accent text-white"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-text-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-xl p-8 hover:border-text-muted transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-accent bg-accent-subtle px-2.5 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-text-muted bg-surface-raised px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover transition-colors"
              >
                View on GitHub &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}