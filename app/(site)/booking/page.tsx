import type { Metadata } from "next";

import { BookingForm } from "@/components/forms/booking-form";
import { SectionHeader } from "@/components/shared/section-header";

type BookingPageProps = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export const metadata: Metadata = {
  title: "Booking Inquiry",
  description:
    "Submit a booking inquiry at Trav-In Hotel with our smooth multi-step form and receive a reference number instantly.",
};

function takeFirst(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

export default function BookingPage({ searchParams }: BookingPageProps) {
  const checkIn = takeFirst(searchParams?.checkIn);
  const checkOut = takeFirst(searchParams?.checkOut);
  const adults = takeFirst(searchParams?.adults);
  const children = takeFirst(searchParams?.children);
  const roomSlug = takeFirst(searchParams?.room);

  return (
    <div className="bg-pearl pb-16">
      <section className="bg-gradient-to-b from-ink to-slate-800 py-16 text-white">
        <div className="container-base">
          <SectionHeader
            eyebrow="Booking Inquiry"
            title="Plan Your Stay at Trav-In Hotel"
            description="Complete the quick 4-step inquiry form and our reservation team will contact you with final confirmation."
            tone="light"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base">
          <BookingForm
            initialValues={{
              checkIn,
              checkOut,
              adults: adults ? Number(adults) : undefined,
              children: children ? Number(children) : undefined,
              roomSlug,
            }}
          />
        </div>
      </section>
    </div>
  );
}
