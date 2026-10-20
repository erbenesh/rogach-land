import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  titleId?: string;
  description?: string;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({
  title,
  titleId,
  description,
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
