import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/section-header";
import { SafeImage } from "@/components/ui/safe-image";
import { offers } from "@/data/offers";

export const metadata: Metadata = {
  title: "Offers & Promos",
  description:
    "Discover current Trav-In Hotel offers and promo packages for leisure escapes, executive stays, and weekend bookings.",
};

export default function OffersPage() {
  return (
    <div className="bg-pearl pb-16">
      <section className="bg-gradient-to-b from-slate-900 to-ink py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Offers"
            title="Current Promos and Signature Packages"
            description="Book smarter with value-rich offers that include premium perks and flexible options."
            tone="light"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-56 bg-slate-200">
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
              <div className="space-y-3 p-6">
                <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                  {offer.discountLabel}
                </p>
                <h2 className="font-heading text-3xl text-ink">{offer.title}</h2>
                <p className="text-sm font-semibold text-slate-500">{offer.subtitle}</p>
                <p className="text-sm text-slate-600">{offer.description}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Valid until {offer.validUntil}</p>
                <Link
                  className="inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  href="/booking"
                >
                  Apply This Offer
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
