import React from "react";
import { Routes, Route } from "react-router-dom";

import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import RideNow from "./Components/RideNow";

// Driver related imports
import DriverLogin from "./Pages/DriverLogin";
import DriverDashboard from "./Pages/DriverDashboard";
import RideRequests from "./Pages/RideRequests";
import DriverHistory from "./Pages/DriverHistory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RideNow />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/login" element={<Login />} />
      <Route path="/driver-login" element={<DriverLogin />} />
      <Route path="/driver-dashboard" element={<DriverDashboard />} />
      <Route path="/ride-requests" element={<RideRequests />} />
      <Route path="/driver-history" element={<DriverHistory />} />
    </Routes>
  );
};

export default App;
