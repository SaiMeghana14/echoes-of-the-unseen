"use client";

import Globe from "./Globe";
import GlobePopup from "./GlobePopup";
import { useState } from "react";

const endangeredItems = [
  {
    title: "Ainu Language",
    country: "Japan",
    risk: 91,
    description:
      "One of the world's most endangered indigenous languages.",
  },

  {
    title: "Toda Embroidery",
    country: "India",
    risk: 82,
    description:
      "Traditional embroidery practiced by the Toda community.",
  },

  {
    title: "Fishing Songs",
    country: "Philippines",
    risk: 88,
    description:
      "Oral traditions passed down through generations.",
  },
];

export default function VanishingEarth() {
  const [selected] = useState(
    endangeredItems[0]
  );

  return (
    <section className="relative">
      <Globe />

      <GlobePopup
        title={selected.title}
        country={selected.country}
        risk={selected.risk}
        description={
          selected.description
        }
      />
    </section>
  );
}
