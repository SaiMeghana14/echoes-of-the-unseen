"use client";

import { useState } from "react";

import WisdomCards from "@/components/voices/WisdomCards";

import PreservationSummary from "@/components/voices/PreservationSummary";

export default function LastVoicesPage() {
  const [
    transcript,
    setTranscript,
  ] = useState("");

  const [data, setData] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const analyzeTranscript =
    async () => {
      setLoading(true);

      try {
        const res = await fetch(
          "/api/voices",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              transcript,
            }),
          }
        );

        const result =
          await res.json();

        setData(result);
      } finally {
        setLoading(false);
      }
    };

  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-6xl font-bold">
        🎙 Last Voices
      </h1>

      <p className="text-gray-400 mt-4">
        Preserve wisdom before
        it disappears forever.
      </p>

      <textarea
        value={transcript}
        onChange={(e) =>
          setTranscript(
            e.target.value
          )
        }
        placeholder="
My grandmother taught us to sing before fishing..."
        className="
        mt-8
        w-full
        min-h-[240px]
        rounded-3xl
        border
        border-white/10
        bg-black/20
        p-6
      "
      />

      <button
        onClick={
          analyzeTranscript
        }
        disabled={loading}
        className="
        mt-6
        px-8
        py-4
        rounded-2xl
        bg-nebula
      "
      >
        {loading
          ? "Analyzing..."
          : "Extract Heritage"}
      </button>

      {data && (
        <>
          <WisdomCards
            title="Stories"
            items={
              data.stories
            }
          />

          <WisdomCards
            title="Traditions"
            items={
              data.traditions
            }
          />

          <WisdomCards
            title="Beliefs"
            items={
              data.beliefs
            }
          />

          <WisdomCards
            title="Life Lessons"
            items={
              data.lifeLessons
            }
          />

          <PreservationSummary
            summary={
              data.preservationSummary
            }
          />
        </>
      )}

    </main>
  );
}
