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
  return (
    <div className="absolute top-24 right-8 w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-gray-400 mt-2">
        {country}
      </p>

      <div className="mt-4">
        <span className="text-red-400 font-bold">
          Risk: {risk}%
        </span>
      </div>

      <p className="mt-4 text-sm leading-7">
        {description}
      </p>
    </div>
  );
}
