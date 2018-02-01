const router = require('express').Router();
const cards = require('./controllers/cards');

router.get('/cards', cards.getAll);
router.get('/cards/ironclad', cards.getAllIronclad);
router.get('/cards/silent', cards.getAllSilent);
router.get('/cards/neutral', cards.getAllNeutral);
router.get('/cards/:id', cards.findById);

module.exports = router;