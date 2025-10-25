const express = require('express');
const router = express.Router();
const fs = require('fs');
const csv = require('csv-parser');
const data = require('../data/testData.json');

let csvData = [];

const loadCsvData = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

loadCsvData('./data/Aaron.csv')
    .then(data => {
        csvData = data; // Store data in memory
        console.log('CSV data loaded successfully.');
    })
    .catch(error => {
        console.error('Failed to load CSV data:', error);
        process.exit(1); // Exit the server if loading fails
    });

router.get('/', (req, res) => {
    res.json(data);
});

router.get('/:id', async (req, res) => {
    const lineNumber = parseInt(req.params.id, 10);

    try {
        // Check if the line number is valid
        if (lineNumber < 1 || lineNumber > csvData.length) {
            return res.status(404).json({error: 'Line not found'});
        }

        // Return the requested line as JSON
        res.json(csvData[lineNumber]);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});


module.exports = router;
