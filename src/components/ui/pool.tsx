import * as THREE from 'three'
import React, { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pool_ball: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshPhysicalMaterial
  }
}

export function Pool(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Pool_ball_blue.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pool_ball.geometry}
        material={materials['Material.003']}
        scale={0.2}
      />
    </group>
  )
}

useGLTF.preload('/Pool_ball_blue.glb')