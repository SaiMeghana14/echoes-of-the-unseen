"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        hover:bg-white/10
        transition-all
        duration-300
      "
    >
      <ArrowLeft size={18} />
      Back to Home
    </Link>
  );
}
