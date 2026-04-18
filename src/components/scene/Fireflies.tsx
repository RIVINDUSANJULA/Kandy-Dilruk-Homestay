import * as React from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

type Props = {
  count: number;
  mouseParallax: boolean;
  paused?: boolean;
};

export function Fireflies({ count, mouseParallax, paused }: Props) {
  const pointsRef = React.useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const mouse = React.useRef({ x: 0, y: 0 });

  const { positions, seeds } = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = Math.random() * 8 - 1;
      positions[i * 3 + 2] = -Math.random() * 14 - 1;
      seeds[i * 3 + 0] = Math.random() * Math.PI * 2;
      seeds[i * 3 + 1] = Math.random() * Math.PI * 2;
      seeds[i * 3 + 2] = 0.4 + Math.random() * 0.8;
    }
    return { positions, seeds };
  }, [count]);

  const sprite = React.useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,230,170,1)");
    grad.addColorStop(0.4, "rgba(255,200,120,0.5)");
    grad.addColorStop(1, "rgba(255,180,90,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }, []);

  React.useEffect(() => {
    if (!mouseParallax) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseParallax]);

  useFrame((state) => {
    if (paused) return;
    const points = pointsRef.current;
    if (!points) return;
    const t = state.clock.elapsedTime;
    const geom = points.geometry as THREE.BufferGeometry;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const baseX = positions[ix];
      const baseY = positions[ix + 1];
      const baseZ = positions[ix + 2];
      const sx = seeds[ix];
      const sy = seeds[ix + 1];
      const sp = seeds[ix + 2];
      pos.setXYZ(
        i,
        baseX + Math.sin(t * sp + sx) * 0.6,
        baseY + Math.cos(t * sp * 0.8 + sy) * 0.5,
        baseZ + Math.sin(t * sp * 0.5 + sx) * 0.4,
      );
    }
    pos.needsUpdate = true;
    if (mouseParallax) {
      points.position.x = THREE.MathUtils.lerp(points.position.x, mouse.current.x * viewport.width * 0.04, 0.04);
      points.position.y = THREE.MathUtils.lerp(points.position.y, mouse.current.y * viewport.height * 0.04, 0.04);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.35}
        map={sprite}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
