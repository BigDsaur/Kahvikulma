import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <button 
          className="hamburger" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          <li><a href="#meista">Tietoa meistä</a></li>
          <li><a href="#yhteys">Yhteystiedot</a></li>
          <li><a href="#aukiolo">Aukioloajat</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
