"use client";

interface Props {
  item: any;
}

export default function HeritageDrawer({
  item,
}: Props) {
  if (!item) return null;

  return (
    <div
      className="
      fixed
      right-6
      top-24
      w-[400px]
      z-[999]
      rounded-3xl
      bg-black/80
      backdrop-blur-xl
      border
      border-white/10
      p-6
    "
    >
      <h2 className="text-3xl font-bold">
        {item.title}
      </h2>

      <p className="mt-2 text-cyan-400">
        {item.country}
      </p>

      <p className="mt-6">
        {item.description}
      </p>

      <div className="mt-6">
        Risk Score:
        <span className="font-bold ml-2">
          {item.risk}%
        </span>
      </div>
    </div>
  );
}
