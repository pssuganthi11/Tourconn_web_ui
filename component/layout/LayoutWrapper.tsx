"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getRole } from "@/utils/auth"; 

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  const [role, setRole] = useState<string>("guest");

  useEffect(() => {
    const currentRole = getRole();
    setRole(currentRole || "guest");
  }, [pathname]);

  const isDashboardOrAuth = 
    pathname.startsWith("/admin") || 
    pathname.startsWith("/vendor") || 
    pathname.startsWith("/auth");

  const showNavbar = !isDashboardOrAuth;

  const showFooter = !isDashboardOrAuth && role === "guest";

  return (
    <>
      {showNavbar && <Navbar />}
      
      <main className="min-h-screen">
        {children}
      </main>

      {showFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;