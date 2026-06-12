"use client";

import { useState } from "react";

import { useOracle } from "@/hooks/useOracle";

import OracleResponse from "@/components/oracle/OracleResponse";
import LoadingMemory from "@/components/common/LoadingMemory";

export default function EchoOraclePage() {
  const [question, setQuestion] =
    useState("");

  const {
    askOracle,
    response,
    loading,
  } = useOracle();

  const handleAsk =
    async () => {
      if (!question.trim())
        return;

      await askOracle(
        question
      );
    };

  return (
    <main className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-6xl font-bold">
        🔮 Echo Oracle
      </h1>

      <p className="mt-4 text-gray-400">
        Ask what humanity is
        overlooking today.
      </p>

      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(
            e.target.value
          )
        }
        placeholder="
What traditions are disappearing in APAC?"
        className="
        mt-8
        w-full
        min-h-[180px]
        rounded-3xl
        border
        border-white/10
        bg-black/20
        p-6
      "
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="
        mt-6
        px-8
        py-4
        rounded-2xl
        bg-nebula
      "
      >
        <LoadingMemory />
      </button>

      <OracleResponse
        response={response}
      />

    </main>
  );
}
