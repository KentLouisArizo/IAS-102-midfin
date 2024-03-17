import React, { useState } from 'react';
import { auth } from './firebase';
import './ResetPassword.css'; // Import CSS file for styling
import BackButton from './BackButton';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.sendPasswordResetEmail(email);
      setMessage('Password reset email sent.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <button type="submit">Reset Password</button>
      </form>
      <BackButton />
    </div>
  );
};

export default ResetPassword;