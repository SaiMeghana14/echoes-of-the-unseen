interface CapsuleTimelineProps {
  events: {
    date: string;
    title: string;
  }[];
}

export default function CapsuleTimeline({
  events,
}: CapsuleTimelineProps) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🕰 Capsule Timeline
      </h2>

      <div className="space-y-8">

        {events.map((event) => (
          <div
            key={event.date}
            className="flex gap-5"
          >
            <div className="w-28 font-bold">
              {event.date}
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
