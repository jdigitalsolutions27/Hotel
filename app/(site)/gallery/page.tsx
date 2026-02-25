import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/section-header";
import { SafeImage } from "@/components/ui/safe-image";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Trav-In Hotel gallery featuring rooms, amenities, dining, and local city atmosphere.",
};

export default function GalleryPage() {
  return (
    <div className="bg-sand pb-16">
      <section className="bg-gradient-to-b from-ink to-slate-800 py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Gallery"
            title="Visual Tour of Trav-In Hotel"
            description="Explore selected images from our rooms, shared spaces, and surrounding city vibe."
            tone="light"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <article
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
                index % 5 === 0 ? "col-span-2" : ""
              }`}
            >
              <div className={`relative bg-slate-200 ${index % 5 === 0 ? "h-[260px] md:h-[360px]" : "h-52 md:h-64"}`}>
                <SafeImage
                  alt={image.alt}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  fallbackLabel={image.alt}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  src={image.src}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.14em] text-amber-200">{image.category}</p>
                  <p className="mt-1 text-sm">{image.alt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
