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

      <div className="
        absolute
        left-4
        top-1/2
        w-80
        -z-20
        bg-black/70
        backdrop-blur-xl
        p-6
        rounded-2xl
        ">
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
