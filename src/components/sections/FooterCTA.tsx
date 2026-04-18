import { motion } from "framer-motion";
import { BookingButton } from "@/components/ui-custom/BookingButton";

export function FooterCTA() {
  return (
    <section className="relative px-4 pt-24 pb-32 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass-dark rounded-3xl px-6 py-14 sm:p-16 text-center"
      >
        <h2 className="font-serif text-3xl sm:text-5xl text-shadow-soft">
          Your hill-top home is waiting.
        </h2>
        <p className="mt-4 text-foreground/85 max-w-xl mx-auto">
          Real reviews, instant confirmation, and the best price — book directly on Booking.com.
        </p>
        <div className="mt-8 flex justify-center">
          <BookingButton variant="primary" pulse>
            Book Your Stay on Booking.com
          </BookingButton>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-muted-foreground">
          <div>No 22/5 Reservoir Rd, Kandy 20000, Sri Lanka</div>
          <div className="mt-1">© {new Date().getFullYear()} Kandy Dilruk Homestay · Crafted with care in the hills.</div>
        </div>
      </motion.div>
    </section>
  );
}
