"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, Users } from "lucide-react";

const PackageCard = ({ pkg }: any) => {
  const router = useRouter();

  // ✅ Check login (based on your sessionStorage token)
  const handleView = () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/auth/login"); 
    } else {
      router.push(`/packages/${pkg.id}`); 
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
      
      {/* Image */}
      <div className="relative w-full h-40 sm:h-48 md:h-52">
        <Image
          src={pkg.image || "/img/sea.png"}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Category */}
        <span className="absolute top-2 left-2 bg-[#1a706d] text-white text-xs px-2 py-1 rounded-full capitalize">
          {pkg.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
          {pkg.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {pkg.destination}
        </p>

        {/* ✅ Rating + Travelers */}
        <div className="flex items-center justify-between mt-2 text-xs sm:text-sm text-gray-600">
          
          {/* ⭐ Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{pkg.rating}</span>
          </div>

          {/* 👥 Travelers */}
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{pkg.travelers}</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-[#1a706d] font-bold text-sm sm:text-base">
            ${pkg.price}
          </p>

          <button
            onClick={handleView}
            className="text-xs sm:text-sm bg-[#1a706d] text-white px-3 py-1 rounded-full hover:bg-blue-600 transition"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;