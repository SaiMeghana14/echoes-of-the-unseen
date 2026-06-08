export default function DashboardPage() {
  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="p-6 border rounded-xl">
          Artifacts
        </div>

        <div className="p-6 border rounded-xl">
          Communities
        </div>

        <div className="p-6 border rounded-xl">
          Risk Alerts
        </div>

        <div className="p-6 border rounded-xl">
          Oracle Insights
        </div>
      </div>
    </main>
  );
}
