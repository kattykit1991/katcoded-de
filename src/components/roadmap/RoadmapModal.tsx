"use client";

import { useEffect, useId, useRef, type MouseEvent, type PointerEvent } from "react";
import type { RoadmapDetails } from "./RoadmapItem";
import styles from "./RoadmapModal.module.css";

type RoadmapModalProps = {
  task: RoadmapDetails | null;
  onClose: () => void;
};

// Ein Klick auf den Innenabstand des Dialogs ist kein Hintergrundklick.
function isBackdrop(event: MouseEvent<HTMLDialogElement> | PointerEvent<HTMLDialogElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  return event.target === event.currentTarget && (
    event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom
  );
}

export default function RoadmapModal({ task, onClose }: RoadmapModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const backdropPressRef = useRef(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (task && !dialog.open) {
      openerRef.current = document.activeElement instanceof HTMLElement
        ? document.activeElement : null;
      // showModal macht den Hintergrund inert und hält die Tab-Navigation im Dialog.
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (!task && dialog.open) {
      dialog.close();
    }
  }, [task]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={task?.description ? descriptionId : undefined}
      onKeyDown={(event) => {
        // Der Schließen-Button ist das einzige interaktive Element im Blerp.
        if (event.key === "Tab") {
          event.preventDefault();
          closeButtonRef.current?.focus();
        }
      }}
      onClose={() => {
        onClose();
        openerRef.current?.focus({ preventScroll: true });
      }}
      onPointerDown={(event) => { backdropPressRef.current = isBackdrop(event); }}
      onClick={(event) => {
        if (backdropPressRef.current && isBackdrop(event)) event.currentTarget.close();
        backdropPressRef.current = false;
      }}
    >
      {task && (
        <div className={styles.content}>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={() => dialogRef.current?.close()}
          >
            Schließen <span aria-hidden="true">✕</span>
          </button>
          <h2 id={titleId}>{task.title}</h2>
          <div className={styles.labels}>
            <p>Status: {task.status}</p>
            {task.category && <p>Kategorie: {task.category}</p>}
          </div>
          {task.description && <p id={descriptionId} className={styles.description}>{task.description}</p>}
        </div>
      )}
    </dialog>
  );
}
