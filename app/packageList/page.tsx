"use client";

import React, { useState, useEffect, useMemo } from "react";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import {
  packages,
  categories,
  type PackageCategory,
} from "@/mockdata/packagedetails";
import { Calendar, ChevronDown, MapPin, Search } from "lucide-react";
import Link from "next/link";

const AllPackagesPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // --- States ---
  const [destinationSearch, setDestinationSearch] = useState<string>("");
  const [priceLimit, setPriceLimit] = useState<number>(5000);
  const [selectedCategory, setSelectedCategory] = useState<
    PackageCategory | ""
  >("");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");

  // Check login status on mount
  useEffect(() => {
    const role = sessionStorage.getItem("role");
    setIsLoggedIn(role === "user");
  }, []);

  // Calculate the highest price in your mock data dynamically
  const maxPackagePrice = useMemo(() => {
    return packages.length > 0
      ? Math.max(...packages.map((p) => p.price))
      : 5000;
  }, []);

  // Set the initial slider value to the max price found
  useEffect(() => {
    setPriceLimit(maxPackagePrice);
  }, [maxPackagePrice]);

  // --- Filter & Sort Logic ---
  const filteredAndSortedPackages = useMemo(() => {
    let result = [...packages];

    // 1. Destination Search (Visible to Everyone)
    if (destinationSearch.trim() !== "") {
      const query = destinationSearch.toLowerCase();
      result = result.filter(
        (pkg) =>
          pkg.destination.toLowerCase().includes(query) ||
          pkg.title.toLowerCase().includes(query),
      );
    }

    // 2. Premium Filters (Only for Logged In Users)
    if (isLoggedIn) {
      // Budget Filter
      result = result.filter((pkg) => pkg.price <= priceLimit);

      // Category Filter
      if (selectedCategory) {
        result = result.filter((p) => p.category === selectedCategory);
      }

      // Rating Filter
      if (selectedRating !== "all") {
        result = result.filter(
          (p) => Math.floor(p.rating) >= parseInt(selectedRating),
        );
      }

      // Sorting Logic
      result.sort((a, b) => {
        if (sortBy === "low-to-high") return a.price - b.price;
        if (sortBy === "high-to-low") return b.price - a.price;
        if (sortBy === "newest")
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        return b.rating - a.rating; 
      });
    }

    return result;
  }, [
    destinationSearch,
    priceLimit,
    selectedCategory,
    selectedRating,
    sortBy,
    isLoggedIn,
  ]);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 italic">
            {isLoggedIn ? "Curated Journeys" : "Explore Packages"}
          </h1>
          <p className="text-gray-500 italic">
            {isLoggedIn
              ? "Hand-picked premium experiences for you."
              : "Find your next adventure."}
          </p>

          {/* Large Search Bar for Guests */}
          {!isLoggedIn && (
            <div className="mt-8 max-w-2xl relative">
              <input
                type="text"
                placeholder="Where do you want to go?"
                value={destinationSearch}
                onChange={(e) => setDestinationSearch(e.target.value)}
                className="w-full p-5 pl-14 bg-white shadow-xl border-none rounded-2xl outline-none focus:ring-2 ring-[#7C3AED] transition-all"
              />
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- Sidebar: PREMIUM FILTERS (Logged In Only) --- */}
          {isLoggedIn && (
            <aside className="w-full lg:w-64 space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
              {/* Search in Sidebar */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Destination
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={destinationSearch}
                    onChange={(e) => setDestinationSearch(e.target.value)}
                    className="w-full p-3 pl-10 bg-white border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 ring-[#7C3AED]"
                  />
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>

              {/* Budget Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Budget
                  </h3>
                  <span className="text-[#1a706d] font-bold">
                    ${priceLimit}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max={maxPackagePrice}
                  value={priceLimit}
                  onChange={(e) => setPriceLimit(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1a706d]"
                />
              </div>

              {/* Experience Tags */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Experience Style
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === cat.id ? "" : cat.id,
                        )
                      }
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                        selectedCategory === cat.id
                          ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                          : "bg-white text-gray-400 border-gray-100 hover:border-[#7C3AED]"
                      }`}
                    >
                      #{cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* --- Main Grid Area --- */}
          <div className="flex-1">
            {/* Sort Dropdown (Logged In Only) */}
            {isLoggedIn && (
              <div className="flex justify-end mb-8">
                <div className="relative group">
                  <select
                    value={sortBy}
                    aria-placeholder="sort"
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-100 rounded-2xl px-6 py-3 pr-12 text-xs font-bold text-gray-700 shadow-sm outline-none focus:ring-2 ring-[#7C3AED] transition-all cursor-pointer italic"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="newest">Newest</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                  </select>

                  {/* Custom Arrow Icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-[#7C3AED] transition-colors">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            )}

            {/* Results Grid */}
            {filteredAndSortedPackages.length > 0 ? (
              <div
                className={`grid gap-8 ${isLoggedIn ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
              >
                {filteredAndSortedPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-50"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={
                          typeof pkg.image === "string"
                            ? pkg.image
                            : pkg.image.src
                        }
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={pkg.title}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1a706d] text-[10px] font-bold uppercase px-3 py-1.5 rounded-full shadow-sm">
                        {pkg.category}
                      </div>
                    </div>
                    {/* Details */}
                    <div className="p-8">
                      <h2 className="text-xl font-bold mb-4 italic  text-[#1a706d] transition-colors">
                        {pkg.title}
                      </h2>
                      <div className="flex justify-between items-end">
                        <div className="text-gray-400 text-xs flex flex-col gap-2 italic">
                          <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-[#1a706d]" />{" "}
                            {pkg.destination}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-[#1a706d]" />{" "}
                            {pkg.duration}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
                            Starting at
                          </p>
                          <p className="text-2xl font-bold text-[#1a706d]">
                            ${pkg.price}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/packageList/${pkg.id}`}
                        className="text-xs font-bold text-[#1a706d] text-center underline hover:text-[#5b2ab3] transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-gray-400 italic text-lg">
                  No matching adventures found 😕
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllPackagesPage;
