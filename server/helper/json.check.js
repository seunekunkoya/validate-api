 // @desc Home route
// @route  GET /
// @access Public
exports.verifyJson = (err, req, res, next) => {
   
    try {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err){
            
            throw new Error('Invalid JSON payload passed')
        }
    } catch (error) {
            return res.status(400).send({
                    message: error.message,
                    status: 'error',
                    data: null,
                });
    }
    next();
};
