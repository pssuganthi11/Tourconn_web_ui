"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Package, CalendarCheck, User, Settings, LogOut, Plus, Menu, X } from "lucide-react";

const VendorLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("Vendor");
  const pathname = usePathname();
  const router = useRouter();

 const handleLogout = () => {
  
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("role");

  sessionStorage.removeItem("currentUser"); 
  window.location.href = "/";
};

  useEffect(() => {
    const storedName = sessionStorage.getItem("role") || "T"; 
    setUserName(storedName);
    setIsOpen(false); 
  }, [pathname]);

  const firstLetter = userName.charAt(0).toUpperCase();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/vendor/dashboard" },
    { name: "Package", icon: <Package size={20} />, href: "/vendor/package" },
    { name: "Booking", icon: <CalendarCheck size={20} />, href: "/vendor/bookings" },
    { name: "Profile", icon: <User size={20} />, href: "/vendor/profile" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex flex-col md:flex-row">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
            {firstLetter}
          </div>
          <h1 className="font-bold text-gray-800 text-sm">Tourconn</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 transition-transform active:scale-90">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-[60] w-72 bg-white border-r border-gray-100 p-6 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex md:flex-col
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
      `}>
        <div className="mb-10 hidden md:block">
          <h1 className="text-xl font-bold text-gray-800">Vendor Portal</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  active ? "bg-[#1a706d] text-white shadow-sm" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 space-y-4">
          <button className="w-full flex items-center gap-4 px-4 text-white rounded-full py-3 bg-red-600 transition-colors" onClick={handleLogout}>
            <LogOut size={20}/> <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 overflow-x-hidden">
        

        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[55] md:hidden transition-opacity" 
        />
      )}
    </div>
  );
};

export default VendorLayout;