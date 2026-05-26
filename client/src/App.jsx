import React from "react";
import { Routes, Route } from "react-router-dom";

import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import RideNow from "./Components/RideNow";

// Driver related imports
import DriverDashboard from "./Pages/DriverDashboard";
import RideRequests from "./Pages/RideRequests";
import DriverHistory from "./Pages/DriverHistory";

// Rider related imports 
import RiderDashboard from "./Pages/RiderDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RideNow />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/login" element={<Login />} />
      <Route path="/driver-dashboard" element={<DriverDashboard />} />
      <Route path="/ride-requests" element={<RideRequests />} />
      <Route path="/driver-history" element={<DriverHistory />} />
      <Route path="/rider-dashboard" element={<RiderDashboard />} />
    </Routes>
  );
};

export default App;
