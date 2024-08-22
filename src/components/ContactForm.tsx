import React, { useState } from 'react';
import '../styles/ContactForm.css'; // Ensure this CSS file is correctly linked

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <section className="contact-section">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>For inquiries or feedback, please get in touch with us through the form.</p>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +1234567890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
