"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Testimonial } from "@/lib/types";

type TestimonialSliderProps = {
  items: Testimonial[];
};

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
      <div className="flex items-center justify-between">
        <p className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
          Guest Stories
        </p>
        <div className="flex gap-2">
          <button
            aria-label="Previous testimonial"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-amber-400 hover:text-amber-700"
            onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next testimonial"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-amber-400 hover:text-amber-700"
            onClick={() => setIndex((prev) => (prev + 1) % items.length)}
            type="button"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <TestimonialCard item={current} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
