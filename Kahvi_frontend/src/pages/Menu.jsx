import { useEffect, useState } from "react";
import NavbarMenu from "../components/NavbarMenu";
import "../components/Navbar.css";
import "./Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.log("Error fetching menu:", error));
  }, []);

  // Group items by category
  const categories = [...new Set(menuItems.map((item) => item.luokka))];

  return (
    <>
      <NavbarMenu />

      <div className="menu-list-container">
        <h1>Menu</h1>

        {categories.map((cat) => (
          <div key={cat} className="menu-category">
            <h2 className="category-title">{cat}</h2>

            {menuItems
              .filter((item) => item.luokka === cat)
              .map((item) => (
                <div className="menu-row" key={item._id}>
                  <div className="menu-row-header">
                    <span className="menu-name">{item.nimi}</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">{item.hinta} €</span>
                  </div>

                  <p className="menu-description">{item.kuvaus}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
