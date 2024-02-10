// routes/api.js
import { Routes, Route } from "react-router-dom";
import ApiHandler from "../services/ApiHandler"; // Assuming ApiHandler is in services directory

const ApiRoutes = () => {
  return (
    <Routes>
      <Route
        path="/api/users/:id"
        element={
          <ApiHandler
            method="GET"
            resource="users"
          />
        }
      />
    </Routes>
  );
};

export default ApiRoutes;
