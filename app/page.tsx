"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRole } from "@/utils/auth";

import HeroSection from "@/component/home/HeroSection";
import TestimonialSection from "@/component/home/Testimonial";
import PackageResults from "@/component/home/PageResult";
import CategoryFilter from "@/component/home/CategoryFilter";
import { packages, type PackageCategory } from "@/mockdata/packagedetails";

export default function Home() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const role = getRole();

  useEffect(() => {
    if (role === "user") {
      router.replace("/packageList");
    } else if (role === "vendor") {
      router.replace("/vendor/dashboard");
    } else if (role === "admin") {
      router.replace("/admin/dashboard");
    }
  }, [role, router]);

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (hasSearched) {
      if (destination.trim()) {
        const q = destination.toLowerCase();
        result = result.filter(
          (p) =>
            p.destination.toLowerCase().includes(q) ||
            p.title.toLowerCase().includes(q)
        );
      }

      if (date) {
        result = result.filter(
          (p) =>
            new Date(p.date).toDateString() === new Date(date).toDateString()
        );
      }

      if (travelers) {
        const count = Number(travelers);
        result = result.filter((p) => {
          if (!p.travelers.includes("-")) {
            return count === Number(p.travelers);
          }
          const [min, max] = p.travelers.split("-").map(Number);
          return count >= min && count <= max;
        });
      }
    }

    return result;
  }, [destination, date, travelers, selectedCategory, hasSearched]);

  return (
    <div className="flex flex-col gap-0">
     

      <HeroSection
        destination={destination}
        date={date}
        travelers={travelers}
        onDestinationChange={(v: string) => {
          setDestination(v);
          setHasSearched(false);
        }}
        onDateChange={setDate}
        onTravelersChange={setTravelers}
        onSearch={() => setHasSearched(true)}
      />

      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto w-full px-6 py-10">
        <PackageResults
          packages={
            hasSearched
              ? filteredPackages
              : filteredPackages.slice(0, 4) 
          }
          hasSearched={hasSearched}
        />
      </div>

      <TestimonialSection />
    </div>
  );
}