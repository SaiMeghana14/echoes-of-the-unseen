"use client";

import { useState } from "react";

import WisdomCards from "@/components/voices/WisdomCards";
import PreservationSummary from "@/components/voices/PreservationSummary";
import LoadingMemory from "@/components/common/LoadingMemory";

export default function LastVoicesPage() {
  const [audioFile, setAudioFile] =
    useState<File | null>(null);

  const [transcript, setTranscript] =
    useState("");

  const [data, setData] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const [transcribing, setTranscribing] =
    useState(false);

  const transcribe = async () => {
    if (!audioFile) {
      alert(
        "Please upload an audio file first."
      );
      return;
    }

    try {
      setTranscribing(true);

      // Future:
      // upload audioFile to Firebase Storage
      // send URL to Gemini Audio API

      const res = await fetch(
        "/api/transcribe",
        {
          method: "POST",
        }
      );

      const result =
        await res.json();

      setTranscript(
        result.transcript
      );
    } catch (error) {
      console.error(
        "Transcription failed:",
        error
      );
    } finally {
      setTranscribing(false);
    }
  };

  const analyzeTranscript =
    async () => {
      if (!transcript.trim()) {
        alert(
          "Transcript is empty."
        );
        return;
      }

      try {
        setLoading(true);

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
      } catch (error) {
        console.error(
          "Analysis failed:",
          error
        );
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
        Preserve wisdom before it
        disappears forever.
      </p>

      {/* Audio Upload */}

      <div className="mt-10">

        <label className="block mb-3 font-medium">
          Upload Elder Recording
        </label>

        <input
          type="file"
          accept="audio/*"
          onChange={(e) =>
            setAudioFile(
              e.target.files?.[0] ??
                null
            )
          }
          className="
            block
            w-full
            rounded-xl
            border
            border-white/10
            p-4
            bg-black/20
          "
        />

      </div>

      {/* Transcribe */}

      <button
        onClick={transcribe}
        disabled={
          transcribing
        }
        className="
          mt-6
          px-8
          py-4
          rounded-2xl
          bg-memory
          text-black
          font-bold
        "
      >
        {transcribing
          ? "Transcribing..."
          : "Transcribe Audio"}
      </button>

      {/* Transcript */}

      <div className="mt-10">

        <label className="block mb-3 font-medium">
          Transcript
        </label>

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
            w-full
            min-h-[240px]
            rounded-3xl
            border
            border-white/10
            bg-black/20
            p-6
          "
        />

      </div>

      {/* Analyze */}

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
          text-white
          font-bold
        "
      >
        <LoadingMemory />
      </button>

      {/* Results */}

      {data && (
        <div className="mt-12 space-y-8">

          <WisdomCards
            title="Stories"
            items={
              data.stories || []
            }
          />

          <WisdomCards
            title="Traditions"
            items={
              data.traditions ||
              []
            }
          />

          <WisdomCards
            title="Beliefs"
            items={
              data.beliefs || []
            }
          />

          <WisdomCards
            title="Life Lessons"
            items={
              data.lifeLessons ||
              []
            }
          />

          <PreservationSummary
            summary={
              data.preservationSummary ||
              ""
            }
          />

        </div>
      )}

    </main>
  );
}
