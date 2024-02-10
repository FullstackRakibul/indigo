// routes/guestRoutes.js
import { Routes, Route } from "react-router-dom";
import Overview from "../../pages/dashboard/Overview";
import Settings from "../../pages/dashboard/Settings";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Overview />}
      />
      <Route
        path="/settings/"
        element={<Settings />}
      />
    </Routes>
  );
};

export default GuestRoutes;
