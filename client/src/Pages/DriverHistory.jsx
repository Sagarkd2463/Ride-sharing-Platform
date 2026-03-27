import React, { useState } from "react";
import { Link } from "react-router-dom";

const DriverHistory = () => {
  const initialHistory = [
    { id: 1, date: "26 Mar", route: "Saket ➔ CP", fare: 350, status: "Paid" },
    { id: 2, date: "25 Mar", route: "Airport ➔ Dwarka", fare: 520, status: "Paid" },
    { id: 3, date: "24 Mar", route: "Noida ➔ Ghaziabad", fare: 280, status: "Paid" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredHistory = initialHistory.filter(h => 
    h.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold">Trip History</h2>
          <input 
            type="text" 
            placeholder="Search by route..." 
            className="border p-2 rounded-lg w-full md:w-64 outline-none focus:ring-1 focus:ring-black"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/driver-dashboard" className="text-blue-600 font-semibold">Dashboard</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-sm uppercase text-gray-500">
              <tr>
                <th className="p-5">Date</th>
                <th className="p-5">Route</th>
                <th className="p-5">Fare</th>
                <th className="p-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredHistory.map(item => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="p-5 font-medium">{item.date}</td>
                  <td className="p-5 text-gray-600">{item.route}</td>
                  <td className="p-5 font-bold text-green-600">₹{item.fare}</td>
                  <td className="p-5">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverHistory;