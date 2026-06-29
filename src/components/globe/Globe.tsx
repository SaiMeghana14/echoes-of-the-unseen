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
  ] = useState<HeritageItem[]>(
    []
  );

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

              size: 0.45,

              color:
                CATEGORY_COLORS[
                  (
                    memory.category ??
                    ""
                  ).toLowerCase()
                ] ??
                "#4FD1FF",

              label: `${memory.title}
${memory.region}
${memory.category}`,
            })
          );

        setHeritageData(points);
      } catch (err) {
        console.error(
          "Globe Error:",
          err
        );
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
    if (
      heritageData.length < 2
    )
      return [];

    const list = [];

    for (
      let i = 1;
      i <
      heritageData.length;
      i++
    ) {
      list.push({
        startLat:
          heritageData[i - 1].lat,

        startLng:
          heritageData[i - 1].lng,

        endLat:
          heritageData[i].lat,

        endLng:
          heritageData[i].lng,

        color: [
          heritageData[i - 1]
            .color,
          heritageData[i]
            .color,
        ],
      });
    }

    return list;
  }, [heritageData]);

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
        atmosphereColor="#4FD1FF"
        atmosphereAltitude={0.22}
        animateIn
        pointsData={
          heritageData
        }
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.35}
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
        arcAltitude={0.25}
        arcDashLength={0.5}
        arcDashGap={0.15}
        arcDashAnimateTime={
          2500
        }
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
