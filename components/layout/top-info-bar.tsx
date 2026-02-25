import { Languages, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function TopInfoBar() {
  return (
    <div className="bg-ink text-white">
      <div className="container-base flex flex-wrap items-center justify-between gap-3 py-2 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/90">
          <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-1.5 transition hover:text-amber-200">
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 transition hover:text-amber-200">
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.email}
          </a>
          <p className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.address}
          </p>
        </div>
        <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-white/90">
          <Languages className="h-3.5 w-3.5" />
          English | Filipino
        </p>
      </div>
    </div>
  );
}
