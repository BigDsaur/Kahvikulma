import "./Kotisivu.css";
import Navbar from "../components/Navbarkoti";
import Kukkasohva from "../assets/Kukkasohva.jpg";
import Suolainen from "../assets/Suolainenkuva.jpg";
import Makea from "../assets/Pullakukilla.jpg";
import Tilaus from "../assets/Kakkukuva.jpg";


const Kotisivu = () => {
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

            <p>Kahvikulma on kolmen siskoksen pitämä kahvila Mäntyharjun keskustassa. 
              Kahvila avasi ovensa syyskuussa 2025. 
              Kahvilastamme löytyy päivittäin vaihtuva valikoima erilaisia makeita ja suolaisia herkkuja. 
              Leivomme ja paistamme päivittäin muun muassa tuoretta pullaa, viinereitä ja munkkeja.</p>
            <p>Lämpimästi tervetuloa Kahvikulmaan!</p>
            <p>Terkuin</p>
            <p>Krakaun siskokset</p>
          </div>

        </div>
      </section>
      <section className="section tuotteet">
  <h2 className="tuotteet-title">Tuotteet</h2>

  <div className="tuote-showcase">
    <div className="tuote-card">
      <img src={Makea} alt="Makeat tuotteet" />
      <div className="tuote-text">
        <h3>Makeat</h3>
        <p>
          Vitriinistämme löytyy päivittäin tuoreita
          leivonnaisia, kuten pullaa, kääretorttua sekä
          marjapiirakkaa.
        </p>
        <p>Lisäksi valikoimassamme on päivittäin myös
          gluteenittomia vaihtoehtoja.
        </p>
      </div>
    </div>

    <div className="tuote-card reverse">
      <img src={Suolainen} alt="Suolaiset tuotteet" />
      <div className="tuote-text">
        <h3>Suolaiset</h3>
        <p>
          Valikoimastamme löytyy suolaisina
          vaihtoehtoina muun muassa täytettyjä
          patonkeja, croissantteja sekä suolaisia
          piirakoita.
        </p>
      </div>
    </div>

    <div className="tuote-card">
      <img src={Tilaus} alt="Tilaustuotteet" />
      <div className="tuote-text">
        <h3>Tilaustuotteet</h3>
        <p>
          Teemme tilauksesta myös erilaisia kakkuja
          elämän eri tilanteisiin. Olitpa järjestämässä
          juhlia tai muita tilaisuuksia, meiltä voit tilata 
          tarjottavaksi esimerkiksi voileipäkakkuja sekä
          täytekakkuja.
        </p>
      </div>
    </div>
  </div>
</section>

      
    </>
  );
};

export default Kotisivu;
