"use client";

import { CalendarDays, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { rooms } from "@/data/rooms";
import { getDefaultCheckInDate, getDefaultCheckOutDate } from "@/lib/utils";

export function QuickBookingWidget() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(getDefaultCheckInDate());
  const [checkOut, setCheckOut] = useState(getDefaultCheckOutDate());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomSlug, setRoomSlug] = useState(rooms[0].slug);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(adults),
      children: String(children),
      room: roomSlug,
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <form
      className="glass-card rounded-3xl border border-white/30 p-4 shadow-luxe md:p-5"
      onSubmit={handleSubmit}
      aria-label="Quick booking widget"
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <label className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Check-in</span>
          <input
            className="w-full bg-transparent text-slate-800 outline-none"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckIn(e.target.value)}
            required
            type="date"
            value={checkIn}
          />
        </label>
        <label className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Check-out</span>
          <input
            className="w-full bg-transparent text-slate-800 outline-none"
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
            required
            type="date"
            value={checkOut}
          />
        </label>
        <label className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Adults</span>
          <input
            className="w-full bg-transparent text-slate-800 outline-none"
            max={6}
            min={1}
            onChange={(e) => setAdults(Number(e.target.value))}
            type="number"
            value={adults}
          />
        </label>
        <label className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Children</span>
          <input
            className="w-full bg-transparent text-slate-800 outline-none"
            max={6}
            min={0}
            onChange={(e) => setChildren(Number(e.target.value))}
            type="number"
            value={children}
          />
        </label>
        <label className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Room Type</span>
          <select
            className="w-full bg-transparent text-slate-800 outline-none"
            onChange={(e) => setRoomSlug(e.target.value)}
            value={roomSlug}
          >
            {rooms.map((room) => (
              <option key={room.slug} value={room.slug}>
                {room.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        type="submit"
      >
        <Search className="h-4 w-4" />
        Check Availability
      </button>
      <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-700/80">
        <CalendarDays className="h-3.5 w-3.5" />
        Real-time inquiry response within 15 minutes.
      </p>
    </form>
  );
}
