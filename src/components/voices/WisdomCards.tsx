interface WisdomCardsProps {
  wisdom: string[];
}

export default function WisdomCards({
  wisdom,
}: WisdomCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {wisdom.map((item, index) => (
        <div
          key={index}
          className="
          p-6
          rounded-3xl
          border
          border-memory/20
          bg-memory/5
        "
        >
          <div className="text-3xl mb-4">
            ✨
          </div>

          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
