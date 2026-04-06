"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#D1D5DB] pt-32 pb-12 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold italic text-black mb-12 ml-2">
          Profile
        </h1>

        {/* Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          
          {/* Left Side: Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[450px] h-[350px] md:h-[450px] rounded-[60px] overflow-hidden shadow-2xl bg-gray-400">
              <Image
                src="/img/women.png"
                alt="Profile"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Info Card */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Main Info Box */}
            <div className="bg-[#CBD5E1] rounded-[50px] p-8 md:p-16 shadow-inner flex flex-col justify-center min-h-[420px]">
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <span className="font-bold italic text-black min-w-[110px] text-lg uppercase">Name :</span>
                  <span className="font-bold italic text-black text-lg">suganthi</span>
                </div>

                <div className="flex items-start gap-6">
                  <span className="font-bold italic text-black min-w-[110px] text-lg uppercase">Email :</span>
                  <span className="font-bold italic text-black text-lg break-all">pssuganthi11@gmail.com</span>
                </div>

                <div className="flex items-start gap-6">
                  <span className="font-bold italic text-black min-w-[110px] text-lg uppercase">Ph.No :</span>
                  <span className="font-bold italic text-black text-lg">9878543210</span>
                </div>

                <div className="flex items-start gap-6">
                  <span className="font-bold italic text-black min-w-[110px] text-lg uppercase">Location :</span>
                  <span className="font-bold italic text-black text-lg">Tamil nadu</span>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="flex justify-end">
              <button
                onClick={handleLogout}
                className="bg-[#EF4444] hover:bg-red-700 text-white px-16 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg text-sm uppercase tracking-widest"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;