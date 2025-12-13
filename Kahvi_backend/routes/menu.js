const verifyToken = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new menu item
router.post('/', verifyToken, async (req, res) => {
  const { nimi, hinta, ainesosat, luokka, kuvaus, erikoisruokavalio } = req.body;

  try {
    const item = new MenuItem({
      nimi,
      hinta,
      ainesosat,
      luokka,
      kuvaus,
      erikoisruokavalio
    });

    const saved = await item.save();
    res.status(201).json(saved);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update menu item
router.put('/:id', verifyToken,async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.json(updated);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE menu item
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu item deleted' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
