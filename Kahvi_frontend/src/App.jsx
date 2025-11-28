import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    // Fetch opening hours from backend
    axios.get("http://localhost:5000/api/opening-hours")
      .then(res => setHours(res.data))
      .catch(err => console.error("Error fetching hours:", err));
  }, []);

  return (
    <>
      <Navbar />

      {/* Meistä Section */}
      <section id="meista" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Meistä</h2>
        <p>Tervetuloa Kahvikulmaan! Tarjoamme herkullista kahvia ja leivonnaisia.</p>
      </section>

      {/* Yhteys Section */}
      <section id="yhteys" style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <h2>Yhteys</h2>
        <p>Osoite: Kahvikatu 1, 00100 Helsinki</p>
        <p>Sähköposti: info@kahvikulma.fi</p>
        <p>Puhelin: 040 123 4567</p>
      </section>

      {/* Aukiolo Section */}
      <section id="aukiolo" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Aukiolo</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {hours.length > 0 ? (
            hours.map(hour => (
              <li key={hour._id}>
                {hour.day}: {hour.open} - {hour.close}
              </li>
            ))
          ) : (
            <li>Loading opening hours...</li>
          )}
        </ul>
      </section>
    </>
  );
};

export default App;
