import type { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
  id?: string;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={[styles.container, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
