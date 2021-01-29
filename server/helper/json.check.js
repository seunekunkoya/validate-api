 // @desc Home route
// @route  GET /
// @access Public
exports.verifyJson = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        //console.error(err);
        return res.status(400).json({ 
           message: "Invalid JSON payload passed.",
           status: 'error',
           data: null
        })  // Bad request
    }
    next();
};
