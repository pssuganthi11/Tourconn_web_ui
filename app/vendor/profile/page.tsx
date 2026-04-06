"use client";
import { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin, Camera, Edit2, Save, Fingerprint, BadgeCheck } from "lucide-react";

const VendorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    vendorId: "VND-2026-0405", 
    name: "Suganthi Pattappan",
    role: "Premium Curator",
    email: "suganthi.p@tourconn.com",
    phone: "+91 9876543210",
    location: "Tamil Nadu, India",
    avatar: "", 
  });

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
    if (storedName) {
      setProfile((prev) => ({ ...prev, name: storedName }));
    }
  }, []);

  const handleSave = () => {
    sessionStorage.setItem("userName", profile.name);
    setIsEditing(false);
  };

  // Get first letter for fallback
  const firstLetter = profile.name.charAt(0).toUpperCase();

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 pb-10 px-4 md:px-0">
      {/* Header */}
        
        {/* <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className={`gap-2 px-6 py-3 rounded-xl font-semibold shadow-sm transition-all w-full md:w-auto ${
            isEditing
              ? "bg-[#1a706d] hover:bg-[#1a706d] text-white shadow-green-100"
              : "bg-[#1a706d] hover:bg-[#1a706d] text-white shadow-purple-100"
          }`}
        >
          {isEditing ? "Save " : "Edit"}
        </button> */}
      <h1 className="text-2xl font-semibold">Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Avatar & ID */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 flex flex-col items-center text-center relative overflow-hidden">
            {/* Decorative Background for Profile */}
            <div className="absolute top-0 inset-x-0 h-24 bg-[#1a706d]" />
            
            <div className="relative mb-6 mt-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1a706d] text-white flex items-center justify-center text-4xl md:text-5xl font-bold border-4 border-white shadow-xl">
                {profile.avatar ? (
                  <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                ) : (
                  firstLetter
                )}
              </div>
              {isEditing && (
                <button className="absolute bottom-1 right-1 bg-white text-[#1a706d] p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform border border-gray-100">
                  <Camera size={18} />
                </button>
              )}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              {profile.name} <BadgeCheck className="text-blue-500" size={20} />
            </h3>
            <p className="text-xs text-[#1a706d] font-bold tracking-widest uppercase mt-1 bg-purple-50 px-3 py-1 rounded-full">
              {profile.role}
            </p>

            {/* Unique ID Section - Non Editable */}
            <div className="mt-8 pt-6 border-t border-gray-50 w-full">
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                <Fingerprint size={14} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Verified Vendor ID</span>
              </div>
              <p className="font-mono text-sm font-bold text-gray-700 bg-gray-50 py-2 rounded-lg">
                {profile.vendorId}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Account Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm ">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-8 md:mb-10 flex items-center gap-2">
               Account Information
            </h4>
            
            <div className="space-y-6 md:space-y-8">
              <ProfileField
                icon={User}
                label="Full Name"
                value={profile.name}
                isEditing={isEditing}
                onChange={(v: any) => setProfile((p) => ({ ...p, name: v }))}
              />
              
              <ProfileField
                icon={Mail}
                label="Email Address"
                value={profile.email}
                isEditing={isEditing}
                onChange={(v: any) => setProfile((p) => ({ ...p, email: v }))}
              />
              
              <ProfileField
                icon={Phone}
                label="Phone Number"
                value={profile.phone}
                isEditing={isEditing}
                onChange={(v: any) => setProfile((p) => ({ ...p, phone: v }))}
              />
              
              <ProfileField
                icon={MapPin}
                label="Location / State"
                value={profile.location}
                isEditing={isEditing}
                onChange={(v: any) => setProfile((p) => ({ ...p, location: v }))}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ProfileField = ({ icon: Icon, label, value, isEditing, onChange }: any) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 border-b border-gray-50 pb-6 last:border-none last:pb-0">
    <div className="bg-purple-50 p-3 md:p-4 rounded-2xl text-[#1a706d] shadow-inner w-fit">
      <Icon size={20} />
    </div>
    <div className="flex-1 space-y-1.5 min-w-0">
      <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest block">
        {label}
      </label>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-gray-50 border-none rounded-xl p-3 md:p-4 text-gray-800 font-medium focus:ring-2 ring-purple-100 outline-none transition-all"
        />
      ) : (
        <p className="text-base md:text-lg font-semibold text-gray-800 truncate">
          {value || "Not set"}
        </p>
      )}
    </div>
  </div>
);

export default VendorProfile;