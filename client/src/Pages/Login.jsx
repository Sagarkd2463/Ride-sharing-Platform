import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-gray-500 text-center mb-6">
          Login to your RideNow account
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <div>
            <label className="block text-sm text-gray-600 mb-1">Login As</label>

            <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
              <option value="rider">Request a Ride</option>
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

export default Login;
