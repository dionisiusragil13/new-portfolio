
import * as THREE from 'three'
import React, { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
  }
}

export function Controller(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/xbox_controller_blue (1).glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material}
        position={[0.025, 0.004, 0.214]}
        rotation={[0.598, -Math.PI / 2, 0]}
        scale={0.048}
      />
    </group>
  )
}

useGLTF.preload('/xbox_controller_blue (1).glb')