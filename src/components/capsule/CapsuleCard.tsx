interface CapsuleCardProps {
  title: string;
  unlockDate: string;
  status: string;
}

export default function CapsuleCard({
  title,
  unlockDate,
  status,
}: CapsuleCardProps) {
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

      <p className="text-gray-400 mt-3">
        Opens on {unlockDate}
      </p>

      <div
        className="
        mt-5
        inline-block
        px-4
        py-2
        rounded-full
        bg-nebula/10
      "
      >
        {status}
      </div>
    </div>
  );
}
