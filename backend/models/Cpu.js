// models/Cpu.js
const mongoose = require('mongoose');

const cpuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coreCount: {
        type: Number,
        required: true
    },
    coreClock: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Cpu', cpuSchema);
