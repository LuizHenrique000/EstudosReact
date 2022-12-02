import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TelaInicial } from "./pages/TelaInicial";
import { Login } from "./pages/Login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<TelaInicial />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}
