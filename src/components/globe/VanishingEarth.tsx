"use client";

import { useState } from "react";

import GlobeView from "./Globe";
import GlobePopup from "./GlobePopup";
import HeritageDrawer from "./HeritageDrawer";

export default function VanishingEarth() {
  const [selected, setSelected] =
    useState<any>(null);

  return (
    <section className="relative">

      <GlobeView
        onSelect={setSelected}
      />

      <HeritageDrawer
        item={selected}
      />

      <div
        className="
        absolute
        bottom-8
        left-8
        bg-black/70
        backdrop-blur-xl
        rounded-2xl
        p-4
        text-white
        border
        border-white/10
      "
      >
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
