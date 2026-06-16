"use client";

import { useState } from "react";

interface OracleHook {
  loading: boolean;
  response: string;
  error: string | null;
  askOracle: (question: string) => Promise<void>;
  clearResponse: () => void;
}

export function useOracle(): OracleHook {
  const [loading, setLoading] =
    useState(false);

  const [response, setResponse] =
    useState("");

  const [error, setError] =
    useState<string | null>(null);

  const askOracle = async (
    question: string
  ) => {
    if (!question.trim()) return;

    setLoading(true);
    setError(null);

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

      if (!res.ok) {
        throw new Error(
          `Oracle request failed (${res.status})`
        );
      }

      const data = await res.json();

      const oracleResponse =
        data.prediction ||
        data.answer ||
        data.response ||
        "The Oracle found no answer.";

      setResponse(oracleResponse);
    } catch (err) {
      console.error(
        "Oracle Error:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred."
      );

      setResponse(
        "The Oracle could not access humanity's memory at this time."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearResponse = () => {
    setResponse("");
    setError(null);
  };

  return {
    loading,
    response,
    error,
    askOracle,
    clearResponse,
  };
}
