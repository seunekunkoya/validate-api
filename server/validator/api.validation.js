const Joi = require('joi')
const { schema } = require("./validator.schema");

const apiValidation = (schema, property) => { 
    
  return (req, res, next) => { 
    const { rule:{field, condition, condition_value}, data } = req.body

    
    console.log(field)
  const { error } = Joi.validate(req.body, schema); 
  const valid = error == null; 

  if (valid) {
    next();
  } else {
    const { details } = error;
    //const message = details.map(i => i.message).join(',');

    // console.log("error", message); 
    console.log(details); 

   res.status(400).json({ 
        message: error.message,
        status: 'error',
        data: null
    }) 
  }
}
}
module.exports = apiValidation;
