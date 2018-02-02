// ==UserScript==
// @name     Extract Relic
// @version  1
// @grant    none
// @include http://slay-the-spire.wikia.com/wiki/Relics
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var relics = {};
var prefix = "x";
var incId = 0;
var $relics = $('#WikiaMainContentContainer table.article-table tbody tr');

processRelics();

function processRelics() {
    if ($relics.length > 0) {
        $relics.each(function () {
            $detail = $(this).find('td');
            if ($detail.length > 0) {
                processRelic($detail);
            }
        });
        // processRelic($($relics[1]).find('td'));
        console.log(relics);
    }
}

function processRelic($detail) {
    var relic = {
        id: prefix + incId,
        name: "",
        camelizeName: "",
        rarity: "",
        description: ""
    };
    $detail.each(function (index, el) {
        switch (index) {
            case 1:
                relic.name = getCleanText(el);
                relic.camelizeName = camelize(relic.name);
                break;
            case 2:
                relic.rarity = getCleanText(el);
                break;
            case 3 :
                relic.description = getCleanText(el);
                break;
        }
        relics[prefix + incId] = relic;
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
