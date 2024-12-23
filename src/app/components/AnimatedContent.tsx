"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedContent({
  header,
  textBlocks,
}: {
  header: React.ReactNode;
  textBlocks: React.ReactNode[];
}) {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    timeline.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0 }
    );

    timeline.fromTo(
      textRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "-=0.5"
    );
  }, []);

  return (
    <div className="w-full md:w-1/2 text-left">
      <div ref={headerRef}>{header}</div>
      <div className="mt-4 space-y-4" ref={textRef}>
        {textBlocks.map((block, index) => (
          <div key={index}>{block}</div>
        ))}
      </div>
    </div>
  );
}
