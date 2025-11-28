import { useState } from 'react'
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Tietoa meistä */}
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

      {/* Aukioloajat */}
      <section id="aukiolo" className="section hours">
        <div className="content">
          <h2>Aukioloajat</h2>
          <p>Ma – Pe: 08.00 – 18.00</p>
          <p>La – Su: 10.00 – 17.00</p>
          <p>
            Poikkeuksista ilmoitamme verkkosivuilla sekä sosiaalisen median
            kanavissamme.
          </p>
        </div>
      </section>

      {/* Yhteystiedot */}
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
