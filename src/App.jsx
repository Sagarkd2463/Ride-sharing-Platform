import { Routes, Route } from "react-router-dom";
import DriverDashboard from "./Pages/DriverDashboard";
import RideRequests from "./Pages/RideRequests";
import DriverHistory from "./Pages/DriverHistory";
import Login from "./Pages/Login";
import './App.css';
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/driver-dashboard" element={<DriverDashboard />} />
      <Route path="/ride-requests" element={<RideRequests />} />
      <Route path="/driver-history" element={<DriverHistory />} />
      <Route path="/" element={<Login />} /> {/* By default login pe bhej do */}
    </Routes>
  );
};

export default App;