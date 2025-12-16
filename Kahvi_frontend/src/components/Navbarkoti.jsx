import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Kahvikulmalogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToTopOfHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  // Scroll to footer on CURRENT page
  const goToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };


  return (
    <nav className="navbar">

  <div className="navbar-left">
    <img src={logo} className="nav-logo" onClick={() => goToTopOfHome()} />
  </div>

  <div className="nav-center">
    <ul className={`navbar-links ${open ? "open" : ""}`}>
      <li onClick={() => goToTopOfHome()}>Meistä</li>
      <li><a href="/menu">Tuotteet</a></li>
      <li onClick={() => navigate("/yhteydenotto")}>Tilaukset</li>
      <li onClick={() => navigate("/taidenayttely")}>Taidenäyttely</li>

      <li onClick={() => goToFooter()}>Yhteystiedot</li>
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
