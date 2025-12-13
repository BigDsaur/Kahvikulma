import { useEffect, useState } from "react";
import axios from "axios";
import "./Kotisivu.css";
import Navbar from "../components/Navbarkoti";

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

      {/* —————— Tietoa meistä —————— */}
      <section id="meista" className="section about">
        <div className="content">
          <h2>Tietoa meistä</h2>
          <p>
            Kahvikulma on kolmen siskoksen pitämä kahvila Mäntyharjun
            keskustassa. Kahvila avasi ovensa syyskuussa 2025.
          </p>
          <p>
            Kahvilastamme löytyy päivittäin vaihtuva valikoima erilaisia makeita
            ja suolaisia herkkuja. Leivomme ja paistamme päivittäin muun
            muassa tuoretta pullaa, viinereitä ja munkkeja.
          </p>
          <p>Lämpimästi tervetuloa Kahvikulmaan!</p>
          <p>Terkuin</p>
          <p>Krakaun siskokset!</p>
        </div>
      </section>
    </>
  );
};

export default Kotisivu;
