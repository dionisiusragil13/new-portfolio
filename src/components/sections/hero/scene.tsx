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

    const group = scrollGroupRef.current;

    // === Hero section: initial settling ===
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    heroTl
      .to(group.position, { x: 0, y: 0, z: -5, ease: "power2.out" }, 0)
      .to(
        group.rotation,
        { x: 1.5, y: Math.PI * 2, z: 0, ease: "power2.out" },
        0,
      )
      .to(group.scale, { x: 0.4, y: 0.4, z: 0.4, ease: "power2.out" }, 0);

    // === About section: drift right + rotate to side ===
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    aboutTl
      .to(group.position, { x: 4, y: -1, z: 0, ease: "power2.inOut" }, 0)
      .to(group.rotation, { x: 0.7, y: 0, z: 1.55, ease: "power2.inOut" }, 0);

    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    skillsTl
      .to(group.position, { x: -2, y: 0, z: 2, ease: "power2.inOut" }, 0)
      .to(group.rotation, { x: 0, y: Math.PI, z: 0.3, ease: "power2.inOut" }, 0)
      .to(group.scale, { x: 0.6, y: 0.6, z: 0.6, ease: "power2.inOut" }, 0);

    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects-section",
        start: "center center", // mulai saat tengah projects-section pas di tengah viewport
        endTrigger: "#experience-section",
        end: "top top", // berakhir saat awal experience-section menyentuh atas viewport
        scrub: 0.5,
      },
    });

    projectTl
      .to(group.position, { x: 0, y: -5, z: -3, ease: "power2.inOut" }, 0)
      .to(
        group.rotation,
        { x: 0.4, y: Math.PI * 1.5, z: 0, ease: "power2.inOut" },
        0,
      )
      .to(group.scale, { x: 0.5, y: 0.5, z: 0.5, ease: "power2.inOut" }, 0);
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