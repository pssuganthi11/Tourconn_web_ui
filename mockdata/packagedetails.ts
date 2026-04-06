import Sea from "@/public/img/sea.png";
import type { StaticImageData } from "next/image";

export type PackageCategory =
  | "solo"
  | "adventure"
  | "group"
  | "festival"
  | "romantic"
  | "family";

export interface TravelPackage {
  itinerary: { day: number; title: string; description: string }[];
  guideName: string;
  guideExpertise: string;
  id: string;
  title: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
  image: string | StaticImageData;
  category: PackageCategory;
  travelers: string;
  rating: number;
  date: string;
  includes: string[];
  excludes: string[];
  dos: string[];
  donts: string[];
}

export const categories: {
  id: PackageCategory;
  label: string;
  icon: string;
}[] = [
  { id: "solo", label: "Solo", icon: "🧳" },
  { id: "adventure", label: "Adventure", icon: "🏔️" },
  { id: "group", label: "Group", icon: "👥" },
  { id: "festival", label: "Festival", icon: "🎉" },
  { id: "romantic", label: "Romantic", icon: "💕" },
  { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
];

export const packages: TravelPackage[] = [
  {
    id: "1",
    title: "Bali Bliss Retreat",
    destination: "Bali",
    description: "Discover serenity in Bali's lush rice terraces, ancient temples, and pristine beaches.",
    price: 1299,
    duration: "7 Days",
    image: Sea,
    category: "solo",
    travelers: "1",
    rating: 4.8,
    date: "2026-04-10",
    itinerary: [
      { day: 1, title: "Arrival & Ubud Check-in", description: "Transfer from airport to a boutique villa in Ubud. Welcome dinner." },
      { day: 2, title: "Rice Terraces & Temples", description: "Visit Tegallalang Rice Terrace and Tirta Empul Holy Water Temple." },
      { day: 3, title: "Monkey Forest & Yoga", description: "Morning yoga session followed by a walk through the Sacred Monkey Forest." },
      { day: 4, title: "Uluwatu Sunset", description: "Travel to the southern coast for cliffside views and Kecak Fire Dance." },
      { day: 5, title: "Beach Club Leisure", description: "A day of relaxation at a premium beach club in Seminyak." },
      { day: 6, title: "Nusa Penida Trip", description: "Fast boat trip to Kelingking Beach and Broken Beach." },
      { day: 7, title: "Spa & Departure", description: "Traditional Balinese spa treatment before your flight home." }
    ],
    guideName: "Suganthi",
    guideExpertise: "Spiritual Wellness & Local Culture",
    includes: ["Boutique Villa Stay", "Daily Yoga Sessions", "Airport Transfers", "Traditional Balinese Massage"],
    excludes: ["International Flights", "Lunch & Dinner", "Visa Fees", "Personal Souvenirs"],
    dos: ["Dress modestly at temples", "Use both hands for giving/receiving", "Carry a reusable water bottle"],
    donts: ["Don't step on street offerings (Canang Sari)", "Don't drink tap water", "Don't use your left hand for eating"]
  },
  {
    id: "2",
    title: "Swiss Alps Adventure",
    destination: "Switzerland",
    description: "Conquer majestic peaks and breathtaking trails in the heart of the Swiss Alps.",
    price: 2499,
    duration: "10 Days",
    image: Sea,
    category: "adventure",
    travelers: "2-4",
    rating: 4.9,
    date: "2026-05-15",
    itinerary: [
      { day: 1, title: "Zurich to Interlaken", description: "Scenic train journey and lakeside check-in." },
      { day: 2, title: "Lake Brienz Cruise", description: "Morning boat tour followed by exploring the woodcarving village." },
      { day: 3, title: "Jungfraujoch Peak", description: "Train to the 'Top of Europe' at 3,454 meters." },
      { day: 4, title: "Grindelwald Hiking", description: "Trekking the First Cliff Walk with panoramic mountain views." },
      { day: 5, title: "Lauterbrunnen Valley", description: "Explore the valley of 72 waterfalls and Mürren village." },
      { day: 6, title: "Zermatt Arrival", description: "Travel to the car-free village at the foot of the Matterhorn." },
      { day: 7, title: "Gornergrat Railway", description: "High-altitude views of the glaciers and Matterhorn peak." },
      { day: 8, title: "Matterhorn Glacier Paradise", description: "Highest cable car station in Europe for year-round snow." },
      { day: 9, title: "Glacier Express", description: "Panoramic train ride through the heart of the Alps." },
      { day: 10, title: "Zurich Departure", description: "Final Swiss breakfast and airport transfer." }
    ],
    guideName: "Marc Alpine",
    guideExpertise: "Mountain Trekking & Alpine Survival",
    includes: ["Mountain Lodge Accommodation", "Swiss Travel Pass", "Professional Trekking Gear", "Breakfast & Energy Packs"],
    excludes: ["Ski Rentals", "Dinner Beverages", "Travel Insurance"],
    dos: ["Validate train tickets", "Carry high-altitude sunblock", "Say 'Grüezi' to locals"],
    donts: ["Don't underestimate weather changes", "Don't litter on trails", "Don't be late for trains"]
  },
  {
    id: "3",
    title: "Thailand Group Explorer",
    destination: "Thailand",
    description: "Experience Thailand's vibrant culture, street food, and island-hopping with new friends.",
    price: 899,
    duration: "5 Days",
    image: Sea,
    category: "group",
    travelers: "5-10",
    rating: 4.7,
    date: "2026-04-20",
    itinerary: [
      { day: 1, title: "Bangkok Street Food", description: "Night market tour and authentic Thai food tasting." },
      { day: 2, title: "The Grand Palace", description: "Guided tour of the Emerald Buddha and historic shrines." },
      { day: 3, title: "Phuket Flight", description: "Fly south and check into a beachfront hostel/hotel." },
      { day: 4, title: "Phi Phi Islands", description: "Full-day speedboat tour and snorkeling at Maya Bay." },
      { day: 5, title: "Farewell Lunch", description: "Final group gathering and transfer to Phuket airport." }
    ],
    guideName: "Somchai Lee",
    guideExpertise: "History & Southeast Asian Gastronomy",
    includes: ["Group Stays", "Island Boat Transfers", "Guided Food Tours", "Local Tuk-Tuk transport"],
    excludes: ["Alcoholic Beverages", "Elephant Sanctuary entry", "Guide Tips"],
    dos: ["Remove shoes in temples", "Respect the Royal Family", "Smile often"],
    donts: ["Don't touch anyone's head", "Don't point feet at Buddha statues", "Don't over-bargain in small shops"]
  },
  {
    id: "4",
    title: "Rio Carnival Fiesta",
    destination: "Brazil",
    description: "Dance through the streets of Rio during the world's most iconic carnival celebration.",
    price: 1899,
    duration: "6 Days",
    image: Sea,
    category: "festival",
    travelers: "2-6",
    rating: 4.6,
    date: "2026-02-25",
    itinerary: [
      { day: 1, title: "Welcome to Rio", description: "Hotel check-in at Copacabana and welcome drinks." },
      { day: 2, title: "Christ the Redeemer", description: "Cog train to Corcovado mountain and Sugarloaf sunset." },
      { day: 3, title: "Sambadrome Night", description: "The main event: watching the elite Samba schools parade." },
      { day: 4, title: "Bloco Street Party", description: "Joining local street bands (blocos) for a daytime party." },
      { day: 5, title: "Santa Teresa Tour", description: "Bohemian neighborhood tour and the Selaron Steps." },
      { day: 6, title: "Departure", description: "Final Acai bowl on the beach and airport transfer." }
    ],
    guideName: "Ricardo Silva",
    guideExpertise: "Event Coordination & Samba History",
    includes: ["Sambadrome Tickets", "Costume Workshop", "4-Star Hotel", "Carnival Survival Kit"],
    excludes: ["Costume purchase", "Dinner at Churrascarias", "Internal flights"],
    dos: ["Stay hydrated", "Use a front-pouch for phones", "Learn basic Portuguese"],
    donts: ["Don't wear expensive jewelry", "Don't walk on beaches at night", "Don't take photos without asking"]
  },
  {
    id: "5",
    title: "Maldives Honeymoon",
    destination: "Maldives",
    description: "Romantic overwater villas, sunset dinners, and crystal-clear waters await.",
    price: 3499,
    duration: "8 Days",
    image: Sea,
    category: "romantic",
    travelers: "2",
    rating: 5.0,
    date: "2026-06-05",
    itinerary: [
      { day: 1, title: "Seaplane Arrival", description: "Scenic flight and arrival at your private island resort." },
      { day: 2, title: "Overwater Living", description: "Relaxation and snorkeling directly from your villa deck." },
      { day: 3, title: "Sandbank Picnic", description: "Private lunch on a secluded sandbank surrounded by turquoise water." },
      { day: 4, title: "Dolphin Cruise", description: "Sunset yacht cruise to watch local spinner dolphins." },
      { day: 5, title: "Spa & Wellness", description: "Couples massage and holistic therapy session." },
      { day: 6, title: "Underwater Dining", description: "Exquisite lunch at the world's first undersea restaurant." },
      { day: 7, title: "Candlelight Dinner", description: "Private dinner under the stars on the beach." },
      { day: 8, title: "Departure", description: "Last island breakfast and seaplane transfer." }
    ],
    guideName: "Aisya Noor",
    guideExpertise: "Marine Biology & Luxury Hospitality",
    includes: ["Seaplane Transfers", "All-Inclusive Dining", "Beach Dinner", "Snorkeling Equipment"],
    excludes: ["PADI Certification", "High-end Champagne", "Tips"],
    dos: ["Wear reef-safe sunscreen", "Try Mas Huni breakfast", "Take sunset photos"],
    donts: ["Don't touch coral reefs", "Don't bring alcohol (prohibited)", "Don't collect seashells"]
  },
  {
    id: "6",
    title: "Tokyo Family Fun",
    destination: "Japan",
    description: "From Disneyland to ancient shrines — a perfect blend of fun and culture for families.",
    price: 2199,
    duration: "9 Days",
    image: Sea,
    category: "family",
    travelers: "3-5",
    rating: 4.8,
    date: "2026-07-12",
    itinerary: [
      { day: 1, title: "Tokyo Arrival", description: "Shinjuku exploration and robot cafe visit." },
      { day: 2, title: "Disneyland Day", description: "A full day of magic at Tokyo Disneyland." },
      { day: 3, title: "Ghibli & Harajuku", description: "Studio Ghibli Museum and colorful Harajuku street." },
      { day: 4, title: "Kyoto Bullet Train", description: "Shinkansen ride to the cultural heart of Japan." },
      { day: 5, title: "Arashiyama Bamboo", description: "Walking through bamboo groves and monkey park." },
      { day: 6, title: "Nara Deer Park", description: "Feeding friendly deer and visiting Great Buddha Temple." },
      { day: 7, title: "Universal Studios", description: "Day trip to Osaka for Super Nintendo World." },
      { day: 8, title: "Return to Tokyo", description: "Last-minute souvenir shopping in Akihabara." },
      { day: 9, title: "Departure", description: "Narita Express transfer to the airport." }
    ],
    guideName: "Kenji Sato",
    guideExpertise: "Family Travel & Japanese Pop Culture",
    includes: ["Theme Park Tickets", "Pocket Wi-Fi", "Family Suites", "Suica Card"],
    excludes: ["Daily Lunch", "Personal Shopping", "Stroller rentals"],
    dos: ["Carry a trash bag", "Stand left on escalators", "Try vending machines"],
    donts: ["Don't talk loudly on trains", "Don't eat while walking", "Don't tip"]
  },
  {
    id: "7",
    title: "Iceland Solo Wanderer",
    destination: "Iceland",
    description: "Chase the Northern Lights and explore volcanic landscapes on your own terms.",
    price: 1799,
    duration: "6 Days",
    image: Sea,
    category: "solo",
    travelers: "1",
    rating: 4.9,
    date: "2026-09-18",
    itinerary: [
      { day: 1, title: "Reykjavik Arrival", description: "City walk, visit Hallgrímskirkja and local lagoons." },
      { day: 2, title: "Golden Circle", description: "Visit Þingvellir National Park, Geysir, and Gullfoss waterfall." },
      { day: 3, title: "South Coast", description: "Seljalandsfoss waterfall and the Skógafoss hike." },
      { day: 4, title: "Black Sand Beach", description: "Exploring Reynisfjara and the Vik village cliffs." },
      { day: 5, title: "Blue Lagoon", description: "Morning soak in geothermal waters and evening Aurora hunt." },
      { day: 6, title: "Departure", description: "Keflavik airport transfer." }
    ],
    guideName: "Helga Jón",
    guideExpertise: "Geology & Astrophotography",
    includes: ["4x4 Rental Car", "Boutique Stays", "Blue Lagoon Entry", "Aurora Tour"],
    excludes: ["Car Fuel", "Food & Drinks", "Hiking Boots"],
    dos: ["Check wind forecasts", "Shower before pools", "Bring windproof gear"],
    donts: ["Don't drive off-road", "Don't stop on highways for photos", "Don't rely on Aurora visibility"]
  },
  {
    id: "8",
    title: "Nepal Trekking Expedition",
    destination: "Nepal",
    description: "Trek to Everest Base Camp through stunning Himalayan scenery and Sherpa villages.",
    price: 1599,
    duration: "14 Days",
    image: Sea,
    category: "adventure",
    travelers: "2-8",
    rating: 4.7,
    date: "2026-10-10",
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", description: "Trip briefing and welcome dinner in Thamel." },
      { day: 2, title: "Flight to Lukla", description: "Start the trek to Phakding village." },
      { day: 3, title: "Namche Bazaar", description: "Challenging hike to the Sherpa capital." },
      { day: 4, title: "Acclimatization", description: "Rest day with views of Everest and Ama Dablam." },
      { day: 5, title: "Tengboche Monastery", description: "Hike to the famous monastery at 3,867m." },
      { day: 6, title: "Dingboche Village", description: "Entering the high-altitude landscape." },
      { day: 7, title: "Rest Day", description: "Short hike to Nangkartshang Peak for views." },
      { day: 8, title: "Lobuche Trek", description: "Walking along the lateral moraine of the Khumbu Glacier." },
      { day: 9, title: "Everest Base Camp", description: "The highlight! Reaching the base camp of the world's highest peak." },
      { day: 10, title: "Kala Patthar", description: "Sunrise hike for the best view of Everest." },
      { day: 11, title: "Descent to Pheriche", description: "Starting the journey back down." },
      { day: 12, title: "Return to Namche", description: "Celebrating the trek completion with locals." },
      { day: 13, title: "Back to Lukla", description: "Final trekking day." },
      { day: 14, title: "Flight to Kathmandu", description: "Farewell dinner and departure." }
    ],
    guideName: "Pasang Sherpa",
    guideExpertise: "High-Altitude Mountaineering",
    includes: ["Trekking Permits", "Tea House Stays", "Kathmandu Hotel", "Porter Services"],
    excludes: ["Mandatory Insurance", "Hot Showers", "Charging fees"],
    dos: ["Walk left of Mani stones", "Drink 5L water daily", "Keep batteries warm"],
    donts: ["Don't ignore altitude symptoms", "Don't rush (Climb high, sleep low)", "Don't forget to tip porters"]
  },
];