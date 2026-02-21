import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "default" | "elevated";
}

export function Card({
  title,
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`card ${variant === "elevated" ? "card--elevated" : ""} ${className}`.trim()}
      {...props}
    >
      {title && <div className="card__title">{title}</div>}
      <div className="card__body">{children}</div>
    </div>
  );
}
