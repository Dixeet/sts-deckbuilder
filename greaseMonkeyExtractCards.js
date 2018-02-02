// ==UserScript==
// @name     Extract Card
// @version  1
// @grant    none
// @include http://slay-the-spire.wikia.com/*
// @exclude http://slay-the-spire.wikia.com/wiki/Relics
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var cards = {};
var prefix = "";
if (window.location.href.indexOf("Neutral") > -1) {
    prefix = "n";
} else if (window.location.href.indexOf("Iron") > -1) {
    prefix = "i";
} else if (window.location.href.indexOf("Silent") > -1) {
    prefix = "s";
}
var incId = 0;
var $cards = $('#WikiaMainContentContainer table.article-table tbody tr');

processCards();

function processCards() {
    if ($cards.length > 0) {
        $cards.each(function () {
            $detail = $(this).find('td');
            if ($detail.length > 0) {
                processCard($detail);
            }
        });
        // processCard($($cards[1]).find('td'));
        console.log(cards);
    }
}

function processCard($detail) {
    var card = {
        id: prefix + incId,
        name: "",
        camelizeName: "",
        rarity: "",
        type: "",
        base: {},
        upgraded: {}
    };
    $detail.each(function (index, el) {
        switch (index) {
            case 0:
                card.name = getCleanText(el);
                card.camelizeName = camelize(card.name);
                break;
            case 2:
                card.rarity = getCleanText(el);
                break;
            case 3 :
                card.type = getCleanText(el);
                break;
            case 4:
                var baseAndUpgraded = getBaseAndUpgradedText(el);
                card.base.energy = baseAndUpgraded.base;
                card.upgraded.energy = baseAndUpgraded.upgraded;
                break;
            case 5:
                var baseAndUpgraded = getBaseAndUpgradedText(el);
                card.base.description = baseAndUpgraded.base;
                card.upgraded.description = baseAndUpgraded.upgraded;
                break;
        }
        cards[prefix + incId] = card;
    });
    incId++;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function getCleanText(el) {
    return getText(el).replace(/(\r\n|\n|\r)/gm, "");
}

function getText(el) {
    return $.trim($(el).text());
}


function getBaseAndUpgradedText(el) {
    var text = getText(el);
    var conditionalParts = findConditionalParts(text);
    var baseParts = getBaseParts(conditionalParts);
    var upgradeParts = getUpgradedParts(conditionalParts);
    var baseAndUpgradedText = {
        base: text,
        upgraded: text
    };
    conditionalParts.forEach(function (condPart, index) {
        baseAndUpgradedText.base = baseAndUpgradedText.base.replace(condPart, baseParts[index]);

        // This condition is because there is some (s) for plurial
        if (upgradeParts[index] === "s") {
            baseAndUpgradedText.upgraded = baseAndUpgradedText.upgraded.replace(condPart, baseParts[index] + upgradeParts[index]);
        } else {
            baseAndUpgradedText.upgraded = baseAndUpgradedText.upgraded.replace(condPart, upgradeParts[index]);
        }
    });
    return baseAndUpgradedText;
}

function findConditionalParts(text) {
    var textParts = text.split(' ');
    var conditionalParts = [];
    var partialText = "";
    textParts.forEach(function (part, idx) {

        if (part.indexOf("(") == 0) {
            part = textParts[idx - 1] + " " + part;
        }
        //Those conditions is because there is sometimes whitespace in conditional part
        if (part.slice(-1) === ")") {
            if (part.indexOf("(") > -1) {
                conditionalParts.push(part);
            } else {
                partialText += " " + part;
                conditionalParts.push(partialText);
            }
            partialText = "";
        } else if (part.indexOf("(") > -1) {
            partialText += partialText === "" ? part : " " + part;
        }
    });
    return conditionalParts;
}

function getBaseParts(conditionalParts) {
    var baseParts = [];
    conditionalParts.forEach(function (part) {
        var firstpart = part.split("(")[0];
        if (firstpart.slice(-1) == " ") {
            baseParts.push(firstpart.slice(0, firstpart.length - 1));
        } else {
            baseParts.push(part.split("(")[0]);
        }
    });
    return baseParts;
}

function getUpgradedParts(conditionalParts) {
    var upgradedParts = [];
    conditionalParts.forEach(function (part) {
        if (typeof part.split("(") != 'undefined' && part.split("(").length > 1) {
            upgradedParts.push(part.split("(")[1].split(")")[0]);
        } else {
            upgradedParts.push("toto");
        }
    });
    return upgradedParts;
}// ==UserScript==
// @name     Extract Card
// @version  1
// @grant    none
// @include http://slay-the-spire.wikia.com/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var cards = {};
var prefix = "";
if (window.location.href.indexOf("Neutral") > -1) {
    prefix = "n";
} else if (window.location.href.indexOf("Iron") > -1) {
    prefix = "i";
} else if (window.location.href.indexOf("Silent") > -1) {
    prefix = "s";
}
var incId = 0;
var $cards = $('#WikiaMainContentContainer table.article-table tbody tr');

processCards();

function processCards() {
    if ($cards.length > 0) {
        $cards.each(function () {
            $detail = $(this).find('td');
            if ($detail.length > 0) {
                processCard($detail);
            }
        });
        // processCard($($cards[1]).find('td'));
        console.log(cards);
    }
}

function processCard($detail) {
    var card = {
        id: prefix + incId,
        name: "",
        camelizeName: "",
        rarity: "",
        type: "",
        base: {},
        upgraded: {}
    };
    $detail.each(function (index, el) {
        switch (index) {
            case 0:
                card.name = getCleanText(el);
                card.camelizeName = camelize(card.name);
                break;
            case 2:
                card.rarity = getCleanText(el);
                break;
            case 3 :
                card.type = getCleanText(el);
                break;
            case 4:
                var baseAndUpgraded = getBaseAndUpgradedText(el);
                card.base.energy = baseAndUpgraded.base;
                card.upgraded.energy = baseAndUpgraded.upgraded;
                break;
            case 5:
                var baseAndUpgraded = getBaseAndUpgradedText(el);
                card.base.description = baseAndUpgraded.base;
                card.upgraded.description = baseAndUpgraded.upgraded;
                break;
        }
        cards[prefix + incId] = card;
    });
    incId++;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function getCleanText(el) {
    return getText(el).replace(/(\r\n|\n|\r)/gm, "");
}

function getText(el) {
    return $.trim($(el).text());
}


function getBaseAndUpgradedText(el) {
    var text = getText(el);
    var conditionalParts = findConditionalParts(text);
    var baseParts = getBaseParts(conditionalParts);
    var upgradeParts = getUpgradedParts(conditionalParts);
    var baseAndUpgradedText = {
        base: text,
        upgraded: text
    };
    conditionalParts.forEach(function (condPart, index) {
        baseAndUpgradedText.base = baseAndUpgradedText.base.replace(condPart, baseParts[index]);

        // This condition is because there is some (s) for plurial
        if (upgradeParts[index] === "s") {
            baseAndUpgradedText.upgraded = baseAndUpgradedText.upgraded.replace(condPart, baseParts[index] + upgradeParts[index]);
        } else {
            baseAndUpgradedText.upgraded = baseAndUpgradedText.upgraded.replace(condPart, upgradeParts[index]);
        }
    });
    return baseAndUpgradedText;
}

function findConditionalParts(text) {
    var textParts = text.split(' ');
    var conditionalParts = [];
    var partialText = "";
    textParts.forEach(function (part, idx) {

        if (part.indexOf("(") == 0) {
            part = textParts[idx - 1] + " " + part;
        }
        //Those conditions is because there is sometimes whitespace in conditional part
        if (part.slice(-1) === ")") {
            if (part.indexOf("(") > -1) {
                conditionalParts.push(part);
            } else {
                partialText += " " + part;
                conditionalParts.push(partialText);
            }
            partialText = "";
        } else if (part.indexOf("(") > -1) {
            partialText += partialText === "" ? part : " " + part;
        }
    });
    return conditionalParts;
}

function getBaseParts(conditionalParts) {
    var baseParts = [];
    conditionalParts.forEach(function (part) {
        var firstpart = part.split("(")[0];
        if (firstpart.slice(-1) == " ") {
            baseParts.push(firstpart.slice(0, firstpart.length - 1));
        } else {
            baseParts.push(part.split("(")[0]);
        }
    });
    return baseParts;
}

function getUpgradedParts(conditionalParts) {
    var upgradedParts = [];
    conditionalParts.forEach(function (part) {
        if (typeof part.split("(") != 'undefined' && part.split("(").length > 1) {
            upgradedParts.push(part.split("(")[1].split(")")[0]);
        } else {
            upgradedParts.push("toto");
        }
    });
    return upgradedParts;
}