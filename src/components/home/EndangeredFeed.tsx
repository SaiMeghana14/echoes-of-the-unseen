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

      <div className="grid
           grid-cols-2
           lg:grid-cols-6
           gap-5">

        {endangeredItems.map((item,index)=>(
          <div
            key={item.name}
            className="
              p-5
              rounded-3xl
              border
              border-red-500/20
              bg-red-500/5
            "
          >

            <div className="text-xs text-gray-500 mb-3">
              #{index + 1}
            </div>
            
            <h3 className="text-2xl font-bold">
              {item.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.country}
            </p>

            <div className="mt-6 text-4xl text-red-400 font-bold">
              {item.risk}%
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">

            <div
            className="h-full rounded-full bg-red-500"
            style={{
            width:`${item.risk}%`
            }}
            />
            
            </div>

            <div className="mt-4">

            <span className="
            px-2
            py-1
            rounded-full
            text-xs
            bg-red-500/20
            text-red-300
            ">
            
            🔴 Critical
            
            </span>
            
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
