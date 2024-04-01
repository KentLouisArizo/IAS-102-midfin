import React, { useState } from 'react';
import './SignIn.css';

const UserSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Your sign-in logic here...
  };

  const sendMessageToAdmin = async () => {
    const message = "I want to change my password because I forgot my password.";
    try {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      const data = await response.json();
      console.log(data.message); // Log success message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>User Sign In</h2>
      <form onSubmit={handleSignIn}>
        {/* Email and password input fields */}
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
        <button type="submit">Sign In</button>
      </form>
      <button onClick={sendMessageToAdmin}>Message Admin</button>
      {/* Link to admin sign-in page */}
      <a href="/admin-signin">Admin Sign In</a>
    </div>
  );
};

export default UserSignIn;
