"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  category: string;
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

const CATEGORY_COLORS: Record<
  string,
  string
> = {
  artifact: "#F97316",
  tradition: "#34D399",
  language: "#60A5FA",
  festival: "#6EE7B7",
  folklore: "#C084FC",
  music: "#F9A8D4",
  craft: "#FDBA74",
  story: "#93C5FD",
};

export default function GlobeView({
  onSelect,
}: GlobeViewProps) {
  const globeRef = useRef<any>(null);

  const [
    heritageData,
    setHeritageData,
  ] = useState<HeritageItem[]>([]);
  
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res =
          await fetch(
            "/api/memory-atlas"
          );

        if (!res.ok) return;

        const memories =
          await res.json();

        const points =
          memories.map(
            (
              memory: any,
              index: number
            ) => ({
              id:
                memory.id ??
                index.toString(),

              title:
                memory.title,

              country:
                memory.region,

              category:
                memory.category,

              description:
                memory.description,

              lat:
                Number(
                  memory.latitude
                ) ||
                Math.random() *
                  120 -
                  60,

              lng:
                Number(
                  memory.longitude
                ) ||
                Math.random() *
                  360 -
                  180,

              size:
              memory.category === "festival"
              ? 0.85
              : memory.category === "artifact"
              ? 0.75
              : memory.category === "language"
              ? 0.7
              : memory.category === "tradition"
              ? 0.65
              : memory.category === "music"
              ? 0.6
              : memory.category === "craft"
              ? 0.58
              : 0.5,

              color:
                CATEGORY_COLORS[
                  (
                    memory.category ??
                    ""
                  ).toLowerCase()
                ] ??
                "#4FD1FF",

              label: `
              🏛 ${memory.title}
              
              🌍 ${memory.region}
              
              🏷 ${memory.category}
              
              ${memory.description}
              `,
            })
          );

        setHeritageData(points);
        setLoading(false);
      } catch (err) {
        console.error(
          "Globe Error:",
          err
        );
        setLoading(false);
      }
    }

    load();
  }, []);

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

    const controls =
      globeRef.current.controls();
    
    controls.autoRotate = true;
    
    controls.autoRotateSpeed = 0.3;
  }, []);

  const rings = useMemo(
    () =>
      heritageData.map(
        (point) => ({
          lat: point.lat,
          lng: point.lng,
          color: point.color,
          maxR: 4,
          propagationSpeed: 2,
          repeatPeriod: 1800,
        })
      ),
    [heritageData]
  );

  const arcs = useMemo(() => {
    const grouped = heritageData.reduce(
      (acc, point) => {
        if (!acc[point.country]) {
          acc[point.country] = [];
        }
  
        acc[point.country].push(point);
  
        return acc;
      },
      {} as Record<
        string,
        HeritageItem[]
      >
    );
  
    const connections: any[] = [];
  
    Object.values(grouped).forEach(
      (items) => {
        if (items.length < 2) return;
  
        for (
          let i = 1;
          i < items.length;
          i++
        ) {
          connections.push({
            startLat:
              items[0].lat,
  
            startLng:
              items[0].lng,
  
            endLat:
              items[i].lat,
  
            endLng:
              items[i].lng,
  
            color: [
              items[0].color,
              items[i].color,
            ],
          });
        }
      }
    );
  
    return connections;
  
  }, [heritageData]);

  if (loading) {
    return (
      <div
        className="
        w-full
        h-screen
        flex
        items-center
        justify-center
        bg-[#020817]
        text-cyan-300
        text-2xl
        font-semibold
      "
      >
        🌍 Loading Heritage Network...
      </div>
    );
  }
  
  return (
    <div className="w-full h-screen">
      <Globe
        ref={globeRef}
        width={1200}
        height={800}
        globeImageUrl="/textures/earth-blue-marble.jpg"
        bumpImageUrl="/textures/earth-topology.png"
        backgroundColor="#020817"
        showAtmosphere
        atmosphereColor="#7DD3FC"
        atmosphereAltitude={0.28}
        animateIn
        pointsData={
          heritageData
        }
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.45}
        pointResolution={18}
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
        arcColor={(
          d: any
        ) => d.color}
        arcStroke={0.8}
        arcAltitude={0.18}
        arcDashLength={0.5}
        arcDashGap={0.15}
        arcDashAnimateTime={1800}
        arcDashInitialGap={() =>
          Math.random()
        }
        enablePointerInteraction
        onPointClick={(
          point: any
        ) =>
          onSelect?.(
            point as HeritageItem
          )
        }
      />
    </div>
  );
}
