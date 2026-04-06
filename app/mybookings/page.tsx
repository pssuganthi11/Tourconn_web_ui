"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/component/layout/Navbar";
import { packages, TravelPackage } from "@/mockdata/packagedetails";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ChevronRight, Ticket } from "lucide-react";

const MyBookingsPage = () => {
  const [bookedPackages, setBookedPackages] = useState<TravelPackage[]>([]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("myBookings");
    if (storedData) {
      const parsedBookings = JSON.parse(storedData);
      const bookedIds = parsedBookings.map((b: any) => String(b.id));
      const myItems = packages.filter((pkg) => bookedIds.includes(String(pkg.id)));
      setBookedPackages(myItems);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          
          <div>
            <h1 className="text-4xl font-black italic text-gray-900 tracking-tight">
              My Bookings
            </h1>
            <p className="text-gray-500 text-sm italic mt-10">
              Your upcoming adventures and travel history.
            </p>
          </div>
        </div>

        {bookedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-500 group overflow-hidden"
              >
                <div className="relative w-full h-64 overflow-hidden shadow-inner">
                  <Image
                    src={typeof pkg.image === "string" ? pkg.image : pkg.image.src}
                    alt={pkg.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-5 left-5 bg-white  backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-[#1a706d] shadow-sm tracking-widest z-10">
                    {pkg.category}
                  </div>
                 
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <div className=" items-center gap-2 text-[#1a706d] text-sm font-bold italic bg-[#1a706d]/5 px-3 py-1 rounded-lg">
                      <MapPin size={16} />
                      <span>{pkg.destination}</span>
                    </div>
                    

                    <h3 className="text-2xl font-black text-gray-900 leading-tight italic tracking-tight min-h-[3.5rem]">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 text-xs italic font-semibold">
                      <Calendar size={18} className="text-[#1a706d]" />
                      <span>{new Date(pkg.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Price & Action Footer inside Card */}
                  <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-end">
                    <div className="text-left">
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">
                        Total Paid
                      </p>
                      <p className="text-3xl font-black text-[#1a706d] tracking-tighter">
                        ${pkg.price}
                      </p>
                    </div>

                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[4rem] border-2 border-dashed border-gray-200">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ticket size={48} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold italic text-gray-800">
              No Bookings Found
            </h2>
            <p className="text-gray-400 italic mb-8">
              Adventure is out there. You just need to book it!
            </p>
            <Link
              href="/packageList"
              className="bg-[#1a706d] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all"
            >
              Find a Trip
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyBookingsPage;