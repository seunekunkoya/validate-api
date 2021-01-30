const isValid  = require('./helper/condition.func')

// @desc Home route
// @route  GET /
// @access Public
exports.baseCntrl = (req, res) => {
    return res.status(200).json({
        message: "My Rule-Validation API",
        status: "success",
        data: {
            name: `Oluwaseun Ekunkoya`,
            github: `@seunekunkoya`,
            email: `ekunkoya.seun@gmail.com`,
            mobile: `09068063932`,
            twitter: `^`,
        },
    })
}

exports.ruleCntrl = (req, res) => {

    try {
        const { rule:{field, condition, condition_value}, data } = req.body

        //test data to see if it is an array or a string
        if(!Array.isArray(data) && typeof data !== 'string' && data === null)
        {
            throw new Error(`data should be an object, a string or an array`)
        }

        if(Array.isArray(data))
        { 
            
             //get data from field to cary out test
            dataField = data[field]
            
            if(dataField == null)
            {
                throw new Error(`field ${field} is missing from data`)
            }
            else {
                
                if( isValid(dataField, condition, condition_value) == true){
                    res.status(200).json({
                        message: `field ${dataField} successfully validated.`,
                        status: "success",
                        data: {
                                validation: {
                                    error: false,
                                    field,
                                    dataField,
                                    condition,
                                    condition_value
                                },
                        //body
                        }
                    })
                }//end of if
                else {
                    res.status(400).json({
                        message: `field ${dataField} failed validation.`,
                        status: "error",
                        data: {
                                validation: {
                                    error: true,
                                    field,
                                    dataField,
                                    condition,
                                    condition_value
                                },
                        //body
                        }
                    })
                }//end of else
            }//end of outer else
        }

        else if (typeof data === 'string') {
            //This checks if data is a string and runs validation checks on it
            dataField = data[field]

            if(dataField == null)
            {
                throw new Error(`field ${field} is missing from data`)
            }

            if( isValid(dataField, condition, condition_value) == true){
                res.status(200).json({
                    message: `field ${dataField} successfully validated.`,
                    status: "success",
                    data: {
                            validation: {
                                error: false,
                                field,
                                dataField,
                                condition,
                                condition_value
                            },
                    //body
                    }
                })
            }//end of if
            else {
                res.status(400).json({
                    message: `field ${dataField} failed validation.`,
                    status: "error",
                    data: {
                            validation: {
                                error: true,
                                field,
                                dataField,
                                condition,
                                condition_value
                            },
                    //body
                    }
                })
            }//end of else 
        } else {

            const fieldValues = field.split(".")

            if(fieldValues.length > 2)
            {
                throw new Error("Nesting should not be more than 2")
            }

            if(fieldValues.length === 1)
            {
                console.log(fieldValues.length)
                dataField = data[field]
                console.log(dataField)
               
                if(dataField == null)
                {
                    throw new Error(`field ${field} is missing from data`)
                }

                if( isValid(dataField, condition, condition_value) == true){
                    res.status(200).json({
                        message: `field ${field} successfully validated.`,
                        status: "success",
                        data: {
                                validation: {
                                    error: false,
                                    field,
                                    dataField,
                                    condition,
                                    condition_value
                                },
                        //body
                        }
                    })
                }//end of if
                else {
                    res.status(400).json({
                        message: `field ${dataField} failed validation.`,
                        status: "error",
                        data: {
                                validation: {
                                    error: true,
                                    field,
                                    dataField,
                                    condition,
                                    condition_value
                                },
                        //body
                        }
                    })
                }//end of else
                
            }

            if(fieldValues.length === 2)
            {
                console.log(fieldValues.length)
                
                const strPos1 = field.split(".")[0]
                const strPos2 = field.split(".")[1]  

                dataField = data[strPos1][strPos2]

                if(dataField == null)
                {
                    throw new Error(`field ${field} is missing from data`)
                }

                if( isValid(dataField, condition, condition_value) == true){
                    res.status(200).json({
                        message: `field ${field} successfully validated.`,
                        status: "success",
                        data: {
                                validation: {
                                    error: false,
                                    field,
                                    dataField,
                                    condition,
                                    condition_value
                                },
                        //body
                        }
                    })
                }//end of if
                else {
                    res.status(400).json({
                        message: `field ${dataField} failed validation.`,
                        status: "error",
                        data: {
                                validation: {
                                    error: true,
                                    field,
                                    dataField,
                                    condition,
                                    condition_value
                                },
                        //body
                        }
                    })
                }//end of else
            }
            
        }
          
    } catch (error) {
       //
        res.status(400).json({ 
            message: error.message,
            status: 'error',
            data: null           
        }) 
    }
      
}
