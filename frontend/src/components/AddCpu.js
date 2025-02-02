// src/components/AddCpu.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCpu = () => {
    const [cpu, setCpu] = useState({
        name: '',
        coreCount: '',
        coreClock: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCpu({ ...cpu, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/cpus/add', cpu);
            alert('CPU added successfully');
        } catch (error) {
            console.error('Error adding CPU:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New CPU</h2>
            <input type="text" name="name" placeholder="Name" value={cpu.name} onChange={handleChange} required />
            <input type="number" name="coreCount" placeholder="Core Count" value={cpu.coreCount} onChange={handleChange} required />
            <input type="text" name="coreClock" placeholder="Core Clock" value={cpu.coreClock} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" value={cpu.price} onChange={handleChange} required />
            <button type="submit">Create CPU</button>
        </form>
    );
};

export default AddCpu;
