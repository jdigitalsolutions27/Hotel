import Link from "next/link";

export function MobileBookNow() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Link
        aria-label="Book now"
        className="block rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-3 text-center text-sm font-semibold text-ink shadow-luxe"
        href="/booking"
      >
        Book Now
      </Link>
    </div>
  );
}
