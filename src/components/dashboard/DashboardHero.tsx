"use client";

export default function DashboardHero() {
  return (
    <section className="mb-12">

      <div
        className="
        glass
        rounded-[32px]
        p-10
      "
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-6xl font-bold">
              🌌 Heritage Intelligence Dashboard
            </h1>

            <p className="text-gray-400 mt-4 max-w-3xl">
              Monitor endangered traditions,
              disappearing languages,
              preservation efforts,
              and AI predictions across APAC.
            </p>

          </div>

          <div
            className="
            mt-8
            lg:mt-0
            px-8
            py-6
            rounded-3xl
            bg-nebula/10
            border
            border-nebula/20
          "
          >
            <div className="text-sm text-gray-400">
              Oracle Confidence
            </div>

            <div className="text-5xl font-bold mt-2">
              94%
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
