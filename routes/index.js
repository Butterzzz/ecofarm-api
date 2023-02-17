const router = require('express').Router();
const cardsRouter = require('./cards');
const orderRouter = require('./order');

router.use('/catalog/cards', cardsRouter);
router.use('/order', orderRouter)

module.exports = router;