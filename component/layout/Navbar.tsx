"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bell, User as UserIcon, ChevronDown, LogOut, UserCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("guest");
  const pathname = usePathname();

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    setRole(storedRole || "guest");
    setOpen(false);
  }, [pathname]);

  const isGuest = role === "guest";

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  if (role === "admin" || role === "vendor") return null;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-12 py-6 bg-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        <Link href="/" className="flex items-center shrink-0 z-[110]">
          <Image
            src={Logo}
            alt="Tourconn Logo"
            width={120}
            height={40}
            className="object-contain w-24 md:w-32 h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {isGuest ? (
            <>
              <Link href="/" className="text-lg font-medium hover:text-[#1a706d] transition-colors">Home</Link>
              <Link href="/guestPackage" className="text-lg hover:text-[#1a706d] transition-colors">Packages</Link>
              <Link href="/auth/login" className="bg-[#1a706d] hover:bg-[#155a57] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md">
                Login
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-8 text-black font-semibold italic">
                <Link href="/dashboard" className="hover:text-[#1a706d] transition-colors">Dashboard</Link>
                <Link href="/packageList" className="hover:text-[#1a706d] transition-colors">Package</Link>
                <Link href="/mybookings" className="hover:text-[#1a706d] transition-colors">My booking</Link>
              </div>
              
              <div className="flex items-center gap-5 ml-4  pl-6 border-gray-200">
               
                
                <div className="group relative py-2"> 
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div className="p-1.5 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
                      <UserIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
                  </div>

                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-200 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                    <Link 
                      href="/profile"
                      className="flex items-center gap-2 w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <UserCircle className="w-4 h-4 text-green-600" />
                      Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-3 text-sm text-left text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center z-[110]">
          <button 
            className="p-2 focus:outline-none" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-7 h-7 text-[#1a706d]" /> 
            ) : (
              <Menu className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-2xl md:hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-[100]">
          {!isGuest ? (
            <>
              <Link href="/dashboard" className="p-3 hover:bg-gray-50 rounded-lg italic font-semibold">Dashboard</Link>
              <Link href="/packageList" className="p-3 hover:bg-gray-50 rounded-lg italic font-semibold">Package</Link>
              <Link href="/mybookings" className="p-3 hover:bg-gray-50 rounded-lg italic font-semibold">My booking</Link>
              <div className="h-px bg-gray-100 my-2" />
              <Link href="/profile" className="p-3 text-gray-700 font-bold flex items-center gap-2">
                <UserCircle size={20} /> Profile
              </Link>
              <button 
                onClick={handleLogout} 
                className="p-3 mt-2 text-red-500 font-bold flex items-center justify-between bg-red-50 rounded-lg transition-colors"
              >
                Logout Account
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <>
              <Link href="/" className="p-3 hover:bg-gray-50 rounded-lg font-semibold">Home</Link>
              <Link href="/packageList" className="p-3 hover:bg-gray-50 rounded-lg font-semibold">Packages</Link>
              <Link href="/auth/login" className="mt-2 p-4 text-center bg-[#1a706d] text-white rounded-xl font-bold">
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;