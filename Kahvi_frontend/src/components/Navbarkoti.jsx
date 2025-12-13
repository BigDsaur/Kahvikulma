import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Kahvikulmalogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      // Redirect to homepage first
      navigate("/");

      // Wait a tiny moment to ensure homepage loads
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on homepage → scroll directly
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <nav className="navbar">

  <div className="navbar-left">
    <img src={logo} className="nav-logo" onClick={() => navigate("/")} />
  </div>

  <div className="nav-center">
    <ul className={`navbar-links ${open ? "open" : ""}`}>
      <li onClick={() => goToSection("meista")}>Meistä</li>
      <li><a href="/menu">Tuotteet</a></li>
      <li onClick={() => navigate("/yhteydenotto")}>Yhteydenotto</li>
      <li onClick={() => goToSection("aukiolo")}>Aukioloajat</li>
      <li onClick={() => goToSection("footer")}>Yhteystiedot</li>
    </ul>
  </div>

  <div className="navbar-right">
    <button className="hamburger" onClick={() => setOpen(!open)}>
      <span></span><span></span><span></span>
    </button>
  </div>

</nav>
  );
};

export default Navbar;
