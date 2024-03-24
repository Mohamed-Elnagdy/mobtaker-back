const express = require('express');
const courseRouter = express.Router();
const Course = require('../controller/courseController');

courseRouter.get('/mobtaker/courses', Course.getCoursesList);
courseRouter.post('/mobtaker/add-course', Course.addCourse);

module.exports = courseRouter;
