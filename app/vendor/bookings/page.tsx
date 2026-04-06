"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  PackageCheck,
  MapPin,
} from "lucide-react";

// Types for our Booking Data
type BookingStatus = "pending" | "confirmed" | "rejected";

interface Booking {
  id: string;
  name: string;
  avatar: string;
  packageTitle: string;
  packageId: string;
  bookingDate: string;
  email: string;
  phone: string;
  basePrice: number;
  location: string;
  travelDates: string;
  status: BookingStatus;
}

const bookingsData: Booking[] = [
  {
    id: "BK01",
    name: "suganthi",
    avatar: "S",
    packageTitle: "package: Maldives",
    packageId: "PKG-MV-01",
    bookingDate: "23/4/2026",
    email: "suganthi.p@email.com",
    phone: "+91 9876543210",
    basePrice: 125000,
    location: "Tamil Nadu, India",
    travelDates: "15 May - 20 May",
    status: "pending",
  },
  {
    id: "BK02",
    name: "Arun",
    avatar: "A",
    packageTitle: "package: Santorini Wine",
    packageId: "PKG-SN-04",
    bookingDate: "23/4/2026",
    email: "arun@email.co",
    phone: "+44 7712 345678",
    basePrice: 98000,
    location: "London, UK",
    travelDates: "02 June - 05 June",
    status: "confirmed",
  },
  {
    id: "BK03",
    name: "Tamil",
    avatar: "T",
    packageTitle: "package: Iceland Expedition",
    packageId: "PKG-IC-08",
    bookingDate: "23/4/2026",
    email: "tamil@email.cn",
    phone: "+86 138 0013 8000",
    basePrice: 165000,
    location: "Shanghai, China",
    travelDates: "10 July - 18 July",
    status: "pending",
  },
  {
    id: "BK04",
    name: "priya",
    avatar: "P",
    packageTitle: "package: Alpine Trekking",
    packageId: "PKG-AT-02",
    bookingDate: "23/4/2026",
    email: "priya@email.au",
    phone: "+61 412 345 678",
    basePrice: 140000,
    location: "Sydney, Australia",
    travelDates: "22 Aug - 29 Aug",
    status: "rejected",
  },
];

export default function VendorBookings() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 pb-10 px-4 md:px-0">
      {/* Header Section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3 md:gap-4">
          {selectedBooking && (
            <button
              onClick={() => setSelectedBooking(null)}
              className="p-2 rounded-full bg-white border border-gray-100 text-[#1a706d] hover:bg-purple-50 transition-all shadow-sm active:scale-90"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-tight uppercase">
              {selectedBooking ? "Booking Details" : "Incoming Bookings"}
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {!selectedBooking ? (
          <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-50 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[700px] md:min-w-full">
                <div className="p-4 md:p-8">
                  <div className="grid grid-cols-12 gap-4 px-6 mb-4">
                    <div className="col-span-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      User
                    </div>
                    <div className="col-span-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Client Name
                    </div>
                    <div className="col-span-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Package
                    </div>
                    <div className="col-span-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Date
                    </div>
                    <div className="col-span-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                      Status
                    </div>
                    <div className="col-span-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                      Action
                    </div>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-2">
                    {bookingsData.map((booking, index) => (
                      <div
                        key={booking.id}
                        className={`grid grid-cols-12 gap-4 items-center p-4 md:p-6 rounded-2xl transition-all hover:bg-purple-50/50 group ${
                          index % 2 === 0
                            ? "bg-white border border-gray-50"
                            : "bg-gray-50/30"
                        }`}
                      >
                        <div className="col-span-1">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a706d] text-[#1a706d] flex items-center justify-center font-bold text-sm md:text-lg shadow-inner">
                            {booking.avatar}
                          </div>
                        </div>

                        <div className="col-span-2">
                          <p className="font-bold text-gray-800 truncate text-xs md:text-sm uppercase">
                            {booking.name}
                          </p>
                        </div>

                        <div className="col-span-4">
                          <p className="text-xs md:text-sm text-gray-600 truncate font-semibold uppercase leading-tight">
                            {booking.packageTitle.replace("package: ", "")}
                          </p>
                        </div>

                        <div className="col-span-2">
                          <p className="text-[10px] md:text-xs text-gray-400 italic font-medium">
                            {booking.bookingDate}
                          </p>
                        </div>

                        <div className="col-span-2 flex justify-center">
                          <span
                            className={`text-[9px] uppercase font-bold px-3 py-1 rounded-full ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : booking.status === "rejected"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>

                        <div className="col-span-1 text-right">
                          <button
                            onClick={() => setSelectedBooking(booking)}
                            className="text-xs md:text-sm font-bold text-[#1a706d] hover:text-purple-900 transition-colors uppercase underline-offset-4 hover:underline"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-50 space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pb-6 border-b border-gray-50 text-center sm:text-left">
                <div className="w-20 h-20 md:w-20 md:h-20 rounded-full bg-[#1a706d] text-white flex items-center justify-center font-bold text-2xl md:text-2xl  shrink-0">
                  {selectedBooking.avatar}
                </div>
                <div>
                  <p className="text-xl md:text-xl font-bold text-gray-800 uppercase">
                    {selectedBooking.name}
                  </p>
                  <p className="text-[10px] md:text-sm font-medium text-[#1a706d] uppercase  bg-[#1a706d] text-white px-3 py-1 rounded-full mt-2 w-fit mx-auto sm:mx-0">
                    Guest User
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <InfoItem
                  icon={Mail}
                  label="Email"
                  value={selectedBooking.email}
                />
                <InfoItem
                  icon={Phone}
                  label="Phone"
                  value={selectedBooking.phone}
                />
                <InfoItem
                  icon={MapPin}
                  label="Location"
                  value={selectedBooking.location}
                />
              </div>
            </div>

            {/* Package Summary crd*/}
            <div className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-50 flex flex-col justify-between">
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <PackageCheck size={14} /> Package Summary
                </h4>

                <div className="space-y-1">
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                    {selectedBooking.packageTitle.replace("package: ", "")}
                  </p>
                  <p className="text-[10px] text-[#1a706d] font-bold uppercase tracking-widest">
                    {selectedBooking.packageId}
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <InfoItem
                    icon={CalendarDays}
                    label="Travel Dates"
                    value={selectedBooking.travelDates}
                  />
                  <InfoItem
                    icon={IndianRupeeIcon}
                    label="Total Price"
                    value={`₹${selectedBooking.basePrice.toLocaleString()}`}
                  />
                </div>
              </div>

              {selectedBooking.status === "pending" && (
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-50 flex flex-col gap-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-2">
                    Verify and Confirm Reservation
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 rounded-xl md:rounded-2xl transition-all shadow-lg shadow-green-100 text-xs md:text-sm active:scale-95">
                      Acept
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-500 font-bold py-3 md:py-4 rounded-xl md:rounded-2xl transition-all text-xs md:text-sm active:scale-95">
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper Components

const InfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 md:gap-4 min-w-0">
    <div className="p-2 md:p-3 bg-gray-50 rounded-lg md:rounded-xl text-gray-400 shrink-0">
      <Icon size={16} />
    </div>
    <div className="flex-1 min-w-0">
      <label className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
        {label}
      </label>
      <p className="text-xs md:text-sm font-semibold text-gray-800 truncate">
        {value}
      </p>
    </div>
  </div>
);

function IndianRupeeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  );
}
