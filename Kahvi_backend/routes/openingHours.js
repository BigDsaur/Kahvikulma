const express = require('express');
const router = express.Router();
const OpeningHours = require('../models/OpeningHours');

// GET all opening hours
router.get('/', async (req, res) => {
  try {
    const hours = await OpeningHours.find();
    res.json(hours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new opening hours
router.post('/', async (req, res) => {
  const { day, open, close } = req.body;

  try {
    const hours = new OpeningHours({ day, open, close });
    const saved = await hours.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;