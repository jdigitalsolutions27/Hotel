"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-ink text-white">
      <div className="container-base grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo className="text-white" />
          <p className="mt-4 max-w-sm text-sm text-white/80">
            Luxury-modern accommodations crafted for business and leisure travelers who value elegant comfort and efficient service.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-300" />
              {siteConfig.address}
            </p>
            <a className="flex items-center gap-2 transition hover:text-amber-200" href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4 text-amber-300" />
              {siteConfig.phone}
            </a>
            <a className="flex items-center gap-2 transition hover:text-amber-200" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4 text-amber-300" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-amber-200" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-amber-200" href="/booking">
                Booking Inquiry
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg">Guest Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>24/7 Front Desk</li>
            <li>Airport Pickup</li>
            <li>Event & Functions Team</li>
            <li>Digital Concierge</li>
            <li>Best Rate Guarantee</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg">Newsletter</h3>
          <p className="mt-3 text-sm text-white/80">Get limited offers and stay updates first.</p>
          <form className="mt-4 space-y-3" onSubmit={onSubmit}>
            <input
              aria-label="Newsletter email"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-amber-300 focus:outline-none"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={email}
            />
            <button
              className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-ink transition hover:brightness-105"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          {subscribed ? <p className="mt-3 text-xs text-emerald-300">You are subscribed. Watch your inbox for offers.</p> : null}
          <div className="mt-4 flex gap-2">
            <a
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-amber-300 hover:text-amber-200"
              href="#"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-amber-300 hover:text-amber-200"
              href="#"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-amber-300 hover:text-amber-200"
              href="#"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        <p>{new Date().getFullYear()} Trav-In Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}
