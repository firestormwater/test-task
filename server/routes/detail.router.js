const Router = require('express')
const detailController = require('../controllers/detail.controller')
const router = new Router()

router.get('/clients', detailController.getClients)
router.get('/records', detailController.getRecordsByClient)

module.exports = router