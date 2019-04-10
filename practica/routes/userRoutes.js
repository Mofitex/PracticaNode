const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

//router.post('/', userController.createUser);

const joiSchemaValidation = require('../helper/joiSchemaValidation');
const userSchema = require('../models/api/userSchema');

router.post('/', joiSchemaValidation.validateBody(userSchema.createUserSchema), userController.createUser);

module.exports = router;