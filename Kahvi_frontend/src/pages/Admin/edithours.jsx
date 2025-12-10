import { useEffect, useState } from "react";
import axios from "axios";

const EditHours = () => {
  const [hours, setHours] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    day: "",
    open: "",
    close: ""
  });

  // Load hours
  useEffect(() => {
    axios.get("http://localhost:5000/api/opening-hours")
      .then(res => setHours(res.data))
      .catch(err => console.error(err));
  }, []);

  const startEdit = (item) => {
    setEditing(item._id);
    setForm({
      day: item.day,
      open: item.open,
      close: item.close
    });
  };

  const saveEdit = async () => {
    await axios.put(`http://localhost:5000/api/opening-hours/${editing}`, form);
    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Muokkaa Aukioloaikoja</h1>

      {hours.map(item => (
        <div key={item._id} style={{ marginBottom: "20px" }}>
          <b>{item.day}:</b> {item.open} – {item.close}
          <button onClick={() => startEdit(item)} style={{ marginLeft: "10px" }}>
            Muokkaa
          </button>
        </div>
      ))}

      {editing && (
        <div style={{ marginTop: "40px", border: "1px solid #aaa", padding: "20px" }}>
          <h2>Muokkaa päivää</h2>

          <input
            placeholder="Päivä"
            value={form.day}
            onChange={e => setForm({ ...form, day: e.target.value })}
          />

          <input
            placeholder="Aukeaa"
            value={form.open}
            onChange={e => setForm({ ...form, open: e.target.value })}
          />

          <input
            placeholder="Sulkeutuu"
            value={form.close}
            onChange={e => setForm({ ...form, close: e.target.value })}
          />

          <button onClick={saveEdit} style={{ marginTop: "10px" }}>
            Tallenna
          </button>
        </div>
      )}
    </div>
  );
};

export default EditHours;
