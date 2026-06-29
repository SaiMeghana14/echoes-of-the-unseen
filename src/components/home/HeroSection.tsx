"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

interface DashboardStats {
  memories: number;
  regions: number;
  categories: number;
  countries: number;
}

export default function HeroSection() {
  const [stats, setStats] =
    useState<DashboardStats>({
      memories: 0,
      regions: 0,
      categories: 0,
      countries: 0,
    });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch(
          "/api/dashboard"
        );

        if (!res.ok) return;

        const data =
          await res.json();

        setStats(data);
      } catch (err) {
        console.error(
          "Dashboard Error:",
          err
        );
      }
    }

    loadStats();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl">

        <div className="mb-8">

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              text-cyan-300
              font-medium
            "
          >
            🌌 AI Guardian of Human Memory
          </span>

        </div>

        <h1
          className="
            text-6xl
            md:text-8xl
            font-black
            tracking-tight
          "
        >
          Echoes
          <br />
          of the Unseen
        </h1>

        <p
          className="
            text-2xl
            md:text-3xl
            text-cyan-400
            mt-8
            font-semibold
          "
        >
          What Humanity Forgets,
          We Remember.
        </p>

        <p
          className="
            text-lg
            md:text-xl
            text-white/70
            mt-8
            max-w-4xl
            mx-auto
            leading-relaxed
          "
        >
          Discover, predict and preserve
          endangered cultures,
          traditions,
          languages,
          stories,
          communities
          and digital heritage using
          artificial intelligence,
          semantic search
          and knowledge graphs.
        </p>

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-12
          "
        >
          <Link href="/upload">
            <button
              className="
                px-8
                py-4
                rounded-2xl
                bg-cyan-400
                text-black
                font-bold
                hover:scale-105
                transition
              "
            >
              Preserve Memory
            </button>
          </Link>

          <Link href="/echo-oracle">
            <button
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/20
                flex
                items-center
                gap-3
                hover:bg-white/5
                transition
              "
            >
              Ask Echo Oracle

              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-20
            max-w-6xl
            mx-auto
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <div className="text-5xl font-black text-cyan-400">
              {stats.memories}
            </div>

            <div className="mt-2 text-white/60">
              Memories Preserved
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <div className="text-5xl font-black text-purple-400">
              {stats.regions}
            </div>

            <div className="mt-2 text-white/60">
              Regions
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <div className="text-5xl font-black text-orange-400">
              {stats.categories}
            </div>

            <div className="mt-2 text-white/60">
              Categories
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <div className="text-5xl font-black text-green-400">
              {stats.countries}
            </div>

            <div className="mt-2 text-white/60">
              Countries
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
