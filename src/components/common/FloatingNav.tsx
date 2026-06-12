"use client";

import Link from "next/link";

const links = [
  {
    name: "Earth",
    href: "/",
  },
  {
    name: "Oracle",
    href: "/echo-oracle",
  },
  {
    name: "Historian",
    href: "/future-historian",
  },
  {
    name: "Voices",
    href: "/last-voices",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

export default function FloatingNav() {
  return (
    <nav
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-[999]
        backdrop-blur-xl
        bg-white/10
        border
        border-white/20
        rounded-full
        px-6
        py-3
        flex
        gap-6
        shadow-2xl
      "
    >
    
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="
          text-white/80
          hover:text-cyan-400
          transition
        "
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
