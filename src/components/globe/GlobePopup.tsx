interface GlobePopupProps {
  title: string;
  country: string;
  risk: number;
  description: string;
}

export default function GlobePopup({
  title,
  country,
  risk,
  description,
}: GlobePopupProps) {
  const riskColor =
    risk >= 85
      ? "text-red-400"
      : risk >= 70
      ? "text-yellow-400"
      : "text-cyan-400";

  const riskLabel =
    risk >= 85
      ? "Critical"
      : risk >= 70
      ? "At Risk"
      : "Protected";

  return (
    <div
      className="
      absolute
      top-24
      right-8
      w-[380px]
      z-50
      rounded-3xl
      bg-black/80
      backdrop-blur-2xl
      border
      border-white/10
      p-6
      text-white
      shadow-2xl
      transition-all
      duration-300
      hover:scale-[1.02]
    "
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-white/60 mt-1">
            {country}
          </p>
        </div>

        <div
          className={`
          px-3
          py-1
          rounded-full
          text-xs
          font-bold
          bg-white/10
          ${riskColor}
        `}
        >
          {riskLabel}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm">
          <span className="text-white/60">
            Heritage Risk
          </span>

          <span className={`font-bold ${riskColor}`}>
            {risk}%
          </span>
        </div>

        <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
          <div
            className={`h-full ${
              risk >= 85
                ? "bg-red-400"
                : risk >= 70
                ? "bg-yellow-400"
                : "bg-cyan-400"
            }`}
            style={{
              width: `${risk}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-white/80 mb-2">
          Description
        </h3>

        <p className="text-sm leading-7 text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}
