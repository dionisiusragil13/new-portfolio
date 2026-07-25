"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  // `useProgress` provides real-time loading metrics for all three.js assets (GLB, textures)
  // that are loaded using drei's helpers (like useGLTF, useTexture, etc.)
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  // We add a tiny safety timeout to ensure we don't flash the preloader
  // if assets are already cached and load instantly (< 300ms)
  // or handle the case where we transition out
  useEffect(() => {
    // We consider it "ready" when progress hits 100% and it was active at some point
    // or if it finishes loading
    if (progress === 100) {
      // Small delay to let the user see "100%" before it fades out
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 400); // Wait 400ms at 100% before triggering exit animation
      
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Handle the exit animation using GSAP when `isReady` becomes true
  useEffect(() => {
    if (isReady && containerRef.current) {
      // We animate the preloader sliding up (or fading out)
      gsap.to(containerRef.current, {
        yPercent: -100, // Slide up
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          // Hide it completely from DOM flow after animation finishes (or unmount if preferred)
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        }
      });
      
      // Optionally animate the inner content fading out faster before it slides
      gsap.to([progressBarRef.current, percentRef.current], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-[#fffff0]"
      // Force it to take up the full screen above everything else
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-6 px-6">
        
        {/* The numeric percentage (0-100) */}
        <div 
          ref={percentRef} 
          className="text-6xl font-black-slanted tracking-tighter uppercase"
        >
          {Math.round(progress)}%
        </div>

        {/* The visual progress bar track */}
        <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
          {/* The fill that grows based on percentage */}
          <div
            ref={progressBarRef}
            className="h-full bg-[#fffff0] origin-left"
            style={{ 
              width: `${progress}%`,
              transition: "width 0.2s ease-out" 
            }}
          />
        </div>
        
        {/* Optional small branding text */}
        <div className="text-xs uppercase tracking-[0.2em] opacity-50 font-roboto mt-4">
          Loading Experience
        </div>
      </div>
    </div>
  );
}
