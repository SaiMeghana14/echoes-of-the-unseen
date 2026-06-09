export function calculateRisk(
  scarcity: number,
  documentationGap: number,
  communityDecline: number,
  age: number
) {
  return Math.round(
    scarcity * 0.3 +
      documentationGap * 0.3 +
      communityDecline * 0.2 +
      age * 0.2
  );
}
