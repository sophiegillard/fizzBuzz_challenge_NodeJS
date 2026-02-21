import type { HTMLAttributes } from "react";

type AlertVariant = "error" | "info" | "success";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

const variantClass: Record<AlertVariant, string> = {
  error: "alert alert--error",
  info: "alert alert--info",
  success: "alert alert--success",
};

export function Alert({
  variant = "info",
  className = "",
  children,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={`${variantClass[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
