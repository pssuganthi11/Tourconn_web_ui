"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import heroImage from "@/public/img/sea.png";

const HeroSection = ({
  destination,
  date,
  travelers,
  onDestinationChange,
  onDateChange,
  onTravelersChange,
  onSearch,
}: any) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 font-mono italic">
      <Image src={heroImage} alt="Hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-5xl text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Explore the World with <br />
          <span className="text-[#1a706d] font-mono italic">Tourconn</span>
        </h1>

        <div className="mt-6 bg-white/80 rounded-xl p-4 text-black">
          <div className="flex flex-col md:flex-row gap-3">
            
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => onDestinationChange(e.target.value)}
              className="outline-none p-2 rounded w-full "
            />

            <input
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              className="outline-none p-2 rounded w-full "
            />

            <input
              type="text"
              placeholder="Travelers"
              value={travelers}
              onChange={(e) => onTravelersChange(e.target.value)}
              className="outline-none p-2 rounded w-full "
              min={1}
            />

            <button
              onClick={onSearch}
              className="bg-[#1a706d] text-white px-4 py-2 rounded"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;