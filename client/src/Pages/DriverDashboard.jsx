import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [stats, setStats] = useState({ earnings: 1245, rides: 156, rating: 4.9 });

  // Live earnings simulation jab online ho
  useEffect(() => {
    let interval;
    if (isOnline) {
      interval = setInterval(() => {
        setStats(prev => ({ ...prev, earnings: prev.earnings + Math.floor(Math.random() * 5) }));
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isOnline]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HEADER SECTION */}
      <header className="bg-white shadow-sm px-6 md:px-12 py-5 flex justify-between items-center border-b border-gray-200 sticky top-0 z-10">
        <h1 
  className="text-2xl md:text-3xl font-black tracking-tight" 
  style={{ color: '#000000', opacity: 1 }}
>
  Driver Console
</h1>
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className={`px-6 md:px-10 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 transform active:scale-95 shadow-lg ${
            isOnline 
            ? "bg-green-600 text-white shadow-green-100" 
            : "bg-red-500 text-white shadow-red-100 hover:bg-red-600"
          }`}
        >
          {isOnline ? "● YOU ARE ONLINE" : "GO ONLINE"}
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Earnings Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-green-500 hover:shadow-md transition-shadow">
            <p className="text-gray-400 text-xs font-black tracking-widest uppercase">EARNINGS</p>
            <p className="text-4xl font-bold text-gray-800 mt-2 flex items-baseline">
              <span className="text-2xl mr-1">₹</span>{stats.earnings}
            </p>
          </div>
          
          {/* Rides Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="text-gray-400 text-xs font-black tracking-widest uppercase">RIDES</p>
            <p className="text-4xl font-bold text-gray-800 mt-2">{stats.rides}</p>
          </div>

          {/* Rating Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-yellow-500 hover:shadow-md transition-shadow">
            <p className="text-gray-400 text-xs font-black tracking-widest uppercase">RATING</p>
            <div className="flex items-center gap-2 mt-2">
               <p className="text-4xl font-bold text-gray-800">{stats.rating}</p>
               <span className="text-2xl text-yellow-400">★</span>
            </div>
          </div>
        </div>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* New Requests Link */}
          <Link 
            to={isOnline ? "/ride-requests" : "#"} 
            className={`group p-12 rounded-4xl text-center transition-all duration-500 border-2 ${
              isOnline 
              ? "bg-gray-900 border-gray-900 text-white shadow-2xl scale-[1.01]" 
              : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">New Requests</h3>
            <p className={`text-sm ${isOnline ? "text-gray-300" : "text-gray-400"}`}>
              {isOnline ? "Tap to view incoming ride orders" : "Switch to online mode to see requests"}
            </p>
          </Link>

          {/* Trip History Link */}
          <Link 
            to="/driver-history" 
            className="bg-white border-2 border-gray-900 p-12 rounded-4xl text-center hover:bg-gray-900 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-white">Trip History</h3>
            <p className="text-gray-500 group-hover:text-gray-300 text-sm">Review your past performance and earnings</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;