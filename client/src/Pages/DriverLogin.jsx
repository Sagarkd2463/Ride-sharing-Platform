import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", role: "driver" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dynamic Navigation based on role
    if (formData.role === "rider") {
      navigate("/dashboard");
    } else {
      navigate("/driver-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
            required
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
            required
            onChange={handleChange}
          />
          <div>
            <label className="block text-sm text-gray-600 mb-1">Login As</label>
            <select 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none cursor-pointer"
            >
              <option value="driver">Driver</option>
              <option value="rider">Rider</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverLogin;