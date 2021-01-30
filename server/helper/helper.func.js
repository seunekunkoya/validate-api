
// @desc Home route
// @route  GET /
// @access Public
exports.successMessage = (res) => {
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
}

exports.failureMessage = (res, dataField) => {
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
}//end


exports.errorMessage = (res, error) => {
    res.status(400).json({ 
        message: error.message,
        status: 'error',
        data: null           
    }) 
}