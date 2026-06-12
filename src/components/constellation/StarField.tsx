"use client";

import Particles from "react-tsparticles";

export default function StarField() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 80,
          },

          links: {
            enable: true,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  );
}
