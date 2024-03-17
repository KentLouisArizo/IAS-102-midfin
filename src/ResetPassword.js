import React, { useState } from 'react';
import { auth } from './firebase';
import BackButton from './BackButton';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, newPassword);

      if (userCredential.user) {
        // User is already authenticated, so update their password
        await userCredential.user.updatePassword(newPassword);
        setMessage('Password reset successful.');
      } else {
        setMessage('Error resetting password. Please try again.');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setMessage('User with this email not found.');
      } else if (error.code === 'auth/wrong-password') {
        setMessage('Incorrect current password.');
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Current Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      <BackButton />
    </div>
  );
};

export default ResetPassword;