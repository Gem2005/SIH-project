import React, { useState } from 'react';
import '../styles/LoginPage.css';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import axios from 'axios'; // for making API requests

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/auth/login',
        { email, password },
        config
      );

      console.log('Logged in:', data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          {error && <span className="error-message">{error}</span>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          <div className="links">
            <a href="/register" className="link">
              Don't have an account? Register
            </a>
            <a href="/forgot-password" className="link">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
