import { useState } from 'react'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Your SPA sections: */}
      <section id="meista">...</section>
      <section id="yhteys">Minä, sinä, hän</section>
      <section id="aukiolo">Ma - Su 10.00 - 18.00</section>

    </>
  );
}

export default App;
