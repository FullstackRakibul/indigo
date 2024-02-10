// routes/authRoutes.js
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
    </Routes>
  );
};

export default AuthRoutes;
