import { createFileRoute } from "@tanstack/react-router";
import { KandyScene } from "@/components/scene/KandyScene";
import { TopBar } from "@/components/sections/TopBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { StickyBookBar } from "@/components/ui-custom/StickyBookBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kandy Dilruk Homestay — Boutique Hilltop Stay in Kandy, Sri Lanka" },
      {
        name: "description",
        content:
          "Stunning mountain views, authentic Sri Lankan home cooking, and warm hospitality — 15 minutes' walk from the heart of Kandy. Book on Booking.com.",
      },
      { property: "og:title", content: "Kandy Dilruk Homestay — Hilltop Boutique Stay in Kandy" },
      {
        property: "og:description",
        content:
          "Breathtaking views, home-cooked meals, and Sri Lankan warmth above Kandy city. Rated 8.4 on Booking.com.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <KandyScene />
      <TopBar />
      <main>
        <Hero />
        <About />
        <Reviews />
        <Location />
        <FooterCTA />
      </main>
      <StickyBookBar />
    </>
  );
}
