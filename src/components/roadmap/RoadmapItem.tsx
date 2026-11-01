import styles from "./RoadmapItem.module.css";

export type RoadmapStatus = "Ideen" | "Geplant" | "In Arbeit" | "Fertig";

export type RoadmapTask = {
  title: string;
  description?: string;
  category?: string;
};

export type RoadmapColumn = {
  title: string;
  status: RoadmapStatus;
  items: RoadmapTask[];
};

export type RoadmapDetails = RoadmapTask & { status: RoadmapStatus };

type RoadmapItemProps = {
  title: string;
  onSelect: () => void;
};

export default function RoadmapItem({ title, onSelect }: RoadmapItemProps) {
  return (
    <button
      type="button"
      className={styles.card}
      title={title}
      aria-haspopup="dialog"
      onClick={(event) => {
        // Auch bei Mausklick in Safari einen eindeutigen Rückkehrfokus setzen.
        event.currentTarget.focus();
        onSelect();
      }}
    >
      <span className={styles.title}>{title}</span>
    </button>
  );
}
