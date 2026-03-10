import React from "react";
import Navbar from "../Pages/Navbar";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Testimonials from "../Pages/Testimonials";
import Footer from "../Pages/Footer";

const RideNow = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main>
        <Home />
        <Services />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default RideNow;
