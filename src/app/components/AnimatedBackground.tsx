"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      background: `linear-gradient(
        120deg,
        #0f172a 0%,  /* Dark Navy */
        #312e81 33%, /* Deep Purple */
        #1e293b 66%, /* Midnight Blue */
        #0f172a 100% /* Dark Navy */
      )`,
      duration: 10,
      backgroundSize: "200% 200%",
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      ref={backgroundRef}
    >
      {children}
    </div>
  );
}
