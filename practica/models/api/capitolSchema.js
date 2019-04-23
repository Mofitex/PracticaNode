const Joi = require('joi');

module.exports.createCapitolSchema = Joi.object().keys({
    titol: Joi.string().required(),
    numero: Joi.number().integer().required(),
    temporada: Joi.number().integer().required(),
    serieId: Joi.number().integer().required()
});
