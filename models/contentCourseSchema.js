const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  titleEn: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = contentSchema;
