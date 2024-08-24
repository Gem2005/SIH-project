import React from 'react';
import '../styles/LoginPage.css';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

const LoginPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <div className="links">
          <a href="/register" className="link">Don't have an account? Register</a>
          <a href="/forgot-password" className="link">Forgot Password?</a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
