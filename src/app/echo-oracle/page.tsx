"use client";

import { useState } from "react";

import { useOracle } from "@/hooks/useOracle";

import OracleResponse from "@/components/oracle/OracleResponse";
import LoadingMemory from "@/components/common/LoadingMemory";

const EXAMPLE_QUESTIONS = [
  "What traditions are disappearing in APAC?",
  "Which languages are at risk of extinction?",
  "What cultural knowledge is being forgotten?",
  "What stories from Andhra Pradesh should be preserved?",
];

const FOLLOW_UPS = [
  "Tell me more",
  "Why is this disappearing?",
  "How can it be preserved?",
];

export default function EchoOraclePage() {
  const [question, setQuestion] = useState("");

  const {
    askOracle,
    response,
    loading,
  } = useOracle();

  const handleAsk = async () => {
    if (!question.trim()) return;

    await askOracle(question);
  };

  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-6xl font-bold">
        🔮 Echo Oracle
      </h1>

      <p className="mt-4 text-gray-400 max-w-3xl">
        Ask any question about forgotten histories,
        endangered traditions, cultural memory,
        disappearing languages, or humanity's unseen
        stories.
      </p>

      {/* Example Questions */}
      <div className="mt-8 flex flex-wrap gap-3">
        {EXAMPLE_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => setQuestion(q)}
            className="
              px-4
              py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              hover:bg-white/10
              transition
              text-sm
            "
          >
            {q}
          </button>
        ))}
      </div>

      {/* Question Input */}
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" &&
            !e.shiftKey &&
            !loading
          ) {
            e.preventDefault();
            handleAsk();
          }
        }}
        placeholder="What traditions are disappearing in APAC?"
        className="
          mt-8
          w-full
          min-h-[180px]
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-6
          outline-none
          focus:border-nebula
        "
      />

      {/* Ask Button */}
      <button
        onClick={handleAsk}
        disabled={loading || !question.trim()}
        className="
          mt-6
          px-8
          py-4
          rounded-2xl
          bg-nebula
          text-white
          font-bold
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Consulting Memory..." : "Ask Oracle"}
      </button>

      {/* Loading */}
      {loading && (
        <div className="mt-8">
          <LoadingMemory />
        </div>
      )}

      {/* Response */}
      {!loading && response && (
        <div className="mt-10">
          <div className="glass rounded-3xl p-5 mb-6">
            <p className="text-sm text-white/50 uppercase tracking-wide">
              Your Question
            </p>

            <p className="mt-2 text-lg">
              {question}
            </p>
          </div>

          <OracleResponse response={response} />

          {/* Follow Up Suggestions */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">
              Continue Exploring
            </h3>

            <div className="flex flex-wrap gap-3">
              {FOLLOW_UPS.map((item) => (
                <button
                  key={item}
                  onClick={() => setQuestion(item)}
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:bg-white/10
                    transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Default State */}
      {!loading && !response && (
        <div className="glass rounded-3xl p-6 mt-10">
          <h3 className="text-xl font-bold mb-3">
            🌏 Heritage Insight
          </h3>

          <p className="text-white/70 leading-relaxed">
            Traditional weaving techniques across
            Asia-Pacific regions are disappearing due
            to urbanization, industrial manufacturing,
            and declining intergenerational knowledge
            transfer. Preserving these practices helps
            protect both cultural identity and
            historical memory.
          </p>
        </div>
      )}
    </main>
  );
}
