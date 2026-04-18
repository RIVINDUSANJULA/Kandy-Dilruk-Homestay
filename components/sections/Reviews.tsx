'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import GlassCard from '../ui-custom/GlassCard';

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const reviews = [
    {
      text: "The room was super nice with a great view and the hosting family was very friendly. The dinner Chicken Curry was delicious! 10/10.",
      author: "Valentin",
      country: "Switzerland",
      rating: 10
    },
    {
      text: "Cute little flat with an amazing view from the mountain over the city :) very clean as well.",
      author: "Magda",
      country: "Austria",
      rating: 10
    },
    {
      text: "Loved my stay here. Up the hill, but rewarded with wonderful forest/city views. Warm hosts!",
      author: "Desa",
      country: "New Zealand",
      rating: 10
    }
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 px-4 text-center">
          <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full mb-6">
            <span className="font-bold text-sunset">8.4/10</span>
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">— Very Good on Booking.com</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-shadow-strong">
            Guest Experiences
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y pt-8 pb-12">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_70%] px-4 pl-4"
                  style={{
                    opacity: selectedIndex === index ? 1 : 0.4,
                    transform: selectedIndex === index ? 'scale(1)' : 'scale(0.9)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                  }}
                >
                  <GlassCard className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-yellow-500 mb-6">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                      <p className="font-serif text-xl sm:text-2xl text-white/95 leading-relaxed mb-8 italic">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-sunset/20 flex items-center justify-center text-sunset font-serif text-xl font-bold">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-sans font-bold text-white text-lg">{review.author}</p>
                        <p className="font-sans text-white/60 text-sm tracking-wider uppercase">{review.country}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
