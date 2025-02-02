// routes/cpu.js
const express = require('express');
const Cpu = require('../models/Cpu');
const router = express.Router();

// Route to add a new CPU
router.post('/add', async (req, res) => {
    const { name, coreCount, coreClock, price } = req.body;

    try {
        const newCpu = new Cpu({ name, coreCount, coreClock, price });
        await newCpu.save();
        res.status(201).json({ message: 'CPU added successfully', cpu: newCpu });
    } catch (error) {
        console.error('Error adding CPU:', error);
        res.status(500).json({ message: 'Server error while adding CPU' });
    }
});

// Route to fetch all CPUs
router.get('/', async (req, res) => {
    try {
        const cpus = await Cpu.find();
        res.status(200).json(cpus);
    } catch (error) {
        console.error('Error fetching CPUs:', error);
        res.status(500).json({ message: 'Server error while fetching CPUs' });
    }
});

module.exports = router;
