import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Kahvikulma. Kaikki oikeudet pidätetään.</p>
        <p>
          <a href="/tietosuojaseloste">Tietosuojaseloste</a> | 
          <a href="/yhteydenotto">Yhteydenotto</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
