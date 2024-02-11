import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModulesRoutes from "./v1/routes/modules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ModulesRoutes />} />
        {/* Other routes, e.g., create v2 and add routes here. */}
      </Routes>
    </Router>
  );
}

export default App;
