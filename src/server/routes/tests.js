const express = require('express');
const router = express.Router();
const data = require('../data/acutalData.json');
const {join} = require("node:path");
const fs = require('fs');

router.get('/', (req, res) => {
    res.json(data);
});

router.get('/image/:id', async (req, res) => {
    const lineNumber = parseInt(req.params.id, 10);

    const imageName = lineNumber + '.jpg';
    const imagePath = join(__dirname, '../images', imageName);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'Image not found' });
        }

        res.sendFile(imagePath);
    });
});

router.get('/:id', (req, res) => {
    const regionId = parseInt(req.params.id, 10);
    const region = data.find(r => r.id === regionId);

    if (region) {
        res.json(region);
    } else {
        res.status(404).json({ error: 'Region nicht gefunden' });
    }
});


module.exports = router;