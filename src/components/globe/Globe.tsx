"use client";

import dynamic from "next/dynamic";
import { useMemo, useEffect, useRef } from "react";

const globeRef = useRef<any>(null);

const Globe: any = dynamic(
  () =>
    import("react-globe.gl").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

interface HeritageItem {
  id: string;
  title: string;
  country: string;
  risk: number;
  status: string;
  description: string;
  lat: number;
  lng: number;
  size: number;
  color: string;
  label: string;
}

interface GlobeViewProps {
  onSelect?: (
    item: HeritageItem
  ) => void;
}

const heritageData: HeritageItem[] = [
  {
    id: "ainu",
    title: "Ainu Language",
    country: "Japan",
    risk: 91,
    status: "Critical",
    description:
      "One of the world's most endangered indigenous languages.",
    lat: 43.06,
    lng: 141.35,
    size: 0.45,
    color: "#ff4d4d",
    label:
      "Ainu Language (Japan) • Risk 91%",
  },

  {
    id: "toda",
    title: "Toda Embroidery",
    country: "India",
    risk: 82,
    status: "At Risk",
    description:
      "Traditional embroidery practiced by the Toda community.",
    lat: 11.4,
    lng: 76.7,
    size: 0.4,
    color: "#FFD166",
    label:
      "Toda Embroidery (India) • Risk 82%",
  },

  {
    id: "fishing",
    title: "Fishing Songs",
    country: "Philippines",
    risk: 88,
    status: "Critical",
    description:
      "Oral traditions passed through generations.",
    lat: 13.4,
    lng: 122.5,
    size: 0.42,
    color: "#ff4d4d",
    label:
      "Fishing Songs (Philippines) • Risk 88%",
  },

  {
    id: "maori",
    title: "Māori Oral Histories",
    country: "New Zealand",
    risk: 63,
    status: "Protected",
    description:
      "Community-led preservation efforts are helping keep these stories alive.",
    lat: -41.28,
    lng: 174.77,
    size: 0.35,
    color: "#4FD1FF",
    label:
      "Māori Oral Histories (New Zealand) • Risk 63%",
  },
];

export default function GlobeView({
  onSelect,
}: GlobeViewProps) {

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

  useEffect(() => {
    if (!globeRef.current) return;
  
    globeRef.current.pointOfView(
      {
        lat: 20,
        lng: 80,
        altitude: 2.2,
      },
      1500
    );
  }, []);
  
  return (
    <div className="w-full h-screen">
      <Globe
        ref={globeRef}
      
        globeImageUrl="/textures/earth-blue-marble.jpg"
        bumpImageUrl="/textures/earth-topology.png"
      
        backgroundColor="#020817"
      
        showAtmosphere={true}
      
        atmosphereColor="#4FD1FF"
        atmosphereAltitude={0.22}
      
        animateIn={true}
      
        pointsData={heritageData}
      
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.25}
        pointResolution={18}
        pointLabel="label"
      
        ringsData={rings}
        ringLat="lat"
        ringLng="lng"
        ringColor="color"
        ringMaxRadius="maxR"
        ringResolution={64}
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
      
        arcsData={arcs}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={(d: any) => d.color}
        arcStroke={0.7}
        arcAltitude={0.25}
        arcDashLength={0.5}
        arcDashGap={0.15}
        arcDashAnimateTime={2500}
        arcDashInitialGap={() => Math.random()}
      
        enablePointerInteraction
      
        onPointClick={(point: any) => onSelect?.(point as HeritageItem)}
      />
    </div>
  );
}
