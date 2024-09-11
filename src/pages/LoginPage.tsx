import React, { useState } from 'react';
import '../styles/LoginPage.css';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Find the user with the matching email and password
    const user = storedUsers.find((user: { email: string; password: string }) => user.email === email && user.password === password);

    if (user) {
      // Successful login
      localStorage.setItem('userInfo', JSON.stringify(user));
      setError('');
      navigate('/'); // Redirect to the homepage
    } else {
      // Login failed
      setError('Invalid email or password.');
    }

    setLoading(false);
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
