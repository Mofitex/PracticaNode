const express = require('express');
const router = express.Router();
const mediaController = require('../controller/mediaController');

//router.post('/', mediaController.createMedia);

const joiSchemaValidation = require('../helper/joiSchemaValidation');
const mediaSchema = require('../models/api/mediaSchema');

router.post('/', joiSchemaValidation.validateBody(mediaSchema.createMediaSchema), mediaController.createMedia);

module.exports = router;
