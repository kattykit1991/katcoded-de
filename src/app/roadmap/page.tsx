import { homeImages } from "@/lib/images";
import Image from "next/image";
import styles from "./page.module.css";
import RoadmapBoard from "@/components/roadmap/RoadmapBoard";
import type { RoadmapColumn } from "@/components/roadmap/RoadmapItem";

const columns: RoadmapColumn[] = [
  {
    "title": "💡 Ideen",
    "status": "Ideen",
    "items": [
      {
        "title": "Community-Features",
        "description": "Neue Möglichkeiten für Austausch und Feedback.",
        "category": "Website"
      },
      {
        "title": "Community-Bereich",
        "description": "Ein gemütlicher Ort für Austausch rund um Projekte und Entwicklung.",
        "category": "Community"
      },
      {
        "title": "Weitere Design-Themes",
        "description": "Neue visuelle Stile für zukünftige Projekte und Developer Tools.",
        "category": "Design"
      }
    ]
  },
  {
    "title": "📋 Geplant",
    "status": "Geplant",
    "items": [
      {
        "title": "Datenbankanbindung",
        "description": "Projekte und Roadmap-Daten künftig dynamisch verwalten.",
        "category": "Backend"
      },
      {
        "title": "KATUARY-Anbindung",
        "description": "Öffentliche Projekt- und Roadmap-Daten aus meiner privaten App bereitstellen.",
        "category": "Integration"
      },
      {
        "title": "Dynamische Projektseiten",
        "description": "Projektinformationen künftig aus einer zentralen Datenquelle laden.",
        "category": "Website"
      },
      {
        "title": "Projekt-Updates",
        "description": "Fortschritte und neue Meilensteine öffentlich sichtbar machen.",
        "category": "Community"
      }
    ]
  },
  {
    "title": "🛠️ In Arbeit",
    "status": "In Arbeit",
    "items": [
      {
        "title": "KATCODED Design System",
        "description": "Wiederverwendbare Styles, Komponenten und Pixelart-Assets entwickeln.",
        "category": "Design"
      },
      {
        "title": "kat-create",
        "description": "Mein CLI-Tool zum Erstellen neuer Projekte weiterentwickeln.",
        "category": "Developer Tools"
      },
      {
        "title": "KATCODED.DE v0.1",
        "description": "Die erste Version meiner Developer-Website fertigstellen.",
        "category": "Website"
      }
    ]
  },
  {
    "title": "✨ Fertig",
    "status": "Fertig",
    "items": [
      {
        "title": "Developer-Identität",
        "description": "Die Grundlagen für KATCODED und meine persönliche Entwicklerwelt schaffen.",
        "category": "Branding"
      },
      {
        "title": "Projektgalerie",
        "description": "Eine Übersicht meiner öffentlichen Softwareprojekte erstellen.",
        "category": "Website"
      },
      {
        "title": "About-Seite",
        "description": "Meine persönliche Vorstellung mit Pixelart und Developer-Geschichte gestalten.",
        "category": "Website"
      }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>✨ Ideen werden Wirklichkeit</span>
            <h1>Roadmap</h1>
            <p>
              Ein kleiner Blick hinter die Kulissen von KATCODED. Entdecke, welche
              Ideen entstehen, woran ich gerade arbeite und was bereits geschafft
              ist!
            </p>
          </div>
          <Image
            src={homeImages.roadmap}
            alt=""
            width={180}
            className={styles.heroImage}
            sizes="180px"
          />
        </div>
      </header>

      <RoadmapBoard columns={columns} />
    </div>
  );
}
