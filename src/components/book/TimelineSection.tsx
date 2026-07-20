interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

interface TimelineSectionProps {
    timeline?: TimelineEvent[];
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

        {(timeline ?? []).map((event) => (
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
      
          <div key={event.year + event.title}>
    
              <div>{event.year}</div>
          
              <h3>{event.title}</h3>
          
              <p>{event.description}</p>
          
          </div>
        ))}

      </div>

    </div>
  );
}
