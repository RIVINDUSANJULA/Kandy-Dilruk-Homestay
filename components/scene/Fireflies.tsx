'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Fireflies() {
  const particlesRef = useRef<THREE.Points>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const count = isMobile ? 40 : 150; // Reduce particle count on mobile for performance

  const { positions, randomFactors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rand = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60; // x
      pos[i * 3 + 1] = Math.random() * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60; // z
      rand[i] = Math.random();
    }
    
    return { positions: pos, randomFactors: rand };
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current && !isMobile) {
      const time = state.clock.elapsedTime;
      const posArray = particlesRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const factor = randomFactors[i];
        
        // Gentle wandering pattern
        posArray[i3 + 1] += Math.sin(time * 0.5 + factor * 100) * 0.015; // y bounce
        posArray[i3] += Math.cos(time * 0.3 + factor * 100) * 0.01; // x wander
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2.5}
        sizeAttenuation={true}
        color="#e8743b" // Sunset orange glow
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
