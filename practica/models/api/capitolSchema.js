const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    createCapitolSchema: Joi.object().keys({
      titol: Joi.string().required(),
      numero: Joi.number().integer().required(),
      temporada: Joi.number().integer().required(),
      serieId: Joi.number().integer().required()
    }),

    getCapitolListSchema: Joi.object().keys({
        skip: Joi.number().optional(),
        limit: Joi.number().optional()
    }).and('skip', 'limit'),

    getCapitolDetailsSchema: Joi.object().keys({
        userId: Joi.objectId().required()
    })
}
