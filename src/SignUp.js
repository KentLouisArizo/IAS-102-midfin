import React, { useState } from 'react';
import { auth, firestore } from './firebase';
import './SignUp.css';
import BackButton from './BackButton';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Check password strength
    if (!isStrongPassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    try {
      // Create user with email and password
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      // Store additional user data in Firestore
      await firestore.collection('users').doc(user.uid).set({
        email: user.email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to check password strength
  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {passwordError && <p className="error">{passwordError}</p>}
      <button type="submit">Sign Up</button>
      <BackButton />
    </form>
  );
};

export default SignUp;
