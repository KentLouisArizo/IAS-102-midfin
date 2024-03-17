import React from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Test Page</h2>
      <p>This is a test page accessible after successful login.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TestPage;