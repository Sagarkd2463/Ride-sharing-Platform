import React from "react";
import { Routes, Route } from "react-router-dom";

import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import RideNow from "./Components/RideNow";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RideNow />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
