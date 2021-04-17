/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name to the bootcamp'],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, 'Please provide rating to the bootcamp'],
  },
  description: {
    type: String,
    required: [true, 'Please provide description to the bootcamp'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide bootcamp with price'],
  },
});

const BootcampModel = mongoose.model('Bootcamp', bootcampSchema);

module.exports = BootcampModel;
