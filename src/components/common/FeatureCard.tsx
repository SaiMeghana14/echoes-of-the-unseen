"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  accent?: "cyan" | "purple" | "green" | "orange";
}

const accentStyles = {
  cyan: {
    border: "hover:border-cyan-400/50",
    glow: "group-hover:shadow-cyan-500/20",
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },
  purple: {
    border: "hover:border-purple-400/50",
    glow: "group-hover:shadow-purple-500/20",
    text: "text-purple-300",
    bg: "bg-purple-400/10",
  },
  green: {
    border: "hover:border-green-400/50",
    glow: "group-hover:shadow-green-500/20",
    text: "text-green-300",
    bg: "bg-green-400/10",
  },
  orange: {
    border: "hover:border-orange-400/50",
    glow: "group-hover:shadow-orange-500/20",
    text: "text-orange-300",
    bg: "bg-orange-400/10",
  },
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  accent = "cyan",
}: FeatureCardProps) {
  const style = accentStyles[accent];

  return (
    <Link href={href} className="group">
      <div
        className={`
          relative
          h-full
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          ${style.border}
          ${style.glow}
          shadow-2xl
        `}
      >
        {/* Background Glow */}
        <div
          className={`
            absolute
            inset-0
            rounded-3xl
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            ${style.bg}
          `}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`
              w-16
              h-16
              rounded-2xl
              flex
              items-center
              justify-center
              text-3xl
              mb-6
              ${style.bg}
              ${style.text}
            `}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold">{title}</h3>

          {/* Description */}
          <p className="mt-4 text-white/65 leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <div
            className={`
              mt-8
              inline-flex
              items-center
              gap-2
              font-semibold
              transition
              ${style.text}
            `}
          >
            Open Feature

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
