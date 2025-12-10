import { useEffect, useState } from "react";
import axios from "axios";

const EditMenu = () => {
  const [menu, setMenu] = useState([]);
  const [editing, setEditing] = useState(null); // item being edited
  const [form, setForm] = useState({
    nimi: "",
    hinta: "",
    kuvaus: "",
    luokka: "",
    ainesosat: "",
    erikoisruokavalio: "",
  });

  // Load menu items
  useEffect(() => {
    axios.get("http://localhost:5000/api/menu")
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, []);

  // Open edit mode for one item
  const startEdit = (item) => {
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
      ainesosat: form.ainesosat.split(",").map(a => a.trim()),
      erikoisruokavalio: form.erikoisruokavalio.split(",").map(a => a.trim()),
    };

    await axios.put(`http://localhost:5000/api/menu/${editing}`, updated);
    window.location.reload(); // easiest refresh
  };

  // Delete item
  const deleteItem = async (id) => {
    if (!confirm("Poistetaanko tuote?")) return;

    await axios.delete(`http://localhost:5000/api/menu/${id}`);
    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Muokkaa Menua</h1>

      {/* List every menu item */}
      {menu.map(item => (
  <div key={item._id} className="menu-item-edit">

    <h3>{item.nimi} — {item.hinta} €</h3>

    <p><b>Luokka:</b> {item.luokka}</p>

    {/* ➤ Show ingredients */}
    {item.ainesosat && item.ainesosat.length > 0 && (
      <p><b>Ainesosat:</b> {item.ainesosat.join(", ")}</p>
    )}

    {/* ➤ Show diets */}
    {item.erikoisruokavalio && item.erikoisruokavalio.length > 0 && (
      <p><b>Erikoisruokavaliot:</b> {item.erikoisruokavalio.join(", ")}</p>
    )}

    {item.kuvaus && <p>{item.kuvaus}</p>}

    <button onClick={() => startEditing(item)}>Muokkaa</button>
    <button onClick={() => deleteItem(item._id)} style={{ marginLeft: "10px" }}>
      Poista
    </button>

    <hr />

  </div>
))}

      {/* Edit window */}
      {editing && (
        <div style={{ marginTop: "40px", padding: "20px", border: "1px solid #aaa" }}>
          <h2>Muokkaa tuotetta</h2>

          <input placeholder="Nimi" value={form.nimi}
            onChange={e => setForm({ ...form, nimi: e.target.value })} />

          <input placeholder="Hinta" value={form.hinta}
            onChange={e => setForm({ ...form, hinta: e.target.value })} />

          <input placeholder="Luokka" value={form.luokka}
            onChange={e => setForm({ ...form, luokka: e.target.value })} />

          <textarea placeholder="Kuvaus" value={form.kuvaus}
            onChange={e => setForm({ ...form, kuvaus: e.target.value })}></textarea>

          <textarea placeholder="Ainesosat (pilkuilla)"
            value={form.ainesosat}
            onChange={e => setForm({ ...form, ainesosat: e.target.value })}></textarea>

          <textarea placeholder="Erikoisruokavaliot (pilkuilla)"
            value={form.erikoisruokavalio}
            onChange={e => setForm({ ...form, erikoisruokavalio: e.target.value })}></textarea>

          <button onClick={saveEdit} style={{ marginTop: "10px" }}>Tallenna</button>
        </div>
      )}
    </div>
  );
};

export default EditMenu;
