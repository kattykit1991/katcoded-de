"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/types/project";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      className={styles.dialog}
    >
      {project && (
        <div className={styles.content}>
          <button type="button" onClick={onClose} aria-label="Schließen" className={styles.closeButton}>
            Schließen <span aria-hidden="true">✕</span>
          </button>

          <h2 id="project-modal-title">{project.title}</h2>
          <p className={styles.description}>{project.description}</p>

          <h3>Technologien</h3>
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <p className={styles.status}>Status: {project.status}</p>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              GitHub-Repository ansehen ↗
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
