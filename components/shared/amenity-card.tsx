import { Dumbbell, PartyPopper, Plane, UtensilsCrossed, Waves } from "lucide-react";

import { SafeImage } from "@/components/ui/safe-image";
import { Amenity } from "@/lib/types";

const iconMap = {
  UtensilsCrossed,
  Waves,
  Dumbbell,
  PartyPopper,
  Plane,
};

type AmenityCardProps = {
  amenity: Amenity;
};

export function AmenityCard({ amenity }: AmenityCardProps) {
  const Icon = iconMap[amenity.icon];

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative h-52 overflow-hidden bg-slate-200">
        <SafeImage
          alt={amenity.title}
          className="object-cover transition duration-700 group-hover:scale-105"
          fill
          fallbackLabel={amenity.title}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={amenity.image}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/65 to-transparent p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-amber-200">Featured</p>
          <p className="text-sm text-white/95">{amenity.short}</p>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
          <Icon className="h-3.5 w-3.5" />
          Amenity
        </div>
        <h3 className="font-heading text-2xl text-ink">{amenity.title}</h3>
        <p className="text-sm text-slate-600">{amenity.description}</p>
      </div>
    </article>
  );
}
