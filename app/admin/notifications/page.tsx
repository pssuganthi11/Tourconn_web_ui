"use client";
import React, { useState } from "react";
import { 
  Bell, Package, UserPlus, Building2, 
  CalendarCheck, Clock, Trash2 
} from "lucide-react";

const initialNotifications = [
  {
    id: "NT-001",
    type: "package_approval",
    title: "Package Waiting for Approval",
    message: "Vendor 'Nordic Adventures' has submitted a new package.",
    timestamp: "2 mins ago",
    isRead: false
  },
  {
    id: "NT-002",
    type: "new_vendor",
    title: "New Vendor Registration",
    message: "A new vendor 'Arun Travels' has successfully registered.",
    timestamp: "45 mins ago",
    isRead: true
  },
  {
    id: "NT-003",
    type: "booking_confirmed",
    title: "New Booking Confirmed",
    message: "Customer 'Suganthi' just booked the 'Maldives Getaway' package.",
    timestamp: "2 hours ago",
    isRead: true
  }
];



export default function AdminNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        </h2>
        <button 
          onClick={() => setNotifications(notifications.map(n => ({ ...n, isRead: true })))}
          className="text-xs font-semibold text-[#1a706d] hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notif) => {
            return (
              <div 
                key={notif.id} 
                className={`group flex gap-4 p-4 rounded-2xl border transition-all ${
                  !notif.isRead ? 'bg-white border-blue-100 shadow-sm' : 'bg-gray-50/50 border-transparent'
                }`}
              >
                

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className={`font-bold text-sm ${!notif.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                      {notif.title}
                    </h4>
                    
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {notif.message}
                  </p>
                  
                  <div className="flex items-center gap-1 mt-2 text-[11px] text-gray-400">
                    <Clock size={12} />
                    {notif.timestamp}
                    {!notif.isRead && (
                      <span className="ml-2 px-1.5 py-0.5 bg-blue-600 text-white rounded-full text-[9px] font-bold uppercase">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <Bell size={40} className="mx-auto text-gray-200 mb-2" />
            <p className="text-gray-400 text-sm">All caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}