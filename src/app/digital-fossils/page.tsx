"use client";

import { useState } from "react";

import WebsiteAnalyzer from "@/components/fossils/WebsiteAnalyzer";
import FossilCard from "@/components/fossils/FossilCard";
import FossilTimeline from "@/components/fossils/FossilTimeline";

export default function DigitalFossilsPage() {
  const [loading, setLoading] =
    useState(false);

  const [data, setData] =
    useState<any>(null);

  const analyzeWebsite =
    async (url: string) => {
      if (!url.trim()) return;

      try {
        setLoading(true);

        const res =
          await fetch(
            "/api/fossils",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  url,
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
    <main className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-6xl font-bold">
        🏺 Digital Fossils
      </h1>

      <p className="text-gray-400 mt-4">
        Discover internet communities,
        websites, and digital memories
        at risk of disappearing.
      </p>

      <div className="mt-10">

        <WebsiteAnalyzer
          onAnalyze={
            analyzeWebsite
          }
        />

      </div>

      {loading && (
        <div className="mt-8">
          Analyzing website...
        </div>
      )}

      {data && (
        <div className="mt-12 space-y-8">

          <FossilCard
            title={data.title}
            significance={
              data.significance
            }
            risk={data.risk}
          />

          <FossilTimeline
            events={
              data.timeline ||
              []
            }
          />

        </div>
      )}

    </main>
  );
}
