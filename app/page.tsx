import KandyScene from '@/components/scene/KandyScene';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Reviews from '@/components/sections/Reviews';
import Location from '@/components/sections/Location';
import StickyBookBar from '@/components/ui-custom/StickyBookBar';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* 3D Background */}
      <KandyScene />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Reviews />
        <Location />
      </div>

      <StickyBookBar />
    </main>
  );
}
