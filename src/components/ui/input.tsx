import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
    "
    >
      {children}
    </div>
  );
}
