const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const sendMessage = require("../mailer");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newMsg = new Message(req.body);
    await newMsg.save();

    await sendMessage({ name, email, phone, message });

    res.status(201).json({ success: true, message: "Message saved and email sent!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to send message." });
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
