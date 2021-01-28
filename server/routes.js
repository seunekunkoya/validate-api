const router = require('express').Router()
// const router = express.Router()
const { baseCntrl, ruleCntrl } = require('./controller')

router.route('/').get(baseCntrl)
router.route('/validate-rule').post(ruleCntrl)

module.exports = router