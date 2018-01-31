const dataService = require('./server/dataService');
dataService.load('cards');
dataService.load('cards');
let toto = dataService.getAll('cards');
console.log(dataService.cards.ironclad);