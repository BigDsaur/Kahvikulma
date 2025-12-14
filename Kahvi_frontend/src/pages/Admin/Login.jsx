import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_API_URL;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        { username, password },
        { withCredentials: true }  // VERY IMPORTANT
      );

      if (res.status === 200) {
        navigate("/admin"); // redirect to admin panel
      }

    } catch (err) {
      setError("Virheellinen käyttäjänimi tai salasana");
    }
  };

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form 
        onSubmit={handleLogin}
        style={{ 
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "15px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}
      >
        <h2>Admin Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          placeholder="Käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Kirjaudu
        </button>
      </form>
    </div>
  );
}
