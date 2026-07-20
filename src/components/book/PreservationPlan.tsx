interface PreservationStep {
  step: number;
  title: string;
  description: string;
}

interface PreservationPlanProps {
  preservationPlan?: PreservationStep[];
}

export default function PreservationPlan({
  preservationPlan = [],
}: PreservationPlanProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-4 mb-8">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-green-500/20
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          🛡️
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Preservation Plan
          </h2>

          <p className="text-gray-400">
            Recommended actions for long-term cultural preservation.
          </p>

        </div>

      </div>

      {preservationPlan.length === 0 ? (
        <p className="text-gray-500">
          No preservation plan available.
        </p>
      ) : (
        <div className="space-y-5">

          {preservationPlan.map((step) => (

            <div
              key={step.step}
              className="
                rounded-2xl
                border
                border-green-500/20
                bg-green-500/5
                p-6
                transition-all
                hover:bg-green-500/10
              "
            >

              <div className="flex gap-5">

                <div
                  className="
                    w-10
                    h-10
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
                  {step.step}
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-8">
                    {step.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}
