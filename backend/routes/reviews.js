// routes/reviews.js

const express = require('express');
const User = require('../models/User');
const Review = require('../models/Review');
const router = express.Router();

// POST route for submitting a review
router.post('/', async (req, res) => {
    const { username, rating, review } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized. User not found.' });
        }

        // Create a new review
        const newReview = new Review({
            userId: user._id, // Store the user's ID
            rating,
            review,
        });

        // Save the review
        await newReview.save();
        return res.status(201).json(newReview); // Send back the newly created review
    } catch (error) {
        console.error('Error submitting review:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// GET route to fetch all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find().populate('userId', 'username'); // Get username from User collection
        res.status(200).json(reviews);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
