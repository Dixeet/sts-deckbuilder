const fs = require('fs');
const path = require('path');
// const dataPath;
let collectionsLoaded = [];

exports.load = (collectionName = '') => {
    if (collectionsLoaded.indexOf(collectionName) === -1) {
        exports[collectionName] = {};
        let files = fs.readdirSync(path.join(__dirname, '../data', collectionName));
        files.forEach((fileName) => {
            const filePath = path.join(__dirname, '../data', collectionName, fileName);
            const content = fs.readFileSync(filePath);
            const baseFileName = path.basename(filePath, '.json');
            exports[collectionName][baseFileName] = JSON.parse(content);
        });
        collectionsLoaded.push(collectionName);
        console.log(`Collection ${collectionName} loaded!`)
    } else {
        console.log(`Collection ${collectionName} already loaded`);
    }
};

exports.getAll = (collectionName = '') => {
    if (typeof exports[collectionName] === 'undefined') {
        return false;
    }

    const keys = Object.keys(exports[collectionName]);
    let resObj = {};
    keys.forEach(function (key) {
        Object.assign(resObj, exports[collectionName][key]);
    });
    return resObj;
};