const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    createMediaSchema: Joi.object().keys({
      titol: Joi.string().required(),
      sinopsis: Joi.string().alphanum().min(10).max(1000),
      puntuacio: Joi.number().integer().required(),
      tipus: Joi.string().valid("Pel·lícula", "Sèrie").required()
    }),

    getMediaListSchema: Joi.object().keys({
        skip: Joi.number().optional(),
        limit: Joi.number().optional()
    }).and('skip', 'limit'),

    getMediaDetailsSchema: Joi.object().keys({
        mediaId: Joi.objectId().required()
    })
}
