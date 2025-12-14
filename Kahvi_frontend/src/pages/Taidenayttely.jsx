import Navbar from "../components/Navbarkoti";
import "./Taidenayttely.css";
import sampleImage from "../assets/Taide1.jpg";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Taidenayttely = () => {
  return (
    <>
      <Navbar />

      <section className="taide-container">
        <div className="taide-box">
          <div className="taide-image">
            <img src={sampleImage} alt="Taidenäyttely" />
          </div>

          <div className="taide-text">
            <h1>Taidenäyttely</h1>

            <p>
              Kahvilassamme on esillä pysyvä Kaisa
              Parénin taidenäyttely.
            </p>

            <p>
              Tervetuloa ihastelemaan kauniita teoksia!
            </p>

            <p className="taide-social-title">Kaisan löydät myös somesta:</p>

            <div className="taide-socials">
              <a
                href="https://www.instagram.com/kaisaparen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/taidettakaisaparen/?locale=fi_FI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Taidenayttely;
