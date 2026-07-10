"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const Globe: any = dynamic(() => import("react-globe.gl").then(m => m.default), {
  ssr: false,
});

interface HeritageItem {
  id: string;
  title: string;
  country: string;
  category: string;
  description: string;
  lat: number;
  lng: number;
  color: string;
  label: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  artifact: "#f59e0b",
  tradition: "#34d399",
  language: "#60a5fa",
  festival: "#22d3ee",
  folklore: "#c084fc",
  music: "#f472b6",
  craft: "#fb923c",
  story: "#93c5fd",
};

export default function GlobeView({ onSelect }: { onSelect?: (item: HeritageItem)=>void }) {
  const globeRef = useRef<any>(null);
  const [loading,setLoading]=useState(true);
  const [heritageData,setHeritageData]=useState<HeritageItem[]>([]);

  useEffect(()=>{
    (async()=>{
      try{
        const res=await fetch("/api/memory-atlas");
        const memories=await res.json();

        setHeritageData(memories.map((m:any,i:number)=>({
          id:m.id ?? String(i),
          title:m.title,
          country:m.region,
          category:m.category,
          description:m.description,
          lat:Number(m.latitude)||Math.random()*120-60,
          lng:Number(m.longitude)||Math.random()*360-180,
          color:CATEGORY_COLORS[(m.category??"").toLowerCase()] ?? "#38bdf8",
          label:`🏛 ${m.title}\n🌍 ${m.region}\n${m.description}`
        })));
      }catch(e){
        console.error(e);
      }finally{
        setLoading(false);
      }
    })();
  },[]);

  useEffect(()=>{
    if(!globeRef.current) return;

    globeRef.current.pointOfView(
      {lat:18,lng:78,altitude:1.55},
      1800
    );

    const c=globeRef.current.controls();
    c.autoRotate=true;
    c.autoRotateSpeed=0.18;
  },[]);

  const rings=useMemo(()=>heritageData.map(p=>({
    lat:p.lat,
    lng:p.lng,
    color:p.color,
    maxR:1.8,
    propagationSpeed:1.3,
    repeatPeriod:2400
  })),[heritageData]);

  if(loading){
    return (
      <div className="h-screen flex items-center justify-center bg-[#020817] text-cyan-300 text-2xl">
        Loading Heritage Network...
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen relative"
      style={{
        background:
          "radial-gradient(circle at center,#0b2545 0%,#020817 55%,#01040c 100%)"
      }}
    >
      {/* simple star field */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20px 30px,#fff,transparent),radial-gradient(1.5px 1.5px at 140px 160px,#7dd3fc,transparent),radial-gradient(2px 2px at 300px 90px,#fff,transparent),radial-gradient(2px 2px at 500px 260px,#c4b5fd,transparent)",
          backgroundSize:"320px 320px"
        }}
      />

      <Globe
        ref={globeRef}
        globeImageUrl="/textures/earth-blue-marble.jpg"
        bumpImageUrl="/textures/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        atmosphereColor="#38bdf8"
        atmosphereAltitude={0.16}
        pointsData={heritageData}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"

        /* no spikes */
        pointAltitude={0.015}
        pointRadius={0.16}
        pointResolution={20}

        pointLabel="label"

        ringsData={rings}
        ringLat="lat"
        ringLng="lng"
        ringColor="color"
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"

        /* remove permanent arcs */
        arcsData={[]}

        enablePointerInteraction
        onPointClick={(p:any)=>onSelect?.(p as HeritageItem)}
      />
    </div>
  );
}
