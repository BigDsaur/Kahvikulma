import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Muutos Paneli</h1>

      <div style={{ marginTop: "40px" }}>
        <Link
          to="/admin/menu"
          style={{
            display: "block",
            marginBottom: "20px",
            fontSize: "20px",
            textDecoration: "none"
          }}
        >
          🍽️ Muokkaa Menua
        </Link>

        <Link
          to="/admin/hours"
          style={{
            display: "block",
            marginBottom: "20px",
            fontSize: "20px",
            textDecoration: "none"
          }}
        >
          ⏰ Muokkaa Aukioloaikoja
        </Link>
      </div>
    </div>
  );
};

export default Admin;
