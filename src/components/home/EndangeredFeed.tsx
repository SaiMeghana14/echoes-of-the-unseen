const endangeredItems = [
  {
    name: "Ainu Language",
    country: "Japan",
    risk: 91,
  },
  {
    name: "Toda Embroidery",
    country: "India",
    risk: 82,
  },
  {
    name: "Fishing Songs",
    country: "Philippines",
    risk: 88,
  },
];

export default function EndangeredFeed() {
  return (
    <section className="py-24 px-6">

      <h2 className="text-5xl font-bold mb-12">
        🚨 Endangered Today
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {endangeredItems.map((item) => (
          <div
            key={item.name}
            className="
            p-8
            rounded-3xl
            border
            border-red-500/20
            bg-red-500/5
          "
          >
            <h3 className="text-2xl font-bold">
              {item.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.country}
            </p>

            <div className="mt-6 text-5xl text-red-400 font-bold">
              {item.risk}%
            </div>

            <p className="mt-2">
              Extinction Risk
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
