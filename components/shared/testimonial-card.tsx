import { Star } from "lucide-react";
import Image from "next/image";

import { Testimonial } from "@/lib/types";

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < item.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />
        ))}
      </div>
      <p className="text-slate-700">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image alt={item.name} className="object-cover" fill sizes="44px" src={item.avatar} />
        </div>
        <div>
          <p className="font-semibold text-ink">{item.name}</p>
          <p className="text-sm text-slate-500">
            {item.role} • {item.location}
          </p>
        </div>
      </div>
    </article>
  );
}
