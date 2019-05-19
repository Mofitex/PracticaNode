const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    createMediaSchema: Joi.object().keys({
      titol: Joi.string().required(),
      sinopsis: Joi.string().alphanum().min(10).max(1000),
      puntuacio: Joi.number().integer().required(),
      tipus: Joi.string().valid("Pelicula", "Serie").required()
    }),

    getMediaListSchema: Joi.object().keys({
        mediaTipus: Joi.string().required(),
        skip: Joi.number().optional(),
        limit: Joi.number().optional()
    }).and('skip', 'limit'),

    mediaIdPathParamSchema: Joi.object().keys({
        mediaId: Joi.objectId().required()
    }),

    /*getMediaDetailsSchema: Joi.object().keys({
        mediaId: Joi.objectId().required()
    }),*/

    updateMediaBodySchema: Joi.object().keys({
      sinopsis: Joi.string().alphanum().min(10).max(1000).optional(),
      puntuacio: Joi.number().integer().optional()
    })
}
