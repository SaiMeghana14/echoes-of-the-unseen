interface FossilTimelineProps {
  events: {
    year: string;
    title: string;
  }[];
}

export default function FossilTimeline({
  events,
}: FossilTimelineProps) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🏺 Fossil Timeline
      </h2>

      <div className="space-y-8">

        {events.map((event) => (
          <div
            key={event.year}
            className="flex gap-5"
          >
            <div className="w-24 font-bold">
              {event.year}
            </div>

            <div
              className="
              border-l
              border-nebula/30
              pl-5
            "
            >
              {event.title}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
