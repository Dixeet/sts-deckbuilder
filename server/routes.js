const router = require('express').Router();
const cards = require('./controllers/cards');
const relics = require('./controllers/relics');

router.get('/cards', cards.getAll);
router.get('/cards/ironclad', cards.getAllIronclad);
router.get('/cards/silent', cards.getAllSilent);
router.get('/cards/neutral', cards.getAllNeutral);
router.get('/cards/:id', cards.findById);

router.get('/relics', relics.getAll);
router.get('/relics/:id', relics.findById);

module.exports = router;