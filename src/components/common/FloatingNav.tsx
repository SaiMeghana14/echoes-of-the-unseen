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
    <nav className="bg-red-500 p-10">
    
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
