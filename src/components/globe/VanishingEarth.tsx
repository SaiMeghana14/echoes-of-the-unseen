"use client";

import GlobeView from "./Globe";
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
      <GlobeView />
        <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-xl rounded-2xl p-4 text-white border border-white/10">
          <h3 className="font-bold mb-3">
            Human Memory Network
          </h3>

          <div className="space-y-2 text-sm">
            <div>🔴 Critical Heritage</div>
            <div>🟡 At Risk Heritage</div>
            <div>🔵 Protected Heritage</div>
            <div>🌐 Cultural Relationships</div>
          </div>
        </div>
        
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
