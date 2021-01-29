const router = require('express').Router()
// const router = express.Router()
const { baseCntrl, ruleCntrl } = require('./controller')
const apiValidation = require('./validator/api.validation')
const schema = require('./validator/validator.schema')
// const { verifyJson } = require('./helper/json.check')

router.route('/').get(baseCntrl)
router.route('/validate-rule').post(apiValidation(schema), ruleCntrl)

module.exports = router