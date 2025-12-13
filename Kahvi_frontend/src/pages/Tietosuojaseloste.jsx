const Tietosuojaseloste = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Tietosuojaseloste</h1>

        <p><strong>Kahvikulma</strong></p>
        <p><em>Viimeksi päivitetty: 10.12.2025</em></p>

        <h2>1. Rekisterinpitäjä</h2>
        <p>
          <strong>Kahvikulma</strong><br />
          Pentinpolku 1<br />
          52700 Mäntyharju<br />
          Sähköposti: <strong>info@kahvikulma.fi</strong>
        </p>

        <h2>2. Rekisterin nimi</h2>
        <p>Kahvikulman asiakasviestintä- ja yhteydenottorekisteri</p>

        <h2>3. Kerättävät henkilötiedot</h2>
        <p>Yhteydenottolomakkeen kautta tallennetaan seuraavat tiedot:</p>
        <ul>
          <li>Nimi</li>
          <li>Puhelinnumero</li>
          <li>Sähköpostiosoite</li>
          <li>Itse lomakkeella annettu viesti</li>
        </ul>
        <p>
          Yritys ei käytä evästeitä eikä analytiikkatyökaluja (esim. Google Analytics).
        </p>

        <h2>4. Käsittelyn tarkoitus</h2>
        <p>
          Tietoja käytetään ainoastaan asiakkaan yhteydenottoon vastaamiseen,
          asiakaspalveluun ja mahdollisten jatkokyselyiden hoitamiseen.
          Tietoja ei käytetä markkinointiin tai profilointiin.
        </p>

        <h2>5. Oikeusperuste</h2>
        <p>
          Käsittelyn oikeusperusteena on rekisteröidyn suostumus
          (kun lomake lähetetään) ja oikeutettu etu palvelun tarjoamiseksi.
        </p>

        <h2>6. Säilytysaika</h2>
        <p>
          Henkilötietoja säilytetään niin kauan kuin asia on tarpeen käsittelyn vuoksi.
          Kun asia on käsitelty, tiedot poistetaan järjestelmästä.
        </p>

        <h2>7. Tietolähteet</h2>
        <p>
          Tiedot saadaan suoraan rekisteröidyltä, kun lomake lähetetään verkkosivun kautta.
        </p>

        <h2>8. Tietojen käsittelijät ja luovutus</h2>
        <p>
          Tietoja käsittelee vain Kahvikulman henkilökunta.
          Tietoja ei luovuteta kolmansille osapuolille eikä siirretä EU/ETA-alueen ulkopuolelle.
        </p>

        <h2>9. Tietojen säilytyspaikka</h2>
        <p>Tiedot tallennetaan turvallisesti MongoDB-tietokantaan.</p>

        <h2>10. Rekisteröidyn oikeudet</h2>
        <ul>
          <li>pyytää pääsyä omiin tietoihinsa</li>
          <li>pyytää tietojen oikaisua</li>
          <li>pyytää tietojen poistamista</li>
          <li>rajoittaa tietojensa käsittelyä</li>
          <li>peruuttaa suostumus</li>
        </ul>

        <p>
          Oikeuksien käyttämiseksi ota yhteyttä: <strong>info@kahvikulma.fi</strong>
        </p>

        <h2>11. Tietoturva</h2>
        <p>
          Tietoja käsitellään suojatussa järjestelmässä ja pääsy tietoihin
          on rajattu vain tarpeellisille henkilöille.
        </p>

        <h2>12. Muutokset</h2>
        <p>
          Tätä tietosuojaselostetta voidaan päivittää toiminnan muuttuessa.
          Päivitetty versio julkaistaan verkkosivuilla.
        </p>

        <p style={styles.small}>
          Tämä tietosuojaseloste on laadittu antamaan selkeät tiedot
          henkilötietojen käsittelystä.
        </p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    background: "#fafafa",
    padding: "40px 16px",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#fff",
    padding: "28px",
    borderRadius: "8px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
  },
  small: {
    fontSize: "0.85rem",
    color: "#666",
    marginTop: "16px"
  }
};

export default Tietosuojaseloste;
