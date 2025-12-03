import { useState, useEffect } from "react";
import "./Menu.css";
import NavbarMenu from "../components/Navbarmenu";


const Menu = () => {
  // Placeholder menu items before backend connection
  const [menuItems] = useState([
    {
      name: "Latte",
      price: "4.50 €",
      description: "Pehmeä espressojuoma höyrytetyllä maidolla."
    },
    {
      name: "Cappuccino",
      price: "4.00 €",
      description: "Tasapainoinen espresso ja kuohkea maitovaahto."
    },
    {
      name: "Korvapuusti",
      price: "3.00 €",
      description: "Tuore, käsintehty kanelipulla."
    }
  ]);

  return (
    <>
      <NavbarMenu />

      <div className="menu-page">
        <h1 className="menu-title">Menu</h1>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;