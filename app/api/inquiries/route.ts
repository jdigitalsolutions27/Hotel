import { NextResponse } from "next/server";

import { addInquiry } from "@/lib/inquiries-store";
import { bookingInquirySchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bookingInquirySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const record = addInquiry(parsed.data);
  return NextResponse.json(
    {
      success: true,
      reference: record.reference,
    },
    { status: 201 },
  );
}
