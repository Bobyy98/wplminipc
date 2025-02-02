// src/pages/PcComponents.js

import React from 'react';
import './PcComponents.css';
import cpuImg from '../assets/cpu.png';
import coolerImg from '../assets/cool.png';
import motherboardImg from '../assets/mom.png';
import ramImg from '../assets/ram.png';
import storageImg from '../assets/storage.png';
import gpuImg from '../assets/gpu.png';
import caseImg from '../assets/case.png';
import powerImg from '../assets/powa.png';
import osImg from '../assets/os.png';
import monitorImg from '../assets/monitor.png';

const PcComponents = () => {
    return (
      <div className="pc-components-page">
        <div className="components-container">
          <h2>PC Components</h2>
          <div className="components-grid">
            <ComponentCard title="Select CPU" imgSrc={cpuImg} link="/select-cpu" />
            <ComponentCard title="Select CPU Cooler" imgSrc={coolerImg} link="#" />
            <ComponentCard title="Select Motherboard" imgSrc={motherboardImg} link="#" />
            <ComponentCard title="Select Memory" imgSrc={ramImg} link="#" />
            <ComponentCard title="Select Storage" imgSrc={storageImg} link="#" />
            <ComponentCard title="Select Video Card" imgSrc={gpuImg} link="#" />
            <ComponentCard title="Select Case" imgSrc={caseImg} link="#" />
            <ComponentCard title="Select Power Supply" imgSrc={powerImg} link="#" />
            <ComponentCard title="Select OS" imgSrc={osImg} link="#" />
            <ComponentCard title="Select Monitor" imgSrc={monitorImg} link="#" />
          </div>
        </div>
      </div>
    );
  };

const ComponentCard = ({ title, imgSrc, link }) => (
  <div className="component-card">
    <a href={link}>
      <img src={imgSrc} alt={title} />
      <div className="component-title">{title}</div>
    </a>
  </div>
);

export default PcComponents