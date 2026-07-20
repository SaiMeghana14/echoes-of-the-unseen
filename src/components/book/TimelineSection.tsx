interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  timeline?: TimelineEvent[];
}

export default function TimelineSection({
  timeline = [],
}: TimelineSectionProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-4 mb-8">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-memory/20
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          🕰
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Heritage Timeline
          </h2>

          <p className="text-gray-400">
            Important milestones throughout history.
          </p>

        </div>

      </div>

      {timeline.length === 0 ? (
        <p className="text-gray-500">
          No timeline available.
        </p>
      ) : (
        <div className="space-y-5">

          {timeline.map((event, index) => (

            <div
              key={`${event.year}-${event.title}-${index}`}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    shrink-0
                    px-4
                    py-2
                    rounded-xl
                    bg-memory/20
                    text-memory
                    font-semibold
                  "
                >
                  {event.year}
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 leading-8">
                    {event.description}
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
