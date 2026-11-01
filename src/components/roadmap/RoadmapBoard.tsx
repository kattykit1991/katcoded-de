"use client";

import { useState } from "react";
import RoadmapItem, { type RoadmapColumn, type RoadmapDetails } from "./RoadmapItem";
import RoadmapModal from "./RoadmapModal";
import styles from "./RoadmapBoard.module.css";

export default function RoadmapBoard({ columns }: { columns: RoadmapColumn[] }) {
  const [selectedTask, setSelectedTask] = useState<RoadmapDetails | null>(null);

  return (
    <>
      <section className={styles.board} aria-label="Roadmap-Board">
        {columns.map((column) => (
          <div key={column.status} className={styles.column}>
            <h2>{column.title}</h2>
            {column.items.map((task) => (
              <RoadmapItem
                key={task.title}
                title={task.title}
                onSelect={() => setSelectedTask({ ...task, status: column.status })}
              />
            ))}
          </div>
        ))}
      </section>
      <RoadmapModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </>
  );
}
