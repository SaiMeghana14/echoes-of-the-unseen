"use client";

import { useState } from "react";

export function useOracle() {
  const [loading, setLoading] =
    useState(false);

  const [response, setResponse] =
    useState("");

  const askOracle = async (
    question: string
  ) => {
    setLoading(true);

    try {
      const res = await fetch(
        "/api/oracle",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            question,
          }),
        }
      );

      const data = await res.json();

      setResponse(data.prediction);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    response,
    askOracle,
  };
}
