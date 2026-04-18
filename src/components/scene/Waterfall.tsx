import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Waterfall({ paused }: { paused?: boolean }) {
  const matRef = React.useRef<THREE.ShaderMaterial>(null);

  // Simple gradient via shader-free approach: animate a canvas texture's offset.
  const texture = React.useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 16;
    c.height = 256;
    const ctx = c.getContext("2d")!;
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, "rgba(220,240,255,0)");
    grad.addColorStop(0.15, "rgba(220,240,255,0.55)");
    grad.addColorStop(0.5, "rgba(180,220,235,0.85)");
    grad.addColorStop(0.85, "rgba(220,240,255,0.55)");
    grad.addColorStop(1, "rgba(220,240,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, []);

  useFrame((_, delta) => {
    if (paused) return;
    texture.offset.y -= delta * 0.6;
  });

  return (
    <mesh position={[7, -1.5, -5]} rotation={[0, -0.25, 0.05]}>
      <planeGeometry args={[1.4, 5.5, 1, 1]} />
      <meshBasicMaterial
        ref={matRef as never}
        map={texture}
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
