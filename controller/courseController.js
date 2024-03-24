const { Course } = require('../models/courseSchema');

exports.getCoursesList = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.json({ msg: 'course added successfully' });
    return savedCourse;
  } catch (error) {
    console.error('Error while adding course:', error);
    throw error;
  }
};
