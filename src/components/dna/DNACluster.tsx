import DNANode from "./DNANode";

interface DNAClusterProps {
  title: string;
  items: string[];
  type?: string;
}

export default function DNACluster({
  title,
  items,
  type = "default",
}: DNAClusterProps) {
  return (
    <div className="glass rounded-3xl p-6">

      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <DNANode
            key={item}
            label={item}
            type={type}
          />
        ))}
      </div>

    </div>
  );
}
