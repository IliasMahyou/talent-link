"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieAnimationProps {
  src: string; // URL or path to the Lottie file
  loop?: boolean; // Should the animation loop
  autoplay?: boolean; // Should the animation autoplay
  className?: string; // Optional custom styling
}

export default function LottieAnimation({
  src,
  loop = true,
  autoplay = true,
  className = "w-full h-auto",
}: LottieAnimationProps) {
  return (
    <div className={className}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} />
    </div>
  );
}
