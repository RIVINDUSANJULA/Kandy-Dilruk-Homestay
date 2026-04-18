import { motion } from "framer-motion";
import { ReviewCarousel } from "@/components/ui-custom/ReviewCarousel";

export function Reviews() {
  return (
    <section id="reviews" className="relative px-4 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold">
            Loved by guests
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl mt-3 text-shadow-soft">
            Stories from our travellers
          </h2>

          <div className="mt-6 inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5">
            <span className="grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-bold text-sm">
              8.4
            </span>
            <div className="text-left">
              <div className="text-sm font-semibold leading-tight">Booking.com Rating</div>
              <div className="text-xs text-muted-foreground leading-tight">Very Good · Verified guests</div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
}
