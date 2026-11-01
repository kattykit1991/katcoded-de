import Image from "next/image";
import Link from "next/link";
import { uiIcons } from "@/lib/icons";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.branding}>
            <Link href="/" className={styles.brand}>KATCODED</Link>
            <p>Made with 💜 and a little bit of magic.</p>
          </div>
          <nav aria-label="Footer-Navigation">
            <a href="https://github.com/kattykit1991" className={styles.github}>
              <Image src={uiIcons.github} alt="" width={20} height={20} unoptimized />
              GitHub-Profil
            </a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 KATCODED</p>
          <p>Illustrationen und Pixelart mit generativer KI erstellt.</p>
        </div>
      </div>
    </footer>
  );
}
