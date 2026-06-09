"use client";

import { useState } from "react";

interface Props {
  onAsk: (
    question: string
  ) => Promise<void>;
}

export default function OracleInput({
  onAsk,
}: Props) {
  const [question, setQuestion] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);

    await onAsk(question);

    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="What is humanity forgetting today?"
        className="
          w-full
          min-h-[140px]
          rounded-2xl
          bg-black/30
          border
          border-white/10
          p-4
        "
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="
          px-6
          py-3
          bg-nebula
          rounded-xl
        "
      >
        {loading
          ? "Consulting Oracle..."
          : "Ask Oracle"}
      </button>
    </div>
  );
}
