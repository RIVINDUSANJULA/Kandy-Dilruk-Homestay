import { BookingButton } from "./BookingButton";

export function StickyBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-3 glass-dark border-t border-white/15">
      <BookingButton variant="primary" pulse className="w-full">
        Book on Booking.com
      </BookingButton>
    </div>
  );
}
