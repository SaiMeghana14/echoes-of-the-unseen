"use client";

import { useState } from "react";

export function useArtifacts() {
  const [artifacts, setArtifacts] =
    useState([]);

  return {
    artifacts,
    setArtifacts,
  };
}
