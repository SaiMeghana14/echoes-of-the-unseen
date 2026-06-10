"use client";

import { useState } from "react";

interface DNAExplorerProps {
  stories: string[];

  beliefs: string[];

  rituals: string[];

  knowledge: string[];
}

export default function DNAExplorer({
  stories,
  beliefs,
  rituals,
  knowledge,
}: DNAExplorerProps) {
  const [active, setActive] =
    useState("stories");

  const sections = {
    stories,
    beliefs,
    rituals,
    knowledge,
  };

  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      "
    >
      <div className="flex gap-4 flex-wrap">

        {Object.keys(
          sections
        ).map((key) => (
          <button
            key={key}
            onClick={() =>
              setActive(key)
            }
            className={`
            px-4
            py-2
            rounded-xl
            ${
              active === key
                ? "bg-nebula"
                : "bg-white/5"
            }
          `}
          >
            {key}
          </button>
        ))}

      </div>

      <div className="mt-8">

        {(sections as any)[
          active
        ].map(
          (
            item: string
          ) => (
            <div
              key={item}
              className="
              p-4
              rounded-xl
              bg-white/5
              mb-3
            "
            >
              {item}
            </div>
          )
        )}

      </div>

    </div>
  );
}
