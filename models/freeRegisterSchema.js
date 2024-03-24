const mongoose = require('mongoose');

const freeRegisterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const freeRegister = mongoose.model('free-register', freeRegisterSchema);
module.exports = { freeRegister, freeRegisterSchema };
