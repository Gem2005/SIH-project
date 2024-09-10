import React from 'react';
import '../styles/HeroSection.css';
import image from '../assets/images/logo2.png';

import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-inner">
        <div className="hero-content">
        
          <h1 className="hero-title">
            
            <span className="highlight">Edu</span> <span className='text-[#1C4483]'>Bridge:</span> <br /> Bridge the Gap Between Alumni and Students
          </h1>
          <p className="hero-text-muted">
            Connect, Learn, and Grow with Guidance from Your College Alumni. Forge Stronger Bonds and Unlock Opportunities for a Brighter Future.
          </p>
          <div className="hero-button-group">
          <Link to={`/batch`} >
            <button className="hero-button primary">Explore Alumni Profiles</button>
          </Link>
          <Link to={`/loginpage`} >
            <button className="hero-button primary">Login</button>
          </Link>
          </div>
        </div>
        <img src={image} alt="React components library" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
