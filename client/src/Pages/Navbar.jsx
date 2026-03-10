import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
        <Link to="/" className="text-2xl font-bold text-black">
          🚗 RideNow
        </Link>

        <div className="flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link to="/services" className="hover:text-black transition">
            Services
          </Link>

          <Link to="/testimonials" className="hover:text-black transition">
            Testimonials
          </Link>

          <Link
            to="/login"
            className="bg-blue-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition shadow-blue-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
