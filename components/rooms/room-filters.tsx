"use client";

import { ArrowUpDown, CheckSquare, Square } from "lucide-react";
import { useMemo, useState } from "react";

import { RoomCard } from "@/components/shared/room-card";
import { Room } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

type RoomFiltersProps = {
  rooms: Room[];
};

type SortBy = "recommended" | "price-asc" | "price-desc" | "capacity-desc";

export function RoomFilters({ rooms }: RoomFiltersProps) {
  const [maxPrice, setMaxPrice] = useState(500);
  const [capacity, setCapacity] = useState(1);
  const [bedType, setBedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortBy>("recommended");
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const next = rooms.filter((room) => room.pricePerNight <= maxPrice && room.capacity >= capacity && (bedType === "all" || room.bedType === bedType));

    if (sortBy === "price-asc") {
      return [...next].sort((a, b) => a.pricePerNight - b.pricePerNight);
    }
    if (sortBy === "price-desc") {
      return [...next].sort((a, b) => b.pricePerNight - a.pricePerNight);
    }
    if (sortBy === "capacity-desc") {
      return [...next].sort((a, b) => b.capacity - a.capacity);
    }

    return next;
  }, [rooms, maxPrice, capacity, bedType, sortBy]);

  const comparedRooms = rooms.filter((room) => compareSlugs.includes(room.slug));

  const toggleCompare = (slug: string) => {
    setCompareSlugs((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, slug];
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_1fr_1fr_220px]">
        <label className="space-y-2 text-sm">
          <span className="font-medium text-slate-700">Max Price ({formatCurrency(maxPrice)})</span>
          <input className="w-full accent-amber-500" max={500} min={150} onChange={(e) => setMaxPrice(Number(e.target.value))} type="range" value={maxPrice} />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium text-slate-700">Guest Capacity</span>
          <select className="w-full rounded-xl border border-slate-300 px-3 py-2.5" onChange={(e) => setCapacity(Number(e.target.value))} value={capacity}>
            <option value={1}>1+ Guests</option>
            <option value={2}>2+ Guests</option>
            <option value={3}>3+ Guests</option>
            <option value={4}>4+ Guests</option>
          </select>
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium text-slate-700">Bed Type</span>
          <select className="w-full rounded-xl border border-slate-300 px-3 py-2.5" onChange={(e) => setBedType(e.target.value)} value={bedType}>
            <option value="all">All Bed Types</option>
            <option value="King Bed">King Bed</option>
            <option value="Queen Bed">Queen Bed</option>
            <option value="Twin Beds">Twin Beds</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium text-slate-700">Sort</span>
          <div className="relative">
            <ArrowUpDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
            <select className="w-full appearance-none rounded-xl border border-slate-300 px-3 py-2.5" onChange={(e) => setSortBy(e.target.value as SortBy)} value={sortBy}>
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="capacity-desc">Capacity: High to Low</option>
            </select>
          </div>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((room) => {
          const selected = compareSlugs.includes(room.slug);
          return (
            <div key={room.slug} className="space-y-3">
              <button
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:border-amber-400 hover:text-amber-700"
                onClick={() => toggleCompare(room.slug)}
                type="button"
              >
                {selected ? <CheckSquare className="h-3.5 w-3.5" /> : <Square className="h-3.5 w-3.5" />}
                {selected ? "Added to Compare" : "Compare Room"}
              </button>
              <RoomCard room={room} compact />
            </div>
          );
        })}
      </div>

      {comparedRooms.length >= 2 ? (
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-heading text-2xl text-ink">Compare Rooms</h3>
          <table className="mt-4 min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-2 pr-4 font-medium">Room</th>
                <th className="pb-2 pr-4 font-medium">Price</th>
                <th className="pb-2 pr-4 font-medium">Capacity</th>
                <th className="pb-2 pr-4 font-medium">Bed Type</th>
                <th className="pb-2 font-medium">Inclusions</th>
              </tr>
            </thead>
            <tbody>
              {comparedRooms.map((room) => (
                <tr key={room.slug} className="border-b border-slate-100 text-slate-700">
                  <td className="py-3 pr-4 font-semibold text-ink">{room.name}</td>
                  <td className="py-3 pr-4">{formatCurrency(room.pricePerNight)}</td>
                  <td className="py-3 pr-4">{room.capacity} guests</td>
                  <td className="py-3 pr-4">{room.bedType}</td>
                  <td className="py-3">{room.inclusions.slice(0, 3).join(" • ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
