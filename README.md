# Trav-In Hotel Website

Premium, conversion-focused hotel website built with:

- Next.js App Router
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Hook Form + Zod

## Install and Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Build and Lint

```bash
npm run lint
npm run build
```

## Project Structure

```txt
app/
  (site)/
    page.tsx
    rooms/page.tsx
    rooms/[slug]/page.tsx
    amenities/page.tsx
    booking/page.tsx
    contact/page.tsx
    gallery/page.tsx
    offers/page.tsx
    about/page.tsx
  api/inquiries/route.ts
components/
data/
lib/
```

## Where to Edit Content

- Room rates and room content: `data/rooms.ts`
- Amenities: `data/amenities.ts`
- Testimonials: `data/testimonials.ts`
- FAQ items: `data/faqs.ts`
- Offers/promos: `data/offers.ts`
- Gallery photos: `data/gallery.ts`
- Hotel contact/location/map settings: `lib/site-config.ts`

## Replacing Images

Sample images currently use remote Unsplash URLs.

Update URLs in:

- `data/rooms.ts`
- `data/amenities.ts`
- `data/gallery.ts`
- `data/offers.ts`
- `app/(site)/page.tsx` (hero and map preview image)
- `app/(site)/about/page.tsx`

If you switch to another image domain/provider, add it in `next.config.mjs` under `images.remotePatterns`.

## Booking Inquiry Flow

- Multi-step form: `components/forms/booking-form.tsx`
- Validation schema: `lib/schemas.ts` (`bookingInquirySchema`)
- API route handler: `app/api/inquiries/route.ts`
- In-memory mock storage: `lib/inquiries-store.ts`

Notes:

- Inquiries are stored in memory only and reset when the server restarts.
- A pre-filled WhatsApp link is shown after successful submission.

## Contact and Map

- Contact page: `app/(site)/contact/page.tsx`
- Contact form validation: `lib/schemas.ts` (`contactSchema`)
- Google map embed and directions URL: `lib/site-config.ts`

## Design and Styling

- Global theme + utilities: `app/globals.css`
- Tailwind theme extensions: `tailwind.config.ts`
- Shared layout/navigation/footer: `components/layout/*`

## Notes

- Fully responsive on mobile, tablet, and desktop.
- Metadata and OpenGraph are included for SEO readiness.
- Framer Motion powers section reveals and page transitions.
