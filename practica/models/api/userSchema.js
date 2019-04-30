const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    createUserSchema: Joi.object().keys({
      mail: Joi.string().email().required(),
      nom: Joi.string().min(3).max(30).required(),
      password: Joi.string().alphanum().required(),
      direccion: Joi.string().min(8).max(50).required(),
      n_cuenta: Joi.number().integer().min(1).max(99999999).required(),
      tipus: Joi.string().valid("Admin", "Normal").required()
    }),

    getUserListSchema: Joi.object().keys({
        skip: Joi.number().optional(),
        limit: Joi.number().optional()
    }).and('skip', 'limit'),

    getUserDetailsSchema: Joi.object().keys({
        userId: Joi.objectId().required()
    })
}
