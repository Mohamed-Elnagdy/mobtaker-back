const express = require('express');
const registerRouter = express.Router();
const register = require('../controller/registerController');

registerRouter.post('/mobtaker/register-course', register.postRegisterCourses);
registerRouter.post('/mobtaker/free-register', register.postFreeRegister);

module.exports = registerRouter;
