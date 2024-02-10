// routes/modules.js
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./authRoutes/authRoutes";
import GuestRoutes from "./guestRoutes/guestRoutes";

const ModulesRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={<AuthRoutes />}
      />
      <Route
        path="/guest/*"
        element={<GuestRoutes />}
      />
    </Routes>
  );
};

export default ModulesRoutes;
