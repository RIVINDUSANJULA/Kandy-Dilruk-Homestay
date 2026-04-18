import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import { BookingButton } from "@/components/ui-custom/BookingButton";

export function TopBar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-3 sm:pt-4">
        <div className="glass-dark rounded-full flex items-center justify-between gap-3 pl-4 pr-2 py-2 sm:pl-6 sm:pr-3 sm:py-2.5">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center size-9 rounded-full bg-primary/90 text-primary-foreground">
              <Mountain className="size-4" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-sm sm:text-base font-semibold">Kandy Dilruk</span>
              <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide uppercase">
                Homestay · Sri Lanka
              </span>
            </div>
          </a>
          <BookingButton variant="compact" className="hidden sm:inline-flex">
            Book on Booking.com
          </BookingButton>
        </div>
      </div>
    </motion.header>
  );
}
