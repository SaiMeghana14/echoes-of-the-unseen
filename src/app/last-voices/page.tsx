"use client";

import { useState } from "react";
import {
  AudioLines,
} from "lucide-react";

import WisdomCards from "@/components/voices/WisdomCards";
import PreservationSummary from "@/components/voices/PreservationSummary";

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

      setTimeout(() => {
        setTranscript(
          "My grandmother taught us traditional fishing songs passed down for generations. Before every fishing trip, the community gathered to sing together and seek blessings from nature."
        );

        setTranscribing(false);
      }, 1500);
    } catch (error) {
      console.error(
        "Transcription failed:",
        error
      );

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
          <AudioLines
            size={34}
            className="text-cyan-300"
          />
        </div>
      
        <div>
      
          <h1 className="text-6xl font-black">
            Last Voices
          </h1>
      
          <p className="text-white/60 mt-2">
            Preserve endangered languages, oral traditions and human stories.
          </p>
      
        </div>
      
      </div>

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
          id="audio-upload"
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={(e) => {
            const file =
              e.target.files?.[0];

            if (file) {
              setAudioFile(file);
            }
          }}
        />

        <label
          htmlFor="audio-upload"
          className="
            cursor-pointer
            inline-block
            px-6
            py-3
            rounded-xl
            bg-purple-600
            text-white
            hover:bg-purple-500
            transition
          "
        >
          Upload Recording
        </label>

        {audioFile && (
          <div className="mt-3 text-cyan-300">
            Uploaded: {audioFile.name}
          </div>
        )}
      </div>

      {/* Transcribe */}

      <button
        onClick={transcribe}
        disabled={transcribing}
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
          placeholder="My grandmother taught us to sing before fishing..."
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
        onClick={analyzeTranscript}
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
        {loading
          ? "Preserving Memory..."
          : "Analyze Wisdom"}
      </button>

      {/* Upload Success Card */}

      {audioFile && !data && (
        <div className="glass rounded-3xl p-6 mt-10">
          <div className="text-xl font-bold">
            🎙 Recording Uploaded
          </div>

          <div className="mt-4 text-white/60">
            Ready for transcription and analysis.
          </div>
        </div>
      )}

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
