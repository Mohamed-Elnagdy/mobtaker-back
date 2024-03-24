const mongoose = require('mongoose');
const contentSchema = require('./contentCourseSchema');
const courseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  content: [contentSchema],
});

const Course = mongoose.model('course', courseSchema);
module.exports = {Course, courseSchema};
