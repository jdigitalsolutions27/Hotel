import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/section-header";
import { SafeImage } from "@/components/ui/safe-image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Trav-In Hotel's story, service philosophy, and commitment to premium guest experiences.",
};

export default function AboutPage() {
  return (
    <div className="bg-sand pb-16">
      <section className="bg-gradient-to-b from-ink to-slate-800 py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="About Trav-In Hotel"
            title="Warm Hospitality with Contemporary Luxury"
            description="Trav-In Hotel was built to offer travelers a stay experience that feels both elevated and deeply human."
            tone="light"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <h2 className="font-heading text-4xl text-ink">Our Story</h2>
            <p className="text-slate-600">
              We started Trav-In Hotel with a clear goal: create a modern city hotel where guests immediately feel the quality, care, and calm in every detail.
            </p>
            <p className="text-slate-600">
              From materials and lighting to service rituals and digital booking, each touchpoint is designed to be smooth, premium, and memorable.
            </p>
            <p className="text-slate-600">
              Today, we welcome guests from around the world for business trips, celebrations, and short escapes with equally strong focus on elegance and efficiency.
            </p>
            <Link
              className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              href="/booking"
            >
              Plan Your Stay
            </Link>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm md:h-[420px]">
            <SafeImage
              alt="Trav-In Hotel interior design"
              className="object-cover"
              fill
              fallbackLabel="Trav-In Hotel interior design"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 45vw"
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
