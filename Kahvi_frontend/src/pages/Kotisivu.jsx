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
    </>
  );
};

export default Kotisivu;
