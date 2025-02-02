// BuildGuides.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BuildGuides.css'; // Import the CSS for styling

const BuildGuides = () => {
  return (
      <div className="build-guides" id="build-guides">
          <div className="build-guides-text">
              <h3>Build Guides</h3>
              <p>Building your own PC and need ideas on where to get started? Explore our build guides which cover systems for a variety of use-cases and budgets.</p>
              <Link to="/wip">
                  <button className="view-guides-button">View Build Guides</button>
              </Link>
          </div>
          <div className="build-cards">
              <div className="card">
                  <a href="#">
                      <img src="pc1.jpg" alt="Entry Level Intel Gaming Build" />
                      <div className="card-content">
                          <h4>Entry Level Intel Gaming Build</h4>
                          <p>Intel Core i3-12100F</p>
                          <p>Parametric Video Card (Chipset: Radeon RX 6600)</p>
                          <p>Fractal Design Pop Mini Air MicroATX Mid Tower</p>
                          <p className="price">$599.99</p>
                      </div>
                  </a>
              </div>
              <div className="card">
                  <a href="#">
                      <img src="pc2.jpg" alt="Excellent AMD Gaming/Streaming Build" />
                      <div className="card-content">
                          <h4>Excellent AMD Gaming/Streaming Build</h4>
                          <p>AMD Ryzen 5 7600X</p>
                          <p>Parametric Video Card (Chipset: GeForce RTX 4070 SUPER)</p>
                          <p>Lian Li LANCOOL 216 RGB ATX Mid Tower</p>
                          <p className="price">$1299.99</p>
                      </div>
                  </a>
              </div>
              <div className="card">
                  <a href="#">
                      <img src="pc3.jpg" alt="Enthusiast AMD Gaming/Streaming Build" />
                      <div className="card-content">
                          <h4>Enthusiast AMD Gaming/Streaming Build</h4>
                          <p>AMD Ryzen 5 7600X</p>
                          <p>Parametric Video Card (Chipset: GeForce RTX 4070 Ti SUPER)</p>
                          <p>Fractal Design Pop Air RGB ATX Mid Tower</p>
                          <p className="price">$1599.99</p>
                      </div>
                  </a>
              </div>
          </div>
      </div>
  );
};

export default BuildGuides;
