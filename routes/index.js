const router = require('express').Router();
const cardsRouter = require('./cards');
const orderRouter = require('./order');
const galleryRouter = require('./gallery');

router.use('/catalog/cards', cardsRouter);
router.use('/order', orderRouter);
router.use('/gallery', galleryRouter);

module.exports = router;