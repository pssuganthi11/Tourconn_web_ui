"use client";
import React, { useState, useEffect } from "react";
import { 
  Search, ShieldAlert, ShieldCheck, Mail, Phone, 
  Fingerprint, ChevronLeft, ChevronRight 
} from "lucide-react";

type RoleType = "user" | "vendor";

type Account = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: "Active" | "Blocked";
  role: RoleType;
};

const initialData: Account[] = [
  { id: "USR-001", name: "suganthi", email: "pssuganthi11@gmail.com", phone: "9087654321", avatar: "S", status: "Active", role: "user" },
  { id: "VND-102", name: "Arun Travels", email: "arun@tourconn.com", phone: "9876543210", avatar: "A", status: "Active", role: "vendor" },
  { id: "USR-002", name: "Tamil", email: "tamil@email.com", phone: "9123456789", avatar: "T", status: "Blocked", role: "user" },
  { id: "VND-105", name: "Priya Resorts", email: "priya@tourconn.com", phone: "9445566778", avatar: "P", status: "Active", role: "vendor" },
  { id: "USR-003", name: "Rahul", email: "rahul@email.com", phone: "9887766554", avatar: "R", status: "Active", role: "user" },
  { id: "USR-004", name: "Sneha", email: "sneha@email.com", phone: "9776655443", avatar: "S", status: "Active", role: "user" },
  { id: "USR-005", name: "Vijay", email: "vijay@email.com", phone: "9665544332", avatar: "V", status: "Active", role: "user" },
];

export default function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState<RoleType>("user");
  const [searchTerm, setSearchTerm] = useState("");
  const [accounts, setAccounts] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchTerm]);

  const filteredData = accounts.filter(
    (item) =>
      item.role === activeTab &&
      (item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const toggleStatus = (id: string) => {
    setAccounts(accounts.map(acc => 
      acc.id === id ? { ...acc, status: acc.status === "Active" ? "Blocked" : "Active" } : acc
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 md:space-y-6">
      
      <div className="flex justify-center px-4">
        <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex w-full sm:w-auto">
          {(["user", "vendor"] as RoleType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 sm:flex-none px-8 md:px-12 py-3 rounded-xl font-bold text-xs md:text-sm transition-all capitalize whitespace-nowrap ${
                activeTab === tab 
                ? "bg-[#1a706d] text-white shadow-lg shadow-indigo-200" 
                : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}s
            </button>
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white p-3 md:p-4 rounded-[20px] md:rounded-[24px] shadow-sm border border-gray-50">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={`Search ${activeTab}s...`}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 ring-indigo-100 outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-50 overflow-hidden">
          
          <div className="overflow-x-auto w-full">
            
            <table className="w-full border-collapse min-w-full sm:min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 text-left text-[10px] font-bold text-gray-400 uppercase ">Profile</th>
                  <th className="p-6 text-left text-[10px] font-bold text-gray-400 uppercase ">Account ID</th>
                  <th className="p-6 text-left text-[10px] font-bold text-gray-400 uppercase ">Contact Details</th>
                  <th className="p-6 text-center text-[10px] font-bold text-gray-400 uppercase ">Status</th>
                  <th className="p-6 text-right text-[10px] font-bold text-gray-400 uppercase ">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1a706d] text-white flex items-center justify-center font-bold shadow-inner shrink-0">
                          {item.avatar}
                        </div>
                        <span className="font-bold text-gray-800 uppercase text-sm">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-6">
                       <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                          <Fingerprint size={14} className="text-[#1a706d]" /> {item.id}
                       </div>
                    </td>
                    <td className="p-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                          <Mail size={13} className="text-[#1a706d]" /> {item.email}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold">
                          <Phone size={13} className="text-[#1a706d]" /> {item.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        item.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button 
                        onClick={() => toggleStatus(item.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 whitespace-nowrap ${
                          item.status === "Active" ? "text-red-500 hover:bg-red-50" : "text-green-600 hover:bg-green-50"
                        }`}
                      >
                        {item.status === "Active" ? "Block" : "Unblock"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          

        </div>
      </div>
    </div>
  );
}