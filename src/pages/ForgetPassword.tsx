import React from 'react';
import '../styles/ForgetPassword.css'; // Importing the CSS for styling
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

const ForgetPassword: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="forget-container">
        <div className="forget-form">
        
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="submit-button">Send Reset Link</button>
          </form>
          <div className="links">
            <a href="/loginpage" className="link">Back to Login</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPassword;
