"use client";

import { useEffect, useState } from "react";

import DNACluster from "./DNACluster";
import DNALegend from "./DNALegend";

import DNAGraph from "./DNAGraph";
import DNAStats from "./DNAStats";
import DNAExplorer from "./DNAExplorer";

export default function CulturalDNA() {
  const [loading, setLoading] =
    useState(true);
  
  const [dna, setDna] =
    useState<any>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDna({
        culture: "APAC Heritage",
  
        stories: [
          "Oral Storytelling",
          "Folklore Archives",
          "Community Legends",
          "Sea Legends",
          "Migration Stories",
          "Temple Narratives",
          "Village Histories",
          "Epic Poetry",
          "Mountain Myths",
          "Heroic Sagas"
        ],
  
        beliefs: [
          "Ancestor Respect",
          "Harmony with Nature",
          "Collective Memory",
          "Spiritual Guardians",
          "Sacred Rivers",
          "Seasonal Cycles",
          "Community Stewardship",
          "Respect for Elders",
          "Balance of Life",
          "Cultural Continuity"
        ],
  
        rituals: [
          "Harvest Festival",
          "Traditional Dance",
          "Seasonal Celebrations",
          "New Year Ceremonies",
          "Wedding Blessings",
          "Coming-of-Age Rituals",
          "Temple Offerings",
          "Moon Festivals",
          "Fishing Ceremonies",
          "Ancestor Commemorations"
        ],
  
        knowledge: [
          "Traditional Medicine",
          "Handcrafted Arts",
          "Indigenous Agriculture",
          "Bamboo Architecture",
          "Navigation by Stars",
          "Herbal Remedies",
          "Water Conservation",
          "Natural Dye Techniques",
          "Wood Carving",
          "Traditional Music Theory"
        ],
      });
  
      setLoading(false);
    }, 2500);
  
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative h-[500px]">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-cyan-400"></div>
        <div className="absolute top-40 left-80 w-4 h-4 rounded-full bg-purple-400"></div>
        <div className="absolute top-60 left-40 w-4 h-4 rounded-full bg-green-400"></div>
        <div className="absolute top-80 left-[500px] w-4 h-4 rounded-full bg-pink-400"></div>
      
        <svg className="absolute inset-0 w-full h-full">
          <line x1="80" y1="80" x2="320" y2="180" stroke="#06b6d4" />
          <line x1="320" y1="180" x2="180" y2="300" stroke="#06b6d4" />
          <line x1="180" y1="300" x2="500" y2="400" stroke="#06b6d4" />
        </svg>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-pulse">
          🧬 Interactive Heritage Network
        </div>
        <div className="absolute top-8 left-8 text-cyan-300 font-semibold">
          Demo Visualization
        </div>
      </div>
    );
  }
  if (!dna) {
    return null;
  }

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="text-6xl font-bold">
            🧬 Cultural DNA
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Explore the cultural genome
            of a community through
            stories, rituals, beliefs,
            and inherited knowledge.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-3xl mx-auto">
          
            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            p-5
            hover:border-cyan-400/40
            transition
            "
            >
              <div className="text-cyan-400 text-3xl font-bold">
                38
              </div>
              <div className="text-white/60">
                Languages
              </div>
            </div>
          
            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            p-5
            hover:border-cyan-400/40
            transition
            "
            >
              <div className="text-cyan-400 text-3xl font-bold">
                22
              </div>
              <div className="text-white/60">
                Traditions
              </div>
            </div>
          
            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            p-5
            hover:border-cyan-400/40
            transition
            "
            >
              <div className="text-cyan-400 text-3xl font-bold">
                150+
              </div>
              <div className="text-white/60">
                Stories
              </div>
            </div>
          
            <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            p-5
            hover:border-cyan-400/40
            transition
            "
            >
              <div className="text-cyan-400 text-3xl font-bold">
                9
              </div>
              <div className="text-white/60">
                Countries
              </div>
            </div>
          
          </div>
        </div>

        {/* Culture Core */}

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            "🗣 Languages",
            "🪘 Traditions",
            "📖 Stories",
            "🙏 Beliefs",
            "🎵 Music",
            "🧺 Crafts",
          ].map((item) => (
            <div
              key={item}
              className="
                px-5
                py-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/5
                text-cyan-200
                backdrop-blur-md
                hover:bg-cyan-500/10
                transition
              "
            >
              {item}
            </div>
          ))}
        
        </div>

        {/* Stats */}

        <DNAStats
          stories={dna.stories}
          beliefs={dna.beliefs}
          rituals={dna.rituals}
          knowledge={dna.knowledge}
        />

        {/* Heritage Network */}
        
        <h3 className="text-2xl font-semibold text-center mb-10">
        🧬 Heritage Relationship Network
        </h3>
        
        <p className="text-center text-gray-400 mb-8">
        Explore how stories, rituals, beliefs and knowledge connect across cultures.
        </p>

        {/* Graph */}

        <div className="mt-12 mx-auto">
          <div
          className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-white/5
          backdrop-blur-xl
          p-8
          "
          >

            <DNAGraph
              cultureName={
                dna.culture
              }
              stories={
                dna.stories
              }
              beliefs={
                dna.beliefs
              }
              rituals={
                dna.rituals
              }
              knowledge={
                dna.knowledge
              }
            />

          </div>
        </div>

        {/* DNA Composition */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >
        
          <h3 className="text-2xl font-semibold mb-6">
            🧬 DNA Composition
          </h3>
        
          <div className="space-y-5">
        
            <div>
              <div className="flex justify-between mb-2">
                <span>📖 Stories</span>
                <span>40%</span>
              </div>
        
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
        
            <div>
              <div className="flex justify-between mb-2">
                <span>🪘 Traditions</span>
                <span>25%</span>
              </div>
        
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: "25%" }}
                />
              </div>
            </div>
        
            <div>
              <div className="flex justify-between mb-2">
                <span>🙏 Beliefs</span>
                <span>18%</span>
              </div>
        
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-purple-400"
                  style={{ width: "18%" }}
                />
              </div>
            </div>
        
            <div>
              <div className="flex justify-between mb-2">
                <span>🎭 Rituals</span>
                <span>12%</span>
              </div>
        
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-pink-400"
                  style={{ width: "12%" }}
                />
              </div>
            </div>
        
            <div>
              <div className="flex justify-between mb-2">
                <span>🧺 Crafts</span>
                <span>5%</span>
              </div>
        
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-amber-400"
                  style={{ width: "5%" }}
                />
              </div>
            </div>
        
          </div>
        
        </div>
        
        {/* Explorer */}

        <div className="mt-8">

          <DNAExplorer
            stories={
              dna.stories
            }
            beliefs={
              dna.beliefs
            }
            rituals={
              dna.rituals
            }
            knowledge={
              dna.knowledge
            }
          />

        </div>

        {/* Original Clusters */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <DNACluster
            title="📖 Stories"
            type="story"
            items={dna.stories}
          />

          <DNACluster
            title="🙏 Beliefs"
            type="belief"
            items={dna.beliefs}
          />

          <DNACluster
            title="🎭 Rituals"
            type="ritual"
            items={dna.rituals}
          />

          <DNACluster
            title="📚 Knowledge"
            type="knowledge"
            items={dna.knowledge}
          />

        </div>

        <DNALegend />

      </div>

    </section>
  );
}
