"use client";

import Link from "next/link";
import { Home, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        fixed
        bottom-8
        left-8
        z-[999]
        flex
        flex-col
        gap-3
      "
    >
      {/* Home */}

      <Link
        href="/"
        className="
          group
          w-14
          h-14
          rounded-2xl
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          hover:bg-cyan-500/20
          hover:border-cyan-400/50
          transition-all
          duration-300
          shadow-xl
        "
      >
        <Home
          size={22}
          className="text-white group-hover:text-cyan-300"
        />
      </Link>

      {/* Scroll Top */}

      <button
        onClick={scrollToTop}
        className="
          group
          w-14
          h-14
          rounded-2xl
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          hover:bg-cyan-500/20
          hover:border-cyan-400/50
          transition-all
          duration-300
          shadow-xl
        "
      >
        <ArrowUp
          size={22}
          className="text-white group-hover:text-cyan-300"
        />
      </button>
    </div>
  );
}
