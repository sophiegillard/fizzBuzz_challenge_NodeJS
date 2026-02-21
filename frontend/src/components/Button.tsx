import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  ghost: "btn btn--ghost",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeClass = size === "lg" ? "btn--lg" : size === "sm" ? "btn--sm" : "";
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`${variantClass[variant]} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {loading ? (
        <>
          <span className="btn__spinner" aria-hidden />
          Chargement...
        </>
      ) : (
        children
      )}
    </button>
  );
}
