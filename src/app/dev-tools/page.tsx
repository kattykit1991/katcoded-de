import Image from "next/image";
import styles from "./page.module.css";
import DevToolCard from "@/components/dev-tools/DevToolCard";
import { accessoryImages, homeImages } from "@/lib/images";

export default function DevToolsPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>✨ Kleine Helfer, große Ideen</span>
            <h1>Dev Tools</h1>
            <p>
              Kleine Helferlein, praktische Werkzeuge und kreative Ideen für den
              Entwickleralltag.
            </p>
          </div>
          <Image
            src={homeImages.devtools}
            alt=""
            width={180}
            className={styles.heroImage}
            sizes="180px"
          />
        </div>
      </header>

      <section className={styles.section}>
        <h2>Meine Werkzeuge</h2>

        <div className={styles.grid}>
          <DevToolCard
            title="KAT · DEV TOOLS"
            description="Mein persönliches Markdown-Toolkit für Projektplanung, Anforderungen, Dokumentation und strukturierte Entwicklungsworkflows."
            status="Version 1.0"
            files={[
              "AGENTS.md",
              "DEV_TOOLS_README.md",
              "NOTES.md",
              "PROJECT_BUILD_GUIDE.md",
              "PROJECT_README.md",
              "PROJECT_REQUIREMENTS.md",
              "PROJECT_START.md",
              "PROJECT_STATE.md",
            ]}
            sticker={accessoryImages.projectStickyNotes}
          />

          <DevToolCard
            title="kat-create"
            description="Ein CLI-Tool, mit dem ich neue Projekte samt Ordnerstruktur und vorbereiteten Projektvorlagen erstellen kann."
            status="In Entwicklung"
            sticker={accessoryImages.stickerLaptop}
            href="https://github.com/kattykit1991/kat-create"
          />

          <DevToolCard
            title="KATCODED Design System"
            description="Meine Sammlung wiederverwendbarer Designstile, Icons und kreativer Assets für eigene Softwareprojekte."
            status="Im Aufbau"
            sticker={accessoryImages.pinkPencil}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Mein Developer Environment</h2>

        <div className={styles.grid}>
          <article className={styles.environmentCard}>
            <Image
              src={accessoryImages.codeSymbols}
              alt=""
              width={64}
              height={64}
              sizes="64px"
              className={styles.environmentSticker}
            />
            <h3>🌸 Mein VS-Code-Setup</h3>
            <p>
              Meine Entwicklungsumgebung passe ich an meine Arbeitsweise an. Ein
              übersichtlicher Editor, persönliche Einstellungen und hilfreiche
              Erweiterungen unterstützen mich beim Programmieren.
            </p>
          </article>

          <article className={styles.environmentCard}>
            <Image
              src={accessoryImages.cozyNotebook}
              alt=""
              width={64}
              height={64}
              sizes="64px"
              className={styles.environmentSticker}
            />
            <h3>📁 KAT_DEV_SYSTEM</h3>
            <p>
              Mein persönliches Entwicklungssystem, in dem ich Softwareprojekte,
              Developer Tools, Designressourcen und Dokumentation organisiere.
              So haben meine Ideen und Projekte ihren festen Platz.
            </p>
          </article>

          <article className={styles.environmentCard}>
            <Image
              src={accessoryImages.ideaBulb}
              alt=""
              width={64}
              height={64}
              sizes="64px"
              className={styles.environmentSticker}
            />
            <h3>💜 Mein Workflow</h3>
            <p>
              Von der ersten Idee über Anforderungen und Projektvorlagen bis zur
              Umsetzung: Mit meinen eigenen Werkzeugen entwickle ich Projekte
              strukturiert und kann meinen Fortschritt festhalten.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
