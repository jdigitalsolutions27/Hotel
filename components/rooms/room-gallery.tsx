"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { SafeImage } from "@/components/ui/safe-image";

type RoomGalleryProps = {
  name: string;
  images: string[];
};

export function RoomGallery({ name, images }: RoomGalleryProps) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  const next = () => setActive((prevIndex) => (prevIndex + 1) % images.length);

  return (
    <div className="space-y-4">
      <div className="relative h-[360px] overflow-hidden rounded-3xl md:h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[active]}
            initial={{ opacity: 0.3, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
            <SafeImage
              alt={`${name} image ${active + 1}`}
              className="object-cover"
              fill
              fallbackLabel={`${name} view`}
              sizes="(max-width: 1024px) 100vw, 60vw"
              src={images[active]}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3">
          <button
            aria-label="Previous image"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 transition hover:bg-white"
            onClick={prev}
            type="button"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next image"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 transition hover:bg-white"
            onClick={next}
            type="button"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
        {images.map((src, index) => (
          <button
            key={src}
            aria-label={`Open image ${index + 1}`}
          className={`relative h-20 overflow-hidden rounded-xl border-2 transition md:h-24 ${
            active === index ? "border-amber-500" : "border-transparent"
          }`}
          onClick={() => setActive(index)}
          type="button"
        >
            <SafeImage
              alt={`${name} thumbnail ${index + 1}`}
              className="object-cover"
              fill
              fallbackLabel={`${name} thumbnail`}
              sizes="160px"
              src={src}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
