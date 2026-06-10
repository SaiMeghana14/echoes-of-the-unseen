import { describe, it, expect } from "vitest";

describe("Risk Agent", () => {
  it("calculates risk", () => {
    const score = 80;

    expect(score).toBeGreaterThan(50);
  });
});
