'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      background: `linear-gradient(
        120deg,
  #0f172a 0%,   /* Dark Navy */
  #312e81 20%,  /* Deep Purple */
  #6d28d9 40%,  /* Vivid Violet */
  #3b82f6 60%,  /* Bright Blue */
  #1e293b 80%,  /* Midnight Blue */
  #0f172a 100%  /* Dark Navy */
      )`,
      duration: 10,
      backgroundSize: '200% 200%',
      ease: 'linear',
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
