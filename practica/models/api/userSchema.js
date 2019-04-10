const Joi = require('joi');

module.exports.createUserSchema = Joi.object().keys({
    mail: Joi.string().email().required(),
    nom: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    direccion: Joi.string().min(8).max(50).required(),
    cuenta: Joi.number().integer().min(1).max(99999999).required(),
    admin: Joi.boolean().required()
});
