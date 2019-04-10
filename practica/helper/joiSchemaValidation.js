const Joi = require('joi')
const constants = require('../config/constants')
let responseObj = {}

module.exports.validateBody = (schema) => {
    // Ha de retornar una funció middleware, per tant té req, res, next.
    return (req, res, next) => {
        const result = Joi.validate(req.body, schema);
        if(result.error) {
            //const errorDetail = result.error.details;
            const errorDetail = result.error.details.map((value) => {
                return value.message;
            });
            responseObj.status = 400;
            responseObj.message = constants.controllerStatus.BAD_REQUEST;
            responseObj.body = errorDetail;
            return res.status(responseObj.status).send(responseObj);
        } else {
            next();
        }
    }
}