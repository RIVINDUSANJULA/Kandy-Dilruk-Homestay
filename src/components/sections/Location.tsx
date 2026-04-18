import { motion } from "framer-motion";
import { MapPin, Train, Landmark } from "lucide-react";
import { GlassCard } from "@/components/ui-custom/GlassCard";

export function Location() {
  return (
    <section id="location" className="relative px-4 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold">
            Find us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl mt-3 text-shadow-soft">
            Steps from Kandy, lifted into the hills.
          </h2>
          <p className="mt-4 text-foreground/85">
            A quiet road above Kandy Lake, close to everything that makes this UNESCO city special.
          </p>

          <GlassCard className="mt-6">
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-accent mt-1 shrink-0" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-sm text-foreground/85">
                  No 22/5 Reservoir Rd, Kandy 20000, Sri Lanka
                </div>
              </div>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5">
                <Train className="size-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">Kandy Railway Station</div>
                  <div className="text-xs text-muted-foreground">600 m walk</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5">
                <Landmark className="size-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">Temple of the Tooth</div>
                  <div className="text-xs text-muted-foreground">Sri Dalada Maligawa nearby</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl overflow-hidden min-h-[340px] lg:min-h-full"
        >
          <iframe
            title="Kandy Dilruk Homestay location"
            src="https://www.google.com/maps?q=No+22%2F5+Reservoir+Rd,+Kandy+20000,+Sri+Lanka&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[340px] border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
