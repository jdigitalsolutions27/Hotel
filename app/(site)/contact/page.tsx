import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeader } from "@/components/shared/section-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Trav-In Hotel for reservations, events, directions, and guest support. Includes map, contact details, and inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="bg-sand pb-16">
      <section className="bg-gradient-to-b from-slate-900 to-ink py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Contact"
            title="Let Us Help You Plan the Perfect Stay"
            description="Connect with our reservations and guest experience team for bookings, events, and tailored requests."
            tone="light"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-3xl text-ink">Hotel Contact Details</h2>
            <p className="flex items-start gap-2 text-slate-600">
              <MapPin className="mt-0.5 h-5 w-5 text-amber-600" />
              {siteConfig.address}
            </p>
            <a className="flex items-center gap-2 text-slate-600 transition hover:text-amber-700" href={`tel:${siteConfig.phone}`}>
              <Phone className="h-5 w-5 text-amber-600" />
              {siteConfig.phone}
            </a>
            <a className="flex items-center gap-2 text-slate-600 transition hover:text-amber-700" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-5 w-5 text-amber-600" />
              {siteConfig.email}
            </a>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">How to get here</p>
              <p className="mt-2 text-sm text-slate-600">
                We are 25 minutes from the international airport and near major business districts. Ask us to arrange airport pickup for a seamless arrival.
              </p>
              <Link
                className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                href={siteConfig.directionsUrl}
                target="_blank"
              >
                Get Directions
              </Link>
            </div>

            <div className="flex gap-2">
              <a
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-amber-500 hover:text-amber-700"
                href="#"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-amber-500 hover:text-amber-700"
                href="#"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-amber-500 hover:text-amber-700"
                href="#"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="container-base space-y-4">
          <SectionHeader
            eyebrow="Map"
            title="Visit Trav-In Hotel"
            description="Placeholder location is embedded below. Replace the map URL in `lib/site-config.ts` when your final address is ready."
          />
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <iframe
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={siteConfig.mapEmbed}
              title="Trav-In Hotel map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
