import { Controller } from "@/components/ui/controller";
import { Dice } from "@/components/ui/dice";
import { Pool } from "@/components/ui/pool";
import { useGSAP } from "@gsap/react";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Trophy } from "@/components/ui/trophy";

gsap.registerPlugin([useGSAP, ScrollTrigger]);

export default function Scene() {
  const diceRef = useRef<THREE.Group>(null!);
  const controllerRef = useRef<THREE.Group>(null!);
  const thirdRef = useRef<THREE.Group>(null!);
  const poolRef = useRef<THREE.Group>(null!);

  useGSAP(() => {
    if (!diceRef.current) return;

    gsap.from(diceRef.current.position, {
      x: -12,
      scrollTrigger: {
        trigger: ".trigger-1",
        start: "top bottom",
        end: "30% center",
        scrub: 1,
      },
    });

    gsap.from(controllerRef.current.position, {
      x: 12,
      scrollTrigger: {
        trigger: ".trigger-1",
        start: "20% bottom",
        end: "50% center",
        scrub: 1,
      },
    });

    gsap.from(thirdRef.current.position, {
      x: 12,
      scrollTrigger: {
        trigger: ".trigger-1",
        start: "40% bottom",
        end: "70% center",
        scrub: 1,
      },
    });

    gsap.from(poolRef.current.position, {
      x: -12,
      scrollTrigger: {
        trigger: ".trigger-1",
        start: "60% bottom",
        end: "90% center",
        scrub: 1,
      },
    });
  });

  return (
    // <Float floatIntensity={0.3} rotationIntensity={0.2}>
      <group>
        <group ref={diceRef} scale={0.5} position={[-4.7, 1.8, -2]}>
          <Dice />
        </group>
        <group
          ref={controllerRef}
          scale={2}
          position={[3.7, 1.3, -1]}
          rotation={[0.2, -0.5, 0.7]}
        >
          <Controller />
        </group>
        <group>
          <Trophy ref={thirdRef} scale={1} position={[5, -2, -3]} rotation={[.3,2,-.2]}/>
        </group>
        <group
          ref={poolRef}
          scale={3}
          position={[-4, -1.4, -1.3]}
          rotation={[0, -1, 0]}
        >
          <Pool />
        </group>
        <ambientLight intensity={3} />
        <Environment preset="apartment" />
        <spotLight
          position={[-2, 2, 2]}
          intensity={20}
          castShadow
          shadow-bias={-0.0002}
          shadow-normalBias={0.002}
          shadow-mapSize={1024}
        />
      </group>
    //</Float>
  );
}