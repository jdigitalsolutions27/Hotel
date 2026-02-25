import { Landmark } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      aria-label="Trav-In Hotel homepage"
      href="/"
      className={cn("inline-flex items-center gap-2 font-heading text-xl font-semibold tracking-wide", className)}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <Landmark className="h-5 w-5" />
      </span>
      <span>
        Trav-In <span className="text-amber-600">Hotel</span>
      </span>
    </Link>
  );
}
