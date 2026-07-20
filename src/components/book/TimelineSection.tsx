interface TimelineSectionProps {
  timeline?: string[];
}

export default function TimelineSection({
  timeline,
}: TimelineSectionProps) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🕰 Heritage Timeline
      </h2>

      <div className="space-y-6">

        {(timeline ?? []).map((item) => (
          <div
            key={item}
            className="
              p-4
              rounded-xl
              bg-white/5
            "
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}
