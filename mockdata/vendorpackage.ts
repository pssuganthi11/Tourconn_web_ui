
type PackageStatus = "pending" | "active" | "rejected";

interface GuideInfo {
  name: string;
  expertise: string;
  avatar: string; 
}

interface TourPackage {
  id: string;
  vendorName: string;
  vendorId: string;
  packageTitle: string;
  price: number;
  duration: string;
  destination: string;
  description: string;
  itinerary: string;
  imageUrl: string;
  status: PackageStatus;
  guide: GuideInfo;
}


const initialIncomingPackages: TourPackage[] = [
  {
    id: "PKG-MV-901",
    vendorName: "Maldives Escapes Pvt Ltd",
    vendorId: "VND-005",
    packageTitle: "Maldives Getaway",
    price: 75000,
    duration: "12 Days",
    destination: "Maldives",
    description: "Experience the soul of this journey with luxury overwater villas and crystal clear lagoons.",
    itinerary: "Day 1: Arrival and Speedboat transfer. Day 2: Snorkeling.",
    imageUrl: "/img/sea.png", 
    status: "pending",
    guide: { name: "manoj", expertise: "Master Guide", avatar: "m" }
  },
  {
    id: "PKG-IS-204",
    vendorName: "buddha Adventures",
    vendorId: "VND-102",
    packageTitle: "Iceland Expedition",
    price: 165000,
    duration: "7 Days",
    destination: "Reykjavik, Iceland",
    description: "Midnight Northern Lights Expedition across the volcanic landscapes of Iceland.",
    itinerary: "Day 1: Blue Lagoon. Day 2: Golden Circle Tour. Day 3: South Coast Waterfalls...",
    imageUrl: "/img/sea.png",
    status: "pending",
    guide: { name: "Rose", expertise: "Wildlife Expert", avatar: "R" }
  },
];
export { initialIncomingPackages };
export type { TourPackage, PackageStatus, GuideInfo };
