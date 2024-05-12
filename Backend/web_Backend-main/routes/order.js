const router = require('express').Router()
const {getOrders, createOrder} = require('../controllers/order')

router.route('/:id').get(getOrders)

router.route('/').post(createOrder)
// localhost:3030/order/

module.exports = router;