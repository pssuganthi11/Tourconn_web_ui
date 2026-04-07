"use client";

import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, LogOut } from "lucide-react";

const ProfilePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 flex flex-col items-center justify-center bg-gray-50/50">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* --- Header Card --- */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          {/* Top colored bar */}
          <div className="h-24 bg-[#f1f5f5]" />
          
          <div className="px-8 pb-8 flex flex-col items-center -mt-12">
            {/* Profile Avatar */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md border-4 border-white mb-4">
              <div className="w-full h-full rounded-full bg-[#f1f5f5] flex items-center justify-center text-[#1a706d] text-3xl font-bold">
                S
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900">Suganthi</h1>
            <p className="text-gray-500 font-medium">
              <span className="text-[#1a706d]">user:</span> USE0001
            </p>
          </div>
        </div>

        {/* --- Information Card --- */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Email Address</span>
              </div>
              <div className="bg-gray-50/80 p-4 rounded-2xl text-gray-700 font-medium border border-gray-50">
                user@tourconn.com
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Phone Number</span>
              </div>
              <div className="bg-gray-50/80 p-4 rounded-2xl text-gray-700 font-medium border border-gray-50">
                +91 90876 54321
              </div>
            </div>

            {/* Office Location */}
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Office Location</span>
              </div>
              <div className="bg-gray-50/80 p-4 rounded-2xl text-gray-700 font-medium border border-gray-50">
                Salem, Tamil Nadu
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-12 flex justify-end">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;