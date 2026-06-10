import DashboardHero from "@/components/dashboard/DashboardHero";

import MetricsPanel from "@/components/dashboard/MetricsPanel";

import RiskFeed from "@/components/dashboard/RiskFeed";

import ThreatMap from "@/components/dashboard/ThreatMap";

import TrendChart from "@/components/dashboard/TrendChart";

import RevivalOpportunities from "@/components/dashboard/RevivalOpportunities";

import OracleInsights from "@/components/dashboard/OracleInsights";

import PreservationTimeline from "@/components/dashboard/PreservationTimeline";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <DashboardHero />

      <MetricsPanel />

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <ThreatMap />

        <TrendChart />

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <RiskFeed />

        <OracleInsights />

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <RevivalOpportunities />

        <PreservationTimeline />

      </div>

    </main>
  );
}
