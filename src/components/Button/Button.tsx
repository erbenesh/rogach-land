import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: undefined;
  };

type ButtonAsRouterLink = CommonProps & {
  to: string;
  href?: undefined;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsRouterLink;

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if ("to" in props && props.to) {
    const { to, ...rest } = props;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
