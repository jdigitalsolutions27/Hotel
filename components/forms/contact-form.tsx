"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { contactSchema, type ContactInput } from "@/lib/schemas";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsLoading(false);
    setSuccess(true);
    form.reset();
  });

  return (
    <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8" onSubmit={onSubmit}>
      <h2 className="font-heading text-3xl text-ink">Send us a message</h2>
      <p className="text-sm text-slate-600">Share your dates, event plans, or special requests. We will reply as quickly as possible.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Full Name</span>
          <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" {...form.register("name")} />
          <FieldError message={form.formState.errors.name?.message} />
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
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Subject</span>
          <input className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none" {...form.register("subject")} />
          <FieldError message={form.formState.errors.subject?.message} />
        </label>
      </div>

      <label className="space-y-1 text-sm">
        <span className="font-medium text-slate-700">Message</span>
        <textarea
          className="min-h-36 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-amber-500 focus:outline-none"
          placeholder="Tell us your preferred dates, room options, or event details."
          {...form.register("message")}
        />
        <FieldError message={form.formState.errors.message?.message} />
      </label>

      {success ? <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">Message received. Our team will contact you shortly.</p> : null}

      <button
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Send Message
      </button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }
  return <p className="text-xs text-red-600">{message}</p>;
}
