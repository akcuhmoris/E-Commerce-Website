const Joi = require('joi');

exports.createProductSchema = Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().allow('', null),
    price: Joi.number().positive().required(),
    imageUrl: Joi.string().uri().allow('', null),
});