const router = require('express').Router();

const { cards } = require('../db.js');

router.get('/', (req, res) =>{
    res.send(cards);
})

router.get('/:id', (req, res) =>{
    if (!cards[req.params.id]) {
        res.send(`Такой карточки не существует`);
        return;
      }
    
      const { title, about, image } = cards[req.params.id];
      
      res.send(`Карточка: ${title}, описание: ${about} ${image}`);
})

module.exports = router;