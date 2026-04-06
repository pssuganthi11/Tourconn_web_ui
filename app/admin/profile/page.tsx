"use client";
import React from "react";
import {
  User,
  Mail,
  ShieldCheck,
  MapPin,
  Phone,
  Camera,
  Lock,
  Edit3,
} from "lucide-react";

export default function AdminProfile() {
  const adminData = {
    name: "Suganthi",
    email: "admin@tourconn.com",
    phone: "+91 90876 54321",
    location: "Salem, Tamil Nadu",
    role: "Super Admin",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 pb-10 px-4 md:px-0">
      <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-md border border-gray-100 overflow-hidden">
        <div className="h-16 md:h-20 bg-[#1a706d]/10 w-full" />

        <div className="px-6 pb-8 flex flex-col items-center justify-center -mt-10 md:-mt-12">
          <div className="relative mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-1 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gray-50 text-[#1a706d] flex items-center justify-center text-2xl md:text-3xl font-black border-2 border-gray-100 uppercase">
                {adminData.name.charAt(0)}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
              {adminData.name}
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium mt-1">
              <span className="text-[#1a706d] font-bold uppercasetext-sm tracking-widest mr-1">
                Role:
              </span>
              {adminData.role}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-100">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2 border-b border-gray-50 pb-4">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Mail size={12} /> Email Address
            </label>
            <p className="bg-gray-50 p-4 rounded-2xl text-gray-700 font-semibold border border-transparent">
              {adminData.email}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Phone size={12} /> Phone Number
            </label>
            <p className="bg-gray-50 p-4 rounded-2xl text-gray-700 font-semibold border border-transparent">
              {adminData.phone}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <MapPin size={12} /> Office Location
            </label>
            <p className="bg-gray-50 p-4 rounded-2xl text-gray-700 font-semibold border border-transparent">
              {adminData.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
