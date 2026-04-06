"use client";
import React, { useState } from "react";
import { Search, Filter, Edit3, Trash2, Eye, MapPin, IndianRupee, Plus } from "lucide-react";
import Link from "next/link";

const initialPackages = [
  { id: "PKG-MV-01", name: "Maldives Luxury Escape", destination: "Maldives", price: 125000, duration: "5N/6D", status: "Active" },
  { id: "PKG-AU-02", name: "Australia Great Barrier Reef", destination: "Australia", price: 185000, duration: "7N/8D", status: "Active" },
  { id: "PKG-SN-04", name: "Santorini Sunset Wine Tour", destination: "Greece", price: 95000, duration: "4N/5D", status: "Draft" },
  { id: "PKG-IC-08", name: "Iceland Northern Lights", destination: "Iceland", price: 165000, duration: "6N/7D", status: "Active" },
];

export default function PackageListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [packages] = useState(initialPackages);

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight uppercase">My Packages</h2>
        </div>
        
        <Link href="/vendor/addpackage" className="bg-[#1a706d] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-purple-100 flex items-center gap-2 self-start md:self-center hover:scale-[1.02] transition-transform">
          <Plus size={18} /> Add New Package
        </Link>
      </div>

      <div className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-50 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by Package Name or ID..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 ring-purple-100 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-50 group hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#1a706d] uppercase  shadow-sm">
                  {pkg.status}
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                   <ImageIcon size={48} />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-[#1a706d] uppercase tracking-widest mb-1">{pkg.id}</p>
                  <h3 className="text-lg font-bold text-gray-800 ">{pkg.name}</h3>
                  <div className="text-lg font-bold text-gray-800 ">
                     {pkg.destination}
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-y border-gray-50">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold  ">Price</p>
                    <p className="text-sm font-bold text-gray-800 flex items-center">
                      <IndianRupee size={12} /> {pkg.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-bold  ">Duration</p>
                    <p className="text-sm font-bold text-gray-800">{pkg.duration}</p>
                  </div>
                </div>

               
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-[32px] border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No packages found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Small helper for missing Lucide icon
function ImageIcon({ size }: { size: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;
}