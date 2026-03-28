import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RiderLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - redirect based on role
    if (role === "rider") {
      navigate("/rider-dashboard");
    } else {
      alert("Driver dashboard coming soon!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-gray-500 text-center mb-6">
          Login to your RideNow account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <div>
            <label className="block text-sm text-gray-600 mb-1">Login As</label>

            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="rider">Rider Dashboard</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-400 my-6">or</div>

        <button
          onClick={() => navigate("/")}
          className="w-full border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RiderLogin;
