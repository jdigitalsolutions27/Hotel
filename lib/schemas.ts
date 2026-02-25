import { z } from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const bookingInquirySchema = z
  .object({
    checkIn: z.string().min(1, "Please select check-in date."),
    checkOut: z.string().min(1, "Please select check-out date."),
    adults: z.number().int().min(1, "At least 1 adult is required.").max(6),
    children: z.number().int().min(0).max(6),
    roomSlug: z.string().min(1, "Please choose a room type."),
    firstName: z.string().min(2, "First name is required."),
    lastName: z.string().min(2, "Last name is required."),
    email: z.string().email("Please enter a valid email."),
    phone: z.string().min(7, "Please enter a valid phone number."),
    country: z.string().min(2, "Please enter your country."),
    specialRequests: z.string().max(400).optional(),
  })
  .refine(
    (data) => {
      const checkIn = new Date(data.checkIn);
      const checkOut = new Date(data.checkOut);
      return checkIn >= today && checkOut > checkIn;
    },
    {
      message: "Check-out must be after check-in, and dates cannot be in the past.",
      path: ["checkOut"],
    },
  );

export type BookingInquiryInput = z.infer<typeof bookingInquirySchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  subject: z.string().min(2, "Please add a short subject."),
  message: z.string().min(20, "Please provide at least 20 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
