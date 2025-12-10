const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  nimi: { type: String, required: true },
  hinta: { type: String, required: true },
  ainesosat: { type: [String], default: [] },
  luokka: { type: String, required: true },
  kuvaus: { type: String },
  erikoisruokavalio: { type: [String], default: [] }
});

module.exports = mongoose.model('Menu', MenuSchema, 'Menu');