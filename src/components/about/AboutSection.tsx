import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { uiIcons } from "@/lib/icons";
import styles from "./AboutSection.module.css";

const headingIcons: Record<string, StaticImageData> = {
  "Wer bin ich?": uiIcons.info,
  "Mein Lernweg": uiIcons.file,
  "Skills & Tools": uiIcons.code,
  "Beyond the Code": uiIcons.ideas,
};

interface AboutSectionProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children: ReactNode;
}

export default function AboutSection({
  title,
  image,
  imageAlt,
  imagePosition = "right",
  children,
}: AboutSectionProps) {
  return (
    <section data-image-position={imagePosition} className={styles.section}>
      <div className={styles.text}>
        <h2>
          {headingIcons[title] && (
            <Image src={headingIcons[title]} alt="" width={24} height={24} className={styles.icon} unoptimized />
          )}
          {title}
        </h2>
        {children}
      </div>

      <Image src={image} alt={imageAlt} width={220} className={styles.image} sizes="(min-width: 768px) 280px, 220px" />
    </section>
  );
}
