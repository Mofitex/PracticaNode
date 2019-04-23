const express = require('express');
const router = express.Router();
const capitolController = require('../controller/capitolController');

//router.post('/', capitolController.createCapitol);

const joiSchemaValidation = require('../helper/joiSchemaValidation');
const capitolSchema = require('../models/api/capitolSchema');

router.post('/', joiSchemaValidation.validateBody(capitolSchema.createCapitolSchema), capitolController.createCapitol);

module.exports = router;
