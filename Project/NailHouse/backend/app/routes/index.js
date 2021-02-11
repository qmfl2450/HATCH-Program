const {Router} = require('express')

const user = require('./user')
const production = require('./production')

const router = Router()

router.use('/user', user)
router.use('/production', production)

// default route
router.use((req, res) => res.status(404).send())

module.exports = router