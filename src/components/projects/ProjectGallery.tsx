"use client";

import { useState } from "react";
import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  projects: Project[];
}

const categories = ["Alle", "Web Apps", "CLI Tools", "Lernprojekte"];

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    return (
      activeCategory === "Alle" || project.categories.includes(activeCategory)
    );
  });

  return (
    <section aria-label="Projektübersicht" className={styles.gallery}>
      <div aria-label="Projekte filtern" className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={styles.filter}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}

        {filteredProjects.length === 0 && (
          <p className={styles.empty}>Hier wohnen noch keine Projekte. 👻</p>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
