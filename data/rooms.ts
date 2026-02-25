import { Room } from "@/lib/types";

export const rooms: Room[] = [
  {
    slug: "deluxe-city-king",
    name: "Deluxe City King",
    shortDescription: "Elegant city-view room with warm wood textures and curated lighting.",
    description:
      "Designed for short luxury escapes, the Deluxe City King offers floor-to-ceiling windows, a plush king bed, and a dedicated lounge corner for quiet evenings.",
    pricePerNight: 189,
    capacity: 2,
    bedType: "King Bed",
    size: "38 sqm",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    ],
    inclusions: ["Daily breakfast", "High-speed WiFi", "Welcome drink", "Smart TV"],
    highlights: ["City skyline view", "Rainfall shower", "Work desk"],
    featured: true,
  },
  {
    slug: "premier-bay-queen",
    name: "Premier Bay Queen",
    shortDescription: "Spacious premium room overlooking the bay and evening lights.",
    description:
      "A favorite for couples and leisure travelers, this room blends calm interiors with soft textiles and a deep-soak bath for full reset moments.",
    pricePerNight: 224,
    capacity: 2,
    bedType: "Queen Bed",
    size: "44 sqm",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80",
    ],
    inclusions: ["Breakfast buffet", "WiFi", "Mini bar credits", "Late checkout on request"],
    highlights: ["Bay sunset view", "Deep-soak tub", "Designer lounge chair"],
    featured: true,
  },
  {
    slug: "executive-twin",
    name: "Executive Twin",
    shortDescription: "Business-ready layout with premium twin beds and ergonomic workspace.",
    description:
      "The Executive Twin keeps business trips smooth with a dedicated work area, blackout curtains, and concierge-assisted transport coordination.",
    pricePerNight: 206,
    capacity: 2,
    bedType: "Twin Beds",
    size: "41 sqm",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    ],
    inclusions: ["Breakfast", "WiFi", "Pressing service", "Airport transfer discount"],
    highlights: ["Sound-insulated walls", "Laptop-safe vault", "High-pressure shower"],
    featured: true,
  },
  {
    slug: "family-urban-suite",
    name: "Family Urban Suite",
    shortDescription: "Flexible layout with lounge zone for families or small groups.",
    description:
      "Built for shared stays, this suite features connected sleeping areas, a cozy lounge, and kid-friendly setup options without sacrificing style.",
    pricePerNight: 298,
    capacity: 4,
    bedType: "Family Suite",
    size: "62 sqm",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    ],
    inclusions: ["Family breakfast set", "WiFi", "Welcome snacks", "Extra bedding setup"],
    highlights: ["Separate lounge", "Double vanity", "Family-friendly storage"],
  },
  {
    slug: "signature-sky-suite",
    name: "Signature Sky Suite",
    shortDescription: "Our most sought-after suite with panoramic skyline backdrop.",
    description:
      "The Signature Sky Suite combines statement design with private dining setup, curated minibar, and seamless butler-assisted guest support.",
    pricePerNight: 435,
    capacity: 3,
    bedType: "King Bed",
    size: "78 sqm",
    images: [
      "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1576354302919-96748cb8299e?auto=format&fit=crop&w=1600&q=80",
    ],
    inclusions: ["Executive lounge access", "Priority check-in", "WiFi", "Breakfast"],
    highlights: ["Panoramic view", "Marble bathroom", "Private dining corner"],
    featured: true,
  },
  {
    slug: "garden-courtyard-queen",
    name: "Garden Courtyard Queen",
    shortDescription: "Quiet courtyard-facing room for restful nights and gentle mornings.",
    description:
      "This calming room is ideal for slower stays, with soft daylight, minimalist decor, and a peaceful courtyard orientation.",
    pricePerNight: 174,
    capacity: 2,
    bedType: "Queen Bed",
    size: "35 sqm",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80",
    ],
    inclusions: ["Breakfast", "WiFi", "Tea station", "Digital concierge"],
    highlights: ["Courtyard view", "Ambient reading lamp", "Stone-finish bathroom"],
  },
];

export const featuredRooms = rooms.filter((room) => room.featured).slice(0, 4);
