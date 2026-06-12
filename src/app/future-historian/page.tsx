"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { useHistorian } from "@/hooks/useHistorian";

import LoadingMemory from "@/components/common/LoadingMemory";

import HistorianOutput from "@/components/historian/HistorianOutput";

export default function FutureHistorianPage() {
  const [content, setContent] =
    useState("");

  const {
    analyze,
    result,
    loading,
  } = useHistorian();

  const handleAnalyze =
    async () => {
      if (!content.trim()) return;

      await analyze(content);
    };

  return (
    <main className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-6xl font-bold">
        🕰 Future Historian
      </h1>

      <p className="mt-4 text-gray-400">
        Discover why future generations
        would value today's memories.
      </p>

      <textarea
        value={content}
        onChange={(e) =>
          setContent(
            e.target.value
          )
        }
        placeholder="Upload a recipe, story, tradition, website, photo description..."
        className="
        mt-8
        w-full
        min-h-[220px]
        rounded-3xl
        bg-black/20
        border
        border-white/10
        p-6
      "
      />

      <Button
        onClick={handleAnalyze}
        className="
          bg-amber-400
          text-black
          font-semibold
          px-8
          py-4
          rounded-xl
          mt-6
        "
      >
        Predict Historical Value
      </Button>

    </main>
  );
}
