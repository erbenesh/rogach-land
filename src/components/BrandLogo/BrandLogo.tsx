import logoUrl from "../../assets/logo.png";
import styles from "./BrandLogo.module.css";

interface BrandLogoProps {
  className?: string;
  /** Показать текстовое имя рядом с маркой */
  withName?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className,
  withName = true,
  size = "sm",
}: BrandLogoProps) {
  return (
    <span className={[styles.root, styles[size], className].filter(Boolean).join(" ")}>
      <img
        src={logoUrl}
        alt=""
        className={styles.mark}
        width={size === "lg" ? 48 : size === "md" ? 36 : 28}
        height={size === "lg" ? 48 : size === "md" ? 36 : 28}
        decoding="async"
      />
      {withName ? <span className={styles.name}>EGOR ROGACH</span> : null}
    </span>
  );
}
