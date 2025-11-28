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

module.exports = router;
