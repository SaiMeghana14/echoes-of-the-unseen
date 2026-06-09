"use client";

import { useState } from "react";

export function useRisk() {
  const [risk, setRisk] =
    useState(null);

  const calculateRisk =
    async (artifact: any) => {
      const res = await fetch(
        "/api/risk",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            artifact
          ),
        }
      );

      const data = await res.json();

      setRisk(data);
    };

  return {
    risk,
    calculateRisk,
  };
}
