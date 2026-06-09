"use client";

import Link from "next/link";
import {
  Home,
  Upload,
  Brain,
  Globe,
  Database,
} from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    label: "Historian",
    href: "/future-historian",
    icon: Brain,
  },
  {
    label: "Oracle",
    href: "/echo-oracle",
    icon: Globe,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Database,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
      h-screen
      w-64
      bg-black/30
      backdrop-blur-xl
      border-r
      border-white/10
      p-6
    "
    >
      <h2 className="text-2xl font-bold mb-8">
        🌌 Echoes
      </h2>

      <div className="space-y-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
              flex
              items-center
              gap-3
              p-3
              rounded-xl
              hover:bg-white/10
              transition
            "
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
