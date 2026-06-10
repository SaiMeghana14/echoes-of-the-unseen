"use client";

import { useState } from "react";

import CapsuleCreator from "@/components/capsule/CapsuleCreator";
import CapsuleCard from "@/components/capsule/CapsuleCard";
import CapsuleTimeline from "@/components/capsule/CapsuleTimeline";

export default function TimeCapsulePage() {
  const [capsule, setCapsule] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const createCapsule =
    async (
      title: string,
      description: string,
      unlockDate: string
    ) => {
      try {
        setLoading(true);

        const res =
          await fetch(
            "/api/capsule",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  title,
                  description,
                  unlockDate,
                }),
            }
          );

        const data =
          await res.json();

        setCapsule(data);
      } finally {
        setLoading(false);
      }
    };

  return (
    <main className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-6xl font-bold">
        ⏳ Time Capsule
      </h1>

      <p className="text-gray-400 mt-4">
        Preserve memories and
        unlock them in the future.
      </p>

      <div className="mt-10">

        <CapsuleCreator
          onCreate={
            createCapsule
          }
        />

      </div>

      {loading && (
        <div className="mt-8">
          Creating capsule...
        </div>
      )}

      {capsule && (
        <div className="mt-12 space-y-8">

          <CapsuleCard
            title={
              capsule.title
            }
            unlockDate={
              capsule.unlockDate
            }
            status={
              capsule.status
            }
          />

          <CapsuleTimeline
            events={
              capsule.timeline ||
              []
            }
          />

        </div>
      )}

    </main>
  );
}
