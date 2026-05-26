import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

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

          {!user ? (
            <Link
              to="/login"
              className="bg-blue-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  navigate(
                    user.role === "driver"
                      ? "/driver-dashboard"
                      : "/rider-dashboard"
                  )
                }
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
