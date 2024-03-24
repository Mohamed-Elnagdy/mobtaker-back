const { courseRegister } = require('../models/registerSchema');
const { freeRegister } = require('../models/freeRegisterSchema');

exports.postRegisterCourses = async (req, res) => {
  try {
    const registerCourses = new courseRegister(req.body);
    await registerCourses.save();
    res.json('Thank you for submitting your registration. Our team will communicate with you');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.postFreeRegister = async (req, res) => {
  try {
    const freeRegisterOrder = new freeRegister(req.body);
    await freeRegisterOrder.save();
    res.json('Thank you for submitting. Our team will communicate with you');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
