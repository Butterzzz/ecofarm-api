const Gallery = require('../models/gallery');
const Categories = require('../models/categories');

module.exports.getGallery = (req, res) => {
  Gallery.find({})
    .then(gallery => res.send(gallery))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getCategories = (req, res) => {
  Categories.find({})
    .then(сategories => res.send(сategories))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};