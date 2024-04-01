import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './all.css';
import BackButton from './BackButton';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Static admin credentials
    const adminEmail = 'kentlouisarizo.202100202@gmail.com';
    const adminPassword = 'admin123';

    if (email === adminEmail && password === adminPassword) {
      navigate('/admin-panel');
    } else {
      // Handle incorrect credentials
      console.error('Incorrect admin email or password');
      // You can display an error message to the user if needed
    }
  };

  return (
    <div>
      <h2>Admin Sign In</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <BackButton />
    </div>
  );
};

export default AdminSignIn;