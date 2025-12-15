import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const EditMenu = () => {
  const [menu, setMenu] = useState([]);
  const [editing, setEditing] = useState(null);
  const [creating, setCreating] = useState(false);

  const emptyForm = {
    nimi: "",
    hinta: "",
    kuvaus: "",
    luokka: "",
    ainesosat: "",
    erikoisruokavalio: "",
  };

  const [form, setForm] = useState(emptyForm);

  // Load menu items
  useEffect(() => {
    axios
      .get(`${API}/menu`)
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Start editing an item
  const startEdit = (item) => {
    setCreating(false);
    setEditing(item._id);
    setForm({
      nimi: item.nimi,
      hinta: item.hinta,
      kuvaus: item.kuvaus,
      luokka: item.luokka,
      ainesosat: item.ainesosat.join(", "),
      erikoisruokavalio: item.erikoisruokavalio.join(", "),
    });
  };

  // Save updated item
  const saveEdit = async () => {
    const updated = {
      ...form,
      ainesosat: form.ainesosat.split(",").map((a) => a.trim()),
      erikoisruokavalio: form.erikoisruokavalio.split(",").map((a) => a.trim()),
    };

    await axios.put(`${API}/api/menu/${editing}`, updated, { withCredentials: true });
    window.location.reload();
  };

  // Create new item
  const createItem = async () => {
    const newItem = {
      ...form,
      ainesosat: form.ainesosat.split(",").map((a) => a.trim()),
      erikoisruokavalio: form.erikoisruokavalio.split(",").map((a) => a.trim()),
    };

    await axios.post(`${API}/api/menu`, newItem, { withCredentials: true });
    window.location.reload();
  };

  // Delete item
  const deleteItem = async (id) => {
    if (!confirm("Poistetaanko tuote?")) return;

    await axios.delete(`${API}/api/menu/${id}`, { withCredentials: true });
    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>

      {/* ---------- STYLES ---------- */}
      <style>{`

  .info-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;          /* wraps to next line on small screens */
    align-items: baseline;    /* aligns text baselines */
    margin-bottom: 8px;
  }

  .info-row p {
    margin: 0;
    white-space: normal;      /* was nowrap; let long text wrap */
  }

  .kuvaus {
    margin-top: 6px;
  } 


  .edit-input {
    width: 20%;
    padding: 8px;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .edit-textarea {
    width: 90%;
    height: 40px;
    padding: 4px;
    font-size: 1rem;
    margin-bottom: 12px;
    display: block;
  }

  .menu-item-edit {
    margin-bottom: 35px;
  }

  .edit-box {
    margin-top: 10px;
    padding: 15px;
    border: 1px solid #000000ad;
    background: #7ce2b7da;
  }

  .save-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .save-btn {
    padding: 8px 20px;
    background-color: #7afc2fc0;
    border: 1px solid;
    border-color: #00000073;
    border-radius: 5px;
    font-weight: 600;
    color: #000000d0;
    cursor: pointer;
    transition: 0.7s;
  }

  .save-btn:hover {
    background-color: "#02ce57d3";
  }

  .menu-item-edit h3 {
  margin-bottom: 5px;
  }

  .menu-item-edit p {
    margin: 3px 0;   /* MUCH smaller gap */
  }

  .menu-item-edit button {
    margin-top: 5px;
  }
`}</style>

      
      <h1>Muokkaa Menua</h1>

      {/* ----------- ADD NEW ITEM BUTTON ----------- */}
      <button
        className="add-btn"
        onClick={() => {
          setCreating(true);
          setEditing(null);
          setForm(emptyForm);
        }}
      >
        ➕ Lisää uusi tuote
      </button>

      {/* ----------- MENU LIST ----------- */}
      {menu.map((item) => (
        <div key={item._id} className="menu-item-edit">
          <h3>{item.nimi} — {item.hinta} €</h3>

          <div className="info-row">
            <p><b>Luokka:</b> {item.luokka}</p>

            {item.ainesosat.length > 0 && (
              <p><b>Ainesosat:</b> {item.ainesosat.join(", ")}</p>
            )}

            {item.erikoisruokavalio.length > 0 && (
              <p><b>Erikoisruokavaliot:</b> {item.erikoisruokavalio.join(", ")}</p>
            )}
          </div>

          {item.kuvaus && <p className="kuvaus">{item.kuvaus}</p>}

          <button onClick={() => startEdit(item)}>Muokkaa</button>
          <button
            onClick={() => deleteItem(item._id)}
            style={{ marginLeft: "10px" }}
          >
            Poista
          </button>

          <hr />
        </div>
      ))}

      {/* ----------- CREATE NEW ITEM FORM ----------- */}
      {creating && !editing && (
        <div className="edit-box">
          <h2>Luo uusi tuote</h2>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              className="edit-input"
              placeholder="Nimi"
              value={form.nimi}
              onChange={(e) => setForm({ ...form, nimi: e.target.value })}
            />

            <input
              className="edit-input"
              placeholder="Hinta"
              value={form.hinta}
              onChange={(e) => setForm({ ...form, hinta: e.target.value })}
            />

            <input
              className="edit-input"
              placeholder="Luokka"
              value={form.luokka}
              onChange={(e) => setForm({ ...form, luokka: e.target.value })}
            />
          </div>

          <textarea
            className="edit-textarea"
            placeholder="Kuvaus"
            value={form.kuvaus}
            onChange={(e) => setForm({ ...form, kuvaus: e.target.value })}
          ></textarea>

          <textarea
            className="edit-textarea"
            placeholder="Ainesosat (pilkuilla)"
            value={form.ainesosat}
            onChange={(e) => setForm({ ...form, ainesosat: e.target.value })}
          ></textarea>

          <textarea
            className="edit-textarea"
            placeholder="Erikoisruokavaliot (pilkuilla)"
            value={form.erikoisruokavalio}
            onChange={(e) => setForm({ ...form, erikoisruokavalio: e.target.value })}
          ></textarea>

          <div className="save-container">
            <button className="save-btn" onClick={createItem}>
              ✔ Luo tuote
            </button>
          </div>
        </div>
      )}

      {/* ----------- EDIT ITEM FORM ----------- */}
      {editing && (
        <div className="edit-box">
          <h2>Muokkaa tuotetta</h2>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              className="edit-input"
              placeholder="Nimi"
              value={form.nimi}
              onChange={(e) => setForm({ ...form, nimi: e.target.value })}
            />

            <input
              className="edit-input"
              placeholder="Hinta"
              value={form.hinta}
              onChange={(e) => setForm({ ...form, hinta: e.target.value })}
            />

            <input
              className="edit-input"
              placeholder="Luokka"
              value={form.luokka}
              onChange={(e) => setForm({ ...form, luokka: e.target.value })}
            />
          </div>

          <textarea
            className="edit-textarea"
            placeholder="Kuvaus"
            value={form.kuvaus}
            onChange={(e) => setForm({ ...form, kuvaus: e.target.value })}
          ></textarea>

          <textarea
            className="edit-textarea"
            placeholder="Ainesosat (pilkuilla)"
            value={form.ainesosat}
            onChange={(e) => setForm({ ...form, ainesosat: e.target.value })}
          ></textarea>

          <textarea
            className="edit-textarea"
            placeholder="Erikoisruokavaliot (pilkuilla)"
            value={form.erikoisruokavalio}
            onChange={(e) => setForm({ ...form, erikoisruokavalio: e.target.value })}
          ></textarea>

          <div className="save-container">
            <button className="save-btn" onClick={saveEdit}>
              💾 Tallenna
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMenu;