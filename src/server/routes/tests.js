const express = require('express');
const router = express.Router();
const data = require('../data/testData.json');

router.get('/', (req, res) => {
    res.json(data);
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
