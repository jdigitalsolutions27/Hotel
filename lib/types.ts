export type BedType = "King Bed" | "Queen Bed" | "Twin Beds" | "Family Suite";

export type Room = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  bedType: BedType;
  size: string;
  images: string[];
  inclusions: string[];
  highlights: string[];
  featured?: boolean;
};

export type Amenity = {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: "UtensilsCrossed" | "Waves" | "Dumbbell" | "PartyPopper" | "Plane";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Offer = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  discountLabel: string;
  validUntil: string;
  image: string;
};
