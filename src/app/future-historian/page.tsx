"use client";

import { useState } from "react";
import {
  History,
} from "lucide-react";

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
    <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">

      <div className="flex items-center gap-5 mb-8">

        <div
          className="
            w-16
            h-16
            rounded-2xl
            border
            border-cyan-400/20
            bg-cyan-500/10
            flex
            items-center
            justify-center
            shadow-lg
            shadow-cyan-500/10
          "
        >
          <History
            size={34}
            className="text-cyan-300"
          />
        </div>
      
        <div>
      
          <h1 className="text-5xl md:text-6xl font-black">
            Future Historian
          </h1>
      
          <p className="text-white/60 mt-2">
            Predict how cultural memories evolve across generations.
          </p>
      
        </div>
      
      </div>

      <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
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
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        p-6
        text-white
        placeholder:text-white/40
        focus:outline-none
        focus:border-cyan-400/40
        transition
        "
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="
          mt-6
          px-8
          py-4
          rounded-xl
          bg-amber-400
          text-black
          font-semibold
          hover:scale-105
          transition
        "
      >
        {loading
          ? "Analyzing..."
          : "Predict Historical Value"}
      </button>
      
      {loading && <LoadingMemory />}
      
      <HistorianOutput
        report={result}
      />
    </main>
  );
}
