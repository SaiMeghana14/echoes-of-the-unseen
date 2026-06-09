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
    size: 0.4,
    color: "#ff4d4d",
    label: "Ainu Language (Japan) • Risk 91%",
  },

  {
    lat: 11.4,
    lng: 76.7,
    size: 0.35,
    color: "#FFD166",
    label: "Toda Embroidery (India) • Risk 82%",
  },

  {
    lat: 13.4,
    lng: 122.5,
    size: 0.4,
    color: "#ff4d4d",
    label: "Fishing Songs (Philippines) • Risk 88%",
  },
];

export default function GlobeView() {
  const points = useMemo(
    () => heritageData,
    []
  );

  return (
    <div className="w-full h-[800px]">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="#060B17"
        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.25}
        pointLabel="label"
        atmosphereColor="#4FD1FF"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
