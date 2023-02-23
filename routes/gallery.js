const router = require('express').Router();
const { getGallery, getCategories } = require('../controllers/gallery');

router.get('/', getGallery);
router.get('/categories', getCategories);

module.exports = router;