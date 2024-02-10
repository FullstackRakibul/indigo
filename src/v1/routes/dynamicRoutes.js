// routes/dynamicRoutes.js
import { Routes, Route } from "react-router-dom";
import Guest from "../pages/guest/Guest";

const DynamicRoutes = () => {
  return (
    <Routes>
      <Route
        path="dynamic/:id"
        element={<Guest />}
      />
    </Routes>
  );
};

export default DynamicRoutes;
