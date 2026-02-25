"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { rooms } from "@/data/rooms";
import { bookingInquirySchema, type BookingInquiryInput } from "@/lib/schemas";
import { siteConfig } from "@/lib/site-config";
import { formatCurrency, getDefaultCheckInDate, getDefaultCheckOutDate } from "@/lib/utils";

type BookingFormProps = {
  initialValues?: Partial<BookingInquiryInput>;
};

const stepConfig = [
  { id: 1, title: "Dates & Guests" },
  { id: 2, title: "Room Selection" },
  { id: 3, title: "Guest Details" },
  { id: 4, title: "Special Requests" },
] as const;

const stepFieldMap: Record<number, (keyof BookingInquiryInput)[]> = {
  1: ["checkIn", "checkOut", "adults", "children"],
  2: ["roomSlug"],
  3: ["firstName", "lastName", "email", "phone", "country"],
  4: ["specialRequests"],
};

export function BookingForm({ initialValues }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  const form = useForm<BookingInquiryInput>({
    resolver: zodResolver(bookingInquirySchema),
    defaultValues: {
      checkIn: initialValues?.checkIn ?? getDefaultCheckInDate(),
      checkOut: initialValues?.checkOut ?? getDefaultCheckOutDate(),
      adults: Number(initialValues?.adults ?? 2),
      children: Number(initialValues?.children ?? 0),
      roomSlug: initialValues?.roomSlug ?? rooms[0].slug,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      specialRequests: "",
    },
  });

  const roomSlug = form.watch("roomSlug");
  const selectedRoom = rooms.find((room) => room.slug === roomSlug) ?? rooms[0];

  const nextStep = async () => {
    const fields = stepFieldMap[step];
    const isValid = await form.trigger(fields);
    if (!isValid) {
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = form.handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      const result = (await response.json()) as { reference: string };
      setReference(result.reference);
    } catch {
      form.setError("root", { message: "Unable to submit your inquiry right now. Please try again." });
    } finally {
      setIsLoading(false);
    }
  });

  const whatsappMessage = encodeURIComponent(
    `Hello Trav-In Hotel! I submitted an inquiry${
      reference ? ` (Ref: ${reference})` : ""
    } for ${selectedRoom.name}. Check-in: ${form.getValues("checkIn")}, Check-out: ${form.getValues("checkOut")}, Guests: ${
      form.getValues("adults") + form.getValues("children")
    }.`,
  );
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        {reference ? (
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Inquiry Sent
            </p>
            <h2 className="font-heading text-3xl text-ink">Thank you for reaching out.</h2>
            <p className="text-slate-600">
              Your booking inquiry has been received. Our reservation team will contact you shortly.
            </p>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm text-emerald-700">Inquiry Reference Number</p>
              <p className="mt-1 font-heading text-3xl text-emerald-800">{reference}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                href={whatsappLink}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-4 w-4" />
                Send to WhatsApp
              </a>
              <button
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
                onClick={() => {
                  form.reset();
                  setReference(null);
                  setStep(1);
                }}
                type="button"
              >
                Submit New Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {stepConfig.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                    step >= item.id ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Step {item.id}: {item.title}
                </div>
              ))}
            </div>

            {step === 1 ? (
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Check-in</span>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none"
                    min={new Date().toISOString().split("T")[0]}
                    type="date"
                    {...form.register("checkIn")}
                  />
                  <FieldError message={form.formState.errors.checkIn?.message} />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Check-out</span>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none"
                    type="date"
                    {...form.register("checkOut")}
                  />
                  <FieldError message={form.formState.errors.checkOut?.message} />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Adults</span>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none"
                    max={6}
                    min={1}
                    type="number"
                    {...form.register("adults", { valueAsNumber: true })}
                  />
                  <FieldError message={form.formState.errors.adults?.message} />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Children</span>
                  <input
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none"
                    max={6}
                    min={0}
                    type="number"
                    {...form.register("children", { valueAsNumber: true })}
                  />
                  <FieldError message={form.formState.errors.children?.message} />
                </label>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-3">
                {rooms.map((room) => {
                  const selected = form.watch("roomSlug") === room.slug;
                  return (
                    <button
                      key={room.slug}
                      className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                        selected ? "border-amber-500 bg-amber-50" : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => form.setValue("roomSlug", room.slug)}
                      type="button"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-ink">{room.name}</p>
                          <p className="text-sm text-slate-600">{room.shortDescription}</p>
                        </div>
                        <p className="text-sm font-semibold text-amber-700">{formatCurrency(room.pricePerNight)}/night</p>
                      </div>
                    </button>
                  );
                })}
                <FieldError message={form.formState.errors.roomSlug?.message} />
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">First Name</span>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" {...form.register("firstName")} />
                  <FieldError message={form.formState.errors.firstName?.message} />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Last Name</span>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" {...form.register("lastName")} />
                  <FieldError message={form.formState.errors.lastName?.message} />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Email</span>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" type="email" {...form.register("email")} />
                  <FieldError message={form.formState.errors.email?.message} />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Phone</span>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" {...form.register("phone")} />
                  <FieldError message={form.formState.errors.phone?.message} />
                </label>
                <label className="space-y-1 text-sm md:col-span-2">
                  <span className="font-medium text-slate-700">Country</span>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" {...form.register("country")} />
                  <FieldError message={form.formState.errors.country?.message} />
                </label>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">Booking Summary</p>
                  <p className="mt-1 font-semibold text-ink">
                    {selectedRoom.name} • {form.getValues("checkIn")} to {form.getValues("checkOut")}
                  </p>
                  <p className="text-sm text-slate-600">
                    {form.getValues("adults")} Adults, {form.getValues("children")} Children
                  </p>
                </div>
                <label className="space-y-1 text-sm">
                  <span className="font-medium text-slate-700">Special Requests</span>
                  <textarea
                    className="min-h-28 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none"
                    placeholder="Airport pickup, celebration setup, dietary notes, accessibility requests..."
                    {...form.register("specialRequests")}
                  />
                  <FieldError message={form.formState.errors.specialRequests?.message} />
                </label>
              </div>
            ) : null}

            {form.formState.errors.root ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{form.formState.errors.root.message}</p> : null}

            <div className="flex flex-wrap gap-3">
              {step > 1 ? (
                <button
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  onClick={prevStep}
                  type="button"
                >
                  Back
                </button>
              ) : null}

              {step < 4 ? (
                <button
                  className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  onClick={nextStep}
                  type="button"
                >
                  Continue
                </button>
              ) : (
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-75"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  Submit Inquiry
                </button>
              )}
            </div>
          </form>
        )}
      </div>

      <aside className="h-fit space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
          Policy Summary
        </p>
        <h3 className="font-heading text-2xl text-ink">Stay Terms</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>Check-in: 3:00 PM</li>
          <li>Check-out: 11:00 AM</li>
          <li>Free cancellation up to 48 hours (flexible rates)</li>
          <li>Accepted payments: Visa, Mastercard, bank transfer, e-wallet</li>
          <li>Security deposit may apply for selected suites</li>
        </ul>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-ink">Need instant support?</p>
          <p className="mt-1 text-sm text-slate-600">
            Contact reservations at{" "}
            <Link className="text-amber-700 underline decoration-amber-300" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </Link>{" "}
            or call{" "}
            <Link className="text-amber-700 underline decoration-amber-300" href={`tel:${siteConfig.phone}`}>
              {siteConfig.phone}
            </Link>
            .
          </p>
        </div>
      </aside>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }
  return <p className="text-xs text-red-600">{message}</p>;
}
