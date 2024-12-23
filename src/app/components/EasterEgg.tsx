"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const EasterEgg = ({ onFound }: { onFound: () => void }) => {
  const eggRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const egg = eggRef.current; // Get the DOM node for the egg
    if (!egg) return;

    const container = egg.parentNode as HTMLElement; // Get the parent container
    const containerBounds = container.getBoundingClientRect();

    // Calculate boundaries based on container dimensions
    const xMax = containerBounds.width - 50; // Subtract egg size to stay in bounds
    const yMax = containerBounds.height - 50;

    // Set initial position within the container
    gsap.set(egg, {
      x: Math.random() * xMax,
      y: Math.random() * yMax,
    });

    // Create bouncing animation
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to(egg, {
      x: () => Math.random() * xMax,
      y: () => Math.random() * yMax,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={eggRef}
      className="absolute w-12 h-16 bg-gradient-to-br from-indigo-600 via-purple-700 to-gray-900 rounded-full shadow-lg cursor-pointer border-2 border-gray-200"
      onClick={() => {
        onFound();
        // Hide the egg after it's found
        gsap.to(eggRef.current, { opacity: 0, scale: 0, duration: 0.5 });
      }}
    />
  );
};

export default EasterEgg;
