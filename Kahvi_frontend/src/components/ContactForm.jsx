import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    try {
      await axios.post("http://localhost:5000/api/messages", form);
      alert("Message sent!");
    } catch (err) {
      alert("Error sending message.");
    }
  };

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message…" onChange={handleChange} />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
