import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import styles from "./Lightbox.module.css";

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const titleId = useId();
  const item = items[index];
  const hasMany = items.length > 1;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, items.length, onChange, onClose]);

  if (!item) return null;

  return createPortal(
    <div
      className={styles.root}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
        <X size={22} strokeWidth={1.75} />
      </button>

      {hasMany ? (
        <>
          <button
            type="button"
            className={[styles.nav, styles.prev].join(" ")}
            onClick={(event) => {
              event.stopPropagation();
              onChange((index - 1 + items.length) % items.length);
            }}
            aria-label="Предыдущий скриншот"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className={[styles.nav, styles.next].join(" ")}
            onClick={(event) => {
              event.stopPropagation();
              onChange((index + 1) % items.length);
            }}
            aria-label="Следующий скриншот"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </>
      ) : null}

      <figure
        className={styles.figure}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={item.src} alt={item.alt} />
        <figcaption id={titleId}>
          <span className={styles.caption}>{item.caption ?? item.alt}</span>
          {hasMany ? (
            <span className={styles.counter}>
              {index + 1} / {items.length}
            </span>
          ) : null}
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}
