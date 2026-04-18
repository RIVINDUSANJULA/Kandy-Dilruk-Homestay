import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
};

export function GlassCard({ className, as: As = "div", children, ...rest }: Props) {
  return (
    <As
      className={cn(
        "glass rounded-2xl p-6 sm:p-7 text-foreground transition-transform duration-300",
        className,
      )}
      {...rest}
    >
      {children}
    </As>
  );
}
