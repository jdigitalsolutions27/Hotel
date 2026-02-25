import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-base flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">404</p>
      <h1 className="mt-4 font-heading text-4xl text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600">The page you are looking for does not exist or may have moved.</p>
      <Link className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800" href="/">
        Back to Home
      </Link>
    </div>
  );
}
