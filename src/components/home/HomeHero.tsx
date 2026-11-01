import Image from "next/image";
import { homeImages } from "@/lib/images";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section id="home" aria-labelledby="welcome-title" className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.text}>
          <span className={styles.badge}>✨ Willkommen in meiner Developer-Welt</span>

          <h1 id="welcome-title">Hi, ich bin Kat! 💜</h1>

          <p>
            Ich bin angehende Softwareentwicklerin, kreative Ideensammlerin und
            leidenschaftliche Blerpsi-Bändigerin. Hier teile ich meine Projekte,
            meine Lernreise und alles, was zwischen Code und Kreativität
            entsteht.
          </p>
        </div>

        <Image
          src={homeImages.hero}
          alt="Pixelkat und ihre kleine Coding-Crew"
          className={styles.image}
          sizes="(min-width: 1440px) 640px, (min-width: 1024px) 46vw, (min-width: 640px) 576px, calc(100vw - 40px)"
          priority
        />
      </div>
    </section>
  );
}
