import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbarkoti";

const Yhteydenotto = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/messages", formData)
      .then(() => {
        setStatus("Viestisi on lähetetty!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setConsent(false);
      })
      .catch(() => setStatus("Viestin lähetys epäonnistui."));
  };

  return (
    <>
      <Navbar />
      <section className="section viesti">
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
            />
            <label style={{ display: "block", marginTop: "12px" }}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />{" "}
              Hyväksyn tietojeni käsittelemisen ja tallentamisen{" "}
              <a href="/tietosuojaseloste" target="_blank" rel="noopener noreferrer">
                tietosuojaselosteessa
              </a>{" "}
              määritetyllä tavalla. *
            </label>
            <button type="submit" disabled={!consent}>
              Lähetä viesti
            </button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </section>
    </>
  );
};

export default Yhteydenotto;
