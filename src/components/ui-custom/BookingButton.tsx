import * as React from "react";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://www.booking.com/hotel/lk/kandy-dilruk-home-stay.html";

type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost" | "compact";
  pulse?: boolean;
  children: React.ReactNode;
};

export function BookingButton({ variant = "primary", pulse = false, className, children, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants: Record<string, string> = {
    primary:
      "bg-primary text-primary-foreground hover:scale-[1.03] hover:bg-accent px-7 py-4 text-base sm:text-lg shadow-[0_10px_40px_-10px_oklch(0.7_0.17_45/0.6)]",
    ghost:
      "glass text-foreground hover:bg-white/15 px-6 py-3.5 text-sm sm:text-base",
    compact:
      "bg-primary text-primary-foreground hover:bg-accent px-4 py-2 text-sm",
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], pulse && "pulse-cta", className)}
      {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  );
}
