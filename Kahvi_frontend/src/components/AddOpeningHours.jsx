import { useState } from "react";

export default function AddOpeningHours() {
  const [day, setDay] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/opening-hours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ day, open, close }),
    });

    alert("Hours Saved!");
    setDay("");
    setOpen("");
    setClose("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <h2>Add Opening Hours</h2>

      <input
        placeholder="Day"
        value={day}
        onChange={e => setDay(e.target.value)}
      />

      <input
        type="time"
        value={open}
        onChange={e => setOpen(e.target.value)}
      />

      <input
        type="time"
        value={close}
        onChange={e => setClose(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}
