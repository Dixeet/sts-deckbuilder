const zlib = require('zlib');

exports.encode = (req, res) => {
    zlib.deflate(req.body.toEncode, (err, buffer) => {
        if (!err) {
            res.json(buffer.toString('base64'));
        } else {
            res.sendStatus(500);
        }
    });
};

exports.decode = (req, res) => {
    const buffer = Buffer.from(req.body.toDecode, 'base64');
    zlib.unzip(buffer, (err, buffer) => {
        if (!err) {
            res.json(buffer.toString());
        } else {
            res.sendStatus(500);
        }
    });
};