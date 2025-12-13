import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kotisivu from "./pages/Kotisivu";
import Menu from "./pages/Menu";
import EditMenu from "./pages/Admin/editmenu";
import EditHours from "./pages/Admin/edithours";
import Admin from "./pages/Admin/admin";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Kotisivu />} />

        {/* Menu page */}
        <Route path="/menu" element={<Menu />} />

        {/* Admin pages */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/menu" element={<EditMenu />} />
        <Route path="/admin/hours" element={<EditHours />} />
      </Routes>
    </Router>
  );
};

export default App;
