"use client";

import { Domino } from "@/components/ui/domino";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const scrollGroupRef = useRef<THREE.Group>(null!);
  const spinGroupRef = useRef<THREE.Group>(null!);

  // Continuous spin — only ever touches the inner group
  useFrame((_, delta) => {
    if (spinGroupRef.current) {
      spinGroupRef.current.rotation.y += delta * 0.1;
    }
  });

  useGSAP(() => {
    if (!scrollGroupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=1400",
        scrub: 0.5,
      },
    });

    // All GSAP tweens now target the OUTER group only
    tl.to(scrollGroupRef.current.position, { x: 0, y: 0, z: -5, duration: 1.5 })
      .to(
        scrollGroupRef.current.rotation,
        { x: 1.5, y: Math.PI * 2, z: 0, duration: 1.5 },
        "<",
      )
      .to(
        scrollGroupRef.current.scale,
        { x: 0.4, y: 0.4, z: 0.4, duration: 1.5 },
        "<",
      )
      .to(
        scrollGroupRef.current.position,
        { x: 4, y: -1, z: 0, duration: 1 },
        "+=0.2",
      )
      .to(
        scrollGroupRef.current.rotation,
        { x: 0.7, y: 0, z: 1.55, duration: 1 },
        "<",
      );
  }, []);

  return (
    <group
      ref={scrollGroupRef}
      position={[0, -2.4, -1]}
      rotation={[0.7, 0, -0.2]}
    >
      {/* Inner group only handles the constant spin — GSAP never touches this one */}
      <group ref={spinGroupRef}>
        <Domino />
      </group>

      <ambientLight intensity={1} />
      <Environment preset="apartment" />
      <spotLight
        position={[-2, 1.5, 2]}
        intensity={20}
        castShadow
        shadow-bias={-0.0002}
        shadow-normalBias={0.002}
        shadow-mapSize={1024}
      />
    </group>
  );
}
