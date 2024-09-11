import React, { useState } from 'react';
import '../styles/ForgetPassword.css'; // Importing the CSS for styling
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending a password reset link
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the email exists in the stored users
    const userExists = storedUsers.some((user: { email: string }) => user.email === email);

    if (userExists) {
      // Simulate sending a reset link (for example, update user data or create a reset token)
      setMessage('A password reset link has been sent to your email.');
      // For actual implementation, you would send the email via a backend service here
    } else {
      setMessage('No account found with this email.');
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="forget-container mt-16">
        <div className="forget-form">
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
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
            {message && <p className="message">{message}</p>}
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
