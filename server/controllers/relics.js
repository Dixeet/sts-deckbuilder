const dataService = require('../dataService');

dataService.load('relics');

exports.getAll = (req, res) => {
    res.json(dataService.relics.relics);
};

exports.findById = (req, res) => {
    let result = dataService.relics.relics[req.params.id];
    if (typeof result === 'undefined'){
        res.sendStatus(404)
    }
    res.json(result);
};