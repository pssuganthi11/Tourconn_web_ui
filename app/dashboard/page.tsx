"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sea from "@/public/img/sea.png";

interface Booking {
  id: number;
  destination: string;
  title: string;
  date: string;
  status: string;
  image?: string;
}

const UserDashboard = () => {
  const [userName, setUserName] = useState("Guest");
  const [upcomingTrip, setUpcomingTrip] = useState<Booking | null>(null);
  const [stats, setStats] = useState({ total: 0, completed: 0, canceled: 0 });

  useEffect(() => {
    const storedUser = JSON.parse(
      sessionStorage.getItem("registeredUser") || "{}",
    );
    setUserName(storedUser.name || "User");

    const allBookings = JSON.parse(
      sessionStorage.getItem("myBookings") || "[]",
    );

    const upcoming =
      allBookings
        .filter(
          (b: { date: string | number | Date }) =>
            new Date(b.date) >= new Date(),
        )
        .sort(
          (
            a: { date: string | number | Date },
            b: { date: string | number | Date },
          ) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        )[0] || null;
    setUpcomingTrip(upcoming);

    setStats({
      total: allBookings.length,
      completed: allBookings.filter((b: { status: string; }) => b.status === "completed").length,
      canceled: allBookings.filter((b: { status: string; }) => b.status === "canceled").length,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-30">
      {/* Welcome Header */}
      <h1 className="text-3xl font-light text-gray-400">
        Welcome
        <span className="text-[#1a706d] font-bold italic"> {userName}!</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start">
        <div className="relative w-full lg:w-2/3 h-48 rounded-3xl overflow-hidden shadow-lg group">
          {upcomingTrip ? (
            <>
              
              <div className="absolute inset-0 bg-gray-900">
                <img
                  src={
                    upcomingTrip.image && typeof upcomingTrip.image === "string"
                      ? upcomingTrip.image
                      : Sea.src 
                  }
                  alt="trip"
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = Sea.src;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              {/* Overlay Text */}
              <div className="relative z-10 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest italic">
                  Upcoming trip
                </p>
                <h2 className="text-2xl font-bold mt-4 italic">
                  {upcomingTrip.destination} {upcomingTrip.title}
                </h2>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
              No upcoming trips found.
            </div>
          )}
        </div>

        {/* Right: Stats Buttons */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="bg-gray-200 p-6 rounded-3xl text-center shadow-sm hover:bg-gray-300 transition cursor-pointer">
            <p className="font-bold italic text-gray-800">
              Total Booking ({stats.total})
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-3xl text-center shadow-sm hover:bg-gray-300 transition cursor-pointer">
            <p className="font-bold italic text-gray-800">
              completed Trip ({stats.completed})
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-3xl text-center shadow-sm hover:bg-gray-300 transition cursor-pointer">
            <p className="font-bold italic text-gray-800">
              Canceled Trip ({stats.canceled})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
