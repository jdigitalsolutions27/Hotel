"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-sand/90 backdrop-blur-xl">
      <nav aria-label="Primary" className="container-base flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active ? "bg-amber-100 text-amber-700" : "text-slate-700 hover:bg-white hover:text-slate-950",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/booking"
            className="rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-ink shadow-luxe transition hover:brightness-105"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container-base space-y-2 py-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="mt-3 block rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-4 py-3 text-center text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
