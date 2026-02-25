import { type BookingInquiryInput } from "@/lib/schemas";
import { generateReference } from "@/lib/utils";

export type InquiryRecord = BookingInquiryInput & {
  reference: string;
  createdAt: string;
};

const inquiryStore: InquiryRecord[] = [];

export function addInquiry(payload: BookingInquiryInput) {
  const reference = generateReference("TRV");
  const record: InquiryRecord = {
    ...payload,
    reference,
    createdAt: new Date().toISOString(),
  };
  inquiryStore.unshift(record);
  return record;
}

export function getInquiries() {
  return inquiryStore;
}
