import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#meista">Tietoa meistä</a></li>
        <li><a href="#yhteys">Yhteystiedot</a></li>
        <li><a href="#aukiolo">Aukioloajat</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
