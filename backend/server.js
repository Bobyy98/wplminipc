// server.js

const express = require('express');
// import express from 'express'
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const session = require('express-session');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST'], credentials: true })); // CORS configuration
app.use(express.json()); // Parse JSON bodies

// Session configuration
app.use(session({
    secret: 'thisShouldBeASecret', // Use any string here; it won't be used as a JWT secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if you're using HTTPS
}));

// Import the auth routes
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');
const cpuRoutes = require('./routes/cpu');


// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/cpus', cpuRoutes); // Add CPU routes


// MongoDB Connection with retry logic
const connectWithRetry = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
            setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
        });
};
connectWithRetry(); // Initial connection attempt

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
