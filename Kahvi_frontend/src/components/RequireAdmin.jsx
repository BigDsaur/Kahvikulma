import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function RequireAdmin({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    axios.get(`${API}/api/auth/check`, {
      withCredentials: true
    })
      .then(() => setAllowed(true))
      .catch(() => setAllowed(false));
  }, []);

  if (allowed === null) return <p>Loading...</p>;
  if (!allowed) return <Navigate to="/admin/login" />;

  return children;
}
