import { useEffect, useState } from "react";
import axios from "axios";
import "./Footer.css";
import logo from "../assets/Kahvikulmalogo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const API = import.meta.env.VITE_API_URL;

const Footer = () => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/opening-hours`)
      .then((res) => setHours(res.data))
      .catch((err) => console.error("Error fetching hours:", err));
  }, []);

  return (
    <footer className="footer" id="footer">
      <div className="footer-column footer-left">
        <img src={logo} alt="Kahvikulma logo" className="footer-logo" />
        <div className="social-icons">
          <a
            href="https://www.instagram.com/kahvikulma/"

            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/p/Kahvikulma-Mäntyharju-61579703596564/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-column footer-middle">
        <h3>Aukioloajat</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {hours.length > 0 ? (
            hours.map((hour) => (
              <li key={hour._id}>
                {hour.day}{" "}
                {hour.open === "Suljettu"
                  ? "Suljettu"
                  : `${hour.open} - ${hour.close}`}
              </li>
            ))
          ) : (
            <p>Ladataan aukioloaikoja...</p>
          )}
        </ul>
      </div>

      <div className="footer-column footer-right">
        <h3>Yhteystiedot</h3>
        <p>Pentinpolku 1, 52700 Mäntyharju</p>
        <p>puh. 0458529318</p>
        <p>kahvikulma.mantyharju@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
