import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const EditHours = () => {
  const [hours, setHours] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    day: "",
    open: "",
    close: ""
  });

  const [addingNew, setAddingNew] = useState(false);

  // Load hours on startup
  useEffect(() => {
    axios.get(`${API}/api/opening-hours`)
      .then(res => setHours(res.data))
      .catch(err => console.error(err));
  }, []);

  // Editing existing day
  const startEdit = (item) => {
    setAddingNew(false);
    setEditing(item._id);
    setForm({
      day: item.day,
      open: item.open,
      close: item.close
    });
  };

  // Save edited day
  const saveEdit = async () => {
    await axios.put(`${API}/api/opening-hours/${id}`, updatedHour, { withCredentials: true }, form);
    window.location.reload();
  };

  // Add new day
  const addNew = async () => {
    await axios.post(`${API}/api/opening-hours`, newHour, { withCredentials: true }, form);
    window.location.reload();
  };

  // Delete a day
  const deleteDay = async (id) => {
    if (!confirm("Poistetaanko tämä päivä?")) return;
    await axios.delete(`${API}/api/opening-hours/${id}`, { withCredentials: true });
    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>

      {/* ---------- STYLES ---------- */}
      <style>{`
        .edit-box {
          margin-top: 10px;
          padding: 15px;
          border: 1px solid #b3ff01ad;
          background: #ff550028;
        }

        .edit-input {
          padding: 8px;
          font-size: 1rem;
          width: 30%;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .save-container {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }

        .save-btn {
          padding: 8px 20px;
          background-color: #7afc2fc0;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
        }

        .save-btn:hover {
          background-color: #00ff80ff;
        }

        .list-row {
          margin-bottom: 12px;
          padding-bottom: 5px;
          border-bottom: 1px solid #ddd;
        }

        .del-btn {
          margin-left: 10px;
          background-color: #ff6b6b;
          padding: 6px 12px;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .del-btn:hover {
          background-color: #ff3b3b;
        }
      `}</style>

      <h1>Muokkaa Aukioloaikoja</h1>

      {/* ---------- HOURS LIST ---------- */}
      {hours.map(item => (
        <div key={item._id} className="list-row">
          <b>{item.day}:</b>{" "}
          {item.open === "Suljettu" ? "Suljettu" : `${item.open} – ${item.close}`}

          <button onClick={() => startEdit(item)} style={{ marginLeft: "10px" }}>
            Muokkaa
          </button>

          <button className="del-btn" onClick={() => deleteDay(item._id)}>
            Poista
          </button>
        </div>
      ))}

      {/* ---------- LISÄÄ UUSI PÄIVÄ BUTTON ---------- */}
      <div style={{ marginTop: "25px" }}>
        <button
          onClick={() => {
            setEditing(null);
            setAddingNew(true);
            setForm({ day: "", open: "", close: "" });
          }}
          style={{
            padding: "10px 18px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#02ce57d3",
            border: "none",
            borderRadius: "6px",
            color: "white"
          }}
        >
          ➕ Lisää uusi päivä
        </button>
      </div>

      {/* ---------- EDIT OR ADD BOX ---------- */}
      {(editing || addingNew) && (
        <div className="edit-box">
          <h2>{editing ? "Muokkaa päivää" : "Lisää uusi päivä"}</h2>

          <input
            className="edit-input"
            placeholder="Päivä"
            value={form.day}
            onChange={e => setForm({ ...form, day: e.target.value })}
          />

          {/* Open time */}
          <input
            className="edit-input"
            placeholder="Aukeaa"
            value={form.open}
            onChange={e => setForm({ ...form, open: e.target.value })}
          />

          {/* Close time */}
          <input
            className="edit-input"
            placeholder="Sulkeutuu"
            value={form.close}
            onChange={e => setForm({ ...form, close: e.target.value })}
          />

          {/* SULJETTU toggle */}
          <div style={{ marginTop: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={form.open === "Suljettu"}
                onChange={e =>
                  setForm(
                    e.target.checked
                      ? { ...form, open: "Suljettu", close: "-" }
                      : { ...form, open: "", close: "" }
                  )
                }
              />
              {" "}Merkitse päiväksi: **Suljettu**
            </label>
          </div>

          <div className="save-container">
            <button
              className="save-btn"
              onClick={editing ? saveEdit : addNew}
            >
              Tallenna
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditHours;
