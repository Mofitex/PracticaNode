const Joi = require('joi');

module.exports.createMediaSchema = Joi.object().keys({
    titol: Joi.string().required(),
    sinopsis: Joi.string().alphanum().min(10).max(1000),
    puntuacio: Joi.number().integer().required(),
    Pelicula: Joi.boolean().required()
});
