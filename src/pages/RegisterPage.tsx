import React from 'react';
import '../styles/RegisterPage.css'; // Importing the CSS for styling
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="register-container mt-16">
        <div className="register-form">
          
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" />
            </div>
            <button type="submit" className="submit-button">Register</button>
          </form>
          <div className="links">
            <a href="/loginpage" className="link">Already have an account? Login</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
