import { Award, BadgeCheck, MapPinned, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { QuickBookingWidget } from "@/components/forms/quick-booking-widget";
import { AmenityCard } from "@/components/shared/amenity-card";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Reveal } from "@/components/shared/reveal";
import { RoomCard } from "@/components/shared/room-card";
import { SectionHeader } from "@/components/shared/section-header";
import { TestimonialSlider } from "@/components/shared/testimonial-slider";
import { SafeImage } from "@/components/ui/safe-image";
import { amenities } from "@/data/amenities";
import { faqs } from "@/data/faqs";
import { galleryImages } from "@/data/gallery";
import { offers } from "@/data/offers";
import { featuredRooms } from "@/data/rooms";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Luxury Stay in the City",
  description:
    "Discover Trav-In Hotel's curated rooms, premium amenities, and smooth booking experience for your next city stay.",
};

const trustBadges = [
  { icon: ShieldCheck, label: "Best Rate Guarantee" },
  { icon: Award, label: "Guest-Rated Excellence" },
  { icon: BadgeCheck, label: "24/7 Concierge" },
  { icon: MapPinned, label: "Prime City Location" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[76vh] overflow-hidden">
        <SafeImage
          alt="Trav-In Hotel exterior"
          className="object-cover"
          fill
          fallbackLabel="Trav-In Hotel exterior"
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-base relative z-10 flex min-h-[76vh] flex-col justify-center py-20">
          <Reveal className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
              Luxury-Modern Urban Retreat
            </p>
            <h1 className="mt-5 font-heading text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Stay Elevated at <span className="text-amber-300">Trav-In Hotel</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-100 sm:text-lg">
              Refined rooms, exceptional hospitality, and effortless booking designed for business travelers, families, and weekend city escapes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3 text-sm font-semibold text-ink shadow-luxe transition hover:brightness-105"
                href="/booking"
              >
                Check Availability
              </Link>
              <Link
                className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                href="/rooms"
              >
                Explore Rooms
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 max-w-6xl">
            <QuickBookingWidget />
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container-base">
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 p-3">
                <badge.icon className="h-4 w-4 text-amber-600" />
                <p className="text-sm font-semibold text-slate-700">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="container-base space-y-10">
          <SectionHeader
            eyebrow="Featured Rooms"
            title="Rooms Crafted for Rest, Focus, and Celebration"
            description="Each room category is designed with premium finishes, practical comfort, and thoughtful details that improve every stay."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredRooms.map((room, index) => (
              <Reveal key={room.slug} delay={index * 0.06}>
                <RoomCard room={room} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container-base space-y-10">
          <SectionHeader
            eyebrow="Amenities"
            title="Every Moment Designed to Feel Effortless"
            description="From rooftop relaxation to full-service dining and wellness, Trav-In Hotel delivers premium experiences throughout your stay."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {amenities.slice(0, 3).map((amenity, index) => (
              <Reveal key={amenity.id} delay={index * 0.08}>
                <AmenityCard amenity={amenity} />
              </Reveal>
            ))}
          </div>
          <Link
            className="inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
            href="/amenities"
          >
            View All Amenities
          </Link>
        </div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="container-base">
          <SectionHeader
            eyebrow="Gallery Preview"
            title="A Look Inside Trav-In Hotel"
            description="Browse curated moments from our rooms, lobby spaces, amenities, and surrounding city atmosphere."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <Reveal key={image.id} delay={index * 0.08}>
                <Link className="group relative block h-40 overflow-hidden rounded-2xl md:h-52" href="/gallery">
                  <SafeImage
                    alt={image.alt}
                    className="object-cover transition duration-700 group-hover:scale-105"
                    fill
                    fallbackLabel={image.alt}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    src={image.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">{image.category}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800" href="/gallery">
            Open Full Gallery
          </Link>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container-base">
          <SectionHeader
            eyebrow="Limited-Time Offers"
            title="Premium Packages for Smart Travelers"
            description="Unlock tailored rates, value-rich inclusions, and elevated experiences for your upcoming stay."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-44 bg-slate-200">
                  <SafeImage
                    alt={offer.title}
                    className="object-cover"
                    fill
                    fallbackLabel={offer.title}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={offer.image}
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
                    {offer.discountLabel}
                  </p>
                  <h3 className="font-heading text-2xl text-ink">{offer.title}</h3>
                  <p className="text-sm text-slate-600">{offer.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Valid until {offer.validUntil}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="container-base grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Testimonials"
              title="What Guests Say About Trav-In"
              description="Real feedback from travelers who stayed with us for business, leisure, and special occasions."
            />
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container-base grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know before your stay."
            />
            <Link className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700" href="/contact">
              Need more help? Contact us
            </Link>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="container-base grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_1fr] lg:p-10">
          <div>
            <SectionHeader
              eyebrow="Find Us"
              title="Close to Business Hubs and Local Attractions"
              description="Stay connected to the city with shopping, cultural landmarks, and transit points just minutes away."
            />
            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <p>{siteConfig.address}</p>
              <p>
                Contact:{" "}
                <a className="font-semibold text-amber-700" href={`tel:${siteConfig.phone}`}>
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <Link
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              href={siteConfig.directionsUrl}
              target="_blank"
            >
              Get Directions
            </Link>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-200 md:h-[320px]">
            <SafeImage
              alt="City view near Trav-In Hotel"
              className="object-cover"
              fill
              fallbackLabel="City view near Trav-In Hotel"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 45vw"
              src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </section>
    </>
  );
}
