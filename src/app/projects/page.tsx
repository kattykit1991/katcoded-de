import Image from "next/image";
import { homeImages } from "@/lib/images";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <>
      <section aria-labelledby="projects-title" className={styles.hero}>
        <div className={styles.layout}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>✨ Code, Kreativität & Ideen</span>

            <h1 id="projects-title">Meine Projekte</h1>

            <p>
              Kleine und große Abenteuer zwischen Code, Kreativität und
              Blerpsis.
            </p>
          </div>

          <Image src={homeImages.projects} alt="" width={180} className={styles.image} sizes="180px" />
        </div>
      </section>

      <ProjectGallery
        projects={projects.filter((project) => project.published)}
      />
    </>
  );
}
