const {Router} = require('express')
const { router } = require('..')

const user = require('./user')

const route = Router()

router.use('/user', user)

// Route
router.use((req, res) => res.status(404).send())