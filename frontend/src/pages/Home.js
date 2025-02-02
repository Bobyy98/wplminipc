// Home.js
import React from 'react';
import './Home.css'; 
import BuildGuides from '../components/BuildGuides';

const Home = ({ user }) => { // Accept user as a prop
  return (
    <div>
      <div className="home-background">
        <div className="home">
          <h2>Pick Parts. Build Your PC. <br /> Compare and Share.</h2>
          <p>We provide part selection, pricing, and compatibility guidance for <br /> do-it-yourself computer builders.</p>
        </div>
      </div>
      <BuildGuides />
    </div>
  );
};

export default Home;
