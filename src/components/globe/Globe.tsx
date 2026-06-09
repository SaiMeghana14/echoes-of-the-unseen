"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const Globe = dynamic(
  () => import("react-globe.gl"),
  {
    ssr: false,
  }
);

const heritageData = [
  {
    lat: 43.06,
    lng: 141.35,
    size: 0.45,
    color: "#ff4d4d",
    label: "Ainu Language (Japan) • CRITICAL • Risk 91%",
  },

  {
    lat: 11.4,
    lng: 76.7,
    size: 0.4,
    color: "#FFD166",
    label: "Toda Embroidery (India) • AT RISK • Risk 82%",
  },

  {
    lat: 13.4,
    lng: 122.5,
    size: 0.42,
    color: "#ff4d4d",
    label: "Fishing Songs (Philippines) • CRITICAL • Risk 88%",
  },

  {
    lat: -41.28,
    lng: 174.77,
    size: 0.35,
    color: "#4FD1FF",
    label: "Māori Oral Histories (New Zealand) • PROTECTED",
  },
];

export default function GlobeView() {
  const points = useMemo(
    () => heritageData,
    []
  );

  const rings = useMemo(
    () => [
      {
        lat: 43.06,
        lng: 141.35,
        color: "#ff4d4d",
        maxR: 4,
        propagationSpeed: 2,
        repeatPeriod: 1200,
      },

      {
        lat: 11.4,
        lng: 76.7,
        color: "#FFD166",
        maxR: 4,
        propagationSpeed: 2,
        repeatPeriod: 1600,
      },

      {
        lat: 13.4,
        lng: 122.5,
        color: "#ff4d4d",
        maxR: 4,
        propagationSpeed: 2,
        repeatPeriod: 1000,
      },

      {
        lat: -41.28,
        lng: 174.77,
        color: "#4FD1FF",
        maxR: 4,
        propagationSpeed: 2,
        repeatPeriod: 2000,
      },
    ],
    []
  );

  const arcs = useMemo(
    () => [
      {
        startLat: 43.06,
        startLng: 141.35,
        endLat: 11.4,
        endLng: 76.7,
        color: ["#ff4d4d", "#FFD166"],
      },

      {
        startLat: 11.4,
        startLng: 76.7,
        endLat: 13.4,
        endLng: 122.5,
        color: ["#FFD166", "#ff4d4d"],
      },

      {
        startLat: 13.4,
        startLng: 122.5,
        endLat: -41.28,
        endLng: 174.77,
        color: ["#ff4d4d", "#4FD1FF"],
      },
    ],
    []
  );

  return (
    <div className="w-full h-[800px]">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="#060B17"

        atmosphereColor="#4FD1FF"
        atmosphereAltitude={0.15}

        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.25}
        pointLabel="label"

        ringsData={rings}
        ringLat="lat"
        ringLng="lng"
        ringColor="color"
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"

        arcsData={arcs}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcDashLength={0.5}
        arcDashGap={0.15}
        arcDashAnimateTime={2500}

        enablePointerInteraction
      />
    </div>
  );
}
