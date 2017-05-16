'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = (0, _express2.default)();

var store = _multer2.default.memoryStorage(); //store uploads in memory
var upload = (0, _multer2.default)({ storage: store }); //init multer with memory storage

// Serve a static page for uploading a file.
app.use('/', _express2.default.static('build/client'));

// The client will upload a single file to be examined.
app.post('/upload', upload.single('file'), function (req, res) {
    if (req.file) {
        res.status(200).json({
            filename: req.file.originalname,
            size: parseInt(req.file.size)
        });
    } else {
        res.status(500).json({ error: "A file was not uploaded" });
    }
});