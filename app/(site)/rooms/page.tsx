import type { Metadata } from "next";
import Link from "next/link";

import { RoomFilters } from "@/components/rooms/room-filters";
import { SectionHeader } from "@/components/shared/section-header";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description:
    "Explore room categories, compare rates, and find the ideal Trav-In Hotel stay for your dates and preferences.",
};

export default function RoomsPage() {
  return (
    <div className="bg-sand pb-16">
      <section className="bg-gradient-to-b from-ink to-slate-800 py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Rooms & Rates"
            title="Choose the Room That Matches Your Stay Style"
            description="Filter by budget, capacity, and bed type, then compare options before you inquire."
            tone="light"
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-105"
              href="/booking"
            >
              Check Availability
            </Link>
            <Link
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              href="/contact"
            >
              Talk to Reservations
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold text-ink">{rooms.length}</span> room categories with real sample pricing.
              Update rates anytime in <code>data/rooms.ts</code>.
            </p>
          </div>
          <RoomFilters rooms={rooms} />
        </div>
      </section>
    </div>
  );
}
