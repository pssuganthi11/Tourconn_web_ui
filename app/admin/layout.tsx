"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, Users, Package, 
  Bell, LogOut, ShieldCheck, ChevronRight, Menu, X, UserCircle 
} from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [userName, setUserName] = useState("Admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = sessionStorage.getItem("role");
      const storedName = sessionStorage.getItem("userName");
      
      if (storedRole !== "admin") {
        router.push("/"); 
      } else {
        setUserName(storedName || "Administrator");
      }
    }
  }, [router]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/admin/dashboard" },
    { name: "Users", icon: <Users size={20} />, href: "/admin/users" },
    { name: "Packages", icon: <Package size={20} />, href: "/admin/packages" },
    { name: "Notification", icon: <Bell size={20} />, href: "/admin/notifications" },
    { name: "Profile", icon: <UserCircle size={20} />, href: "/admin/profile" },
  ];

 const handleLogout = () => {
  
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("role");

  sessionStorage.removeItem("currentUser"); 

  window.location.href = "/";
};

  const firstLetter = userName.charAt(0).toUpperCase();
  
  const isDashboard = pathname === "/admin/dashboard";

  return (
    <div className="flex min-h-screen bg-[#F8F9FD] overflow-x-hidden">
      
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 w-full bg-white border-b border-gray-100 p-4 flex justify-between items-center z-[60]">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <ShieldCheck size={20} />
          </div>
          <span className="font-bold text-gray-800">Admin</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-gray-50 rounded-lg text-gray-600 active:scale-90 transition-transform"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-white border-r border-gray-100 flex flex-col p-6 z-[70] transition-transform duration-300 ease-in-out
        lg:translate-x-0 
        ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:static lg:h-screen"}
      `}>
        

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? "bg-[#1a706d] text-white shadow-sm" 
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-50">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-semibold"
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[65] lg:hidden"
        />
      )}

      {/* Main Content Area */}
      <main className={`flex-1 p-6 lg:p-10 transition-all ${isSidebarOpen ? "blur-sm lg:blur-none" : ""}`}>
        <header className="hidden lg:flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">
              {menuItems.find(item => item.href === pathname)?.name || "Dashboard"}
            </h2>
          </div>

          {isDashboard && (
            <div className="flex items-center gap-4 bg-white p-2 pr-5 rounded-full shadow-sm border border-gray-50 animate-in fade-in zoom-in duration-300">
              <div className="w-10 h-10 rounded-full bg-[#1a706d] text-white flex items-center justify-center font-bold shadow-md">
                {firstLetter}
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-xs">Admin</p>
              </div>
            </div>
          )}
        </header>

        <div className="mt-20 lg:mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;