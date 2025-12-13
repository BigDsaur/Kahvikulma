import { useEffect, useState } from "react";
import axios from "axios";
import "./Footer.css";

const Footer = () => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/opening-hours")
      .then((res) => setHours(res.data))
      .catch((err) => console.error("Error fetching hours:", err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-column footer-left">
        {/* Placeholder for future content */}
      </div>

      <div className="footer-column footer-center">
        <h3>Aukioloajat</h3>
        <ul>
          {hours.length > 0 ? (
            hours.map((hour) => (
              <li key={hour._id}>
                {hour.day}:{" "}
                {hour.open === "Suljettu" ? "Suljettu" : `${hour.open} - ${hour.close}`}
              </li>
            ))
          ) : (
            <li>Ladataan aukioloaikoja...</li>
          )}
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
