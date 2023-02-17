const router = require('express').Router();
const { getOrders, createOrder, deleteOrder } = require('../controllers/order');

router.get('/', getOrders);
router.post('/', createOrder);
router.delete('/:orderId', deleteOrder);

module.exports = router;