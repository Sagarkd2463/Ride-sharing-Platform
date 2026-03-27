import React, { useState } from "react";
import { Link } from "react-router-dom";

const RideRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Rahul V.", pickup: "Airport T3", drop: "Saket", fare: 450, dist: "2km" },
    { id: 2, name: "Sneha M.", pickup: "CP", drop: "Noida Sec-18", fare: 320, dist: "5km" },
    { id: 3, name: "Amit K.", pickup: "Hauz Khas", drop: "Gurgaon", fare: 600, dist: "1.5km" },
  ]);

  const handleAction = (id, action) => {
    if (action === "accept") alert("Ride Accepted!");
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Ride Requests</h2>
          <Link to="/driver-dashboard" className="text-blue-600 font-semibold">← Back</Link>
        </div>

        {requests.length > 0 ? (
          <div className="space-y-4">
            {requests.map(req => (
              <div key={req.id} className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center border hover:border-black transition">
                <div>
                  <h4 className="font-bold text-lg">{req.name} <span className="text-xs text-blue-500 font-normal">({req.dist} away)</span></h4>
                  <p className="text-gray-600 text-sm">📍 {req.pickup} ➔ 🏁 {req.drop}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xl font-bold text-green-600">₹{req.fare}</p>
                  <button onClick={() => handleAction(req.id, 'accept')} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Accept</button>
                  <button onClick={() => handleAction(req.id, 'ignore')} className="text-red-500 font-medium px-2">Ignore</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-white rounded-2xl shadow-inner border-2 border-dashed">
            No new requests at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default RideRequests;