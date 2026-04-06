"use client";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  ClipboardList,
  Star,
  CheckCircle,
  XCircle,
} from "lucide-react";

import {
  TourPackage,
  PackageStatus,
  initialIncomingPackages,
} from "@/mockdata/vendorpackage";

export default function AdminPackageApproval() {
  const [packages, setPackages] = useState(initialIncomingPackages);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(
    null,
  );

  const updateStatus = (id: string, newStatus: PackageStatus) => {
    setPackages((prev) => prev.filter((p) => p.id !== id));
    setSelectedPackage(null);
    alert(`Package ${newStatus === "active" ? "Approved" : "Rejected"}`);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10 px-4 md:px-0 pt-10">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        {selectedPackage && (
          <button
            onClick={() => setSelectedPackage(null)}
            className="p-2.5 rounded-full bg-white border border-gray-100 text-[#1a706d] hover:bg-gray-50 shadow-sm"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <div>
          <p className="text-gray-500 text-sm">
            {selectedPackage
              ? `Checking details for ${selectedPackage.id}`
              : "Packages waiting for admin approval"}
          </p>
        </div>
      </div>

      {!selectedPackage ? (
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="border border-gray-50">
                  <th className="px-8 py-10 text-[10px] font-bold text-gray-400 captialize ">
                    Vendor Name
                  </th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 captialize ">
                    Package Title
                  </th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 captialize ">
                    Duration
                  </th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 captialize  text-right">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-50">
                {packages.map((pkg) => (
                  <tr
                    key={pkg.id}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    {/* Vendor Name */}
                    <td className="px-8 py-6">
                      <p className="font-bold text-gray-800 text-sm uppercase">
                        {pkg.vendorName}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium">
                        ID: {pkg.vendorId}
                      </p>
                    </td>

                    {/* Package Title */}
                    <td className="px-8 py-6">
                      <p className="text-sm text-gray-600 font-semibold uppercase">
                        {pkg.packageTitle}
                      </p>
                    </td>

                    {/* Duration */}
                    <td className="px-8 py-6">
                      <span className="text-xs text-gray-500 italic font-medium bg-gray-100 px-3 py-1 rounded-full">
                        {pkg.duration}
                      </span>
                    </td>

                    {/* Action Button */}
                    <td className="px-8 py-6 text-right">
                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="text-xs font-black text-[#1a706d] hover:text-[#155a57] hover:underline uppercase tracking-tighter transition-all"
                      >
                        Review Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-none animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Left Column: Image & Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[40px] shadow-sm  space-y-6">
              <div className="relative h-64 md:h-96 w-full rounded-[30px] overflow-hidden bg-gray-100">
                <img
                  src={selectedPackage.imageUrl}
                  className="w-full h-full object-cover"
                  alt="Package"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[#1a706d] font-bold text-sm shadow-sm flex items-center gap-2">
                  <MapPin size={14} /> {selectedPackage.destination}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 uppercase italic">
                  {selectedPackage.packageTitle}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {selectedPackage.description}
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-[#1a706d] text-sm uppercase tracking-widest flex items-center gap-2">
                    <ClipboardList size={16} /> Itinerary Overview
                  </h4>
                  <p className="text-sm text-gray-600">
                    {selectedPackage.itinerary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Stats & Actions */}
          <div className="space-y-6">
            {/* Pricing & Duration Card */}
            <div className="bg-[#1a706d] text-white p-8 rounded-[40px] shadow-lg space-y-6">
              <div className="flex justify-between items-center border-b border-white/20 pb-4">
                <span className="text-xs uppercase font-bold opacity-80">
                  Total Price
                </span>
                <span className="text-2xl font-black">
                  ₹{selectedPackage.price.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase font-bold opacity-80">
                  Trip Length
                </span>
                <span className="text-lg font-bold flex items-center gap-2">
                  <Clock size={18} /> {selectedPackage.duration}
                </span>
              </div>
            </div>

            {/* Guide Info Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50 space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Assigned Guide
              </h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border-2 border-white shadow-sm">
                  {selectedPackage.guide.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    {selectedPackage.guide.name}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    {selectedPackage.guide.expertise}
                  </p>
                </div>
              </div>
            </div>

            {/* Approval Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => updateStatus(selectedPackage.id, "active")}
                className="w-full bg-[#1a706d] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-md"
              >
                Approve 
              </button>
              <button
                onClick={() => updateStatus(selectedPackage.id, "rejected")}
                className="w-full border border-red-500 text-red-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
              >
               cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
