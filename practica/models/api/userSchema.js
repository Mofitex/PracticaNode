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

    userIdPathParamSchema: Joi.object().keys({
        userId: Joi.objectId().required()
    }),

    getUserDetailsSchema: Joi.object().keys({
        userId: Joi.objectId().required()
    }),

    updateUserBodySchema: Joi.object().keys({
        nom: Joi.string().min(3).max(30).optional(),
        password: Joi.string().alphanum().optional(),
        direccion: Joi.string().min(8).max(50).optional(),
        n_cuenta: Joi.number().integer().min(1).max(99999999).optional()
    }),

    authenticateUserSchema: Joi.object().keys({
        mail: Joi.string().email().required(),
        password: Joi.string().required()
    }),

    tokenHeaderSchema: Joi.object().keys({
        authorization: Joi.string().required()
    })
}
