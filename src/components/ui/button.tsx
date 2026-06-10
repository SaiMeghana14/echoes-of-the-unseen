import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-nebula text-white hover:opacity-90"
      : "border border-white/20 bg-transparent";

  return (
    <button
      className={`
        px-5 py-3
        rounded-xl
        font-medium
        transition-all
        ${styles}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
