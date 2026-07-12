
import * as THREE from 'three'
import React, { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    NurbsPath_Material001_0: THREE.Mesh
    NurbsPath_Material002_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function Trophy(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/trophy.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 3.432, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={419.718}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/trophy.glb')
