import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui-custom/GlassCard";

const features = [
  {
    icon: "🌄",
    title: "Breathtaking Views",
    body: "Wake up to sweeping mountain and city views from your private balcony — the Kandy skyline at your feet.",
  },
  {
    icon: "🍛",
    title: "Authentic Home Cooking",
    body: "Famous for our home-cooked Chicken Curry and a fresh Sri Lankan breakfast prepared by the family.",
  },
  {
    icon: "🚶‍♂️",
    title: "Prime Hill Location",
    body: "A peaceful retreat above the city, yet just a 15-minute walk down to Kandy's vibrant centre.",
  },
  {
    icon: "🛏️",
    title: "Comfortable & Clean",
    body: "Air conditioning, hot water, fast free Wi-Fi and free parking — everything you need to feel at home.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold">
            About the homestay
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl mt-3 text-shadow-soft">
            A quiet hilltop home, wrapped in green.
          </h2>
          <p className="mt-4 text-foreground/85 text-shadow-soft">
            Family-run with care, Kandy Dilruk Homestay blends warm Sri Lankan hospitality with the
            kind of view that keeps you on the balcony all morning.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <GlassCard className="h-full hover:-translate-y-1 hover:bg-white/12">
                <div className="text-3xl mb-4" aria-hidden>
                  {f.icon}
                </div>
                <h3 className="font-serif text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-foreground/85 leading-relaxed">{f.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
