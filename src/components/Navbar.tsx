import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import ContactForm from './ContactForm';
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUserName(user.name); // Assuming 'name' is a field in user info
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContactForm = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserName(null);
    navigate('/loginpage'); // Redirect to login page after logout
  };

  const handleNavigation = (path: string) => {
    if (userName) {
      navigate(path);
    } else {
      navigate('/loginpage');
    }
  };

  return (
    <>
      <nav className="bg-[#e0e5ec] rounded-lg fixed top-0 left-0 right-0 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-3 md:py-4 px-4 md:px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <span className="text-[#008AFC] font-bold text-lg md:text-xl lg:text-2xl">Edu</span>
              <span className="text-[#d98596] font-bold text-lg md:text-xl lg:text-2xl">Bridge</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-4 lg:space-x-6 text-[#d98596] font-semibold">
            <Link to="/" className="nav-item">Home</Link>
            <button onClick={() => handleNavigation('/blogs')} className="nav-item">Blogs</button>
            <button onClick={() => handleNavigation('/batch')} className="nav-item">Alumni</button>
            <button onClick={() => handleNavigation('/study-material')} className="nav-item">Notes</button>
            <Link to="/faq" className="nav-item">FAQs</Link>
            <span onClick={toggleContactForm} className="nav-item cursor-pointer">Contact Us</span>
            {userName ? (
              <div className="relative group">
                <button className="nav-item flex items-center space-x-2">
                  <span>{userName}</span>
                </button>
                <div className="dropdown-menu">
                  <button onClick={handleLogout} className="dropdown-item">Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/loginpage" className="nav-item">Login</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center p-2 space-y-1"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-[#d98596]"></div>
            <div className="w-6 h-0.5 bg-[#d98596]"></div>
            <div className="w-6 h-0.5 bg-[#d98596]"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#E0E5EC] text-[#d98596] py-6 px-4 rounded-b-lg shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="text-lg">Home</Link>
              <button onClick={() => handleNavigation('/blogs')} className="text-lg">Blogs</button>
              <button onClick={() => handleNavigation('/batch')} className="text-lg">Alumni</button>
              <button onClick={() => handleNavigation('/study-material')} className="text-lg">Notes</button>
              <Link to="/faq" className="text-lg">FAQs</Link>
              <span onClick={toggleContactForm} className="text-lg cursor-pointer">Contact Us</span>
              {userName ? (
                <div className="relative group">
                  <button className="text-lg flex items-center space-x-2">
                    <span>{userName}</span>
                  </button>
                  <div className="dropdown-menu">
                    <button onClick={handleLogout} className="dropdown-item">Logout</button>
                  </div>
                </div>
              ) : (
                <Link to="/loginpage" className="text-lg">Login</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ContactForm Pop-up */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full h-full overflow-y-auto max-h-screen mx-4 lg:mx-auto lg:max-w-6xl">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900"
              onClick={toggleContactForm}
            >
              &times;
            </button>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
