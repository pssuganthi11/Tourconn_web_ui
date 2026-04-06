import { Plus } from "lucide-react";

export default function VendorDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      
      {/* Top Stats Cards - Stack on Mobile */}
      <div className="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-6 md:p-8 rounded md:rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between h-40 md:h-48">
          <p className="text-gray-400 font-semibold uppercase text-2xl tracking-wider">Total Package</p>
          <p className="text-3xl md:text-4xl font-bold text-gray-800">12,840</p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded md:rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between h-40 md:h-48">
          <p className="text-gray-400 font-semibold uppercase text-2xl tracking-wider">Booking</p>
          <p className="text-3xl md:text-4xl font-bold text-gray-800">42</p>
        </div>

        <div className="bg-[#1a706d] p-6 md:p-8 rounded md:rounded-xl text-white shadow-xl flex flex-col justify-between h-40 md:h-48 sm:col-span-2 lg:col-span-1">
          <p className="font-semibold uppercase text-2xl tracking-wider opacity-80">Revenue</p>
          <p className="text-3xl md:text-4xl font-bold">$14,200</p>

        </div>
      </div>

    
    </div>
  );
} 
