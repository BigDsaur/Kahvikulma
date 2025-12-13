import "./Footer.css";
import logo from "../assets/Kahvikulmalogo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-column footer-left">
        <img src={logo} alt="Kahvikulma logo" className="footer-logo" />
        <div className="social-icons">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-column footer-middle">
        <h3>Aukioloajat</h3>
        <ul>
          <li>Ma-Pe: 8:00 - 18:00</li>
          <li>La: 9:00 - 16:00</li>
          <li>Su: Suljettu</li>
        </ul>
      </div>

      <div className="footer-column footer-right">
        <h3>Yhteystiedot</h3>
        <p>Pentinpolku 1, 52700 Mäntyharju</p>
        <p>puh. 0458529318</p>
        <p>info@kahvila.fi</p>
      </div>
    </footer>
  );
};

export default Footer;
