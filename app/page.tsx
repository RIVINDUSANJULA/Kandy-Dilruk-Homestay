"use client";

import {
  Wifi,
  Car,
  TreePalm,
  Coffee,
  MapPin,
  Star,
  Utensils,
  Landmark,
  Mountain,
  Bus,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/site/theme-toggle";
import KandyScene from "@/components/scene/KandyScene";

const heroKandy = "/assets/hero-kandy.jpg";
const photoRoom = "/assets/photo-room.jpg";
const photoBreakfast = "/assets/photo-breakfast.jpg";
const photoTerrace = "/assets/photo-terrace.jpg";
const photoBathroom = "/assets/photo-bathroom.jpg";
const photoExterior = "/assets/photo-exterior.jpg";

const aboutItems = [
  {
    title: "Comfortable Accommodation",
    body: "Relaxing stay with a terrace and free WiFi in public areas. Free private on-site parking and air-conditioned rooms with tiled floors for added comfort.",
  },
  {
    title: "Breakfast & Amenities",
    body: "Continental and à la carte breakfast — pancakes and fresh fruits. Each room has a private bathroom, shower, and a balcony with mountain or city views.",
  },
  {
    title: "Prime Location",
    body: "In the heart of Kandy — 23 km from Bogambara Stadium and Sri Dalada Maligawa. Close to Kandy City Centre Mall and Royal Palace Park.",
  },
  {
    title: "Guest Favourites",
    body: "Visitors love the friendly host, beautiful surroundings and the welcoming, family-friendly atmosphere of the homestay.",
  },
];

const photos = [
  { src: photoRoom, alt: "Room with balcony view" },
  { src: photoTerrace, alt: "Terrace with mountain view" },
  { src: photoBreakfast, alt: "Breakfast on the terrace" },
  { src: photoBathroom, alt: "Private bathroom" },
  { src: photoExterior, alt: "Homestay exterior" },
];

const facilities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Free Parking" },
  { icon: TreePalm, label: "Terrace" },
  { icon: Coffee, label: "Breakfast" },
];

const reviewCategories = [
  { label: "Service / Staff", score: 9.6 },
  { label: "Facilities", score: 9.1 },
  { label: "Cleanliness", score: 9.5 },
  { label: "Amenities", score: 9.0 },
  { label: "Value", score: 9.3 },
  { label: "Comfort", score: 9.4 },
];

const surroundings = [
  {
    icon: MapPin,
    title: "What's Nearby",
    items: [
      ["Kandy City Centre Mall", "1.2 km"],
      ["Royal Palace Park", "1.5 km"],
      ["Kandy Lake", "2.0 km"],
    ],
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    items: [
      ["The Empire Café", "1.0 km"],
      ["Slightly Chilled Lounge", "1.4 km"],
      ["Balaji Dosai", "1.3 km"],
    ],
  },
  {
    icon: Landmark,
    title: "Top Attractions",
    items: [
      ["Sri Dalada Maligawa", "23 km"],
      ["Bogambara Stadium", "23 km"],
      ["Royal Botanical Gardens", "8 km"],
    ],
  },
  {
    icon: Mountain,
    title: "Natural Beauty",
    items: [
      ["Udawatta Kele Forest", "3 km"],
      ["Hanthana Mountain Range", "6 km"],
      ["Victoria Reservoir", "23 km"],
    ],
  },
  {
    icon: Bus,
    title: "Public Transport",
    items: [
      ["Kandy Railway Station", "2.5 km"],
      ["Goods Shed Bus Stand", "2.4 km"],
      ["Seaplane Base", "23 km"],
    ],
  },
];

const reviewQuotes = [
  {
    name: "Aanya P.",
    country: "India",
    text: "Host was incredibly warm — felt like family. Wake up to misty mountain views from the balcony.",
  },
  {
    name: "Liam T.",
    country: "United Kingdom",
    text: "Spotless rooms, generous breakfast on the terrace. The location is quiet but close to everything.",
  },
  {
    name: "Marie L.",
    country: "France",
    text: "A hidden gem in Kandy. The pancakes and fresh fruit each morning were unforgettable.",
  },
];

const averageRating =
  Math.round(
    (reviewCategories.reduce((s, c) => s + c.score, 0) / reviewCategories.length) * 10,
  ) / 10;

