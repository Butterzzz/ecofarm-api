const router = require('express').Router();
const { getCards, getCard } = require('../controllers/cards');

router.get('/', getCards);
router.get('/:_id', getCard);

module.exports = router;