import { BedSingle, Users, Wifi } from "lucide-react";
import Link from "next/link";

import { SafeImage } from "@/components/ui/safe-image";
import { Room } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

type RoomCardProps = {
  room: Room;
  compact?: boolean;
};

export function RoomCard({ room, compact = false }: RoomCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxe">
      <div className={compact ? "relative h-56 bg-slate-200" : "relative h-64 bg-slate-200"}>
        <SafeImage
          alt={room.name}
          className="object-cover transition duration-700 group-hover:scale-105"
          fill
          fallbackLabel={room.name}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          src={room.images[0]}
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-2xl text-ink">{room.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{room.shortDescription}</p>
          </div>
          <p className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            {formatCurrency(room.pricePerNight)}
            <span className="text-xs font-medium text-amber-600"> / night</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <p className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <Users className="h-3.5 w-3.5" /> {room.capacity} Guests
          </p>
          <p className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <BedSingle className="h-3.5 w-3.5" /> {room.bedType}
          </p>
          <p className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
            <Wifi className="h-3.5 w-3.5" /> High-speed WiFi
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href={`/rooms/${room.slug}`}
          >
            View Details
          </Link>
          <Link
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
            href={`/booking?room=${room.slug}`}
          >
            Inquire / Book
          </Link>
        </div>
      </div>
    </article>
  );
}
