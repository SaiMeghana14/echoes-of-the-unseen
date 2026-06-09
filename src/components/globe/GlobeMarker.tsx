"use client";

import { Html } from "@react-three/drei";

interface GlobeMarkerProps {
  position: [number, number, number];
  label: string;
  risk: number;
  onClick?: () => void;
}

export default function GlobeMarker({
  position,
  label,
  risk,
  onClick,
}: GlobeMarkerProps) {
  return (
    <group position={position}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color={
            risk > 80
              ? "#ff4d4d"
              : risk > 50
              ? "#FFD166"
              : "#4FD1FF"
          }
          emissive={
            risk > 80
              ? "#ff4d4d"
              : "#FFD166"
          }
        />
      </mesh>

      <Html distanceFactor={8}>
        <div className="text-xs text-white bg-black/60 px-2 py-1 rounded">
          {label}
        </div>
      </Html>
    </group>
  );
}
