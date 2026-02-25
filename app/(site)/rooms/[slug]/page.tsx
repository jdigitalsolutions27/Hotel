import { Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RoomGallery } from "@/components/rooms/room-gallery";
import { rooms } from "@/data/rooms";
import { formatCurrency } from "@/lib/utils";

type RoomPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }: RoomPageProps): Metadata {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) {
    return { title: "Room Not Found" };
  }
  return {
    title: room.name,
    description: `${room.shortDescription} Starting at ${formatCurrency(room.pricePerNight)} per night.`,
  };
}

export default function RoomDetailPage({ params }: RoomPageProps) {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) {
    notFound();
  }

  return (
    <div className="bg-sand py-12 md:py-16">
      <div className="container-base space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link className="hover:text-amber-700" href="/">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link className="hover:text-amber-700" href="/rooms">
                Rooms
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-slate-700">{room.name}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <RoomGallery images={room.images} name={room.name} />

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
              {room.size}
            </p>
            <h1 className="mt-4 font-heading text-4xl text-ink">{room.name}</h1>
            <p className="mt-3 text-slate-600">{room.description}</p>
            <p className="mt-5 text-2xl font-semibold text-ink">
              {formatCurrency(room.pricePerNight)}
              <span className="text-base font-medium text-slate-500"> / night</span>
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">Capacity</p>
              <p className="font-semibold text-ink">{room.capacity} guests</p>
              <p className="mt-2 text-sm text-slate-600">Bed Type</p>
              <p className="font-semibold text-ink">{room.bedType}</p>
            </div>

            <div className="mt-5 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Inclusions</p>
              {room.inclusions.map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-105"
                href={`/booking?room=${room.slug}`}
              >
                Inquire / Book this Room
              </Link>
              <Link
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
                href="/rooms"
              >
                Back to Rooms
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
