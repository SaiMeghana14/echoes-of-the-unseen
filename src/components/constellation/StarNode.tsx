interface StarNodeProps {
  label: string;
}

export default function StarNode({
  label,
}: StarNodeProps) {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
    "
    >
      <div
        className="
        h-5
        w-5
        rounded-full
        bg-memory
        shadow-lg
      "
      />

      <span className="mt-2 text-xs">
        {label}
      </span>
    </div>
  );
}
