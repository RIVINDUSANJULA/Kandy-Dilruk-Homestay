'use client';

import GlassCard from '../ui-custom/GlassCard';
import { MapPin, Navigation, Compass } from 'lucide-react';
import Link from 'next/link';

export default function Location() {
  return (
    <section className="w-full py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 text-shadow-strong">
            Location & Directions
          </h2>
          <div className="w-20 h-1 bg-sunset mx-auto rounded-full opacity-80"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details side */}
          <div className="lg:col-span-5 h-full">
            <GlassCard className="h-full flex flex-col justify-center space-y-10">
              <div>
                <div className="flex items-start gap-4 mb-3">
                  <MapPin className="text-sunset flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2">Address</h3>
                    <p className="font-sans text-cream/90 text-lg leading-relaxed">
                      No 22/5 Reservoir Rd,<br />
                      Kandy 20000,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="flex items-start gap-4 mb-3">
                  <Navigation className="text-sunset flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2">Getting Here</h3>
                    <p className="font-sans text-cream/80 leading-relaxed">
                      Conveniently located just <strong className="text-white">600m walking distance</strong> from the Kandy Railway Station. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <Compass className="text-sunset flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2">Nearby Attractions</h3>
                    <p className="font-sans text-cream/80 leading-relaxed">
                      Close proximity to the sacred <strong className="text-white">Sri Dalada Maligawa</strong> (Temple of the Tooth) and the scenic Kandy Lake.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-7 h-full min-h-[400px]">
            <GlassCard className="h-full p-2 sm:p-2 overflow-hidden shadow-2xl relative group">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                {/* Fallback styling for iframe background */}
                <div className="absolute inset-0 bg-forest flex items-center justify-center -z-10">
                  Loading map...
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=No%2022/5%20Reservoir%20Rd,%20Kandy%2020000,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px', filter: 'contrast(1.1) opacity(0.9) grayscale(0.2)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kandy Dilruk Homestay Location"
                  className="w-full h-full group-hover:filter-none transition-all duration-700"
                ></iframe>
              </div>
            </GlassCard>
          </div>
        </div>
        
        {/* Extra spacing for sticky footer */}
        <div className="h-24"></div>
      </div>
    </section>
  );
}
