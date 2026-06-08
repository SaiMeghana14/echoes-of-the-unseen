export async function riskAgent(
  artifact: any
) {
  const scarcity =
    artifact.scarcity ?? 50;

  const documentationGap =
    artifact.documentationGap ?? 50;

  const communityDecline =
    artifact.communityDecline ?? 50;

  const age =
    artifact.age ?? 50;

  const risk =
    scarcity * 0.3 +
    documentationGap * 0.3 +
    communityDecline * 0.2 +
    age * 0.2;

  return {
    extinctionRisk: Math.round(risk),

    futureRelevance: Math.round(
      100 - documentationGap * 0.3
    ),

    preservationScore: Math.round(
      100 - risk
    )
  };
}
