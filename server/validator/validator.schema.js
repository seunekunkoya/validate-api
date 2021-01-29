const Joi = require('joi');

const schema = Joi.object().keys({
  rule: Joi.object().keys({
    field: Joi.string().required().error(new Error('field is required')),
    condition: Joi.string().valid('eq', 'neq', 'gte', 'gt', 'contains').required().error(new Error('condition is required')),
    condition_value: Joi.any().required().error(new Error('condition_value is required'))
}).error(new Error('rule is required')),
data: Joi.alternatives().try(
  Joi.string().required(),
  Joi.array().required(),
  Joi.object().required()
).error(new Error('data is required'))
}).error(new Error('valid object is required'))

module.exports = schema;