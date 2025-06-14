const router = require('express').Router();
const Entry = require('../models/Entry');
const auth = require('../middleware/auth');

// Get all entries for logged-in user
router.get('/seeEntry', auth, async (req, res) => {
    try {
        const entries = await Entry.find({ userId: req.user._id })
            .sort({ createdAt: -1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching entries" });
    }
});

module.exports = router;
