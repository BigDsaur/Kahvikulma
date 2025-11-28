import { useEffect, useState } from "react";

export default function OpeningHours() {
  const [hours, setHours] = useState([]);

  const loadHours = () => {
    fetch("http://localhost:5000/api/opening-hours")
      .then(res => res.json())
      .then(data => setHours(data));
  };

  useEffect(() => {
    loadHours();
  }, []);

  const deleteHours = async (id) => {
    await fetch("http://localhost:5000/api/opening-hours/" + id, {
      method: "DELETE",
    });
    loadHours();
  };

  return (
    <div>
      <h2>Opening Hours</h2>

      {hours.map(h => (
        <div key={h._id} style={{ marginBottom: 10 }}>
          <strong>{h.day}</strong>: {h.open} - {h.close}
          <button
            style={{ marginLeft: 10 }}
            onClick={() => deleteHours(h._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
