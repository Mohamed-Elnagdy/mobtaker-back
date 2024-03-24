const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
  courseRegisterTitle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const courseRegister = mongoose.model('register-courses', registerSchema);
module.exports = { courseRegister, registerSchema };
