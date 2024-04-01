import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from './firebase';

const AdminPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUserRegistration = async () => {
    try {
      // Create user account in Firebase Authentication
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // Store additional user data in Firestore
      await firestore.collection('users').doc(user.uid).set({
        email: email,
        // Add more user data as needed
      });

      // Reset form fields
      setEmail('');
      setPassword('');

      // Redirect or display success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error: display error message to admin
    }
  };

  const handleChangeUserPassword = async () => {
    try {
      // Change user password in Firebase Authentication
      await auth.sendPasswordResetEmail(userId, { newPassword });

      // Reset form fields
      setUserId('');
      setNewPassword('');

      // Redirect or display success message
    } catch (error) {
      console.error('Error changing user password:', error);
      // Handle error: display error message to admin
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>User Registration</h3>
      <form onSubmit={handleUserRegistration}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register User</button>
      </form>
      <h3>Change User Password</h3>
      <form onSubmit={handleChangeUserPassword}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Change Password</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AdminPanel;
