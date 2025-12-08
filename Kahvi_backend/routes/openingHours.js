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

router.put('/:id', async (req, res) => {
  try {
    const updated = await OpeningHours.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });

    res.json(updated);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE (optional)
router.delete('/:id', async (req, res) => {
  try {
    await OpeningHours.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;