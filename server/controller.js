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

exports.ruleCntrl = (req,res) => {
    const { body } = req
    const { rule:{ field, condition, condition_value }, data } = body
    const field_value = data[field]
    res.status(200).json({
        message: "field mission successfully validated.",
        status: "success",
        data: {
                validation: {
                    error: false,
                    field,
                    field_value,
                    condition,
                    condition_value
                },
        //body
        }
    })
}
