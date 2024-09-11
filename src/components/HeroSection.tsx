import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import image from '../assets/images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    setIsLoggedIn(!!userInfo);
  }, [isLoggedIn]); // Dependency array to re-run effect when isLoggedIn changes

  const handleExploreClick = () => {
    if (!isLoggedIn) {
      navigate('/loginpage');
    } else {
      navigate('/batch');
    }
  };

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
            <button
              className="hero-button primary"
              onClick={handleExploreClick}
            >
              Explore Alumni Profiles
            </button>
            {!isLoggedIn && (
              <Link to={`/loginpage`}>
                <button className="hero-button primary">Login</button>
              </Link>
            )}
          </div>
        </div>
        <img src={image} alt="React components library" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
