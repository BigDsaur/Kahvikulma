import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbarkoti";

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
      <section id="meista" className="section about">
        <div className="content">
          <h2>Tietoa meistä</h2>
          <p>
            Kahvilamme on toiminut jo vuosikymmenten ajan historiallisessa
            ympäristössä tarjoten asiakkaille rauhallisen paikan nauttia
            kahvista, leivonnaisista ja kiireettömistä hetkistä.
          </p>
          <p>
            Valmistamme tuotteemme laadukkaista raaka-aineista ja pyrimme
            tukemaan paikallisia tuottajia aina kun mahdollista.
          </p>
          <p>
            Tervetuloa viihtymään — yksin, ystävien tai perheen kanssa.
          </p>
        </div>
      </section>

      {/* Aukiolo Section */}
      <section id="aukiolo" className="section opening-hours">
        <h2>Aukiolo</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {hours.length > 0 ? (
            hours.map(hour => (
              <li key={hour._id}>
                {hour.day}: {hour.open} - {hour.close}
              </li>
            ))
          ) : (
            <p>Loading opening hours...</p>
          )}
        </ul>
      </section>

      <section id="yhteys" className="section contact">
        <div className="content">
          <h2>Yhteystiedot</h2>
          <p><b>Osoite:</b> Esimerkkikatu 5, 00100 Helsinki</p>
          <p><b>Puhelin:</b> 040 123 4567</p>
          <p><b>Sähköposti:</b> info@kahvila.fi</p>
          <p>Vastaamme sähköposteihin arkisin mahdollisimman nopeasti.</p>
        </div>
      </section>
    
    </>
  );
};

export default App;