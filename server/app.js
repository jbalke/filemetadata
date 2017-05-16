import express from 'express';
import multer from 'multer';

export const app = express();

var store = multer.memoryStorage(); //store uploads in memory
var upload = multer({ storage: store }) //init multer with memory storage

// Serve a static page for uploading a file.
app.use('/', express.static('client'));

// The client will upload a single file to be examined.
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.status(200).json({
            filename: req.file.originalname,
            size: parseInt(req.file.size)
        });
    } else {
        res.status(500).json({ error: "A file was not uploaded" });
    }
});