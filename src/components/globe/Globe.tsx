"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
} from "@react-three/drei";

function Earth() {
  return (
    <mesh rotation={[0.3, 1, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#1a3d7c"
        emissive="#4FD1FF"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function Globe() {
  return (
    <div className="h-[700px] w-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.5} />

        <pointLight
          position={[10, 10, 10]}
        />

        <Stars />

        <Earth />

        <OrbitControls
          enableZoom={true}
        />
      </Canvas>
    </div>
  );
}
