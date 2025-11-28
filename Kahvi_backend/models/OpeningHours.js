const mongoose = require('mongoose');

const openingHoursSchema = new mongoose.Schema({
  day: { type: String, required: true },
  open: { type: String, required: true },
  close: { type: String, required: true },
});

module.exports = mongoose.model('OpeningHours', openingHoursSchema);
