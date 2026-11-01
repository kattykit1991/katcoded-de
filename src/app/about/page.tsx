import Image from "next/image";
import AboutSection from "@/components/about/AboutSection";
import { aboutImages, homeImages } from "@/lib/images";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>✨ Der Mensch hinter dem Code</span>
            <h1>Über mich</h1>
            <p>
              Hi, ich bin Kat! Kreativer Kopf, neugierige Entwicklerin und großer
              Fan von gemütlichen Coding-Abenteuern.
            </p>
          </div>
          <Image
            src={homeImages.aboutme}
            alt=""
            width={180}
            className={styles.heroImage}
            sizes="180px"
          />
        </div>
      </header>

      <div className={styles.sections}>
        <AboutSection
          title="Wer bin ich?"
          image={aboutImages.pixelkat}
          imageAlt="Pixelkat programmiert konzentriert an ihrem Laptop."
          imagePosition="right"
        >
          <p>
            Hi, ich bin Kat! Ein kreativer Kopf mit einer ziemlich großen
            Sammlung an Ideen, einer Schwäche für niedliche Designs und einer
            wachsenden Begeisterung für Softwareentwicklung.
          </p>

          <p>
            Ich liebe es, Dinge zu erschaffen – egal, ob es sich um Geschichten,
            Fantasy-Welten, kleine Illustrationen oder digitale Anwendungen
            handelt. Beim Programmieren habe ich eine neue Möglichkeit entdeckt,
            meine Kreativität mit Technik zu verbinden.
          </p>

          <p>
            Dabei darf es für mich gern bunt, gemütlich und ein bisschen
            verspielt sein. Ich glaube nämlich, dass Software nicht nur
            praktisch sein muss, sondern auch Persönlichkeit haben darf.
          </p>
        </AboutSection>

        <AboutSection
          title="Mein Lernweg"
          image={aboutImages.floof}
          imageAlt="Floof sitzt auf einem Bücherstapel."
          imagePosition="left"
        >
          <p>
            Aktuell absolviere ich eine Weiterbildung im Bereich Software
            Engineering an der WBS Coding School. Dort beschäftige ich mich mit
            den Grundlagen der Webentwicklung, modernen Technologien und der
            Frage, wie aus einzelnen Codezeilen vollständige Anwendungen
            entstehen.
          </p>

          <p>
            Am liebsten lerne ich, indem ich Dinge selbst ausprobiere. Ich
            experimentiere, baue kleine Projekte, entdecke Fehler, suche nach
            Lösungen und freue mich über jeden Moment, in dem plötzlich etwas
            funktioniert, das vorher noch ein großes Fragezeichen war.
          </p>

          <p>
            KATCODED begleitet mich auf diesem Weg. Die Website ist nicht nur
            mein Portfolio, sondern selbst ein Lernprojekt, an dem ich neue
            Kenntnisse anwenden, meine Fähigkeiten weiterentwickeln und meine
            Fortschritte sichtbar machen kann.
          </p>
        </AboutSection>

        <AboutSection
          title="Skills & Tools"
          image={aboutImages.nibbs}
          imageAlt="Nibbs macht es sich gemütlich."
          imagePosition="right"
        >
          <p>
            Mein technischer Werkzeugkasten wächst mit jedem Projekt. Aktuell
            beschäftige ich mich vor allem mit der Entwicklung moderner
            Webanwendungen und arbeite dabei unter anderem mit HTML, CSS,
            JavaScript, TypeScript, React und Next.js.
          </p>

          <p>
            Für meine Projekte nutze ich Werkzeuge wie Visual Studio Code, Git
            und GitHub. Neben dem eigentlichen Programmieren interessieren mich
            besonders die Gestaltung von Benutzeroberflächen, wiederverwendbare
            Komponenten und die Frage, wie sich eine Anwendung angenehm und
            verständlich bedienen lässt.
          </p>

          <p>
            Ich stehe noch am Anfang meines Weges als Entwicklerin – und genau
            das macht es spannend. Mit jedem neuen Projekt kommen weitere
            Technologien, Erfahrungen und kleine Erfolgserlebnisse dazu.
          </p>
        </AboutSection>

        <AboutSection
          title="Beyond the Code"
          image={aboutImages.ploepp}
          imageAlt="Plöpp sitzt an ihrem kleinen Laptop."
          imagePosition="left"
        >
          <p>
            Wenn ich gerade nicht programmiere, bin ich meistens trotzdem
            irgendwo kreativ unterwegs. Ich liebe Fantasy-Geschichten,
            Worldbuilding, Rollenspiele und Pen & Paper. Eigene Charaktere und
            ganze Welten zu entwickeln, gehört für mich genauso dazu wie
            Schreiben, Zeichnen und Pixelart.
          </p>

          <p>
            Außerdem verbringe ich gern Zeit mit Gaming, gemütlichen Spielen und
            dem Bemalen von Miniaturen. Musik darf natürlich auch nicht fehlen –
            besonders K-Pop hat einen festen Platz in meinem Alltag.
          </p>

          <p>
            Viele dieser Interessen fließen irgendwann wieder in meine Projekte
            ein. Manchmal wird aus einer kleinen Idee eine Geschichte, manchmal
            ein Design und manchmal sogar eine Anwendung. Mein Kopf ist selten
            lange ohne neue Einfälle – und genau das mag ich daran.
          </p>
        </AboutSection>
        <section className={styles.illustrationNote} aria-labelledby="illustration-note-title">
          <h2 id="illustration-note-title">Ein Hinweis zu meinen Illustrationen</h2>
          <p>
            Die Illustrationen und Pixelart-Elemente auf dieser Website wurden bisher mithilfe generativer KI erstellt.
          </p>
          <p>
            Die Motive, Charaktere und ihre Gestaltung entwickle ich als Teil meiner eigenen kreativen Ideenwelt. Langfristig möchte ich die Website zunehmend mit selbst gezeichneter Pixelart ergänzen.
          </p>
          <p>
            Mir ist wichtig, transparent mit dem Einsatz von KI umzugehen und offen zu zeigen, wie meine Projekte entstehen.
          </p>
        </section>
      </div>
    </>
  );
}
