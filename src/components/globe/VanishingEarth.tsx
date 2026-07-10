"use client";

import { useState } from "react";

import GlobeView from "./Globe";
import GlobePopup from "./GlobePopup";
import HeritageDrawer from "./HeritageDrawer";

export default function VanishingEarth() {
  const [selected, setSelected] =
    useState<any>(null);

  return (
    <section className="relative overflow-hidden bg-[#030712]">

      <GlobeView
        onSelect={setSelected}
      />

      <div
        className="
          absolute
          left-10
          top-1/2
          -translate-y-1/2
          z-20
          w-72
          bg-slate-950/60
          backdrop-blur-xl
          p-6
          rounded-3xl
          border border-cyan-400/10
          shadow-[0_0_40px_rgba(34,211,238,.08)]
        "
      >
        <h3 className="font-bold mb-3">
          Human Memory Network
        </h3>

        <div className="space-y-2 text-sm">
          <div>🟦 Languages</div>
          <div>🟩 Traditions</div>
          <div>🟪 Folklore</div>
          <div>🟧 Artifacts</div>
          <div>🟨 Crafts</div>
          <div>🩷 Music</div>
          <div>🟢 Festivals</div>
          <div>🌍 Cultural Connections</div>
        </div>
      </div>

      {selected && (
        <GlobePopup
          title={selected.title}
          country={selected.country}
          risk={selected.risk}
          description={selected.description}
        />
      )}

    </section>
  );
}
