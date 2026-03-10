import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">RideNow</h2>

          <p className="text-gray-400 leading-relaxed">
            RideNow connects riders and drivers with fast, safe, and affordable
            transportation solutions across cities.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>

            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>

            <li>
              <a href="/login" className="hover:text-white transition">
                Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white transition">City Rides</li>
            <li className="hover:text-white transition">Airport Pickup</li>
            <li className="hover:text-white transition">Ride Sharing</li>
            <li className="hover:text-white transition">Corporate Travel</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <p className="mb-2">📍 Pune, India</p>
          <p className="mb-2">📞 +91 98765 43210</p>
          <p className="mb-4">✉ support@ridenow.com</p>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white transition">
              🌐
            </a>

            <a href="#" className="hover:text-white transition">
              🐦
            </a>

            <a href="#" className="hover:text-white transition">
              📸
            </a>

            <a href="#" className="hover:text-white transition">
              💼
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2026 RideNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
