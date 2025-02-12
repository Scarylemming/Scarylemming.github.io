const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const recordsFilePath = path.join(__dirname, '../../src/data/records.json');

// Middleware to read records from the JSON file
const readRecords = () => {
    if (!fs.existsSync(recordsFilePath)) {
        return [];
    }
    const data = fs.readFileSync(recordsFilePath);
    return JSON.parse(data);
};

// Middleware to write records to the JSON file
const writeRecords = (records) => {
    fs.writeFileSync(recordsFilePath, JSON.stringify(records, null, 2));
};

// Route to add a new record
router.post('/add', (req, res) => {
    const { win, loss } = req.body;
    const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    const records = readRecords();
    records.push({ date, win, loss });
    writeRecords(records);

    res.status(201).json({ message: 'Record added successfully' });
});

// Route to retrieve records for a specific date
router.get('/:date', (req, res) => {
    const { date } = req.params;
    const records = readRecords();
    const filteredRecords = records.filter(record => record.date === date);

    res.json(filteredRecords);
});

module.exports = router;