export default function ThreatMap() {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      min-h-[400px]
    "
    >
      <h2 className="text-3xl font-bold mb-6">
        🌍 Threat Map
      </h2>

      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">
            🌏
          </div>
      
          <h3 className="text-xl font-semibold">
            APAC Heritage Risk Visualization
          </h3>
      
          <div className="space-y-3 mt-6">
            <div>🔴 Ainu Language — 91% Risk</div>
            <div>🟠 Toda Embroidery — 82% Risk</div>
            <div>🔴 Fishing Songs — 88% Risk</div>
            <div>🟡 Oral Histories — 74% Risk</div>
          </div>
        </div>
      </div>

    </div>
  );
}
