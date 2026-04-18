'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 pt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 text-shadow-strong"
        >
          Escape to the <span className="text-sunset italic">Clouds.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-lg md:text-2xl text-cream/90 max-w-2xl mb-12 leading-relaxed text-shadow-soft"
        >
          Welcome to Kandy Dilruk Homestay. Experience authentic Sri Lankan hospitality, stunning mountain views, and the calming sound of nature—just a short walk from the heart of Kandy.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link 
            href="https://www.booking.com/hotel/lk/kandy-dilruk-home-stay.html"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta bg-sunset hover:bg-sunset-glow text-white font-bold uppercase tracking-widest text-sm py-4 px-8 rounded-full transition-all duration-300"
          >
            Check Availability & Book Now
          </Link>
          
          <a 
            href="#about"
            onClick={handleScroll}
            className="glass hover:bg-white/10 text-cream font-medium tracking-wide text-sm py-4 px-8 rounded-full transition-all duration-300"
          >
            Explore the Views
          </a>
        </motion.div>
      </div>
    </section>
  );
}
