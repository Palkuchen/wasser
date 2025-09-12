const express = require('express');
const router = express.Router();
const data = require('../data/testData.json');

router.get('/', (req, res) => {
    res.json(data);
});

module.exports = router;
