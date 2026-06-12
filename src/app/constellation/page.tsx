export default function ConstellationPage() {
  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold">
        🌠 Memory Constellation
      </h1>

      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-32 left-72 w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="absolute top-64 left-48 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute top-80 left-[600px] w-2 h-2 bg-yellow-400 rounded-full"></div>
      
        <svg className="absolute inset-0 w-full h-full">
          <line x1="80" y1="80" x2="280" y2="150" stroke="#ffffff50"/>
          <line x1="280" y1="150" x2="180" y2="300" stroke="#ffffff50"/>
          <line x1="180" y1="300" x2="600" y2="400" stroke="#ffffff50"/>
        </svg>
      
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          Interactive Heritage Galaxy
        </div>
      </div>
    </main>
  );
}
