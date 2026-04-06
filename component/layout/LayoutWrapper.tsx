"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getRole } from "@/utils/auth"; 

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  // Initialize with a function to avoid SSR mismatch
  const [role, setRole] = useState<string>("guest");

  useEffect(() => {
    // This runs on every client-side navigation
    const currentRole = getRole();
    setRole(currentRole || "guest");
  }, [pathname]);

  // 1. Pages where Navbar/Footer are ALWAYS hidden
  const isDashboardOrAuth = 
    pathname.startsWith("/admin") || 
    pathname.startsWith("/vendor") || 
    pathname.startsWith("/auth");

  // 2. Navbar visibility (Show everywhere except Admin/Vendor/Auth)
  const showNavbar = !isDashboardOrAuth;

  // 3. Footer visibility (CRITICAL FIX)
  // Logic: Show ONLY if (Not Dashboard/Auth) AND (User is exactly "guest")
  const showFooter = !isDashboardOrAuth && role === "guest";

  return (
    <>
      {showNavbar && <Navbar />}
      
      <main className="min-h-screen">
        {children}
      </main>

      {/* If role is 'user' (as seen in your screenshot), showFooter becomes false */}
      {showFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;