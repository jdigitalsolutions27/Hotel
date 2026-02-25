import type { Metadata } from "next";
import Link from "next/link";

import { AmenityCard } from "@/components/shared/amenity-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { amenities } from "@/data/amenities";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Experience Trav-In Hotel's premium amenities including rooftop pool, dining atelier, spa, fitness, and event spaces.",
};

export default function AmenitiesPage() {
  return (
    <div className="bg-sand pb-16">
      <section className="bg-gradient-to-b from-slate-900 to-ink py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Amenities"
            title="Curated Spaces Beyond Your Room"
            description="Every amenity is designed to support comfort, wellness, connection, and memorable guest experiences."
            tone="light"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {amenities.map((amenity, index) => (
            <Reveal key={amenity.id} delay={index * 0.06}>
              <AmenityCard amenity={amenity} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="container-base rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeader
            eyebrow="Events & Functions"
            title="Hosting Something Important?"
            description="From executive meetings to celebrations, our events team can build a full package with AV, dining, and room blocks."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              href="/contact"
            >
              Inquire for Events
            </Link>
            <Link
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
              href="/booking"
            >
              Reserve a Stay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
