const express = require('express');
const router = express.Router();
const capitolController = require('../controller/capitolController');
const constants = require('../config/constants');
const joiSchemaValidation = require('../helper/joiSchemaValidation');
const capitolSchema = require('../models/api/capitolSchema');


router.post('/', joiSchemaValidation.validate(capitolSchema.createCapitolSchema, constants.requestObj.BODY), capitolController.createCapitol);

router.get('/list', joiSchemaValidation.validate(capitolSchema.getCapitolListSchema, constants.requestObj.QUERY_PARAMS), capitolController.getCapitolList);
router.get('/details/:capitolId', joiSchemaValidation.validate(capitolSchema.getCapitolDetailsSchema, constants.requestObj.PATH_PARAMS), capitolController.getCapitolDetails);

module.exports = router;
