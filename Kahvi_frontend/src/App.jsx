import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kotisivu from "./pages/Kotisivu";
import Menu from "./pages/Menu";
import EditMenu from "./pages/Admin/editmenu";
import EditHours from "./pages/Admin/edithours";
import Admin from "./pages/Admin/admin";
import Login from "./pages/Admin/Login";
import RequireAdmin from "./components/RequireAdmin";
import Tietosuojaseloste from "./pages/tietosuojaseloste";
import Yhteydenotto from "./pages/Yhteydenotto";
import Footer from "./components/Footer";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Kotisivu />} />


        <Route path="/yhteydenotto" element={<Yhteydenotto />} />
        


        {/* Menu page */}
        <Route path="/menu" element={<Menu />} />

        <Route path="/tietosuojaseloste" element={<Tietosuojaseloste />} />


        {/* Admin pages */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
        <Route path="/admin/menu" element={<RequireAdmin><EditMenu /></RequireAdmin>} />
        <Route path="/admin/hours" element={<RequireAdmin><EditHours /></RequireAdmin>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
