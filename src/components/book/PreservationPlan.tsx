interface PreservationPlanProps {
  preservationPlan?: string[];
}

export default function PreservationPlan({
  preservationPlan = [],
}: PreservationPlanProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-2xl">
          🛡️
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Preservation Plan
          </h2>

          <p className="text-gray-400">
            Recommended actions for long-term preservation.
          </p>

        </div>

      </div>

      {preservationPlan.length === 0 ? (
        <p className="text-gray-500">
          No preservation plan available.
        </p>
      ) : (
        <div className="space-y-5">

          {preservationPlan.map((step, index) => (

            <div
              key={index}
              className="flex gap-5 rounded-2xl bg-green-500/10 border border-green-500/20 p-6"
            >

              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-green-500
                  text-black
                  flex
                  items-center
                  justify-center
                  font-bold
                  shrink-0
                "
              >
                {index + 1}
              </div>

              <p className="text-gray-300 leading-7">
                {step}
              </p>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}
