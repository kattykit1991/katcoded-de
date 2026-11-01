import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.shortDescription}</p>

      <ul aria-label="Technologien" className={styles.technologies}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onClick}
        aria-label={`Projekt ansehen: ${project.title}`}
        className={styles.openButton}
      >
        Projekt ansehen →
      </button>
    </article>
  );
}
