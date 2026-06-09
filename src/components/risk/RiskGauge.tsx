"use client";

import { useEffect, useState } from "react";

interface Props {
  score: number;
}

export default function RiskGauge({
  score,
}: Props) {
  const [display, setDisplay] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplay((prev) => {
        if (prev >= score) {
          clearInterval(timer);
          return score;
        }

        return prev + 1;
      });
    }, 20);

    return () =>
      clearInterval(timer);
  }, [score]);

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      p-8
      rounded-3xl
      border
      border-red-500/30
    "
    >
      <h3 className="text-lg mb-4">
        Heritage Risk Score
      </h3>

      <div className="text-6xl font-bold text-red-400">
        {display}%
      </div>

      <div className="mt-4 text-gray-400">
        {score > 75
          ? "Critical"
          : score > 50
          ? "At Risk"
          : "Stable"}
      </div>
    </div>
  );
}
