"use client";

export default function AgentFlow() {
  const steps = [
    "Artifact",
    "Discovery Agent",
    "DNA Agent",
    "Historian Agent",
    "Preservation Agent",
    "Oracle Agent",
  ];

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold mb-8">
        AI Agent Flow
      </h2>

      <div
        className="
        flex
        flex-wrap
        gap-4
      "
      >
        {steps.map((step) => (
          <div
            key={step}
            className="
            px-6
            py-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
          "
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
