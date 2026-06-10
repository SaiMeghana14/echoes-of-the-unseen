"use client";

const events = [
  {
    year: "2024",
    title:
      "Ainu Language Archive Created",
  },

  {
    year: "2025",
    title:
      "Fishing Songs Recorded",
  },

  {
    year: "2026",
    title:
      "Digital Preservation Complete",
  },

  {
    year: "2030",
    title:
      "Community Revival Program",
  },
];

export default function PreservationTimeline() {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
    "
    >
      <h2 className="text-3xl font-bold mb-8">
        🕰 Preservation Timeline
      </h2>

      <div className="space-y-8">

        {events.map(
          (event) => (
            <div
              key={event.year}
              className="
              flex
              gap-5
            "
            >
              <div
                className="
                w-20
                font-bold
                text-memory
              "
              >
                {event.year}
              </div>

              <div
                className="
                flex-1
                border-l
                border-memory/20
                pl-5
              "
              >
                {event.title}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}
