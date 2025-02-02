import React, { useState } from 'react';
import './SelectCpu.css';

import cpu1 from '../assets/cpu1.jpg';
import cpu2 from '../assets/cpu2.jpg';
import cpu3 from '../assets/cpu3.jpg';
import cpu4 from '../assets/cpu4.jpg';
import cpu5 from '../assets/cpu5.jpg';
import cpu6 from '../assets/cpu6.jpg';
import cpu7 from '../assets/cpu7.png';

const cpuData = [
    { id: 1, name: 'AMD Ryzen 7 7800X3D', coreCount: 8, coreClock: '4.2 GHz', boostClock: '5.0 GHz', architecture: 'Zen 4', tdp: '120W', graphics: 'Radeon', rating: '⭐⭐⭐⭐⭐ (400)', price: 479, image: cpu1 },
    { id: 2, name: 'Intel Core i9-12900K', coreCount: 16, coreClock: '3.2 GHz', boostClock: '5.2 GHz', architecture: 'Alder Lake', tdp: '125W', graphics: 'Intel UHD 770', rating: '⭐⭐⭐⭐ (350)', price: 589, image: cpu2 },
    { id: 3, name: 'AMD Ryzen 5 5600X', coreCount: 6, coreClock: '3.7 GHz', boostClock: '4.6 GHz', architecture: 'Zen 3', tdp: '65W', graphics: 'None', rating: '⭐⭐⭐⭐⭐ (500)', price: 199, image: cpu3 },
    { id: 4, name: 'Intel Core i5-12400', coreCount: 6, coreClock: '2.5 GHz', boostClock: '4.4 GHz', architecture: 'Alder Lake', tdp: '65W', graphics: 'Intel UHD 730', rating: '⭐⭐⭐⭐ (280)', price: 189, image: cpu4 },
    { id: 5, name: 'AMD Ryzen 9 5950X', coreCount: 16, coreClock: '3.4 GHz', boostClock: '4.9 GHz', architecture: 'Zen 3', tdp: '105W', graphics: 'None', rating: '⭐⭐⭐⭐⭐ (320)', price: 799, image: cpu5 },
    { id: 6, name: 'Intel Core i7-12700K', coreCount: 12, coreClock: '3.6 GHz', boostClock: '5.0 GHz', architecture: 'Alder Lake', tdp: '125W', graphics: 'Intel UHD 770', rating: '⭐⭐⭐⭐⭐ (450)', price: 419, image: cpu6 },
    { id: 7, name: 'AMD Ryzen 9 7900X', coreCount: 12, coreClock: '4.7 GHz', boostClock: '5.6 GHz', architecture: 'Zen 4', tdp: '170W', graphics: 'Radeon', rating: '⭐⭐⭐⭐⭐ (100)', price: 549, image: cpu7 },
];

const SelectCpu = () => {
    const [selectedPrice, setSelectedPrice] = useState(1500);
    const [showIntel, setShowIntel] = useState(true);
    const [showAMD, setShowAMD] = useState(true);
    const [filteredCpus, setFilteredCpus] = useState(cpuData);

    // Handle slider change
    const handleSliderChange = (event) => {
        setSelectedPrice(parseInt(event.target.value));
    };

    // Handle filter button click
    const handleFilter = () => {
        const filtered = cpuData.filter(cpu => 
            cpu.price <= selectedPrice && 
            ((showIntel && cpu.name.includes("Intel")) || (showAMD && cpu.name.includes("AMD")))
        );
        setFilteredCpus(filtered);
    };

    return (
        <div className="select-cpu-container">
            <div className="components-container">
                <h2>Select a CPU</h2>
                <div className="cpu-page">
                    <div className="filters">
                        <div className="filter-section">
                            <h3>Filters</h3>
                            <label htmlFor="price">Price Range: <span id="priceValue">{selectedPrice}</span> USD</label>
                            <input 
                                type="range" 
                                id="price" 
                                name="price" 
                                min="0" 
                                max="3000" 
                                className="form-range" 
                                value={selectedPrice} 
                                onChange={handleSliderChange} 
                            />
                        </div>
                        <div className="filter-section">
                            <label>
                                <input type="checkbox" name="rebates" defaultChecked /> Include Mail-in Rebates
                            </label>
                        </div>
                        <div className="filter-section">
                            <label htmlFor="compatibility">
                                <input type="checkbox" id="compatibility" defaultChecked /> Compatibility Filter
                            </label>
                        </div>
                        <div className="filter-section">
                            <h3>Brand</h3>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={showIntel} 
                                    onChange={() => setShowIntel(!showIntel)} 
                                /> Intel
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={showAMD} 
                                    onChange={() => setShowAMD(!showAMD)} 
                                /> AMD
                            </label>
                        </div>
                        <button className="btn btn-primary" onClick={handleFilter}>Select</button>
                    </div>

                    <div className="cpu-table">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Core Count</th>
                                    <th>Core Clock</th>
                                    <th>Boost Clock</th>
                                    <th>Microarchitecture</th>
                                    <th>TDP</th>
                                    <th>Integrated Graphics</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    <th>Add</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCpus.map(cpu => (
                                    <tr key={cpu.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={cpu.image} alt={cpu.name} className="cpu-image" /></td>
                                        <td>{cpu.name}</td>
                                        <td>{cpu.coreCount}</td>
                                        <td>{cpu.coreClock}</td>
                                        <td>{cpu.boostClock}</td>
                                        <td>{cpu.architecture}</td>
                                        <td>{cpu.tdp}</td>
                                        <td>{cpu.graphics}</td>
                                        <td>{cpu.rating}</td>
                                        <td>${cpu.price}</td>
                                        <td><button className="btn btn-primary">Add</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectCpu;
