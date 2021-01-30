const Joi = require('joi');
const { required } = require('joi/lib/types/lazy');

const schema = Joi.object().keys({
  rule: Joi.object().keys({
    field: Joi.string().regex(/^[a-zA-Z0-9.]+$/).error(new Error('Enter only string')).required().error(new Error('field is required')),
    condition: Joi.string().valid('eq', 'neq', 'gte', 'gt', 'contains').required().error(new Error('condition is required')),
    condition_value: Joi.any().required().error(new Error('condition_value is required'))
}).required().error(new Error('rule is required and it should be an object')),
data: Joi.alternatives().try(
  Joi.string().required(),
  Joi.array().required(),
  Joi.object().required()
).required().error(new Error('data is required'))
})

module.exports = schema;