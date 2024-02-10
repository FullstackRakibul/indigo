import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModulesRoutes from "./v1/routes/modules";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={<ModulesRoutes />}
        />
        {/* Other routes, e.g., dynamicRoutes */}
      </Routes>
    </Router>
  );
}

export default App;
