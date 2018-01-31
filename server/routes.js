const router = require('express').Router();
const cards = require('./controllers/cards');

router.get('/cards', cards.getAll);
router.get('/cards/:id', cards.findById);

module.exports = router;