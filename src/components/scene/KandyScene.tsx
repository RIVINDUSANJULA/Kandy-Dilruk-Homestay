import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Hills } from "./Hills";
import { Waterfall } from "./Waterfall";
import { Fireflies } from "./Fireflies";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function StaticFallback() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.45 0.08 220) 0%, oklch(0.78 0.13 55) 45%, oklch(0.32 0.07 150) 100%)",
      }}
    />
  );
}

export function KandyScene() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (reduced || !mounted) return <StaticFallback />;

  const particleCount = isMobile ? 50 : 150;
  const dpr: [number, number] = isMobile ? [1, 1.25] : [1, 1.5];
  const paused = !visible;

  return (
    <>
      <StaticFallback />
      <div className="fixed inset-0 -z-10">
        <React.Suspense fallback={null}>
          <Canvas
            dpr={dpr}
            gl={{ antialias: !isMobile, powerPreference: "high-performance", alpha: true }}
            camera={{ position: [0, 1.2, 8], fov: 55 }}
            frameloop={paused ? "never" : "always"}
          >
            <ambientLight intensity={0.55} color="#f6d6a8" />
            <directionalLight position={[6, 8, 4]} intensity={1.1} color="#ffb27a" />
            <directionalLight position={[-5, 4, -2]} intensity={0.35} color="#7fb6c8" />
            <fog attach="fog" args={["#c89a6e", 9, 26]} />
            <Hills paused={paused} />
            <Waterfall paused={paused} />
            <Fireflies count={particleCount} mouseParallax={!isMobile} paused={paused} />
          </Canvas>
        </React.Suspense>
      </div>
    </>
  );
}
