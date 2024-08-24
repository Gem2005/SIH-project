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
    <section id="ContactUs" className="contact-section">
      <div className="contact-details">
        <h2><b>Contact Us</b></h2>
        <p>For inquiries or feedback, Reach Out Via Socials</p>
        <div className="contact-info">
          <a href='https://arpan-kumar-saini.netlify.app/' target='_blank'><strong>website:</strong> arpan-kumar-saini.netlify.app</a>  <br />
          <a href='mailto:arpansaini55@gmail.com' target='_blank'><strong>Email:</strong> arpansaini55@gmail.com</a><br />
          <a href='https://www.linkedin.com/in/arpansaini' target='_blank'><strong>Linkedin:</strong> arpansaini</a><br />
          <a href='https://github.com/arpan-kumar-saini' target='_blank'><strong>GitHub:</strong>arpan-kumar-saini</a><br />
          <a href='https://www.instagram.com/arpan_kumar_saini/' target='_blank'><strong>Instagram:</strong>arpan_kumar_saini</a>
          
          <p><strong></strong> </p>
        </div>
      </div>
      <div className="contact-form">
        <h2><b>Send Us a Message</b></h2>
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
