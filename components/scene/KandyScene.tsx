'use client';

import { Canvas } from '@react-three/fiber';
import Hills from './Hills';
import Fireflies from './Fireflies';

export default function KandyScene() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] bg-gradient-to-t from-forest-deep to-forest pointer-events-none">
      <Canvas
        camera={{ position: [0, 5, 30], fov: 60 }}
        dpr={[1, 2]} // limit dpr on mobile for performance
        gl={{ antialias: false, powerPreference: 'high-performance' }} // Optimize for low end devices
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} color="#e8743b" />
        <directionalLight position={[-10, 20, -10]} intensity={0.8} color="#6b8e7f" />
        <directionalLight position={[0, 15, 0]} intensity={0.5} color="#ffffff" />
        
        <Hills />
        <Fireflies />
      </Canvas>
    </div>
  );
}
