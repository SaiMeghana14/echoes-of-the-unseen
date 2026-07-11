const endangeredItems = [
  {
    name: "Ainu Language",
    country: "Japan",
    type: "Language",
    organization: "UNESCO",
    speakers: 350,
    trend: "12%",
    risk: 91,
    status: "Critical",
  },
  {
    name: "Toda Embroidery",
    country: "India",
    type: "Craft",
    organization: "UNESCO",
    speakers: 900,
    trend: "6%",
    risk: 82,
    status: "High",
  },
  {
    name: "Fishing Songs",
    country: "Philippines",
    type: "Music",
    organization: "Local Heritage",
    speakers: 1200,
    trend: "8%",
    risk: 88,
    status: "Critical",
  },
];

export default function EndangeredFeed() {
  return (
    <section className="py-24 px-6">

      <h2 className="text-5xl font-bold mb-12">
        🚨 Endangered Today
      </h2>

      <div className="grid
           grid-cols-1
           md:grid-cols-2
           xl:grid-cols-3
           gap-8
          "
      >
        {endangeredItems.map((item,index)=>(
            <div key={item.name}
            className="
            group
            relative
            overflow-hidden
            p-8
            rounded-3xl
            border
            border-red-500/20
            bg-gradient-to-b
            from-[#1a1323]
            to-[#0b1020]
    
            hover:-translate-y-2
            hover:scale-[1.03]
            hover:border-red-400/60            
            hover:shadow-[0_0_45px_rgba(239,68,68,0.25)]        
            transition-all           
            duration-500
            ">
      
            <div className="flex items-center gap-2">
            <div
              className="
                absolute
                -top-10
                -right-10
                w-40
                h-40
                rounded-full
                bg-red-500/10
                blur-3xl
                pointer-events-none
              "
            />
            <span className="text-2xl">      
            {item.type==="Language"?"🗣":            
            item.type==="Craft"?"🪵":           
            item.type==="Music"?"🎵":"📖"}           
            </span>
            
            <h3 className="text-xl font-bold">            
            {item.name}            
            </h3>        
            </div>

            <div className="text-xs text-gray-500 mb-3">
              #{index + 1}
            </div>

            <p className="mt-2 text-gray-400 flex items-center gap-2">
            <span>
            {
            item.country==="Japan" ? "🇯🇵" :
            item.country==="India" ? "🇮🇳" :
            item.country==="Philippines" ? "🇵🇭" :
            "🌍"
            }
            </span> 
            {item.country}           
            </p>

            <div className="mt-3 space-y-1 text-sm text-gray-400">     
            <div>
            🏛 {item.organization}          
            </div>           
            <div>           
            📂 {item.type}          
            </div>      
            </div>

            <div className="mt-6 flex justify-center">
            <div
            className="
            w-28
            h-28
            rounded-full
            border-4
            border-red-400/40
            bg-red-500/10
            flex
            items-center
            justify-center
            shadow-[0_0_40px_rgba(239,68,68,.25)]
            "
            >            
            <div>
            
            <div className="text-4xl font-bold text-red-300">            
            {item.risk}%  
            </div>
            
            <div className="text-xs text-gray-400">            
            Threat Level     
            </div>           
            </div>            
            </div>            
            </div>
              
            <div className="mt-4 h-2 rounded-full bg-white/10">

            <div
            className="h-full rounded-full bg-gradient-to-r
            from-red-500   
            via-orange-400
            to-red-600"
            style={{
            width:`${item.risk}%`
            }}
            />
            
            </div>
            <div className="mt-5 flex justify-between">

            <div>
            <div className="text-xs text-gray-500">
            Remaining
            </div>
            
            <div className="font-semibold">
            ≈{item.speakers.toLocaleString()}
            </div>
            </div>
            <div>
              
            <div className="text-xs text-gray-500">
            Trend
            </div>
            <div className="text-red-400">
            ↓ {item.trend}
            </div>
            </div>
            </div>

            <div className="mt-4">

            <span
            className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            
            ${
            item.status==="Critical"
            ?
            "bg-red-500/20 text-red-300"
            :
            item.status==="High"
            ?
            "bg-orange-500/20 text-orange-300"
            :
            "bg-yellow-500/20 text-yellow-300"
            }
            `}
            >            
            {
            item.status==="Critical"
            ?
            "🔴 Critical"
            :
            item.status==="High"
            ?
            "🟠 High"
            :
            "🟡 Moderate"
            }
            </span>
            
            </div>
              
            <div className="mt-5 pt-4 border-t border-white/5">
            <p className="text-xs text-gray-500">
            Updated 2 hours ago
            </p>
            </div>
              
          </div>
        ))}

      </div>

    </section>
  );
}
