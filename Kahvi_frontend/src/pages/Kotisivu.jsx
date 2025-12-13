import { useEffect, useState } from "react";
import axios from "axios";
import "./Kotisivu.css";
import Navbar from "../components/Navbarkoti";
import Kukkasohva from "../assets/Kukkasohva.jpg";

const Kotisivu = () => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/opening-hours")
      .then((res) => setHours(res.data))
      .catch((err) => console.error("Error fetching hours:", err));
  }, []);

  return (
    <>
      <Navbar />

      <section id="meista" className="section meista">
        <div className="meista-container">

          <div className="meista-image">
            <img src={Kukkasohva} alt="Kahvilan tunnelma" />
          </div>

          <div className="meista-text">
            <h2>Tietoa meistä</h2>

            <p>Kahvikulma on kolmen siskoksen pitämä kahvila Mäntyharjun keskustassa. Kahvila avasi ovensa syyskuussa 2025.</p>
            <p>Kahvilastamme löytyy päivittäin vaihtuva valikoima erilaisia makeita ja suolaisia herkkuja. Leivomme ja paistamme päivittäin muun muassa tuoretta pullaa, viinereitä ja munkkeja.</p>
            <p>Lämpimästi tervetuloa Kahvikulmaan!</p>
            <p>Terveisin Krakaun siskokset!</p>
          </div>

        </div>
      </section>
      <section id="aukiolo" className="section opening-hours">
        <h2>Aukioloajat</h2>
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
      </section>

      <section id="yhteys" className="section contact">
        <div className="content">
          <h2>Yhteystiedot</h2>
          <p>Pentinpolku 1, 52700 Mäntyharju (Mäntyharjun liikekeskus)</p>
          <p>puh. 0458529318</p>
          <p>info@kahvila.fi</p>
          <p>Vastaamme sähköposteihin arkisin mahdollisimman nopeasti.</p>
        </div>
      </section>

      {/* —————— Viestilomake —————— */}
      <section id="viesti" className="section viesti">
        <div className="content">
          <h2>Lähetä meille viesti</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nimi"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Puhelinnumero"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Sähköposti"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Viestisi"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Lähetä viesti</button>
          </form>

          {status && <p>{status}</p>}
        </div>
      </section>
    </>
  );
};

export default Kotisivu;
