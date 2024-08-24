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
          <Link to={'https://www.instagram.com/arpan_kumar_saini/'}><span className='Arpan text-[#1C4483]'>Developed by- <b>@Arpan Saini</b></span></Link>
          
        </div>

        <div className="social-icons">
          <a href="https://github.com/arpan-kumar-saini" target="_blank" className="icon" aria-label="Github">
            <i className="fab fa-github text-[#1C4483]" ></i>
          </a>
          <a href='https://www.linkedin.com/in/arpansaini' target='_blank' className="icon" aria-label="Linkedin">
          <i className="fab fa-linkedin  text-[#1C4483]"></i>       
          </a>
          <a href='https://www.instagram.com/arpan_kumar_saini/' target='_blank'className="icon" aria-label="Instagram">
          <i className="fab fa-instagram  text-[#1C4483]"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
