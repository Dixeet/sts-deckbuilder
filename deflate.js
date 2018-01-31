const zlib = require('zlib');
const input = '158-200-98-2-120-158-200-98-2-120-158-200-98-2-120-158-200-98-2-120-158-200-98-2-120-158-200-98-2-120-158-200-98-2-120-158-200-98-2-120!S!158-200-98-2-120-158-200-98-2-120-158-200!S!My awaseomebuild!S!Description de mon awaseomebuild Description de mon awaseomebuild Description de mon awaseomebuild Description de mon awaseomebuild My awaseomebuild-Description de mon awaseomebuild Description de mon awaseomebuild Description de mon awaseomebuild Description de mon awaseomebuild ';
let base;
zlib.deflate(input, (err, buffer) => {
    if (!err) {
        base = buffer.toString('base64');
        console.log(base);
        zlib.unzip(buffer, (err, buffer) => {
            if (!err) {
                console.log(buffer.toString());
            } else {
                // handle error
            }
        });
    } else {
        // handle error
    }
});

// const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
