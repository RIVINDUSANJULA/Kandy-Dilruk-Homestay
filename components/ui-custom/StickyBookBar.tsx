'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyBookBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling down past the first 400px (hero section approx)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-forest-deep/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-white text-xl sm:text-2xl tracking-wide">Kandy Dilruk Homestay</h4>
            <p className="font-sans text-cream/70 text-sm">Best rates guaranteed on Booking.com</p>
          </div>
          
          <Link 
            href="https://www.booking.com/hotel/lk/kandy-dilruk-home-stay.html"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta bg-sunset hover:bg-sunset-glow text-white font-bold uppercase tracking-widest text-xs sm:text-sm py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto text-center shadow-lg"
          >
            book your stay
          </Link>
        </div>
      </div>
    </div>
  );
}
