import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BookingButton } from "@/components/ui-custom/BookingButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center px-4 pt-28 pb-16"
    >
      {/* Soft dark vignette for text contrast */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, oklch(0 0 0 / 0%) 0%, oklch(0 0 0 / 35%) 70%, oklch(0 0 0 / 55%) 100%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block glass px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-wide uppercase text-foreground/90"
        >
          🌿 A boutique homestay in the hills of Kandy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif mt-6 text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-shadow-strong"
        >
          Escape to the Clouds.{" "}
          <span className="block text-accent mt-2">Welcome to Kandy Dilruk Homestay.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-foreground/90 text-shadow-soft"
        >
          Experience authentic Sri Lankan hospitality, stunning mountain views, and the calming sound
          of nature — just a short walk from the heart of Kandy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <BookingButton variant="primary" pulse>
            Check Availability & Book Now
          </BookingButton>
          <a
            href="#about"
            className="glass inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-white/15 transition"
          >
            Explore the Views
            <ArrowDown className="size-4" />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden sm:flex absolute -bottom-4 left-1/2 -translate-x-1/2 float-slow text-foreground/70"
        >
          <ArrowDown className="size-6" />
        </motion.a>
      </div>
    </section>
  );
}
