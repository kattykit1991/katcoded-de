import HomeCard from "./HomeCard";
import { homeImages } from "@/lib/images";
import styles from "./HomeCards.module.css";

export default function HomeCards() {
  return (
    <div className={styles.cards}>
      <HomeCard
        title="Meine Projekte"
        description="Entdecke meine Softwareprojekte."
        image={homeImages.projects}
        categories={["Web Apps", "Developer Tools", "Kreative Projekte"]}
      />

      <HomeCard
        title="Dev Tools"
        description="Meine Entwicklerwerkzeuge."
        image={homeImages.devtools}
        categories={["kat-create", "Templates", "Ressourcen"]}
      />

      <HomeCard
        title="Über mich"
        description="Lerne mich kennen!"
        image={homeImages.aboutme}
        categories={["Mein Weg", "Tech Stack", "Fun Facts"]}
      />

      <HomeCard
        title="Roadmap"
        description="Mein Weg durch die Softwareentwicklung."
        image={homeImages.roadmap}
        categories={["Weiterbildung", "Meilensteine", "Zukunftspläne"]}
      />
    </div>
  );
}
