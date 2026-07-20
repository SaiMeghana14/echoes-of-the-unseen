"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Tag, Sparkles } from "lucide-react";

const memories = [
  { title:"Japanese Tea Ceremony", region:"Japan", category:"Tradition", description:"A ceremonial practice centered on harmony, respect, purity and tranquility.", risk:"Moderate"},
  { title:"Gond Art", region:"India", category:"Art", description:"Intricate tribal paintings inspired by folklore and nature.", risk:"High"},
  { title:"Kalamkari", region:"India", category:"Craft", description:"Traditional hand-painted textile art using natural dyes.", risk:"High"},
  { title:"Yakshagana", region:"India", category:"Performance", description:"A vibrant blend of dance, music and storytelling.", risk:"Moderate"},
  { title:"Wayang Kulit", region:"Indonesia", category:"Folklore", description:"Ancient shadow puppet theatre preserving epic narratives.", risk:"Critical"},
];

export default function SearchPage() {
  const [query, setQuery] = useState("Japanese");
  const results = useMemo(() => {
    const q = query.toLowerCase();
    return memories.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.region.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          <Sparkles size={16}/> Semantic Heritage Search
        </div>

        <h1 className="mt-6 text-5xl font-black">Discover Preserved Cultural Memory</h1>

        <p className="mt-4 max-w-3xl text-white/60">
          Search traditions, languages, crafts and stories preserved inside the Memory Atlas.
        </p>

        <div className="relative mt-10">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300" size={20}/>
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            className="w-full rounded-2xl border border-cyan-500/20 bg-white/5 py-5 pl-14 pr-5 outline-none focus:border-cyan-400"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {results.map(item=>(
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/40">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"><MapPin size={14}/> {item.region}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300"><Tag size={14}/> {item.category}</span>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{item.risk}</span>
              </div>
              <p className="mt-5 leading-relaxed text-white/70">{item.description}</p>
              <div className="mt-6 flex justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/50">AI Similarity Match</span>
                <span className="font-semibold text-cyan-300">96%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
