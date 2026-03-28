import React, { useState } from "react";

const RiderDashboard = () => {
  const [activeTab, setActiveTab] = useState("current");

  const trips = [
    {
      id: 1,
      status: "current",
      pickup: "Airport Terminal 2",
      drop: "Downtown Hotel",
      fare: "$28.50",
      time: "5 min ago",
      passenger: "John Doe",
      rating: 4.8
    },
    {
      id: 2,
      status: "upcoming",
      pickup: "Central Park",
      drop: "Times Square",
      fare: "$15.20",
      time: "2:30 PM",
      passenger: "Jane Smith",
      rating: null
    },
    {
      id: 3,
      status: "completed",
      pickup: "University Campus",
      drop: "Shopping Mall",
      fare: "$12.00",
      time: "1 hour ago",
      passenger: "Mike Johnson",
      rating: 5.0
    }
  ];

  const stats = {
    totalEarnings: "$1,245",
    totalTrips: 156,
    thisWeek: 23,
    rating: 4.9
  };

  const filteredTrips = trips.filter(trip => trip.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md px-10 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Rider Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your ride summary.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-10 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold text-green-600">{stats.totalEarnings}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Trips</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalTrips}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">This Week</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.thisWeek}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Avg Rating</h3>
            <p className="text-3xl font-bold text-yellow-600">{stats.rating}</p>
          </div>
        </div>

        {/* Trips Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-4">My Trips</h2>
            <div className="flex bg-gray-100 p-2 rounded-lg">
              <button
                onClick={() => setActiveTab("current")}
                className={`px-6 py-2 rounded-lg font-semibold mx-2 ${activeTab === "current" ? "bg-blue-500 text-white shadow-lg" : "text-gray-600 hover:bg-gray-200"}`}
              >
                Current
              </button>
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2 rounded-lg font-semibold mx-2 ${activeTab === "upcoming" ? "bg-blue-500 text-white shadow-lg" : "text-gray-600 hover:bg-gray-200"}`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-2 rounded-lg font-semibold mx-2 ${activeTab === "completed" ? "bg-blue-500 text-white shadow-lg" : "text-gray-600 hover:bg-gray-200"}`}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Pickup</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Drop</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Fare</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Time</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Passenger</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Rating</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrips.length > 0 ? (
                  filteredTrips.map((trip) => (
                    <tr key={trip.id} className="border-t hover:bg-gray-50">
                      <td className="px-8 py-4 font-medium">{trip.pickup}</td>
                      <td className="px-8 py-4 text-gray-600">{trip.drop}</td>
                      <td className="px-8 py-4 font-semibold text-green-600">{trip.fare}</td>
                      <td className="px-8 py-4 text-gray-600">{trip.time}</td>
                      <td className="px-8 py-4">{trip.passenger}</td>
                      <td className="px-8 py-4">
                        {trip.rating ? (
                          <span className="text-yellow-500 font-semibold">{trip.rating}★</span>
                        ) : (
                          <span className="text-gray-400">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-8 py-12 text-center text-gray-500">
                      No {activeTab} trips yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Update Profile</h3>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Edit Profile
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">View Payouts</h3>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              See Earnings
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-xl font-bold mb-2">Help & Support</h3>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;

