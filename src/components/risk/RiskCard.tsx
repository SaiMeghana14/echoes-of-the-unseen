interface RiskCardProps {
  title: string;
  score: number;
  description: string;
}

export default function RiskCard({
  title,
  score,
  description,
}: RiskCardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-red-500/20
      p-6
      bg-red-500/5
    "
    >
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <div className="mt-4 text-5xl font-bold text-red-400">
        {score}%
      </div>

      <p className="mt-4 text-gray-400">
        {description}
      </p>
    </div>
  );
}