function BookButton({ size = "md" }: { size?: "md" | "lg" }) {
  const sizing =
    size === "lg" ? "px-10 py-4 text-base tracking-wide" : "px-6 py-2.5 text-sm tracking-wide";
  return (
    <a
      href="#book"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground font-medium ${sizing} shadow-[0_10px_30px_-10px_oklch(0.78_0.14_50/0.6)] transition-all hover:scale-[1.03] hover:brightness-105`}
    >
      <Sparkles className="h-4 w-4" />
      Book Now
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-background text-foreground">
      {/* 3D Background preserved from the original Next.js template */}
      <div className="absolute inset-0 z-0">
        <KandyScene />
      </div>

      <div className="relative z-10 w-full min-h-screen">
        {/* HERO */}
        <header className="relative min-h-[100svh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroKandy}
              alt="Misty view of Kandy city and lake at golden hour"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-hero)" }}
            />
          </div>

          <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-7">
            <div className="font-display text-lg font-semibold text-white">
              Kandy <span className="text-accent">Dilruk</span>
            </div>
            <ul className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
              <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="#photos" className="transition-colors hover:text-white">Photos</a></li>
              <li><a href="#facilities" className="transition-colors hover:text-white">Facilities</a></li>
              <li><a href="#reviews" className="transition-colors hover:text-white">Reviews</a></li>
              <li><a href="#surroundings" className="transition-colors hover:text-white">Surroundings</a></li>
            </ul>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="hidden md:block"><BookButton /></div>
            </div>
          </nav>

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-4xl flex-col items-center justify-center px-6 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
              <MapPin className="h-3 w-3" /> Kandy · Sri Lanka
            </span>
            <h1 className="text-balance font-display text-5xl font-medium leading-[1.05] text-white md:text-7xl">
              Whispers of the <em className="font-light italic text-accent">hills</em>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base text-white/85 md:text-lg">
              Kandy Dilruk Homestay — serene mountain-view balconies, warm hospitality and
              a quiet refuge in the heart of the city.
            </p>
            <div className="mt-10">
              <BookButton size="lg" />
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{ background: "var(--gradient-mist)" }}
          />
        </header>

        {/* ABOUT */}
        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
              About the homestay
            </p>
            <h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">
              A quiet sanctuary in the
              <em className="italic text-accent"> heart of Kandy</em>
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
            {aboutItems.map((item, i) => (
              <article key={item.title} className="bg-card p-8 md:p-10">
                <div className="mb-4 font-display text-sm font-medium text-accent">
                  0{i + 1}
                </div>
                <h3 className="mb-3 text-xl font-medium">{item.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PHOTOS */}
        <section id="photos" className="bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                  Photos
                </p>
                <h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">
                  Glimpses of <em className="italic text-accent">your stay</em>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
                <img
                  src={photos[0].src}
                  alt={photos[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
              {photos.slice(1).map((p) => (
                <div key={p.alt} className="overflow-hidden rounded-xl">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP */}
        <section id="map" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
              Map view
            </p>
            <h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">
              Find us on the <em className="italic text-accent">map</em>
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Kandy Dilruk Homestay map"
              src="https://www.google.com/maps?q=Kandy,Sri+Lanka&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* FACILITIES */}
        <section id="facilities" className="bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                Facilities
              </p>
              <h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">
                Everything you need to <em className="italic text-accent">unwind</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {facilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="font-display text-lg font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
              Guest reviews
            </p>
            <h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">
              What guests are <em className="italic text-accent">saying</em>
            </h2>
          </div>

          {/* average rating */}
          <div className="mb-12 grid items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:grid-cols-[auto_1fr] md:p-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="font-display text-7xl font-semibold text-accent">
                {averageRating.toFixed(1)}
              </div>
              <div className="mt-2 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">Exceptional · Avg. of all categories</div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {reviewCategories.map((cat) => (
                <div key={cat.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground">{cat.label}</span>
                    <span className="font-display font-medium text-accent">
                      {cat.score.toFixed(1)}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(cat.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* quotes */}
          <div className="grid gap-6 md:grid-cols-3">
            {reviewQuotes.map((r) => (
              <figure
                key={r.name}
                className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-3 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-pretty leading-relaxed text-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-foreground">{r.name}</span>
                  <span className="text-muted-foreground"> · {r.country}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* SURROUNDINGS */}
        <section id="surroundings" className="bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                Surroundings
              </p>
              <h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">
                Explore Kandy at your <em className="italic text-accent">doorstep</em>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {surroundings.map(({ icon: Icon, title, items }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg font-medium">{title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map(([place, dist]) => (
                      <li
                        key={place}
                        className="flex items-baseline justify-between gap-3 border-b border-dashed border-border/70 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-foreground">{place}</span>
                        <span className="font-display text-sm text-muted-foreground">{dist}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="book" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={photoTerrace}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center text-background md:py-36">
            <h2 className="text-balance font-display text-4xl font-medium leading-tight md:text-6xl">
              Your retreat in the hills <em className="italic text-accent">awaits</em>
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-background/80 md:text-lg">
              Reserve your stay at Kandy Dilruk Homestay and wake up to misty mountains, fresh
              pancakes and Ceylon tea on the terrace.
            </p>
            <div className="mt-10">
              <BookButton size="lg" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border bg-background py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
            <div>© {new Date().getFullYear()} Kandy Dilruk Homestay · Kandy, Sri Lanka</div>
            <div className="font-display italic">Whispers of the hills.</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
