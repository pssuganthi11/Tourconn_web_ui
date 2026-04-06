"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { packages } from "@/mockdata/packagedetails";
import Navbar from "@/component/layout/Navbar";
import { generatePackagePDF } from "@/utils/generatePackagePDF";
import {
  Check,
  X,
  ArrowLeft,
  CloudSun,
  ClipboardCheck,
  Download,
  ThermometerSun,
  CloudRain,
  Sun,
  User,
  Calendar,
} from "lucide-react";

const PackageDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const pkg = packages.find((p) => p.id === id);

  if (!pkg) return <div className="p-20 text-center">Package not found</div>;

  const handleDownloadPDF = () => {
    const itineraryString = Array.isArray(pkg.itinerary)
      ? pkg.itinerary.map(item => `Day ${item.day}: ${item.title} - ${item.description}`).join("\n")
      : "Arrival, Sightseeing, and Departure.";

    const pdfData = {
      packageTitle: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      description: pkg.description,
      itinerary: itineraryString,
      guide: {
        name: pkg.guideName ,
        expertise: pkg.guideExpertise ,
      },
    };

    generatePackagePDF(pdfData);
  };
  const handleBooking = () => {
    const existingBookings = JSON.parse(
      sessionStorage.getItem("myBookings") || "[]",
    );

    const isAlreadyBooked = existingBookings.some(
      (item: any) => item.id === pkg.id,
    );

    if (isAlreadyBooked) {
      alert("This package is already in your bookings!");
      router.push("/mybookings");
      return;
    }

    const newBooking = {
      ...pkg,
      bookingDate: new Date().toISOString(),
      status: "Confirmed",
    };

    const updatedBookings = [...existingBookings, newBooking];
    sessionStorage.setItem("myBookings", JSON.stringify(updatedBookings));

    // 5. Redirect to My Bookings page
    alert("Booking Successful!");
    router.push("/mybookings");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-[#1a706d] text-white px-6 py-2 rounded-lg mb-6 text-sm font-bold shadow-md"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <h1 className="text-4xl font-bold italic mb-10">{pkg.destination}</h1>

    
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1544739313-6fad02872377?q=80&w=500"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              alt="Gallery 1"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=500"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              alt="Gallery 2"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=500"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              alt="Gallery 3"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=500"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              alt="Gallery 3"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100 lg:hidden xl:block">
            <img
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=500"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              alt="Gallery 4"
            />
          </div>
        </div>

        
        {/*  Destination Overview  */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold italic text-red-500 mb-4">
            📍 Destination Overview
          </h2>
          <p className="text-gray-600 italic leading-relaxed">
            {pkg.description}
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#1a706d]/10 rounded-xl">
              <Calendar className="text-[#1a706d]" size={24} />
            </div>
            <h3 className="text-2xl font-black italic text-gray-800">
              Journey Timeline
            </h3>
          </div>

          <div className="relative space-y-6">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gray-200 ml-[-1px]"></div>

            {pkg.itinerary.map((item: any, index: number) => (
              <div key={index} className="relative flex gap-8 group">   
                <div className="flex-1 bg-white p-3 rounded shadow-sm  hover:shadow-md  mb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between ">
                    <h4 className="text-lg font-black text-gray-900 italic">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-bold text-[#1a706d] uppercase   px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                      Day {item.day}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 italic leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-200 p-8 rounded-2xl">
            <h3 className="font-bold italic mb-4">What include</h3>
            <ul className="space-y-2">
              {pkg.includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2 italic">
                  <Check size={14} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 p-8 rounded-2xl">
            <h3 className="font-bold italic mb-4">What exclude</h3>
            <ul className="space-y-2">
              {pkg.excludes.map((item, index) => (
                <li key={index} className="flex items-center gap-2 italic">
                  <X size={14} className="text-red-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-200 p-8 rounded-2xl">
            <h3 className="font-bold italic mb-4">Do's</h3>
            <ul className="space-y-2">
              {pkg.dos.map((item, index) => (
                <li key={index} className="flex items-center gap-2 italic">
                  <Check size={14} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 p-8 rounded-2xl">
            <h3 className="font-bold italic mb-4">Don'ts</h3>
            <ul className="space-y-2">
              {pkg.donts.map((item, index) => (
                <li key={index} className="flex items-center gap-2 italic">
                  <X size={14} className="text-red-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="mb-12">
          <h3 className="font-bold italic mb-6">Expert Trip Guide</h3>
          <div className="bg-gray-100 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-8 border border-gray-200">
            <div className="flex flex-col items-center text-center md:border-r md:pr-8 border-gray-300">
              <div className="w-20 h-20 bg-[#1a706d] rounded-full flex items-center justify-center mb-3 shadow-inner">
                <User size={40} className="text-white" />
              </div>
              <p className="font-bold text-lg italic text-gray-800">
                {pkg.guideName || "Skroo"}
              </p>
              <p className="text-xs font-bold text-[#1a706d] uppercase tracking-tighter">
                Guide
              </p>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 italic text-sm leading-relaxed">
                "Our experienced tour guides in {pkg.destination} are dedicated
                to making your journey smooth, safe, and unforgettable. With
                deep knowledge of the local hidden gems, they ensure you
                experience the best of what the destination has to offer."
              </p>
            </div>
          </div>
        </section>

        {/* Price Summary */}
        <div className="bg-gray-200 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-4 shadow-sm border border-gray-100">
          {/* Left Side: Price Info (65% Width) */}
          <div className="w-full md:w-[65%] text-center md:text-left">
            <h3 className="text-xl font-bold italic mb-1 text-gray-800">
              Price Summary
            </h3>
            <p className="text-gray-500 text-xs italic uppercase tracking-widest mb-2">
              Start From
            </p>
            <p className="text-6xl font-extrabold text-[#4d6ec1] tracking-tighter">
              ${pkg.price}
            </p>
          </div>

          <div className="w-full md:w-[35%] flex flex-col gap-3">
            <button
              className="w-full bg-[#1a706d] text-white text-sm font-bold py-3 rounded-xl shadow-lg hover:bg-[#3b5bb0] active:scale-95 transition-all"
              onClick={handleBooking}
            >
              Book Now
            </button>

            <button className="w-full bg-red-700 text-white text-sm font-bold py-3 rounded-xl  hover:bg-red-500 cursor-pointer active:scale-95 transition-all shadow-sm">
              Cancel
            </button>

            <button
              onClick={handleDownloadPDF}
              className="flex items-center bg-blue-900 p-3 rounded-xl  justify-center gap-2 text-[10px] border font-bold text-white  mt-1 hover:text-[#4d6ec1]"
            >
              <Download size={14} />
              Download trip pdf
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PackageDetails;
