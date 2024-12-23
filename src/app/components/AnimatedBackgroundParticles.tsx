"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedBackgroundParticles({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    const particleContainer = document.createElement("div");
    particleContainer.className = "absolute inset-0 pointer-events-none";
    backgroundRef.current.appendChild(particleContainer);

    const containerBounds = backgroundRef.current.getBoundingClientRect();

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-white rounded-full opacity-50";

      // Initial position within container bounds
      gsap.set(particle, {
        x: Math.random() * containerBounds.width,
        y: Math.random() * containerBounds.height,
        scale: Math.random() * 1.5, // Scale variation for particles
      });

      // Animation for particles
      gsap.to(particle, {
        x: `+=${Math.random() * 50 - 25}`, // Horizontal drift
        y: `+=${Math.random() * 50 - 25}`, // Vertical drift
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      particleContainer.appendChild(particle);
    }

    // Cleanup on unmount
    return () => {
      particleContainer.remove();
    };
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white overflow-hidden relative"
      ref={backgroundRef}
    >
      {children}
    </div>
  );
}
