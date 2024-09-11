import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/RegisterPage.css'; // Importing the CSS for styling
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

interface User {
  name: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // Error handling
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Success message

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    const userExists = existingUsers.some((user: User) => user.email === email);
    if (userExists) {
      setError('A user with this email already exists.');
      return;
    }

    // Create a new user object
    const newUser: User = { name, email, password };

    // Save user to localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Show success message
    setSuccessMessage('Registration successful! Redirecting to login page...');

    // Clear the form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate('/loginpage');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="register-container mt-16">
        <div className="register-form">
          <h2>Register</h2>
          
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
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
