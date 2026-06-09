"use client";

import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Upload",
    href: "/upload",
  },
  {
    label: "Future Historian",
    href: "/future-historian",
  },
  {
    label: "Last Voices",
    href: "/last-voices",
  },
  {
    label: "Oracle",
    href: "/echo-oracle",
  },
  {
    label: "Constellation",
    href: "/constellation",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-memory"
        >
          🌌 Echoes
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
