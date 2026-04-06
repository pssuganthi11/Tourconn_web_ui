"use client";
import React from "react";
import { 
  Upload, MapPin, IndianRupee, Clock, 
  ClipboardList, Send, X, UserCheck, 
  Star, Image as ImageIcon, 
  Plus
} from "lucide-react";

export default function AddPackage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1a706d] flex items-center gap-2">
          Create New Tour Package
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* 1. Basic Information Card */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-sm font-bold text-[#1a706d] uppercase tracking-widest flex items-center gap-2">
            <ClipboardList size={16} /> Package Details
          </h3>
          
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
              Package Title
            </label>
            <input
              type="text"
              placeholder="e.g., Australia Tour Package"
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-gray-800 font-medium focus:ring-2 ring-purple-100 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block flex items-center gap-2">
              <MapPin size={14} /> Destination Overview
            </label>
            <textarea
              rows={3}
              placeholder="Describe the stunning beaches..."
              className="w-full bg-gray-50 border-none rounded-2xl p-4 text-gray-600 focus:ring-2 ring-purple-100 outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block flex items-center gap-2">
                <IndianRupee size={14} /> Package Price
              </label>
              <input
                type="text"
                placeholder="Starting from ₹1,50,000"
                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium focus:ring-2 ring-purple-100 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block flex items-center gap-2">
                <Clock size={14} /> Duration
              </label>
              <input
                type="text"
                placeholder="e.g., 6 Nights / 7 Days"
                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium focus:ring-2 ring-purple-100 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-sm font-bold text-[#1a706d] uppercase tracking-widest flex items-center gap-2">
            <UserCheck size={18} /> Guide Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-3 flex flex-col items-center">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block w-full text-center md:text-left">
                Guide Photo
              </label>
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#1a706d] text-white bg-[#1a706d] flex flex-col items-center justify-center text-[#1a706d] cursor-pointer hover:bg-[#1a706d]/10 transition-colors group relative overflow-hidden">
                <ImageIcon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold mt-1">Upload</span>
              </div>
            </div>

            <div className="md:col-span-9 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                  Guide Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Alex Thompson"
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 text-gray-800 font-medium focus:ring-2 ring-purple-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block flex items-center gap-2">
                  <Star size={14} className="text-yellow-500" /> Expertise / Designation
                </label>
                <input
                  type="text"
                  placeholder="e.g., Master Guide / Wildlife Expert"
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 text-gray-800 font-medium focus:ring-2 ring-purple-100 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 block">
            Gallery Images
          </label>
          <div className="border-2 border-dashed border-purple-100 rounded-[24px] p-12 flex flex-col items-center justify-center bg-purple-50/30 transition-hover hover:bg-purple-50/50 cursor-pointer">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 text-[#1a706d]">
              <Upload size={32} />
              <input type="file" className="hidden" />
            </div>
            <p className="font-bold text-gray-700">Upload Package Photos</p>
            <p className="text-sm text-gray-400 mt-1">PNG, JPG or WEBP (Max 5MB per file)</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button className="flex-1 bg-[#1a706d]  text-white py-4 rounded-2xl font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <Send size={18} /> Post Package
          </button>
          <button className="flex-1  border border-red-500 text-red-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors">
            <X size={18} /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

