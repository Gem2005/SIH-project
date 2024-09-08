import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  

  return (
    <div className="footer">
      <div className="inner">
        {/* Placeholder for Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            
            <span className="text-[#008AFC] font-bold text-lg md:text-xl lg:text-2xl">Alum</span>
            <span className="text-[#1C4483] font-bold text-lg md:text-xl lg:text-2xl">Mate</span>
          </Link>
        </div>

        <div>
         <p><strong>Developed By- VIT408</strong></p> 
          
        </div>

      </div>
    </div>
  );
};

export default Footer;
