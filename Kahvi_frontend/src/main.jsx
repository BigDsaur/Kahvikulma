import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Menu from "./pages/Menu";

import Admin from "./pages/Admin/admin.jsx";
import EditMenu from "./pages/Admin/editmenu.jsx";
import EditHours from "./pages/Admin/edithours.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/menu" element={<EditMenu />} />
        <Route path="/admin/hours" element={<EditHours />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
