'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Hills() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate low poly hills using PlaneGeometry
  const { geometry, colors } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(120, 120, 48, 48); // Resolution for low-poly
    geo.rotateX(-Math.PI / 2);

    const positions = geo.attributes.position.array;
    const colorArray = new Float32Array(positions.length);
    const colorForestDeep = new THREE.Color('#1a3a2e');
    const colorSage = new THREE.Color('#6b8e7f');
    const tempColor = new THREE.Color();

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      
      // Basic sine wave terrain blending
      let y = Math.sin(x * 0.08) * 4 + Math.cos(z * 0.08) * 4;
      y += Math.sin(x * 0.03 + z * 0.04) * 8; // larger secondary hills
      
      positions[i + 1] = y;

      // Color based on height
      const heightPercent = (y + 12) / 24;
      tempColor.lerpColors(colorForestDeep, colorSage, Math.max(0, Math.min(1, heightPercent)));
      
      colorArray[i] = tempColor.r;
      colorArray[i + 1] = tempColor.g;
      colorArray[i + 2] = tempColor.b;
    }

    geo.computeVertexNormals();
    geo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    return { geometry: geo, colors: colorArray };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
        // Very slow breathing effect to feel alive
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 - 6;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        vertexColors
        flatShading
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  );
}
