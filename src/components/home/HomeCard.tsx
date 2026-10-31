import Image, { StaticImageData } from "next/image";
import styles from "./HomeCard.module.css";

type HomeCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  categories: string[];
};

export default function HomeCard({
  title,
  description,
  image,
  categories,
}: HomeCardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Image src={image} alt="" className={styles.image} sizes="128px" />
      </div>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </section>
  );
}
