"use client";

import { useState } from "react";

interface Props {
  onAnalyze: (
    url: string
  ) => void;
}

export default function WebsiteAnalyzer({
  onAnalyze,
}: Props) {
  const [url, setUrl] =
    useState("");

  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        🏺 Website Analyzer
      </h2>

      <input
        placeholder="https://example.com"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        className="
        w-full
        p-4
        rounded-xl
        bg-black/20
      "
      />

      <button
        onClick={() =>
          onAnalyze(url)
        }
        className="
        mt-6
        px-6
        py-3
        bg-nebula
        rounded-xl
      "
      >
        Analyze Website
      </button>

    </div>
  );
}
