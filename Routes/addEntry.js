const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');
const auth = require('../middleware/auth');
const extractSweetMoment = require('../utils/keywordExtractor');

router.post('/add', auth, async (req, res) => {
    const { text } = req.body;

    // Validate input
    if (!text) return res.status(400).json({ message: "Text is required" });
    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount > 30) return res.status(400).json({ message: "Text exceeds 30 words" });

    try {
        console.log('Processing entry:', text);
        
        // Extract sweet moment
        const sweetMoment = await extractSweetMoment(text);
        console.log('Extracted sweet moment:', sweetMoment);

        // Save entry to database
        const newEntry = new Entry({
            userId: req.user._id,
            text: text.trim(),
            sweetMoment,
            createdAt: new Date()
        });

        await newEntry.save();
        res.status(201).json({
            message: "Entry added successfully",
            entry: {
                text: newEntry.text,
                sweetMoment: newEntry.sweetMoment,
                createdAt: newEntry.createdAt
            }
        });
    } catch (error) {
        console.error('Error in addEntry route:', error);
        res.status(500).json({
            message: "Error adding entry",
            error: error.message
        });
    }
});

module.exports = router;
