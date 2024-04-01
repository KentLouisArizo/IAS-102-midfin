import React, { useState } from 'react';
import { auth, firestore } from './firebase';

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user account in Firebase Authentication
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // Store additional user data in Firestore
      await firestore.collection('users').doc(user.uid).set({
        email: user.email,
        // Add more user data as needed
      });

      // Clear form fields
      setEmail('');
      setPassword('');

      // Redirect or display success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error: display error message to user
    }
  };

  return (
    <div>
      <h2>User Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignUp;