"use client";

import { ReactNode } from "react";

interface DialogProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Dialog({
  open,
  title,
  children,
  onClose,
}: DialogProps) {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/70
    "
    >
      <div
        className="
        w-full
        max-w-xl
        rounded-3xl
        bg-space
        border
        border-white/10
        p-8
      "
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}
