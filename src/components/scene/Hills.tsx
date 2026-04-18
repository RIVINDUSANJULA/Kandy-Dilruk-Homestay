import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type HillProps = {
  z: number;
  color: string;
  amplitude: number;
  baseY: number;
  segments?: number;
  speed?: number;
  paused?: boolean;
};

function Hill({ z, color, amplitude, baseY, segments = 40, speed = 0.08, paused }: HillProps) {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const geomRef = React.useRef<THREE.PlaneGeometry>(null);
  const seedsRef = React.useRef<Float32Array | null>(null);

  React.useEffect(() => {
    const geom = geomRef.current;
    if (!geom) return;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    const seeds = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      seeds[i] = Math.random() * 1000;
    }
    seedsRef.current = seeds;
  }, []);

  useFrame((state) => {
    if (paused) return;
    const geom = geomRef.current;
    const seeds = seedsRef.current;
    if (!geom || !seeds) return;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime * speed;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // Only displace upper part of plane to form hill silhouette
      const ridge =
        Math.sin(x * 0.35 + seeds[i] * 0.01 + t) * amplitude +
        Math.sin(x * 0.15 + t * 0.6) * amplitude * 0.5;
      pos.setZ(i, ridge + Math.max(0, y) * 0.05);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} position={[0, baseY, z]} rotation={[-Math.PI / 2.6, 0, 0]}>
      <planeGeometry ref={geomRef} args={[60, 14, segments, 8]} />
      <meshStandardMaterial color={color} flatShading roughness={1} metalness={0} />
    </mesh>
  );
}

export function Hills({ paused }: { paused?: boolean }) {
  return (
    <group>
      {/* Furthest, mistiest ridge */}
      <Hill z={-18} baseY={-2.5} color="#7fa898" amplitude={1.0} segments={32} speed={0.05} paused={paused} />
      <Hill z={-12} baseY={-3.2} color="#4f7a6b" amplitude={1.3} segments={36} speed={0.07} paused={paused} />
      <Hill z={-7} baseY={-3.8} color="#2f5a4a" amplitude={1.6} segments={40} speed={0.09} paused={paused} />
      <Hill z={-2.5} baseY={-4.4} color="#1f4234" amplitude={1.9} segments={44} speed={0.11} paused={paused} />
    </group>
  );
}
