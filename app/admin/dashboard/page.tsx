"use client";
import React from "react";
import { Users, Building2, PackageCheck, BarChart3, Target } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      
      
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-tight">
          Performance Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          
          <div className="bg-white p-5 md:p-6 rounded-[24px] shadow-sm border border-gray-50 flex items-center justify-between group hover:shadow-md transition-all">
            <div className="flex items-center gap-4 md:gap-6">
              
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Total Active</p>
                <p className="text-2xl md:text-xl font-bold text-gray-800 tracking-tighter">USERS</p>
              </div>
            </div>
            <div className="text-right">
                
                <p className="text-base font-bold text-gray-800">1,240</p>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-[24px] shadow-sm border border-gray-50 flex items-center justify-between group hover:shadow-md transition-all">
            <div className="flex items-center gap-4 md:gap-6">
            
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Total List</p>
                <p className="text-2xl md:text-xl font-bold text-gray-800 uppercase tracking-tighter">vendors</p>
              </div>
            </div>
            <div className="text-right">
                
                <p className="text-base font-bold text-gray-800">421</p>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-[24px] shadow-sm border border-gray-50 flex items-center justify-between group hover:shadow-md transition-all">
            <div className="flex items-center gap-4 md:gap-6">
             
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Available Tours</p>
                <p className="text-2xl md:text-xl font-bold text-gray-800 tracking-tighter">Packages</p>
              </div>
            </div>
            <div className="text-right">
               
                <p className="text-base font-bold text-gray-800">198</p>
            </div>
          </div>

        </div>
      </div>

    

    </div>
  );
}