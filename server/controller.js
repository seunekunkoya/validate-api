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
    res.status(200).json({
        status: "success",
        data: {
            type: "TEACHER",
            firstname: "Seun"
        }
    })
}