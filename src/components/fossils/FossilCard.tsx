interface FossilCardProps {
  title: string;
  significance: string;
  risk: number;
}

export default function FossilCard({
  title,
  significance,
  risk,
}: FossilCardProps) {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
    "
    >
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {significance}
      </p>

      <div className="mt-6">
        Risk Score:
        <span className="text-red-400 ml-2">
          {risk}%
        </span>
      </div>

    </div>
  );
}
