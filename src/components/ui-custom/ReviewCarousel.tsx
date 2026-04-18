import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GlassCard } from "./GlassCard";

type Review = {
  quote: string;
  name: string;
  country: string;
};

const reviews: Review[] = [
  {
    quote:
      "The room was super nice with a great view and the hosting family was very friendly. The dinner Chicken Curry was delicious! 10/10.",
    name: "Valentin",
    country: "Switzerland",
  },
  {
    quote: "Cute little flat with an amazing view from the mountain over the city :) very clean as well.",
    name: "Magda",
    country: "Austria",
  },
  {
    quote: "Loved my stay here. Up the hill, but rewarded with wonderful forest/city views. Warm hosts!",
    name: "Desa",
    country: "New Zealand",
  },
];

export function ReviewCarousel() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + reviews.length) % reviews.length);
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const review = reviews[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative min-h-[260px] sm:min-h-[220px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <GlassCard className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground/95 italic">
                "{review.quote}"
              </p>
              <div className="mt-6 text-sm">
                <span className="font-semibold text-accent">{review.name}</span>
                <span className="text-muted-foreground"> · {review.country}</span>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          aria-label="Previous review"
          onClick={() => go(-1)}
          className="glass rounded-full p-2.5 hover:bg-white/15 transition"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next review"
          onClick={() => go(1)}
          className="glass rounded-full p-2.5 hover:bg-white/15 transition"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
