const dataService = require('../dataService');

dataService.load('cards');

exports.getAll = (req, res) => {
    res.json(Object.values(dataService.getAll('cards')));
};

exports.findById = (req, res) => {
    let result = dataService.getAll('cards')[req.params.id];
    if (typeof result === 'undefined'){
        res.sendStatus(404)
    }
    res.json(result);
};

exports.getAllIronclad = (req, res) => {
    res.json(Object.values(dataService.cards.ironclad));
};

exports.getAllSilent = (req, res) => {
    res.json(Object.values(dataService.cards.silent));
};

exports.getAllNeutral = (req, res) => {
    res.json(Object.values(dataService.cards.neutral));
};