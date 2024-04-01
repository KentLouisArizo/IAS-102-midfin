import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import './ChangePassword.css'; // Import CSS file for styling
import BackButton from './BackButton';

const ChangePassword = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send message to admin's email using emailjs
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your email service ID
        'YOUR_TEMPLATE_ID', // Replace with your email template ID
        {
          message: message
        },
        'YOUR_USER_ID' // Replace with your user ID from emailjs
      );

      setMessage('Message sent to admin.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password Request</h2>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Compose your message to the admin..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <button type="submit">Send Message</button>
      </form>
      <BackButton />
    </div>
  );
};

export default ChangePassword;