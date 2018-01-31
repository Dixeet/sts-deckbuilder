const dataService = require('../dataService');

dataService.load('cards');

exports.getAll = (req, res) => {
    res.json(dataService.getAll('cards'));
};

exports.findById = (req, res) => {
    let result = dataService.getAll('cards')[req.params.id];
    if (typeof result === 'undefined'){
        res.sendStatus(404)
    }
    res.json(result);
};