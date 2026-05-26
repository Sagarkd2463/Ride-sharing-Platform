import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import DriverRideMap from "../Pages/DriverRideMap";

const DriverDashboard = () => {
  const [isOnline, setIsOnline] =
    useState(false);

  const [stats, setStats] = useState({
    earnings: 1245,
    rides: 156,
    rating: 4.9,
  });

  // Driver Position
  const [driverPosition, setDriverPosition] =
    useState([18.5204, 73.8567]);

  // Rider Position
  const [riderPosition] = useState([
    18.5314,
    73.8446,
  ]);

  // Simulate Live Driver Movement
  useEffect(() => {
    let interval;

    if (isOnline) {
      interval = setInterval(() => {
        // Update earnings
        setStats((prev) => ({
          ...prev,

          earnings:
            prev.earnings +
            Math.floor(Math.random() * 5),
        }));

        // Simulate movement
        setDriverPosition((prev) => [
          prev[0] +
            (Math.random() - 0.5) * 0.001,

          prev[1] +
            (Math.random() - 0.5) * 0.001,
        ]);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isOnline]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 md:px-12 py-5 flex justify-between items-center border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-2xl font-bold text-black hover:text-gray-600 transition"
          >
            ←
          </Link>

          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Driver Console
          </h1>
        </div>

        {/* Online Button */}
        <button
          onClick={() =>
            setIsOnline(!isOnline)
          }
          className={`px-6 md:px-10 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 shadow-lg ${
            isOnline
              ? "bg-green-600 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {isOnline
            ? "● YOU ARE ONLINE"
            : "GO ONLINE"}
        </button>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Earnings */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-green-500">
            <p className="text-gray-400 text-xs font-black tracking-widest uppercase">
              Earnings
            </p>

            <p className="text-4xl font-bold text-gray-800 mt-2">
              ₹{stats.earnings}
            </p>
          </div>

          {/* Rides */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-blue-500">
            <p className="text-gray-400 text-xs font-black tracking-widest uppercase">
              Rides
            </p>

            <p className="text-4xl font-bold text-gray-800 mt-2">
              {stats.rides}
            </p>
          </div>

          {/* Rating */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-yellow-500">
            <p className="text-gray-400 text-xs font-black tracking-widest uppercase">
              Rating
            </p>

            <div className="flex items-center gap-2 mt-2">
              <p className="text-4xl font-bold text-gray-800">
                {stats.rating}
              </p>

              <span className="text-2xl text-yellow-400">
                ★
              </span>
            </div>
          </div>
        </div>

        {/* Map */}
        <DriverRideMap
          driverPosition={driverPosition}
          riderPosition={riderPosition}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ride Requests */}
          <Link
            to={
              isOnline
                ? "/ride-requests"
                : "#"
            }
            className={`group p-12 rounded-4xl text-center transition-all duration-500 border-2 ${
              isOnline
                ? "bg-gray-900 border-gray-900 text-white"
                : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">
              New Requests
            </h3>

            <p className="text-sm">
              {isOnline
                ? "Tap to view incoming ride orders"
                : "Switch to online mode to see requests"}
            </p>
          </Link>

          {/* History */}
          <Link
            to="/driver-history"
            className="bg-white border-2 border-gray-900 p-12 rounded-4xl text-center hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-2">
              Trip History
            </h3>

            <p className="text-gray-500 group-hover:text-gray-300 text-sm">
              Review your past rides and earnings
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;