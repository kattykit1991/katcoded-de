import styles from "./DevToolCard.module.css";
import Image, { type StaticImageData } from "next/image";

type DevToolCardProps = {
  title: string;
  description: string;
  status: string;
  href?: string;
  files?: string[];
  sticker?: StaticImageData;
};

export default function DevToolCard({
  title,
  description,
  status,
  href,
  files,
  sticker,
}: DevToolCardProps) {
  return (
    <article className={styles.card}>
      {sticker && (
        <Image
          src={sticker}
          alt=""
          width={80}
          height={80}
          sizes="80px"
          className={styles.sticker}
        />
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.status}>{status}</span>
        {files && files.length > 0 && (
          <ul className={styles.files}>
            {files.map((file) => (
              <li key={file}>{file}</li>
            ))}
          </ul>
        )}
      </div>

      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          Auf GitHub ansehen ↗
        </a>
      )}
    </article>
  );
}
