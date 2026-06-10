interface DNANodeProps {
  label: string;
  type?: string;
}

export default function DNANode({
  label,
  type = "default",
}: DNANodeProps) {
  const colors = {
    culture: "bg-memory text-black",
    story: "bg-nebula text-white",
    belief: "bg-aurora text-black",
    ritual: "bg-green-500 text-white",
    knowledge: "bg-purple-500 text-white",
    default: "bg-white/10 text-white",
  };

  return (
    <div
      className={`
      px-4 py-3
      rounded-full
      font-medium
      shadow-lg
      border border-white/10
      ${colors[type as keyof typeof colors]}
    `}
    >
      {label}
    </div>
  );
}
